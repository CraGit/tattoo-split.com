"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { IoMdArrowForward } from "react-icons/io";

const ArticleList = ({ heading, description, posts }) => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="h2 mb-4">{heading}</h2>
          <p className="max-w-[600px] mx-auto text-gray-600">{description}</p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {posts.map((post, index) => (
            <article key={index} className="group">
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden mb-6">
                <PrismicNextImage
                  field={post.featured_image}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                />
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-2xl font-medium mb-2">{post.title}</h3>
                <div className="text-gray-600 mb-4">
                  <PrismicRichText field={post.excerpt} />
                </div>
                <PrismicNextLink
                  document={post}
                  className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
                >
                  Read More
                  <IoMdArrowForward />
                </PrismicNextLink>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleList;
