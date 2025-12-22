import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./ImageCarousel.module.scss";
import ImageModal from "./ImageModal";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const ImageCarousel = ({ images, text }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>{text}</h2>

          <div className={styles.arrows}>
            <button onClick={scrollPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                fill="none"
              >
                <rect width="52" height="52" rx="26" fill="#FFDFDF" />
                <path
                  d="M21.7692 19L15 25.9747M15 25.9747L21.7692 33M15 25.9747H37"
                  stroke="#610202"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button onClick={scrollNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
                fill="none"
              >
                <rect width="52" height="52" rx="26" fill="#610202" />
                <path
                  d="M30.2308 33L37 26.0253M37 26.0253L30.2308 19M37 26.0253H15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.container}>
            {images.map((src, index) => (
              <div
                className={styles.slide}
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <img src={src} alt={`mockup-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <ImageModal
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
};

export default ImageCarousel;
