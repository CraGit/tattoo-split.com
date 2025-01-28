"use client";
// framer motion
import { motion } from "framer-motion";
// animation
import { fadeIn } from "@/utils/variants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PrismicNextImage } from "@prismicio/next";

import * as prismic from "@prismicio/client";
const Footer = ({ settings }) => {
  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col text-white lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          <div>
            <div className="text-xl uppercase font-primary tracking-[0.08em]">
              {prismic.isFilled.image(settings.data.logo) && (
                <>
                  <PrismicNextImage
                    field={settings.data.logo}
                    alt="logo"
                    width={130}
                    height={70}
                  />
                </>
              )}
            </div>
            <div className="text-xl uppercase font-primary tracking-[0.08em]">
              Green Ink Art&Tattoo
            </div>
            <div className="leading-relaxed text-[#dbdbdb]">
              Studio za izradu tetovaža
            </div>
            <div className="flex flex-col font-semibold gap-y-4 text-[#dbdbdb]">
              {/* addresses */}
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/UdHe3gR8tQMBKDa38"
                    target="_blank"
                  >
                    Sarajevska 30b, Split, Croatia
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <FaPhoneAlt />
                </div>
                <div>
                  <a href="tel:+385 97 757 2272">097 757 2272</a>
                </div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <FaEnvelope />
                </div>
                <div>
                  <a href="mailto:tattoo.greenink@gmail.com">
                    tattoo.greenink@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
