import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Banner, Button } from '../../components';

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    fileUrl: '',
    profileColor: '',
    upload_preset: 'pkeverything',
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
    console.log(e.target.name);
    if (e.target.name === 'fileUrl') {
      const color = generateRandomColor();
      setFile(e.target.files);
      return setForm({ ...form, profileColor: color });
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(form.fileUrl);

    const responce = await axios.post('https://api.cloudinary.com/v1_1/colbydemo/image/upload', { body: {
      file,
      upload_preset: form.upload_preset,
    } });
    const data = await responce.json();

    setForm({ ...form, fileUrl: data.secureUrl });
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
      <Input name="description" title="Description" placeholder="File description" type="textarea" handleClick={handleForm} />
      <div className="mt-4">
        <input name="fileUrl" id="file" type="file" onChange={handleForm} />
      </div>

      <Button
        styles="rounded my-4"
        btnName="Submit"
        handleClick={handleSubmit}
      />
    </div>
  );
};
export default CreatePost;
