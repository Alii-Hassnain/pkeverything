import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {  RelatedContent, Banner } from '../components';
import { companies,generateBillUrl } from 'utils/billUrl';
import { animations } from 'data';
import images from "../assets"

export const OnlineBill = () => {

  const router = useRouter();
  
  // name={window.location.pathname.split('/')[2]}
  return (
    <div className="flexCenter">
      <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
        <Banner
          name={router.pathname.split('/')[1].toUpperCase().replace("BILL", " BILL")}
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
        />
        <p className="font-poppins text-color minlg:text-xl text-lg">
          Here you can find Bills of all Electric companies of Pakistan.
          Select the company you want to find the bill of
        </p>
        <div className="flex-row flexBetween flex-wrap">
          {Object.keys(companies).map((key) => (
           <a
              className={`w-130 minlg:min-2-240 dark:bg-w-black-1 bg-w-grey-1 border dark:border-w-black-3 border-w-grey-1 rounded-3xl flex flex-col p-4 m-4 md:m-2 md:p-3 ${animations.hover}`}
              href={`/${companies[key]}bill`}
            >
            <div className="my-2 flex justify-center">
              <div className=" flexCenter relative w-20 h-16 minlg:28 minlg:h-28">
               <Image src={images[`${companies[key]}`]} alt={companies[key]+" logo"} />
              </div>
            </div>
            <p className="font-poppins text-color text-center text-sm minlg:text-sm"> 
              {companies[key].toUpperCase()}
            </p>
          </a>            
          ))}
        </div>
        <p className=" mt-2 font-poppins text-color minlg:text-xl text-lg">
          To find the bill of a specific company, click on the company's logo above.
        </p>
        <RelatedContent />
      </div>
    </div>
  );
};
export default OnlineBill;

// 20123151733300
// 20123151733301
