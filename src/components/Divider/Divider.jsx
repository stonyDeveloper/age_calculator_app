import Arrow from "../../assets/icon-arrow.svg";

const Divider = () => {
    
  return (
    <div className="">
      <hr className="text-smokey-grey" />
      <button type="submit" className="group bg-purple w-fit p-4 rounded-full relative top-1/2 left-1/2 md:left-[97%] transform -translate-x-1/2 -translate-y-1/2 hover:bg-off-black cursor-pointer">
        <img className="animate-pulse group-hover:animate-ping" src={Arrow} alt="arrow-head" />
      </button>
    </div>
  );
};

export default Divider;
