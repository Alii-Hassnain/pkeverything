import React from 'react';
import { Input, Banner, Button } from '../../components';

const createPost = () => (
  <div className="p-10 ">
    <Banner
      name="Creating Post"
      substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
      styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
    />
    <Input title="Title" placeholder="Enter the Title of the post here" />
    <Input title="Description" placeholder="File description" type="textarea" />
    <div className="mt-4">
      <input type="file" />
    </div>

    <Button
      styles="rounded my-4"
      btnName="Submit"
      handleClick={() => {
        alert('Button is pressed');
      }}
    />
  </div>
);

export default createPost;
