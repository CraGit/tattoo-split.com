"use client";
import { useState, useEffect } from "react";
import { PhotoAlbum } from "react-photo-album";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { IoMdArrowForward } from "react-icons/io";
import { PrismicNextLink } from "@prismicio/next";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const Gallery = ({ heading, button_text, button_link, gallery }) => {
  // states
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalReady, setModalReady] = useState(false);

  // photos array
  const photos = gallery.map((item) => ({
    src: item.image.url,
    width: item.image.dimensions.width,
    height: item.image.dimensions.height,
    alt: item.image.alt || "",
  }));

  // Initialize Modal's app element after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setModalReady(true);
    }
  }, []);

  // handlers
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextPhoto = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousPhoto = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!modalIsOpen) return;

      switch (event.key) {
        case "ArrowLeft":
          previousPhoto();
          break;
        case "ArrowRight":
          nextPhoto();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIsOpen]);

  return (
    <section className="relative bg-[#f9f9f9] section mt-[40px]">
      {/* title */}
      <motion.div
        className="container mx-auto"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      >
        <h2 className="h2 max-w-[370px]">{heading}</h2>
      </motion.div>

      {/* gallery */}
      <motion.div
        className="mb-8 lg:mb-20"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <PhotoAlbum
          photos={photos}
          layout="rows"
          onClick={({ index }) => openModal(index)}
        />
      </motion.div>

      {/* Modal */}
      {modalReady && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center p-4 outline-none"
          overlayClassName="fixed inset-0 bg-black/80 z-[9999]"
          contentLabel="Image Modal"
          style={{
            overlay: {
              zIndex: 9999,
            },
            content: {
              zIndex: 10000,
            },
          }}
        >
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white z-50 hover:opacity-75 transition"
            >
              <IoClose size={24} />
            </button>

            {/* Image container */}
            <div className="relative w-full h-[80vh]">
              {photos[currentImageIndex] && (
                <>
                  <Image
                    src={photos[currentImageIndex].src}
                    alt={
                      photos[currentImageIndex].alt ||
                      `Photo ${currentImageIndex + 1}`
                    }
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    quality={100}
                  />

                  {/* Navigation arrows */}
                  {photos.length > 1 && (
                    <>
                      <button
                        onClick={previousPhoto}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition z-20"
                      >
                        <IoIosArrowBack size={24} />
                      </button>

                      <button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition z-20"
                      >
                        <IoIosArrowForward size={24} />
                      </button>
                    </>
                  )}

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm z-20">
                    {currentImageIndex + 1} / {photos.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* btn */}
      <motion.div
        className="flex justify-center"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <PrismicNextLink className="btn btn-lg btn-dark" field={button_link}>
          {button_text}
          <div className="text-xl">
            <IoMdArrowForward />
          </div>
        </PrismicNextLink>
      </motion.div>
    </section>
  );
};

export default Gallery;
