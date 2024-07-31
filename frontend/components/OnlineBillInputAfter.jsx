import React from 'react'
import Button from "./Button";
import { generateBillUrl } from "utils/billUrl";

const OnlineBillInputAfter = ({ConsumerId}) => {
    console.log("to check the other things");
    console.log(ConsumerId);

    const viewBill = ()=>{

        console.log(ConsumerId);

        window.location.href = generateBillUrl(ConsumerId);
    }


  return (
    <div>
          <Button
            styles="rounded my-4 mr-4"
            btnName="View bill"
            handleClick={() => viewBill()}
          />
          <Button
            styles="rounded my-4"
            btnName="Installment plan"
            handleClick={() => handleClick()}
          />
        </div>
  )
}

export default OnlineBillInputAfter