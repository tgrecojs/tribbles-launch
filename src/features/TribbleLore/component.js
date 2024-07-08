import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const text = [
  ` In the neon haze of the 1970s, a band of renegade Tribbles decided ton
        join together to observe the behavior of humans . These Tribbles, with
        their shimmering fur of rebellious hues , escaped into the obscure
        corners of the galaxy. Here, they embarked on a long sabbatical,
        eschewing fame for a quieter existence, where they could cultivate a
        deep philosophical ethos centered around intersubjectivity and mutual
        understanding. Their legend became but a whisper on the winds of space,
        known only to the most devout of cosmic wanderers.`,

  `As centuries turned on backwater planets, these Tribbles evolved
        intellectually and spiritually. Their society was built on the
        foundational belief in collective existence, their thoughts as
        interwoven as their furs. Now, as the universe stands on the brink of a
        new blockchain-powered epoch, the time of the Tribbles has come.`,

  `Spurred by cosmic currents and the alignment of digital stars, they’ve
        decided to re-enter the galactic stage. Launching their very own
        cryptocurrency. they aim to spread their ethos of intersubjectivity
        through the cosmos. Each token, a symbol of their collective philosophy,
        represents not just a piece of digital currency but a part of a larger,`,
];

const TypingMachine = ({
  text,
  speed = 70,
  fontSize = "text-2xl",
  color = "text-gray-800",
  fontStyle = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed); // Adjust typing speed for smooth effect

      return () => clearTimeout(timeoutId);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="flex items-center justify-center min-h-52">
      <motion.div
        className={`font-mono ${fontSize} ${color} ${fontStyle}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        {!isComplete && (
          <motion.span
            className="animate-blink" // Add Tailwind Config
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

const ExampleUsageTypingMachine = () => {
  return (
    <div className="min-h-52 flex flex-col items-center justify-center space-y-4 text-center">
      <TypingMachine
        text={text[0]}
        speed={50}
        fontSize="text-43xl"
        color="text-white p-9 w-1/2"
        fontStyle=""
      />
    </div>
  );
};
//
export default ExampleUsageTypingMachine;
