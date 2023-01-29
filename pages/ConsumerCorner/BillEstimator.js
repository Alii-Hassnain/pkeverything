import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Input, RelatedContent, Banner } from '../../components';

const domesticSettings = {
  metertype: { 'Single Phase': 1,
    '3 Phase': {
      OfPeak: 1, Peek: 1,
    } },
  '0-50': 3.95,
  '51-100': 4.95,
  '101-200': 5.95,
};

const BillEstimator = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    connectionType: '',
    metertype: '',
    ofpeek: '',
    peek: '',
  });
  // further functionality to be added for different connection types

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        <div className="w-80">
          <Input
            type="select"
            options={[
              'Domestic',
              'Commercial',
              'Industrial',
              'General Service',
              'Agriculture',
            ]}
            title="Select Connection Type"
            handleClick={(e) => {
              handleForm(e);
            }}
          />
          {form.connectionType === 'Domestic' ? (
            <Input
              type="select"
              options={['Single Phase', '3 Phase']}
              title="Meter Type"
              name="metertype"
              handleClick={(e) => {
                handleForm(e);
              }}
            />
          ) : (
            <div>
              <Input type="select" options={['Single Phase', '3 Phase']} title="Meter Type" name="metertype" handleClick={(e) => { handleForm(e); }} />
            </div>
          )}
          {form.metertype === '3 Phase' ? (
            <div className="flex ">
              <div className="pr-2">
                <Input
                  title="Ofpeek"
                  type="number"
                  placeholder="Of Peek"
                  handleClick={(e) => {
                    handleForm(e);
                  }}
                />
              </div>
              <div>
                <Input
                  title="peek"
                  type="number"
                  placeholder="Peek"
                  handleClick={(e) => {
                    handleForm(e);
                  }}
                />
              </div>
            </div>
          ) : (
            <Input
              title="Units"
              type="number"
              placeholder="Units"
              handleClick={(e) => {
                handleForm(e);
              }}
            />
          )}
        </div>
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

const DomesticForm = () => {

};

const IndustrialForm = () => {};

export default BillEstimator;
