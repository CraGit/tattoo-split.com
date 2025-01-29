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

const SmallHero = ({ heading, image }) => {
  return (
    <section className="min-h-[20vh] lg:min-h-[60vh] relative">
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
          className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end py-10 "
        >
          {/* content */}
          <div className="text-center text-white lg:text-left lg:max-w-[640px]">
            <motion.h1 variants={fadeIn("down")} className="h1 text-ink">
              {heading}
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmallHero;
