import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Banner, CreatorCard } from '../components';
import images from '../assets';
import { frequentActions } from '../data';

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 200;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };
  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => window.removeEventListener('resize', isScrollable);
  });

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          name="Find Everthing You Need About Your Electricity"
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-6 h-50 sm:h-50 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />
        <div>
          <div className="relative flex-1 justify-center max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar"
              ref={scrollRef}
            >
              {Object.keys(frequentActions).map((key) => (
                <CreatorCard
                  key={key}
                  element={frequentActions[key]}
                />
              ))}
              {!hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll('left')}
                    className="absolute w-8 h-8 minlg:w-12 min:h-12 top-45 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      alt="lefticon"
                      className={theme === 'light' && 'filter invert'}
                    />
                  </div>
                  <div
                    onClick={() => handleScroll('right')}
                    className="absolute w-8 h-8 minlg:w-12 min:h-12 top-45 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      alt="righticon"
                      className={theme === 'light' && 'filter invert'}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* SignalCard */}
        <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className=" flex-1 before:first:font-poppins text-color text-2xl minlg:text-4xl font-semibold sm:mb-4">
              Projections
            </h1>
            <div>Search</div>
          </div>
          {/* <div className="mt-3 w-full flex flex-wrap justify-start md:justify-evenly">
            {[1, 2, 3].map((i) => (
              <ActionCard
                key={`sig${i}`}
                signal={{
                  i,
                  icon: 'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png',
                  name: 'ADA/USDT',
                  entry: '1.23',
                  stop: '1.12',
                  targets: ['1.34', '1.45'],
                  price: 0.13 * i,
                  createdAt: '10 May, 12:00 PM',
                  info: ['portfolio allocation 4%'],
                  description: 'Best NFT',
                }}
              />
            ))}
          </div> */}
        </div>
        {/* NFTCard */}
        {/* <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className=" flex-1 before:first:font-poppins text-color text-2xl minlg:text-4xl font-semibold sm:mb-4">
              Best Nfts
            </h1>
            <div>Search</div>
          </div>
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-evenly">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <NFTCard
                key={`nft${i}`}
                nft={{
                  i,
                  name: `GMNFT${i}`,
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                  price: 0.13 * i,
                  description: 'Best NFT',
                }}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Home;

