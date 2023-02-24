import React, { useState } from 'react';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../lib/firebase';
import { Input, Banner, Button } from '../../components';

const CreatePost = () => {
  // console.log(Config);
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: '',
    fileUrl: '',
    profileColor: '',
    views: '',
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
      return setFiles(Array.from(e.target.files)[0]);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const uploadFiles = async (file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = await uploadBytesResumable(storageRef, files);
    uploadTask.on('state_changed', (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(prog);
    }, (err) => {
      console.log(err);
    });

    getDownloadURL(uploadTask.snapshot.ref).then((url) => setForm({ ...form, fileUrl: url }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const color = generateRandomColor();
      setForm((prev) => ({
        ...prev,
        profileColor: color,
        views: 0,
        tags: form.tags.split(' '),
      }));
      console.log(form);
      await uploadFiles(files);

      console.log('handle submit here');

      const responce = await axios.post('/api/posts', form);
      const data = responce;
      console.log(data);
      setLoading(false);
    } catch (err) {
      return { error: err };
    }

    // This will fetch the posts form the data base
  };

  return (
    <div className="p-10 ">
      <Banner
        name="Creating Post"
        substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
        styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
      />
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
        options={['ConsumerCorner', 'Employee Corner', 'Tender & Contracts']}
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
        {progress > 0 ? { progress } : null}
      </div>

      <Button
        styles="rounded my-4"
        btnName="Submit"
        handleClick={handleSubmit}
        loading={loading}
      />
    </div>
  );
};
export default CreatePost;
