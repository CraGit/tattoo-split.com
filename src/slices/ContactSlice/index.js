import ContactForm from "@/components/ContactForm";

/**
 * @typedef {import("@prismicio/client").Content.ContactSliceSlice} ContactSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSliceSlice>} ContactSliceProps
 * @param {ContactSliceProps}
 */
const ContactSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContactForm
        heading={slice.primary.heading}
        company={slice.primary.company}
        address={slice.primary.address}
        phone={slice.primary.phone}
        email={slice.primary.email}
        link_text={slice.primary.link_text}
        link={slice.primary.link}
        name_placeholder={slice.primary.name_placeholder}
        phone_placeholder={slice.primary.phone_placeholder}
        email_placeholder={slice.primary.email_placeholder}
        message_placeholder={slice.primary.message_placeholder}
        button_text={slice.primary.button_text}
      />
    </section>
  );
};

export default ContactSlice;
