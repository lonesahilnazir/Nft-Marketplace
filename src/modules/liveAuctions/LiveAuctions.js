import { ButtonTertiary } from "../../common/components/Buttons/ButtonTertiary";

export const LiveAuctions = () => {
    return (
      <div className="container mx-auto relative">
        <div className="relative flex flex-row w-full items-center justify-center">
          <div className="bg-[#8613A5] w-28 h-28 rounded-full relative translate-x-3/4"></div>
          <h2 className="text-[#F5FBF2] text-6xl font-oxanium font-bold z-10">Live Auctions</h2>
        </div>
        <div className="w-full">
        <ButtonTertiary text="some" link="#" />
        </div>
      </div>
    );
}