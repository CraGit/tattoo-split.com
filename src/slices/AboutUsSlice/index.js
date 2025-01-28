import AboutUs from "@/components/AboutUs";

/**
 * @typedef {import("@prismicio/client").Content.AboutUsSliceSlice} AboutUsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutUsSliceSlice>} AboutUsSliceProps
 * @param {AboutUsSliceProps}
 */
const AboutUsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutUs
        title={slice.primary.heading}
        content={slice.primary.content}
        image={slice.primary.image}
        button_text={slice.primary.button_text}
        button_link={slice.primary.button_link}
      />
    </section>
  );
};

export default AboutUsSlice;
