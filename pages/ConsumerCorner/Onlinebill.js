import React, { useState } from 'react';
import { Button, Input } from '../../components';

const OnlineBill = () => {
  const [ConsumerId, setConsumerId] = useState('0');

  function calculate(ref) {
    let type = 'general';
    let company = 'fesco';
    let url = '';
    const types = {
      0: 'industrial',
      1: 'general',
    };
    const companies = {
      11: 'lesco',
      12: 'gepco',
      13: 'fesco',
      14: 'iesco',
      15: 'mepco',
      26: 'pesco',
      37: 'hesco',
      38: 'sepco',
      48: 'qesco',
    };

    company = ref.replace(' ', '').slice(2, 4);
    type = ref.slice(0, 2);

    if (type > 20) {
      type = types['0'];
    } else {
      type = types['1'];
    }
    if (company === '11') {
      // specific for lesco
      url = `http://www.lesco.gov.pk:36247/BillNew.aspx?BatchNo=${ref.slice(0, 2)}&SubDiv=${ref.slice(2, 8).trim()}&RefNo=${ref.slice(8, 16).trim()}&RU=U&Exec=941N7&nCtID=`;
    } else if (company === '26' || company === '37' || company === '38' || company === '48') {
      url = `https://bill.pitc.com.pk/${companies[company]}bill/${type}?refno=${ref}`;
    } else {
      url = `https://bill.pitc.com.pk/${companies[company]}bill/${type}/${ref}`;
    }
    console.log(url);
    console.log(company);
    console.log(type);
    window.location.href = url;
  }

  return (
    <div className="p-16">
      <p>Here you can check all the bills of </p>
      <Input title="ConsumerID" placeholder="Enter Your ConsumerId" handleClick={setConsumerId} />
      <Button
        styles="rounded my-4"
        btnName="Submit"
        handleClick={() => calculate(ConsumerId)}
      />
    </div>
  );
};
export default OnlineBill;
