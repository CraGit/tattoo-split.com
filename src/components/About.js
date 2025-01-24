"use client";

import React from "react";
// about data
// framer motion
import { motion } from "framer-motion";
// transition  for framer motion
import { fadeIn } from "../utils/variants";

const About = () => {
  return (
    <section className="lg:py-16 xl:pb-[160px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
          {/* number */}
          <motion.div
            className="flex flex-col flex-1 lg:flex-row"
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-red-200 text-transparent">
              BI
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            className="flex-1 h-full xl:mt-48"
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h2 className="h2">NASLOV</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">podnaslov</p>
                <p className="mb-9">drugi podnaslov</p>
                <button className="btn btn-lg btn-link">
                  lorem ipsum dolor sit amet
                  {/* <div className="text-xl">{btnIcon}</div> */}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
