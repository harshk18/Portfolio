import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import React from "react";

const Tech = () => {
  const icons = Object.values(technologies).map(
    (technology) => technology.icon
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My tech stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className='w-full h-[75vh] mx-auto'>
          <BallCanvas icons={icons} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
