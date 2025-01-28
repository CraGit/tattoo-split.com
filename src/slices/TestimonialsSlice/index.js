import Testimonials from "@/components/Testimonials";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSliceSlice} TestimonialsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSliceSlice>} TestimonialsSliceProps
 * @param {TestimonialsSliceProps}
 */
const TestimonialsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Testimonials testimonials={slice.primary.testimonials} />
    </section>
  );
};

export default TestimonialsSlice;
