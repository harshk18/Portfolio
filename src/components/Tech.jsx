import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { StarsCanvas } from "./canvas";

import React from "react";

const Tech = () => {
  const icons = Object.values(technologies).map(
    (technology) => technology.icon
  );

  return (
    <>
      <StarsCanvas />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tech stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="w-full h-[75vh] mx-auto">
        <BallCanvas icons={icons} />
      </div>

      <div className="absolute xs:hidden bottom-32 w-full flex justify-center items-center">
        <a href="#projects">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
