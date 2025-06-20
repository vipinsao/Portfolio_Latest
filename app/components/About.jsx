import { assets, infoList, toolsData, userImg } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
const About = (isDarkMode) => {
  // const userVipinSrc = pic[0].userVipin;
  const user = userImg[0].userImage;

  const [isLargeScreen, isSetLargeScreen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      isSetLargeScreen(window.innerWidth >= 1024);
    };

    //when our page loads
    handleSize(); //for checking purpose calling the handleSize function

    //added resize event handler
    window.addEventListener("resize", handleSize);

    //when ever we are shifting or changing the section or page then we will dispose this
    //so that memory leak not happened
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo "
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flexcol lg:flex-row items-center gap-20 my-20"
      >
        {isLargeScreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:2-80 rounded-3xl max-w-none"
          >
            <Image
              src={user}
              alt="user vipin"
              className="w-full rounded-3xl"
              width={320}
              height={490}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-l"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            Full Stack Developer skilled in building modern, scalable web
            applications using React, Next.js, TypeScript, and Node.js.
            Experienced with AI integrations, OCR tools, and real-time systems.
            Strong in C++ and data structures with 300+ problems solved on
            LeetCode. Focused on clean architecture, performance optimization,
            and delivering user-friendly solutions. Open to impactful
            opportunities and continuous learning.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt="{title}"
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white/80">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="grid grid-cols-4 sm:flex sm:flex-wrap gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
