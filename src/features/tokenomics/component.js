import img1 from "./1.png";

import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";

const allocationData = [
  { imgSrc: img1, text: "Fundraising" },
  { imgSrc: img2, text: "Ecosystem Development" },
  { imgSrc: img3, text: "Team & Advisory" },
  { imgSrc: img4, text: "Client Acquisition" },
  { imgSrc: img5, text: "Reserve" },
];

const TextPanel = ({ text = "Default Value", key = 0, imgSrc = "1.png" }) => (
  <div
    key={`panel-${key}`}
    className="bg-slate-800 p-8 m-3 border text-white font-thin font-kanit text-3xl mb-2 flex justify-start w-3/4"
  >
    <img src={imgSrc} className="mr-3" />
    <p>{text}</p>
  </div>
);
const TokenomicsComponent = ({ data = allocationData }) =>
  data.map((x, i) => <TextPanel text={x.text} key={i} imgSrc={x.imgSrc} />);

export default TokenomicsComponent;
