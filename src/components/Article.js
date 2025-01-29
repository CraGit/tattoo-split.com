"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Article = ({ content }) => {
  const components = {
    paragraph: ({ children }) => (
      <p className="mb-6 leading-relaxed text-gray-600">{children}</p>
    ),
    heading1: ({ children }) => (
      <h1 className="text-4xl font-medium mb-8 mt-12">{children}</h1>
    ),
    heading2: ({ children }) => (
      <h2 className="text-3xl font-medium mb-6 mt-10">{children}</h2>
    ),
    heading3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-4 mt-8">{children}</h3>
    ),
    heading4: ({ children }) => (
      <h4 className="text-xl font-medium mb-4 mt-6">{children}</h4>
    ),
    heading5: ({ children }) => (
      <h5 className="text-lg font-medium mb-4 mt-6">{children}</h5>
    ),
    heading6: ({ children }) => (
      <h6 className="text-base font-medium mb-4 mt-6">{children}</h6>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    listItem: ({ children }) => <li className="mb-2 ml-4">{children}</li>,
    oListItem: ({ children }) => <li className="mb-2 ml-4">{children}</li>,
    list: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 text-gray-600">{children}</ul>
    ),
    oList: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 text-gray-600">{children}</ol>
    ),
    preformatted: ({ children }) => (
      <pre className="bg-gray-100 rounded-lg p-4 mb-6 overflow-x-auto text-sm font-mono">
        {children}
      </pre>
    ),
    image: ({ node }) => (
      <div className="relative w-full aspect-video mb-6 mt-6">
        <PrismicNextImage field={node} />
      </div>
    ),

    embed: ({ node }) => (
      <div className="relative aspect-video mb-6 mt-6">
        <iframe
          className="absolute w-full h-full top-0 left-0 rounded-lg"
          src={node.oembed.embed_url}
          allowFullScreen
        />
      </div>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </PrismicNextLink>
    ),
    quote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic mb-6 text-gray-600">
        {children}
      </blockquote>
    ),
  };

  return (
    <article className="section bg-white overflow-hidden px-3 xl:px-0">
      {/* Content */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="prose prose-lg max-w-[720px] mx-auto"
      >
        <PrismicRichText field={content} components={components} />
      </motion.div>
    </article>
  );
};

export default Article;
