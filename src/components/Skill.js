import React from "react";
import { motion } from "framer-motion";

const MySkill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full font-semibold bg-dark shadow-dark text-light py-3 px-6 cursor-pointer
      absolute dark:text-dark dark:bg-light 
      lg:pt-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
      xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-60 w-full text-center dark:text-light md:text-6xl md:mt-32 ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex justify-center items-center rounded-full font-semibold bg-dark shadow-dark text-light p-5 cursor-pointer 
          dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 
          
          "
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <MySkill name="CSS" x="-6vw" y="-10vw" />
        <MySkill name="Heroku" x="10vw" y="-14vw" />
        <MySkill name="HTML" x="-22vw" y="-8vw" />
        <MySkill name="Redux" x="-22vw" y="-18vw" />
        <MySkill name="MongoDB" x="-22vw" y="14vw" />
        <MySkill name="Flutter" x="37vw" y="7vw" />
        <MySkill name="Python" x="13vw" y="-1vw" />
        <MySkill name="Laravel" x="-39vw" y="2vw" />
        <MySkill name="Nextjs" x="2vw" y="11vw" />
        <MySkill name="Php" x="20vw" y="15vw" />
        <MySkill name="Reactjs" x="30vw" y="-7vw" />
      </div>
    </>
  );
};

export default Skill;
