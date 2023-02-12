import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Banner, Button } from '../../components';
// import Config from '../../lib';

const CreatePost = () => {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: '',
    fileUrl: '',
    profileColor: '',
    views: '',
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
      return setFiles(e.target.files);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const color = generateRandomColor();
      setForm({ ...form, profileColor: color, views: 0 });

      const fileData = new FormData();
      Object.keys(files).forEach((key) => {
        fileData.append([key], files[key]);
      });
      // testing needs to be done
      fileData.append('upload_preset', 'bijliwala');
      const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/de1qop9bf/image/upload';
      const fileUploaded = await axios.post(cloudinaryUrl, fileData);

      console.log(fileUploaded.data.secureUrl);

      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === 'fileUrl') {
          formData.append('fileUrl', fileUploaded.data.secureUrl);
          return;
        }
        formData.append([key], form[key]);
      });

      console.log('handle submit here');
      console.log(formData);

      const responce = await axios.post('/api/posts', formData);
      const data = responce;
      console.log(data);
      setLoading(false);
    } catch (err) {
      return { error: err };
    }

    // This will fetch the posts form the data base
  };

  useEffect(() => {

  }, []);

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
      <div className="mt-4">
        <input name="fileUrl" id="file" type="file" onChange={handleForm} multiple />
      </div>

      <Button
        styles="rounded my-4"
        btnName="Submit"
        handleClick={handleSubmit}
      />
      {loading && (
        <div className="fixed justify-center w-full h-full bg-transparent">
          ... Loading
        </div>
      )}
    </div>
  );
};
export default CreatePost;
