import Image from 'next/image';
import { useRouter } from 'next/router';

import React from 'react';

const PostWithId = () => {
  const router = useRouter();
  const data = router.query;
  console.log(router.query);
  return (
    <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
      <p className="font-poppins text-color font-semibold text-xl">
        {data.title}
      </p>
      <p className="font-poppins text-color minlg:text-xl text-sm">
        {data.description}
      </p>
      <p className="font-poppins text-color minlg:text-xl text-sm">
        {data.tags}
      </p>
      <img src={data.fileUrl} width={500} height={500} />
    </div>
  );
};

export default PostWithId;
