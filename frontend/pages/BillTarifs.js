import React from 'react';

const BillTarifs = () => (
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
      </div>
  </div>
        )

export default BillTarifs;
