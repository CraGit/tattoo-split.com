"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import Image from "next/image";
import { FaLightbulb, FaChartLine, FaCogs } from "react-icons/fa";

const dummyData = {
  // Text content section
  heading: "Crafting Digital Excellence",
  description:
    "We are a forward-thinking digital agency committed to delivering exceptional results. With over a decade of experience in the industry, we've helped countless businesses transform their digital presence and achieve remarkable growth.",
  mission_title: "Our Mission",
  mission_text:
    "To empower businesses through innovative digital solutions that drive growth, enhance user experience, and create lasting value for our clients and their customers.",
  vision_title: "Our Vision",
  vision_text:
    "To be the leading force in digital transformation, setting new standards for creativity, technology, and client success in the ever-evolving digital landscape.",

  // Team section
  team_heading: "Meet Our Expert Team",
  team_description:
    "Our diverse team of professionals brings together years of experience and passionate creativity to deliver outstanding results for our clients.",
  team_members: [
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      bio: "With 15 years of experience in design and branding, Sarah leads our creative initiatives with passion and innovation.",
      image: { url: "/api/placeholder/400/400" },
    },
    {
      name: "Michael Chen",
      position: "Technical Lead",
      bio: "A master of multiple programming languages, Michael ensures our technical solutions are robust and scalable.",
      image: { url: "/api/placeholder/400/400" },
    },
    {
      name: "Emma Rodriguez",
      position: "Strategy Director",
      bio: "Emma's strategic insight has helped numerous clients achieve their business goals and market leadership.",
      image: { url: "/api/placeholder/400/400" },
    },
  ],

  // Services section
  services_heading: "Our Services",
  services_description:
    "We offer comprehensive digital solutions tailored to your specific needs and goals.",
  services: [
    {
      icon: <FaLightbulb className="text-blue-600" />,
      title: "Strategic Planning",
      description:
        "We develop comprehensive digital strategies that align with your business objectives and drive measurable results.",
    },
    {
      icon: <FaChartLine className="text-blue-600" />,
      title: "Digital Marketing",
      description:
        "Our data-driven marketing approaches help you reach your target audience and achieve optimal ROI.",
    },
    {
      icon: <FaCogs className="text-blue-600" />,
      title: "Technical Solutions",
      description:
        "We build scalable, secure, and efficient technical solutions that power your digital presence.",
    },
  ],
};

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Text Content Section */}
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col gap-y-8"
          >
            <h1 className="h2 max-w-[520px]">{dummyData.heading}</h1>
            <p className="max-w-[750px] text-gray-600">
              {dummyData.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-[#f9f9f9] p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">
                  {dummyData.mission_title}
                </h3>
                <p className="text-gray-600">{dummyData.mission_text}</p>
              </div>
              <div className="bg-[#f9f9f9] p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">
                  {dummyData.vision_title}
                </h3>
                <p className="text-gray-600">{dummyData.vision_text}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-[#f9f9f9]">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="h2 mb-4">{dummyData.team_heading}</h2>
            <p className="max-w-[600px] mx-auto text-gray-600">
              {dummyData.team_description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {dummyData.team_members.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image.url}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="h2 mb-4">{dummyData.services_heading}</h2>
            <p className="max-w-[600px] mx-auto text-gray-600">
              {dummyData.services_description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {dummyData.services.map((service, index) => (
              <div
                key={index}
                className="bg-[#f9f9f9] p-8 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
