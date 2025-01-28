/**
 * @typedef {import("@prismicio/client").Content.QuoteSliceSlice} QuoteSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuoteSliceSlice>} QuoteSliceProps
 * @param {QuoteSliceProps}
 */
import Quote from "@/components/Quote";
const QuoteSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Quote heading={slice.primary.heading} image={slice.primary.image} />
    </section>
  );
};

export default QuoteSlice;
