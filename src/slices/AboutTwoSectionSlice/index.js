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
        services={slice.primary.services}
      />
    </section>
  );
};

export default AboutTwoSectionSlice;
