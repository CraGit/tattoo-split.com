"use client";
// framer motion
import { motion } from "framer-motion";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// animation
import { fadeIn } from "@/utils/variants";

const QuoteSvg = () => (
  <svg
    width="156"
    height="111"
    viewBox="0 0 156 111"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.28 54.5599L42.784 52.2079C49.5786 52.2079 55.5893 54.5599 60.816 59.2639C66.304 63.7065 69.048 70.3705 69.048 79.2559C69.048 87.8798 66.1733 95.1972 60.424 101.208C54.6746 107.219 46.5733 110.224 36.12 110.224C25.928 110.224 17.4346 106.304 10.64 98.4639C4.10663 90.6239 0.839966 80.5625 0.839966 68.2799C0.839966 55.7359 5.54397 43.3225 14.952 31.0398C24.6213 18.7572 38.3413 8.56519 56.112 0.463867L58.856 7.12785C34.2906 20.7172 22.008 34.4372 22.008 48.2879C22.008 52.4692 24.0986 54.5599 28.28 54.5599ZM114.52 54.5599L129.024 52.2079C135.819 52.2079 141.829 54.5599 147.056 59.2639C152.544 63.7065 155.288 70.3705 155.288 79.2559C155.288 87.8798 152.413 95.1972 146.664 101.208C140.915 107.219 132.813 110.224 122.36 110.224C112.168 110.224 103.675 106.304 96.88 98.4639C90.3466 90.6239 87.08 80.5625 87.08 68.2799C87.08 55.7359 91.784 43.3225 101.192 31.0398C110.861 18.7572 124.581 8.56519 142.352 0.463867L145.096 7.12785C120.531 20.7172 108.248 34.4372 108.248 48.2879C108.248 52.4692 110.339 54.5599 114.52 54.5599Z"
      fill="#F0F0F0"
    />
  </svg>
);
const Testimonials = ({ testimonials }) => {
  console.log(testimonials);
  return (
    <motion.section
      className="py-[40px] lg:pb-[160px] lg:pt-0"
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <Swiper>
          {testimonials.map((item) => {
            // destructure each slide

            return (
              <SwiperSlide key={item.testimonial}>
                <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                  {/* quote icon */}
                  <div className="w-[154px] h-[109px] mb-5">
                    <QuoteSvg />
                  </div>
                  {/* text content */}
                  <div className="flex-1 lg:mt-[54px]">
                    <div className="text-2xl lg:text-[36px] mb-6 lg:mb-12">
                      {item.testimonial}
                    </div>
                    <div className="flex items-center text-xl lg:text-2xl font-primary">
                      <div className="font-semibold">{item.name}</div>
                      <span className="mx-4">|</span>
                      <div className="font-light">{item.country}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;
