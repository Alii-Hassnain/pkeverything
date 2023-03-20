import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';

const ButtonGroup = ({ router }) => (
  <Button
    btnName="Login"
    styles="mx-2 rounded-xl"
    handleClick={() => {
      // setActive('');
      router.push('/admin');
    }}
  />
);

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:border-w-grey-2  dark:w-dark bg-white dark:bg-w-black-1 w-grey-1">
      <div className="flex flex-1 flex-row justify-Start">
        {router.pathname === '/' ? null : (
          <div
            onClick={router.back}
            className="bg-w-grey-1 dark:bg-w-black-3 p-2 mr-2 rounded-md"
          >
            <div className="flex">
              <i className="fa fa-arrow-left-long fa-grey " />
            </div>
          </div>
        )}
        <Link href="/">
          <div
            className="flexCenter md:hidden cursor-pointer "
            onClick={() => {}}
          >
            <Image src={images.logo02} width={32} height={32} alt="logo" />
            <p className="text-color font-semibold text-lg ml-1">Bijle Ghar</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image src={images.logo02} width={32} height={32} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        <div className="md:hidden flex">
          {/* <MenuItems active={active} setActive={setActive} /> */}
          <div className="w-9 p-2 flexCenter ml-3 bg-w-grey-1 dark:bg-w-dark  rounded-3xl">
            <i className="fas fa-bell" />
          </div>
          <div className="ml-4">
            <ButtonGroup router={router} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image
            src={images.cross}
            width={20}
            height={20}
            alt="Close"
            className={theme === 'light' && 'filter invert'}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <Image
            src={images.menu}
            width={25}
            height={25}
            alt="menu"
            className={theme === 'light' && 'filter invert'}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 top-65 nav-h z-10 dark:bg-w-dark bg-white flex flex-col justify-between">
          <div className="p-4 border-t dark:border-w-black-1 border-w-grey-1 ">
            <ButtonGroup router={router} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
