import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Input, RelatedContent, Banner } from '../components';
import { companies,generateBillUrl } from 'utils/billUrl';

export const OnlineBill = () => {
  const [ConsumerId, setConsumerId] = useState(0);
  const router = useRouter();
  
  const handleClick = () => {
    const billUrl = generateBillUrl(ConsumerId);
    window.location.href = billUrl;

  }

  // name={window.location.pathname.split('/')[2]}
  return (
    <div className="flexCenter">
      <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
        <Banner
          name={router.pathname.split('/')[1]}
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
        />
        <p className="font-poppins text-color minlg:text-xl text-lg">
          Here you can find Bills of all Electric companies of Pakistan
        </p>
        <div className="flex-row flexBetween flex-wrap">
          {Object.keys(companies).map((key) => (
            <a key={companies[key]} className=" mr-3 mt-3  border border-color p-1 rounded-lg"  href={`/${companies[key]}bill`}>
              <p
                title={companies[key]}
                className="font-poppins text-color minlg:text-xl text-sm"
              >
                {companies[key].toUpperCase()}
              </p>
            </a>
          ))}
        </div>
        <p className=" mt-2 font-poppins text-color minlg:text-xl text-lg">
          To Find the Bill information Enter the Reference Number mentioned on your
          bill
        </p>
        <RelatedContent />
      </div>
    </div>
  );
};
export default OnlineBill;

// 20123151733300
// 20123151733301
