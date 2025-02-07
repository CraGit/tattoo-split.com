/**
 * @typedef {import("@prismicio/client").Content.BeforeAfterSlice} BeforeAfterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeforeAfterSlice>} BeforeAfterProps
 * @param {BeforeAfterProps}
 */
import CompareImages from "@/components/CompareImages";
const BeforeAfter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CompareImages
        heading={slice.primary.heading}
        images={slice.primary.beforeafter}
      />
    </section>
  );
};

export default BeforeAfter;
