"use client";
import React from "react";
// framer motion
import { motion } from "framer-motion";
// transition  for framer motion
import { fadeIn } from "@/utils/variants";
// icons
import { IoMdArrowForward } from "react-icons/io";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const AboutUs = ({ title, content, button_text, button_link, image }) => {
  console.log(image);
  // destructure about data

  return (
    <section className="lg:py-16 xl:pb-[160px] overflow-hidden">
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
            <div
              className="text-[240px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-no-repeat bg-right bg-clip-text text-transparent"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              {/* {title}
               */}
              GI
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
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                {/* <p className="mb-6">{subtitle1}</p>
                <p className="mb-9">{subtitle2}</p> */}
                <PrismicRichText field={content} />
                <PrismicNextLink
                  field={button_link}
                  className="btn btn-lg btn-link"
                >
                  {button_text}
                  <div className="text-xl">
                    <IoMdArrowForward />
                  </div>
                </PrismicNextLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
