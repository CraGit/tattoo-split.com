"use client";
// framer motion
import { motion } from "framer-motion";
// framer motion transition
import { fadeIn } from "../utils/variants";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { IoMdArrowForward } from "react-icons/io";
// transition
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = ({ heading, content, image, button_label, button_link }) => {
  return (
    <section className="min-h-[40vh] lg:min-h-[90vh] relative">
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          field={image}
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="z-10 relative pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end py-20 "
        >
          {/* content */}
          <div className="text-center text-white lg:text-left lg:max-w-[640px]">
            <motion.h1 variants={fadeIn("down")} className="h1">
              {heading}
            </motion.h1>
            <motion.p
              variants={fadeIn("down")}
              className="max-w-lg mb-8 leading-relaxed lg:mb-16 tracking-wide text-lg lg:text-xl"
            >
              {content}
            </motion.p>
            {/* btn */}
            <motion.div variants={fadeIn("down")} className="w-fit">
              <PrismicNextLink
                className="mx-auto btn btn-sm lg:btn-lg btn-outline lg:mx-0"
                field={button_link}
              >
                {button_label}
                <div className="text-xl">
                  <IoMdArrowForward />
                </div>
              </PrismicNextLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
