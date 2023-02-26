import React, { useState } from 'react';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useRouter } from 'next/router';
import { storage } from '../../lib/firebase';
import { Input, Banner, Button } from '../../components';

const CreatePost = () => {
  // console.log(Config);
  const router = useRouter();
  const [files, setFiles] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'Consumer Corner',
    fileUrl: '',
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
      return setFiles(Array.from(e.target.files)[0]);
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const uploadFiles = async (file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);
    uploadTask.on('state_changed', (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(prog);
    }, (err) => {
      console.log(err);
    }, async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      form.fileUrl = url;
      const responce = await axios.post('/api/posts', form);
      const { data } = responce;
      console.log(data);
      router.push('/');
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(loading);
    const color = generateRandomColor();
    form.profileColor = color;
    form.tags = form.tags.split(' ');
    if (files) {
      return uploadFiles(files);
    }
    console.log(form);

    try {
      const responce = await axios.post('/api/posts', form);
      const { data } = responce;
      console.log(data);
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
          {progress > 0 ? progress === 100 && 'File Uploaded' : null}
        </div>

        <Button
          styles="rounded my-4"
          btnName={uploading ? 'Uploading File' : 'Submit'}
          handleClick={handleSubmit}
        />
      </form>
    </div>
  );
};
export default CreatePost;
