import ArticleList from "@/components/ArticleList";
import { createClient } from "@/prismicio";
import { getLocales } from "@/lib/getLocales";

/**
 * @typedef {import("@prismicio/client").Content.ArticleListSliceSlice} ArticleListSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleListSliceSlice>} ArticleListSliceProps
 * @param {ArticleListSliceProps}
 */
const ArticleListSlice = async ({ slice, context }) => {
  const client = createClient();
  const articles = await client.getAllByType("article", {
    lang: context.lang,
  });
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ArticleList articles={articles} />
    </section>
  );
};

export default ArticleListSlice;
