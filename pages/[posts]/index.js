import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Banner } from '../../components';

const Posts = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  // const globaContext = useContext();

  useEffect(() => {

  }, []);

  return (
    <div className="flexCenter">
      <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
        <Banner
          name={router.pathname.split('/')}
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
        />
        {data.map((item) => (
          <div>
            <p className="font-poppins text-color font-semibold text-xl">
              {item.title}
            </p>
            <p className=" mt-2 font-poppins text-color minlg:text-xl text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
