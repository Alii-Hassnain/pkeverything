import React from 'react';
import Banner from '../components/Banner';

const NewConnectionApplication = () => {
  <div>
    <Banner
      name={router.pathname.split("/")[2]}
      substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
      styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
    />
    <p className="font-poppins text-color minlg:text-xl text-sm">
      Here you can find Bills of all Electric companies of Pakistan
    </p>
  </div>
};

export default NewConnectionApplication;
