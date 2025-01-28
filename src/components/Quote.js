"use client";
// framer motion
import { motion } from "framer-motion";
// animation
import { fadeIn } from "@/utils/variants";

const Interview = ({ heading, image }) => {
  return (
    <motion.section
      className="bg-no-repeat bg-cover bg-dark section lg:h-[400px]"
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      style={{ backgroundImage: `url(${image.url})` }}
    >
      <div className="container h-full mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            <h3
              className="text-white text-[40px] lg::text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8"
              variants={fadeIn("down")}
            >
              {heading}
            </h3>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;
