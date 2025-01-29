import Team from "@/components/Team";

/**
 * @typedef {import("@prismicio/client").Content.TeamSectionSliceSlice} TeamSectionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSectionSliceSlice>} TeamSectionSliceProps
 * @param {TeamSectionSliceProps}
 */
const TeamSectionSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Team heading={slice.primary.heading} members={slice.primary.members} />
    </section>
  );
};

export default TeamSectionSlice;
