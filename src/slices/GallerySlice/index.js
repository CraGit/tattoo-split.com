import Gallery from "@/components/Gallery";

/**
 * @typedef {import("@prismicio/client").Content.GallerySliceSlice} GallerySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySliceSlice>} GallerySliceProps
 * @param {GallerySliceProps}
 */
const GallerySlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Gallery
        heading={slice.primary.heading}
        button_text={slice.primary.button_text}
        button_link={slice.primary.button_link}
        gallery={slice.primary.gallery}
      />
    </section>
  );
};

export default GallerySlice;
