import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { categories } from '../data';

const categoryItem = (cat) => (
  <div className="flex minlg:w-557 p-1 my-1  rounded-md  hover:text-secondary text-color">
    <div>
      <i className={categories[cat][0]} />
    </div>
    <p className="ml-2">{categories[cat][1]}</p>
  </div>
);

const MainContent = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  async function fetchMyPosts() {
    const response = await axios.get('api/posts');
    setData(response.data);
  }
  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="flex flex-row mt-5">
      <div className="flex-1 flex-col">
        <Categories />
      </div>
      <div className="flex-2 flex-col">
        {data.map((post) => (
          <Posts
            key={post}
            data={post}
            router={router}
          />
        ))}
      </div>
    </div>
  );
};

const Categories = () => (
  <div>
    {Object.keys(categories).map((cat) => categoryItem(cat))}
  </div>
);

const postClassNames = {
  ConsumerCorner: '#46b87e',
  EmployeeCorner: '#4c9be0',
  TenderAndContracts: '#e9544d',
};
const Posts = ({ data, router }) => {
  const { id, title, description, profileColor, views, type } = data;

  return (
    <div
      className="cursor-pointer flexBetween w-full minlg:min-2-240 dark:hover:bg-w-black-1 hover:bg-w-grey-1 p-4 m-1 md:m-2 md:p-3"
      onClick={() => {
        router.push(`/posts/${id}`);
      }}
    >
      <div className="mr-5 flexCenter">
        <div
          className="rounded-full px-3 py-1"
          style={{ backgroundColor: `${profileColor || '#fff'}` }}
        >
          <p className="text-color">{title.slice(0, 1).toUpperCase()}</p>
        </div>
        <div className="flex flex-col flexStart pl-5">
          <p className="font-poppins heading-color text-center text-sm minlg:text-sm mb-2">
            {title}
          </p>
          <div className="">
            <h6 className="font-poppins text-color text-xs minlg:text-sm">
              {description.slice(0, 70)}...
            </h6>
          </div>
        </div>
      </div>
      <div
        className="flexCenter  border border-color p-1 rounded-lg"
        style={{ backgroundColor: postClassNames[type.split(' ').join('')] }}
      >
        <p className="font-poppins text-w-black-3 text-center text-xs minlg:text-sm">
          {type}
        </p>
      </div>
      <div className="my-2 flex justify-center">
        <div className="px-5 flexCenter flex-col">
          <i className="fa fa-eye fa-grey" />
          <p className="text-color">{views}</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
