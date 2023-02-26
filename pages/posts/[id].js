// import Image from 'next/image';
import { useRouter } from 'next/router';

import React, { useEffect } from 'react';

const PostWithId = () => {
  const router = useRouter();
  const data = router.query;
  console.log(router.query);

  useEffect(() => {

  });
  return (
    <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
      <p className="font-poppins text-color font-semibold text-xl">
        {data.title}
      </p>
      <p className="font-poppins text-color minlg:text-xl text-sm">
        {data.description}
      </p>
      <div className="flex-row flexBetween flex-wrap">
        {data.tags.map((tag) => (
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
      <img src={data.fileUrl} width={500} height={500} />
    </div>
  );
};

export default PostWithId;
