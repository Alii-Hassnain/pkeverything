// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const PostWithId = () => {
  const router = useRouter();
  const { fetchPosts } = useContext(GlobalContext);
  const [post, setPost] = useState(
    {
      id: '',
      title: '',
      tags: '',
      description: '',
      fileUrl: '',
    },
  );
  const { title, description, tags, fileUrl } = post;

  useEffect(() => {
    const id = router.asPath.split('/')[2];
    console.log(id);
    const fetch = async () => {
      const data = await fetchPosts(id);
      setPost(data);
      console.log(data);
    };
    fetch();
  }, [fetchPosts]);
  return (
    <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
      <p className="font-poppins text-color font-semibold text-xl">{title}</p>
      <p className="font-poppins text-color minlg:text-xl text-sm">
        {description}
      </p>
      <div className="flex-row flexBetween flex-wrap">
        <div className="mr-3 mt-3 border border-color p-1 rounded-lg">
          <i className="fa-regular fa-file-pdf p-3" />
          <Link
            className="font-poppins text-color minlg:text-xl text-sm"
            href={fileUrl}
          >
            Saeed.pdf
          </Link>
        </div>
      </div>
      {tags.length > 0 && <p className="font-poppins text-color font-semibold text-xl mt-10">Tags</p>}
      <div className="flex-row flexBetween flex-wrap">
        {typeof tags === 'string' ? (
          <div
            key={tags}
            className=" mr-3 mt-3  border border-color p-1 rounded-lg"
          >
            <p
              title={tags}
              className="font-poppins text-color minlg:text-xl text-sm"
            >
              {tags.toUpperCase()}
            </p>
          </div>
        ) : (
          tags.map((tag) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default PostWithId;
