import AboutTwo from "@/components/AboutTwo";

/**
 * @typedef {import("@prismicio/client").Content.AboutTwoSectionSliceSlice} AboutTwoSectionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutTwoSectionSliceSlice>} AboutTwoSectionSliceProps
 * @param {AboutTwoSectionSliceProps}
 */
const AboutTwoSectionSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutTwo
        heading={slice.primary.heading}
        content={slice.primary.content}
        box1_heading={slice.primary.box1_heading}
        box1_content={slice.primary.box1_content}
        box2_heading={slice.primary.box2_heading}
        box2_content={slice.primary.box2_content}
      />
    </section>
  );
};

export default AboutTwoSectionSlice;
