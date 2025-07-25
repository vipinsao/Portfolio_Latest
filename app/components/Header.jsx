import React from "react";
import Image from "next/image";
import { assets, pic } from "@/assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  const userVipinSrc = pic[0].userVipin;
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stifness: "100" }}
      >
        <Image
          src={userVipinSrc}
          alt=""
          className="rounded-full w-28"
          width={112}
          height={112}
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Vipin Chandra Sao
        <Image src={assets.hand_icon} alt="" className="w-8" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Web Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-3xl mx-auto font-Ovo"
      >
        Full-stack web developer from Raipur, skilled in building responsive and
        scalable web apps. I’m looking for opportunities to solve real-world
        problems through clean, user-focused solutions.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Conatct me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="https://drive.google.com/file/d/1Xf1HBhwb2j-wn4a7NKw9AsuNgk5JTRzy/view?usp=sharing"
          target="_blank"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My resume
          <Image
            src={isDarkMode ? assets.arrow_icon : assets.arrow_icon}
            className="w-3"
            alt=""
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
