// import Image from 'next/image';
import { useRouter } from 'next/router';

import React, { useEffect } from 'react';

const PostWithId = () => {
  const router = useRouter();
  const { title, description, tags, fileUrl = 'null' } = router.query;
  console.log(router.query);
  console.log(typeof (tags));
  if (tags !== []) {
    Array.from(tags);
  }

  useEffect(() => {

  });
  return (
    <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
      <p className="font-poppins text-color font-semibold text-xl">
        {title}
      </p>
      <p className="font-poppins text-color minlg:text-xl text-sm">
        {description}
      </p>
      <div className="flex-row flexBetween flex-wrap">
        {typeof (tags) === 'string' ? tags : tags.map((tag) => (
          <div
            key={tag}
            className=" mr-3 mt-3  border border-color p-1 rounded-lg"
          >
            <p
              title={tag}
              className="font-poppins text-color minlg:text-xl text-sm"
            >
              {tag.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      <div className="p-2 m-2 ">
        <p>
          name of the file
        </p>
        <p>{fileUrl}</p>

      </div>
    </div>
  );
};

export default PostWithId;
