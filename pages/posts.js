import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [data, setData] = useState(null);

  async function fetchMyPosts() {
    const response = await axios.get('api/posts');
    setData(response.data[0]);
  }
  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="flexCenter">
      <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
        <div>
          <p className="font-poppins text-color font-semibold text-xl">
            {data.title}
          </p>
          <p className=" mt-2 font-poppins text-color minlg:text-xl text-sm">
            {data.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Posts;
