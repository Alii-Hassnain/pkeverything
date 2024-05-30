import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Link from 'next/link';
import Image from 'next/image';
import images from "../assets";
import { generateBillUrl } from "utils/billUrl";

const OnlineBillInput = () => {
  const [ConsumerId, setConsumerId] = useState(null);

  const handleClick = () => {
     if(!ConsumerId){
        alert("Please Enter a Reference Number");
        return;
    }

    window.location.href = generateBillUrl(ConsumerId);

  }
  return (
    <>
     <div className="">
      <div className="flex justify-center">
        <Image src={images.refimage} alt="refrence number image" width={500} height={500} />
      </div>
          <Input
            title="Reference Number"
            type="number"

            placeholder="Enter Your 14 digit Reference Number"
            handleClick={(e) => {
              setConsumerId(e.target.value);
            }}
          />
        </div>
        <div className="flex-row flexBetween">
          <Button
            styles="rounded my-4"
            btnName="Submit"
            handleClick={() => handleClick()}
          />
          <Link href="/" className="text-xs text-color minlg:text-xl ">
            Cant Find Your Bill ?
          </Link>
        </div>
    </>
  )
}

export default OnlineBillInput;