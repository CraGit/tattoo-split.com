"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

const Team = ({ heading, members }) => (
  <section className="section bg-[#f9f9f9]">
    <div className="container mx-auto">
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="h2 mb-4">{heading}</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {members.map((member, index) => (
          <div key={index} className="group overflow-hidden">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <PrismicNextImage
                field={member.image}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
            </div>
            <div className="relative p-6 ">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-ink font-">{member.position}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Team;
