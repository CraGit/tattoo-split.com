/**
 * @typedef {import("@prismicio/client").Content.ArticleListSliceSlice} ArticleListSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleListSliceSlice>} ArticleListSliceProps
 * @param {ArticleListSliceProps}
 */
const ArticleListSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for article_list_slice (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default ArticleListSlice;
