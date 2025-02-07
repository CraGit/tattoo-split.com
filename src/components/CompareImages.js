"use client";
// framer motion
import { motion } from "framer-motion";
// animation
import { fadeIn } from "@/utils/variants";
import { PrismicNextImage } from "@prismicio/next";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
export default function CompareImages({ heading, images }) {
  console.log(images);
  return (
    <section className="py-8 lg:py-16 xl:pb-[160px] overflow-hidden">
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
            <h2 className="h2">{heading}</h2>
          </motion.div>

          <motion.div
            className="flex-1 h-full xl:mt-48"
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            {images.map((image, index) => (
              <div key={index}>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={image.before.url}
                      alt={image.before.alt || ""}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={image.after.url}
                      alt={image.after.alt || ""}
                    />
                  }
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
