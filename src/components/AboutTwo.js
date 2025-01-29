"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const AboutTwo = ({
  heading,
  content,
  box1_heading,
  box1_content,
  box2_heading,
  box2_content,
}) => (
  <section className="section bg-white">
    <div className="container mx-auto">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="flex flex-col gap-y-8"
      >
        <h1 className="h2 max-w-[520px]">{heading}</h1>
        <p className="max-w-[750px] text-gray-600">{content}</p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#f9f9f9] p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">{box1_heading}</h3>
            <p className="text-gray-600">{box1_content}</p>
          </div>
          <div className="bg-[#f9f9f9] p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4">{box2_heading}</h3>
            <p className="text-gray-600">{box2_content}</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutTwo;
