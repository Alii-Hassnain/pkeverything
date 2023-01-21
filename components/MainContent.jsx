import React from 'react';
import { categories } from '../data';

const categoryItem = (cat) => (
  <div className="flex minlg:w-557 p-1 my-1  rounded-md  hover:text-secondary text-color">
    <div>
      <i className={categories[cat][0]} />
    </div>
    <p className="ml-2">{categories[cat][1]}</p>
  </div>
);

const MainContent = () => (
  <div className="flex flex-row mt-5">
    <div className="flex-1 flex-col">
      <Categories />
    </div>
    <div className="flex-2 flex-col">
      {[1, 2, 3, 4, 5, 6].map((post) => (
        <Posts
          key={post}
        />
      ))}
    </div>
  </div>
);

const Categories = () => (
  <div>
    {Object.keys(categories).map((cat) => categoryItem(cat))}
  </div>
);

const Posts = () => (
  <div
    className="flexBetween w-full minlg:min-2-240 dark:hover:bg-w-black-1 hover:bg-w-grey-1 p-4 m-4 md:m-2 md:p-3"
    onClick={() => {}}
  >
    <div className="mr-5 flexCenter">
      <i className="fa fa-user fa-grey" />
      <div className="flex flex-col flexStart pl-5">
        <p className="font-poppins heading-color text-center text-sm minlg:text-sm mb-2">
          Notification for the New Tenders
        </p>
        <h6 className="font-poppins text-color text-center text-xs minlg:text-sm">
          This is the description
        </h6>
      </div>
    </div>
    <div className="my-2 flex justify-center">
      <div className="px-5 flexCenter flex-col">
        <i className="fa fa-eye fa-grey" />
        <p className="text-color">19.5k</p>
      </div>
    </div>
  </div>
);

export default MainContent;
