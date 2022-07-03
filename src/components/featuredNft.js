import { ButtonPrimary } from "./buttons";

const FeaturedNft = ({ artistName, artistId, nftImage, nftValue, time }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${nftImage})`,
        maxWidth: "556px",
        maxHeight: "718px",
      }}
      className="relative flex flex-col items-center w-full h-full px-5 pt-6 bg-center bg-no-repeat bg-cover"
    >
      <div
        style={{
          background:
            "linear-gradient(92.8deg, rgba(255, 137, 61, 0.09) -32.37%, rgba(250, 250, 250, 0.9) 157.41%)",
        }}
        className="flex backdrop-blur-2xl opacity-95 flex-row items-center justify-between w-full px-12 py-4 shadow-[0_4px_30px_0px_rgba(0,0,0,0.12)]"
      >
        <div>
          <span className="block text-lg font-medium text-[#E4DEE7] font-oxaniumblock font-oxanium">
            Current Bid
          </span>
          <span className="block text-3xl font-bold text-white font-oxanium mt-1.5">{`${nftValue} ETH`}</span>
        </div>
        <div>
          <span className="block text-lg font-medium text-[#E4DEE7] font-oxanium">
            Ends in
          </span>
          <span className="block mt-1.5 text-3xl font-bold text-white font-oxanium">{`${time}`}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex flex-row items-center justify-between w-full mt-auto bg-white py-9 px-14">
        <div>
          <span className="block text-3xl font-semibold font-oxanium text-[#16091B]">
            {artistName}
          </span>
          <a href="/#" className="text-[#594D5E]">{`@${artistId}`}</a>
        </div>
        <ButtonPrimary text="Start Bid" link="/#" />
      </div>
    </div>
  );
};

export default FeaturedNft;
