import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Input, RelatedContent, Banner } from '../../components';

// const domesticSettings = {

// };

const BillEstimator = () => {
//   const [form, setForm] = useState({
//     connectionType: '',
//   });
  const router = useRouter();
  return (
    <div className="flexCenter">
      <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5 minmd:">
        <Banner
          name={router.pathname.split('/')[2]}
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
        />
        <p className="font-poppins text-color minlg:text-xl text-sm">
          Here you can find Bills of all Electric companies of Pakistan
        </p>
        <p className=" mt-2 font-poppins text-color minlg:text-xl text-sm">
          To Find the Bill information Enter the Consumer ID mentioned on your
          bill
        </p>
        <Input
          type="select"
          options={['Domestic', 'Commercial', 'Industrial', 'General Service', 'Agriculture']}
          title="Select Connection Type"
          handleClick={() => {
            // setForm(e.target.value);
          }}
        />
        <div className="flex-row flexBetween">
          <Button
            styles="rounded my-4"
            btnName="Submit"
            handleClick={() => {}}
          />
          <Link href="/" className="text-xs text-color minlg:text-xl ">
            More Advanced Estimator
          </Link>
        </div>
        <RelatedContent />
      </div>
    </div>
  );
};

export default BillEstimator;
