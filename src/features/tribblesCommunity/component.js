const TribblesCommunityComponent = () => {
  return (
    <div className="flex flex-col justify-around w-full items-center p-4">
      <h5 className="text-2xl font-kanit text-white mb-2 text-center">
        Become a member of the Tribble community!
      </h5>
      <a
        href="https://discord.gg/agoric-585576150827532298"
        aria-description="Join the official Discord channel for the Tribbles project."
        alt="Discord Channel for the Tribbles community"
        className="w-3/4 md:w-1/4 p-4 font-kanit text-2xl text-center text-white bg-transparent transition-all ease-in-out duration-500 border-4 border-local_pink rounded-lg hover:bg-local_pink"
      >
        Join Discord
      </a>
    </div>
  );
};

export default TribblesCommunityComponent;
