import ArticleList from "@/components/ArticleList";

/**
 * @typedef {import("@prismicio/client").Content.ArticleListSliceSlice} ArticleListSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleListSliceSlice>} ArticleListSliceProps
 * @param {ArticleListSliceProps}
 */
const ArticleListSlice = ({ slice, context }) => {
  console.log(context);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ArticleList
        heading={slice.primary.heading}
        description={slice.primary.description}
        posts={slice.items}
      />
    </section>
  );
};

export default ArticleListSlice;
