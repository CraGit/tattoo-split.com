import { PrismicNextImage } from "@prismicio/next";


const WhatsAppButton = ({ settings }) => {
  console.log(settings)
  const phoneNumber = "385977572272"; // removed spaces and added country code
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-110"
      >
        <PrismicNextImage
          field={settings.data.whatsapp}
          width={50}
          height={50}
          className="drop-shadow-lg"
          priority
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
