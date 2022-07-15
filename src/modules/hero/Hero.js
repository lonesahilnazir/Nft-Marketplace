import { ButtonPrimary, ButtonSecondary } from '../../common/components/Buttons';
import { FeaturedNftCard } from '../../common/components/cards/FeaturedNftCard';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="container px-4 mx-auto md:px-0">
      <div className="flex flex-col items-center mx-auto lg:h-screen lg:min-w[1050px] lg:flex-row">
        <div className="z-10 w-full lg:w-1/2">
          <h1 className="leading-normal text-[#F5FBF2] font-oxanium font-bold text-7xl">
            Explore, Buy and <br />
            Sell the
            <span className="text-primary">
              {" "}
              Best <br />
              NFTs!
            </span>
          </h1>
          <div className="flex flex-row mt-20">
            <div className="">
              <ButtonPrimary text="Explore" link="/about" />
            </div>
            <div className="ml-12">
              <ButtonSecondary text="Create" link="/#" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full mt-28 max-w-[646px]">
            <div>
              <span className="block text-6xl font-bold font-oxanium text-[#F5FBF2]">
                32k+
              </span>
              <span className="block text-2xl text-[#9B9E9A]">Artworks</span>
            </div>
            <div className="">
              <span className="block text-6xl font-bold font-oxanium text-[#F5FBF2]">
                20k+
              </span>
              <span className="block text-2xl text-[#9B9E9A]">Auctions</span>
            </div>
            <div>
              <span className="block text-6xl font-bold font-oxanium text-[#F5FBF2]">
                12k+
              </span>
              <span className="block text-2xl text-[#9B9E9A]">Creators</span>
            </div>
          </div>
        </div>
        <div className="z-10 flex items-center justify-center w-full h-full mt-20 lg:mt-0 lg:w-1/2">
          <FeaturedNftCard
            artistName="Artist"
            artistId="wzard"
            nftImage="/temp/featured.jpg"
            nftValue="0.99"
            time="25 hrs"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#4f464e45] backdrop-blur-[30px] hidden lg:block"></div>
      </div>
      <div className="flex flex-row items-center justify-between w-full max-w-[1235px] mx-auto mt-44 mb-24">
        <Image src={"/assets/coinbase.svg"} width="100%" height={"40px%"} />
        <Image src={"/assets/blockchain.svg"} width="180%" height={"40px"} />
        <Image src={"/assets/binance.svg"} width="140%" height={"40px"} />
        <Image src={"/assets/bitmex.svg"} width="100%" height={"40px"} />
      </div>
    </div>
  );
}