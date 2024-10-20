import TribblesCommunityComponent from "./features/tribblesCommunity/component";
import Layout from "./shared/layout/component";
import TribbleIcon from "../assets/images/tribble.png";

const App = ({
  title = "Merkle Tree Airdrop Campaign Client",
  description = "Tribbles are the intergalactic intersubjective meme coin for one and all",
}) => (
  <Layout>
    <div className="flex flex-col w-full items-center md:items-start p-4">
      <h1 className="text-7xl md:text-9xl text-local_green font-ksg p-4">
        They're coming
      </h1>
      <p className="font-kanit text-xl md:text-3xl font-extralight p-4 text-white text-center w-4/5">
        {description}
      </p>
    </div>
    <TribblesCommunityComponent />
    <div className="flex flex-col w-full items-center p-20">
      {/* <hr width="90%" /> */}
      <ul className="text-lg md:text-2xl">
        <li className="flex items-center">
          <img className="max-w-20" src={TribbleIcon} />
          <p className="text-white font-kanit">
            Built on the Agoric blockchain
          </p>
        </li>
        <li className="flex items-center">
          <img className="max-w-20" src={TribbleIcon} />
          <p className="text-white font-kanit">Hungry for orchestration</p>
        </li>
        <li className="flex items-center">
          <img className="max-w-20" src={TribbleIcon} />
          <p className="text-white font-kanit">Community-driven</p>
        </li>
        <li className="flex items-center">
          <img className="max-w-20" src={TribbleIcon} />
          <p className="text-white font-kanit">
            Max supply capped at amount minted
          </p>
        </li>
        <li className="flex items-center">
          <img className="max-w-20" src={TribbleIcon} />
          <p className="text-white font-kanit">Built for cross-chain utility</p>
        </li>
      </ul>
    </div>
    <h2 className="text-6xl text-white font-kanit p-12">Tribble Lore </h2>

    <div className="flex flex-col md:flex-row align-center font-kanit font-extralight items-start">
      <div className="p-8">
        <p className="w-full p-4 text-white text-2xl">
          {" "}
          In the neon haze of the 1970s, a band of renegade Tribbles decided to
          join together to observe the behavior of humans. These Tribbles, with
          their shimmering fur of rebellious hues, escaped into the obscure
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
          decided to re-enter the galactic stage, launching their very own
          cryptocurrency. They aim to spread their ethos of intersubjectivity
          through the cosmos. Each token, a symbol of their collective
          philosophy, represents not just a piece of digital currency but a part
          of a larger, interconnected whole.
        </p>

        <p className="w-full p-4 text-white text-2xl">
          {" "}
          Don’t blink, lest you might miss them duplicating at a dizzying pace,
          replicating themselves into generational fortitude. With each new
          block forged in the cosmic ledger, a new generation of Tribbles
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
  </Layout>
);
export default App;
