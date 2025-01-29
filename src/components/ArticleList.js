"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const ArticleList = ({ articles }) => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {articles.map((article, index) => (
            <PrismicNextLink document={article} key={index}>
              <article className="group">
                <div className="relative w-full aspect-[16/9] overflow-hidden mb-6">
                  <PrismicNextImage
                    field={article.data.image}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  />
                </div>

                <div className="mb-4">
                  {/* <div className="text-sm text-gray-500 mb-2">{article.date}</div> */}
                  <h3 className="text-2xl font-medium mb-2">
                    {article.data.heading}
                  </h3>
                  {/* <div className="text-gray-600 mb-4">
                  <PrismicRichText field={article.excerpt} />
                </div> */}
                  {/* <PrismicNextLink
                  document={article}
                  className="inline-flex items-center gap-2 font-medium text-ink hover:text-ink/90"
                >
                  Pročitaj još
                  <IoMdArrowForward />
                </PrismicNextLink> */}
                </div>
              </article>
            </PrismicNextLink>
          ))}
        </motion.div>{" "}
      </div>
    </section>
  );
};

export default ArticleList;
