import OmniflixCampaignComponent from "./features/omniflixCampaign/component";
import Layout from "./shared/layout/component";
import tribbleImg from "../assets/images/tribble.png";
import tokenomicsImg from "../assets/images/tribble-with-circle-border.png";

import TokenomicsComponent from "./features/tokenomics/component";
const App = ({
  title = "Merkle Tree Airdrop Campaign Client",
  description = "Tribbles are the intergalactic intersubjective meme coin for one and all",
}) => (
  <Layout>
    <div className="flex flex-col w-full items-center md:items-start p-4">
      {/* h1 text is 7xl on small screens and 9xl on screends medium and larger */}
      <h1 className="text-7xl md:text-9xl text-local_green font-ksg p-4">
        They're coming
      </h1>
      <p className="font-kanit text-xl md:text-3xl font-extralight p-4 text-white text-center w-4/5">
        {description}
      </p>
    </div>
    <OmniflixCampaignComponent />
    {/* <WithTypingTextComponent /> */}
    <div className="flex flex-col w-full items-center p-20">
      <hr width="90%" />
    </div>
    <h2 className="text-6xl text-white font-kanit p-12">Tribble Lore </h2>

    <div className="flex flex-col md:flex-row align-center font-kanit font-extralight items-start">
      <div className="p-8">
        <p className="w-full p-4 text-white text-2xl">
          {" "}
          In the neon haze of the 1970s, a band of renegade Tribbles decided ton
          join together to observe the behavior of humans . These Tribbles, with
          their shimmering fur of rebellious hues , escaped into the obscure
          corners of the galaxy. Here, they embarked on a long sabbatical,
          eschewing fame for a quieter existence, where they could cultivate a
          deep philosophical ethos centered around intersubjectivity and mutual
          understanding. Their legend became but a whisper on the winds of
          space, known only to the most devout of cosmic wanderers.
        </p>

        <p className="w-full p-4 text-white text-2xl">
          {" "}
          As centuries turned on backwater planets, these Tribbles evolved
          intellectually and spiritually. Their society was built on the
          foundational belief in collective existence, their thoughts as
          interwoven as their furs. Now, as the universe stands on the brink of
          a new blockchain-powered epoch, the time of the Tribbles has come.
        </p>
      </div>

      <div className="p-8">
        <p className="w-full p-4 text-white text-2xl">
          Spurred by cosmic currents and the alignment of digital stars, they’ve
          decided to re-enter the galactic stage. Launching their very own
          cryptocurrency. they aim to spread their ethos of intersubjectivity
          through the cosmos. Each token, a symbol of their collective
          philosophy, represents not just a piece of digital currency but a part
          of a larger, interconnected whole.
        </p>

        <p className="w-full p-4 text-white text-2xl">
          {" "}
          `` Don’t blink, lest you might miss them duplicated at a dizzying
          pace, replicating themselves into generational fortitude. With each
          new block forged in the cosmic ledger, a new generation of Tribbles
          emerges, ready to populate the digital universe with their unique
          brand of joy and unity. Their proliferation is not just a function of
          their design but a testament to their enduring charm and the
          deep-seated communal bonds they foster.
        </p>
      </div>
    </div>
    <div className="flex flex-col w-full items-center p-20">
      <hr width="90%" />
    </div>
    {/* <div>
      <h3 className="section-header text-4xl md:text-6xl">
        They're coming in droves
      </h3>
      <div className="flex flex-wrap justify-around">
        <div className="p-4 w-3/4 md:w-1/3">
          <a
            href="#"
            className="block rounded-lg p-4 bg-slate-800 text-white shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={tribbleImg}
              className="block rounded-lg p-4 bg-slate-800 text-white shadow-sm shadow-indigo-100"
            />

            <div className="mt-2">
              <h3 className="text-3xl font-light">How to earn</h3>

              <div className="mt-6 flex flex-col items-center gap-8 font-kanit text-xl">
                <div>
                  <p>
                    Tribbles tipping is supported in over 34,000 Discord
                    servers! Head over to tip.cc to add Pepecoin tipping to your
                    server.
                  </p>
                </div>
                <div className="mt-1.5 sm:mt-0">
                  <button className="text-2xl bg-local_pink p-4 border rounded">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="p-4 w-3/4 md:w-1/3">
          <a
            href="#"
            className="block rounded-lg p-4 bg-slate-800 text-white shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={tribbleImg}
              className="block rounded-lg p-4 bg-slate-800 text-white shadow-sm shadow-indigo-100"
            />

            <div className="mt-2">
              <h3 className="text-3xl font-light">How to earn</h3>

              <div className="mt-6 flex flex-col items-center gap-8 font-kanit text-xl">
                <div>
                  <p>
                    Tribbles tipping is supported in over 34,000 Discord
                    servers! Head over to tip.cc to add Pepecoin tipping to your
                    server.
                  </p>
                </div>
                <div className="mt-1.5 sm:mt-0">
                  <button className="text-2xl bg-local_pink p-4 border rounded">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="p-4 w-3/4 md:w-1/3 align-center">
          <a
            href="#"
            className="block rounded-lg p-4 bg-slate-800 text-white shadow-sm shadow-indigo-100"
          >
            <img
              alt=""
              src={tribbleImg}
              className="block rounded-lg p-4 bg-slate-800 text-white shadow-sm shadow-indigo-100"
            />

            <div className="mt-2">
              <h3 className="text-3xl font-light">How to earn</h3>

              <div className="mt-6 flex flex-col items-center gap-8 font-kanit text-xl">
                <div>
                  <p>
                    Tribbles tipping is supported in over 34,000 Discord
                    servers! Head over to tip.cc to add Pepecoin tipping to your
                    server.
                  </p>
                </div>
                <div className="mt-1.5 sm:mt-0">
                  <button className="text-2xl bg-local_pink p-4 border rounded">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-col w-full items-center p-20">
          <hr width="90%" />
        </div>
        <div className="w-full flex justify-around">
          <div className="flex flex-col w-full m:w-1/3 m:items-center">
            <h3 className="text-7xl font-kanit text-white p-4">Tokenomics</h3>
            <TokenomicsComponent />
          </div>
          <div className="invisible md:visible md:self-center">
            <img src={tokenomicsImg} />
          </div>
        </div>
      </div>
    </div> */}
  </Layout>
);
export default App;
