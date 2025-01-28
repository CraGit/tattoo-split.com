import Hero from "@/components/Hero";

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param {HeroSliceProps}
 */
const HeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Hero
        heading={slice.primary.heading}
        image={slice.primary.image}
        content={slice.primary.content}
        button_label={slice.primary.button_label}
        button_link={slice.primary.button_link}
      />
    </section>
  );
};

export default HeroSlice;
