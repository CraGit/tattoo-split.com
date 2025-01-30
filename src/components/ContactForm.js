"use client";
// framer motion
import { motion } from "framer-motion";
// animation
import { fadeIn } from "@/utils/variants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9+\s-()]*$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {/* contact */}
                <div className="flex flex-col mb-8 gap-y-3">
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <FaMapMarkerAlt />
                    </div>
                    <div className="font-medium">{address}</div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div>
                      <FaPhoneAlt />
                    </div>
                    <div className="font-medium">{phone}</div>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <div>
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
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-10">
              {/* fields */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={name_placeholder}
                  className={`border-b ${errors.name ? 'border-red-500' : 'border-dark'} placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 w-full`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm absolute -bottom-6 left-0">{errors.name}</span>
                )}
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={phone_placeholder}
                  className={`border-b ${errors.phone ? 'border-red-500' : 'border-dark'} placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 w-full`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm absolute -bottom-6 left-0">{errors.phone}</span>
                )}
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={email_placeholder}
                  className={`border-b ${errors.email ? 'border-red-500' : 'border-dark'} placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 w-full`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm absolute -bottom-6 left-0">{errors.email}</span>
                )}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={message_placeholder}
                  className={`border-b ${errors.message ? 'border-red-500' : 'border-dark'} placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 w-full`}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm absolute -bottom-6 left-0">{errors.message}</span>
                )}
              </div>
              
              {/* status message */}
              {submitStatus === "success" && (
                <div className="text-green-500">Message sent successfully!</div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-500">Failed to send message. Please try again.</div>
              )}
              
              {/* send button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`self-start btn btn-sm btn-dark ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : button_text}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
