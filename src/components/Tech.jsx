import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import React from "react";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tech stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
