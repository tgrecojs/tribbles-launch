const OmniflixCampaignComponent = () => {
  const handleClick = () => {
    window.location.href = 'https://tribbles.omniflix.market/';
  };

  return (
    <div className="flex flex-col w-full items-center">
      <h5 className="text-2xl font-kanit text-white mb-2">
      Get Your Community Access NFT Now
      </h5>
      <button
        onClick={handleClick}
        className="w-3/4 md:w-1/4 p-4 font-kanit text-2xl text-white bg-transparent transition-all ease-in-out duration-500 border-4 border-local_pink rounded-lg hover:bg-local_pink"
      >
        GO
      </button>
    </div>
  );
};

export default OmniflixCampaignComponent;
