import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useMediaQuery } from "react-responsive";
import images from '../assets'

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/nfts/create";
      case 2:
        return "/nfts/detail";
      default:
        return "/";
    }
  };

  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && "flex-col h-full"
      }`}
    >
      {["Home", "Listed NFTs", "My NFTs"].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-w-dark mx-3  transition-all ${
            active === item ? "text-color" : "dark:text-w-grey-3 text-w-grey-2"
          } `}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  
//   return currentAccount ? (
//     <Button
//       btnName="Create"
//       styles="mx-2 rounded-xl"
//       handleClick={() => {
//         setActive("");
//         router.push("/nfts/create");
//       }}
//     />
//   ) : (
//     <Button
//       btnName="Connect"
//       styles="mx-2 rounded-xl"
//       handleClick={connectWallet}
//     />
//   );
};

function NavBar() {
    const desktopView = useMediaQuery({
      query: "(prefers-color-scheme: dark)",
    });
     const [active, setActive] = useState("Home");
     const router = useRouter();
     const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=''>
      <div className=''>
        <Link href="/">
          <div className onClick={() => {}}>
            <Image src={images.logo02} width={32} height={32} alt="logo" />
            <p className="text-color font-semibold text-lg ml-1">BijliWala</p>
          </div>
        </Link>
        <Link href="/">
          <div className="mobilelogo" onClick={() => {}}>
            <Image src={images.logo02} width={32} height={32} alt="logo" />
          </div>
        </Link>
      </div>
      <div className={styles.menuitems}>
        <div className={styles.menuitems}>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <i class="fa-duotone fa-dragon"></i>
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
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
            onClick={() => {
              setIsOpen(false);
            }}
          />
        ) : (
          <Image
            width={25}
            height={25}
            alt="menu"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 top-65 nav-h z-10 dark:bg-w-dark bg-white flex flex-col justify-between">
          <div className="flex-1 p4">
            <MenuItems isMobile active={active} setActive={setActive} />
          </div>
          <div className="p-4 border-t dark:border-w-black-1 border-w-grey-1 ">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar