import { ButtonPrimary, ButtonSecondary } from './buttons';
import FeaturedNft from './featuredNft';

const Hero = () => {
  return (
    <div className="container flex flex-row items-center h-screen mx-auto">
      <div className="w-1/2">
        <h1 className="leading-normal text-space-9 text-7xl">
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
            <ButtonPrimary text="Explore" link="/#" />
          </div>
          <div className="ml-12">
            <ButtonSecondary text="Create" link="/#" />
          </div>
        </div>
        <div className='flex flex-row items-center mt-28'>
          <div>
            <span className='block text-6xl font-bold font-oxanium text-space-9'>32k+</span>
            <span className='block text-2xl text-space-3'>Artworks</span>
          </div>
          <div className='mx-24'>
            <span className='block text-6xl font-bold font-oxanium text-space-9'>20k+</span>
            <span className='block text-2xl text-space-3'>Auctions</span>
          </div>
          <div>
            <span className='block text-6xl font-bold font-oxanium text-space-9'>12k+</span>
            <span className='block text-2xl text-space-3'>Creators</span>
          </div>
        </div>
      </div>
      <div className="z-10 flex items-center justify-center w-1/2 h-full">
        <FeaturedNft
          artistName="Artist"
          artistId="wzard"
          nftImage="/temp/featured.jpg"
          nftValue="0.99"
          time="25 hrs"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-space-17/45"></div>
    </div>
  );
}

export default Hero