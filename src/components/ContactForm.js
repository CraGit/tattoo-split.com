"use client";
// framer motion
import { motion } from "framer-motion";
// animation
import { fadeIn } from "@/utils/variants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";

const ContactForm = ({
  heading,
  company,
  address,
  phone,
  email,
  link_text,
  link,
  name_placeholder,
  phone_placeholder,
  email_placeholder,
  message_placeholder,
  button_text,
}) => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          {/* text */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            {/* title */}
            <h2 className="h2 max-w-[490px]">{heading}</h2>
            {/* information */}
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              <div>
                {/* title */}
                <div className="mb-3 text-xl font-medium uppercase font-primary">
                  {company}
                </div>
                {/* subtitle */}

                {/* contact */}
                <div className="flex flex-col mb-8 gap-y-3">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      {" "}
                      <FaMapMarkerAlt />
                    </div>
                    <div className="font-medium">{address}</div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div>
                      {" "}
                      <FaPhoneAlt />
                    </div>
                    <div className="font-medium">{phone}</div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div>
                      {" "}
                      <FaEnvelope />
                    </div>
                    <div className="font-medium">{email}</div>
                  </div>
                </div>
                {/* get location link */}
                <PrismicNextLink
                  className="font-medium border-b border-dark pb-[5px]"
                  field={link}
                >
                  {link_text}
                </PrismicNextLink>
              </div>
            </div>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center overflow-hidden"
          >
            <form className="flex flex-col w-full gap-y-10">
              {/* fields */}
              <input
                type="text"
                placeholder={name_placeholder}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                type="text"
                placeholder={phone_placeholder}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                type="text"
                placeholder={email_placeholder}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
              />
              <input
                type="text"
                placeholder={message_placeholder}
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
              />
              {/* send button */}
              <button className="self-start btn btn-sm btn-dark">
                {button_text}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
