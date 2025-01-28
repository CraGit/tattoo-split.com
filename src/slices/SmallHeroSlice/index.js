/**
 * @typedef {import("@prismicio/client").Content.SmallHeroSliceSlice} SmallHeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SmallHeroSliceSlice>} SmallHeroSliceProps
 * @param {SmallHeroSliceProps}
 */
import SmallHero from "@/components/SmallHero";
const SmallHeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SmallHero heading={slice.primary.heading} image={slice.primary.image} />
    </section>
  );
};

export default SmallHeroSlice;
