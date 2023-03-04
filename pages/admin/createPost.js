import React, { useState } from 'react';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useRouter } from 'next/router';
import { storage } from '../../lib/firebase';
import { Input, Banner, Button } from '../../components';

const CreatePost = () => {
  // console.log(Config);
  const router = useRouter();
  const [submiting, setSubmitting] = useState(false);
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState(0);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'Consumer Corner',
    fileUrl: [],
    profileColor: '',
    views: 0,
    tags: '',
  });

  const generateRandomColor = () => {
    const maxVal = 0xffffff; // 16777215.
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  };

  const handleForm = (e) => {
    if (e.target.name === 'fileUrl') {
      // setUploading(true);
      return setFiles(Array.from(e.target.files));
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const uploadFiles = async (filearray) => {
    filearray.forEach((file, index) => {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          setProgress(prog);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          const filedata = {
            fileName: uploadTask.snapshot.metadata.name,
            url,
          };
          form.fileUrl.push(filedata);
          console.log(index, filearray.length);
          if (index === filearray.length - 1) {
            try {
              const responce = await axios.post('/api/posts', form);
              const { data } = responce;
              console.log(data);
              setSubmitting(false);
              router.push('/');
            } catch (err) {
              console.log(err);
            }
          }
        },
      );
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const color = generateRandomColor();
    form.profileColor = color;
    form.tags = form.tags.split(' ');
    if (files) {
      return uploadFiles(files);
    }
    console.log(files);
    console.log(form);

    try {
      const responce = await axios.post('/api/posts', form);
      const { data } = responce;
      console.log(data);
      setSubmitting(false);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10 ">
      <Banner
        name="Creating Post"
        substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
        styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
      />
      <form onSubmit={handleSubmit}>
        <Input
          title="Title"
          name="title"
          placeholder="Enter the Title of the post here"
          handleClick={handleForm}
        />
        <Input
          name="description"
          title="Description"
          placeholder="File description"
          type="textarea"
          handleClick={handleForm}
        />
        <Input
          title="Type"
          name="type"
          type="select"
          options={['Consumer Corner', 'Employee Corner', 'Tender & Contracts']}
          placeholder="Select Post Type"
          handleClick={handleForm}
        />

        <Input
          title="Tags"
          name="tags"
          placeholder="Enter Each Tag With Space"
          handleClick={handleForm}
        />

        <div className="mt-4">
          <input
            name="fileUrl"
            id="file"
            type="file"
            onChange={handleForm}
            multiple
          />
          {progress > 0 ? 'Uploading File' : progress === 100 && 'File Uploaded'}
        </div>

        <Button
          styles="rounded my-4"
          btnName="Submit"
          handleClick={handleSubmit}
        />
      </form>
      {submiting
        && (
        <div className="absolute w-full h-full bg-w-grey-2">
          submitting
        </div>
        )}
    </div>
  );
};
export default CreatePost;
