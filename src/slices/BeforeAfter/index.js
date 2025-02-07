/**
 * @typedef {import("@prismicio/client").Content.BeforeAfterSlice} BeforeAfterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BeforeAfterSlice>} BeforeAfterProps
 * @param {BeforeAfterProps}
 */
const BeforeAfter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for before_after (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BeforeAfter;
