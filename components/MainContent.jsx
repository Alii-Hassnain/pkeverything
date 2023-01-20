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
      <Posts />
    </div>
  </div>
);

const Categories = () => (
  <div>
    {Object.keys(categories).map((cat) => categoryItem(cat))}
  </div>
);

const Posts = () => (
  <div>
    Posts
  </div>
);

export default MainContent;
