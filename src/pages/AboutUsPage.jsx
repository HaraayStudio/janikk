import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./styles/AboutPage.module.scss";
import poojaImage from "../assets/images/About/CeoImg.webp";
import aaratiImage from "../assets/images/About/Aarti.jpg";
import HeroSec from "../assets/images/About/HeroSec.webp";
import carImg1 from "../assets/images/Immersion/img1.jpg";
import carImg2 from "../assets/images/Immersion/img2.jpg";
import carImg3 from "../assets/images/Immersion/img3.jpg";
import carImg4 from "../assets/images/Immersion/img4.jpg";
import carImg5 from "../assets/images/Immersion/img5.jpg";
const slides = [
  {
    id: 1,
    imageUrl: carImg4,
    title: "Innovative Learning",
    caption: "Driving technological advancement in every curriculum.",
  },
  {
    id: 2,
    imageUrl: carImg1,
    title: "Empowering Future Leaders",
    caption: "Building confidence and global perspective for success.",
  },
  {
    id: 3,
    imageUrl: carImg2,
    title: "Immersion Programme Excellence",
    caption: "Hands-on cultural and academic experiences worldwide.",
  },
  {
    id: 4,
    imageUrl: carImg3,
    title: "Immersion Programme Excellence",
    caption: "Hands-on cultural and academic experiences worldwide.",
  },
  {
    id: 5,
    imageUrl: carImg5,
    title: "Innovative Learning",
    caption: "Driving technological advancement in every curriculum.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const AboutFounderSection = () => {
  const autoSlideInterval = 5000; // 5 seconds
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Function to handle automatic sliding
  useEffect(() => {
    if (autoSlideInterval > 0) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [nextSlide, autoSlideInterval]);

  // Function to move to a specific slide (used by dots)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Calculate the CSS transform value
  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };
  return (
    <div className={styles.aboutPage}>
      {/* HERO */}
      <div className={styles.heroSection}>
        <div className={styles.carouselContainer}>
          {/* The Slider Track */}
          <div className={styles.sliderTrack} style={sliderStyle}>
            {slides.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={styles.slideImage}
                  loading="eager" // Important for the main hero image
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className={styles.dotNavigation}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.section
        className={styles.Aboutsection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className={styles.AbtSection}>
          <motion.div variants={fadeUp}>
            <h1 className={styles.text}>About the Firm</h1>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUp}>
            <p>
              Welcome to Janikk International Global Education Services, where
              we strive to bridge the gap between aspiration and achievement by
              bringing global education opportunities to your doorstep. In an
              era where the world is more connected than ever, we believe that
              education should transcend borders, cultures, and traditional
              boundaries. Our mission is to empower the next generation with the
              knowledge, skills, and experiences that a global education can
              provide. At Janikk International, we are committed to facilitating
              international admissions in India and creating meaningful
              collaborations between educational institutions from around the
              world. By fostering these partnerships, we aim to provide students
              with access to world-class education, diverse perspectives, and
              innovative learning environments that will prepare them for the
              challenges of tomorrow.
            </p>
            <p>
              {" "}
              Our vision is to create a common platform where students,
              educators, and institutions can come together to share ideas,
              collaborate on projects, and build a future that is inclusive,
              dynamic, and forward-thinking. We understand the complexities of
              navigating international education systems, and we are here to
              guide you every step of the way—from choosing the right course and
              institution to ensuring a smooth transition into a new academic
              and cultural environment. As we move forward, we are excited about
              the opportunities that lie ahead. Whether you are a student
              seeking to broaden your horizons, an institution looking to expand
              your global footprint, or a partner committed to advancing
              education, Janikk International is here to support you on your
              journey.
            </p>
          </motion.div>
        </div>

        {/* <div className={styles.card}>
          <motion.div className={styles.imageBox} variants={imageAnim}>
            <div className={styles.imagePlaceholder}>
              <img src={ceoImage} alt="Aarti Suryawanshi" loading="lazy" />
              <h2>Pooja Thorat </h2>
              <p className={styles.role}>Managing Director</p>
            </div>
          </motion.div>

          <motion.div className={styles.cardContent} variants={fadeUp}>
            <p>
              Our vision is to create a common platform where students,
              educators, and institutions can collaborate globally.
            </p>
            <p>Janikk International is here to support you on your journey.</p>
          </motion.div>
        </div> */}
      </motion.section>

      <section className={styles.memberSection}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.imageWrapper}>
              <img src={poojaImage} alt="CEO" />
            </div>

            <div className={styles.nameBlock}>
              <h3>Pooja Thorat </h3>
              <span>Managing Director</span>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <p>
              Welcome to Janikk International Global Education Services, your
              gateway to global education. In today's interconnected world, we
              believe that education should transcend boundaries, encouraging
              cultural exchange and personal growth. At Janikk International, we
              are dedicated to empowering the next generation by providing
              seamless access to international education opportunities. We
              facilitate international admissions in India and forge strategic
              partnerships with educational institutions worldwide. Our goal is
              to create a platform where students can explore diverse
              perspectives, acquire world-class knowledge, and prepare for the
              challenges of tomorrow.
            </p>

            <p>
              We understand the complexities of navigating international
              education. Our team of experts is committed to guiding you through
              every step of the process, from choosing the right institution to
              ensuring a smooth transition into a new academic and cultural
              environment. Let's work together to build a future where global
              education is accessible to all. Join us on this journey of
              discovery and growth.
            </p>
          </div>
        </motion.div>
      </section>
      <section className={styles.memberSection}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.imageWrapper}>
              <img src={aaratiImage} alt="CEO" />
            </div>

            <div className={styles.nameBlock}>
              <h3>Aarti Suryawanshi, PhD</h3>
              <span>Director</span>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <p>
              Our vision is to create a common platform where students,
              educators, and institutions can come together to share ideas,
              collaborate on projects, and build a future that is inclusive,
              dynamic, and forward-thinking. We understand the complexities of
              navigating international education systems, and we are here to
              guide you every step of the way—from choosing the right course and
              institution to ensuring a smooth transition into a new academic
              and cultural environment.
            </p>

            <p>
              As we move forward, we are excited about the opportunities that
              lie ahead. Whether you are a student seeking to broaden your
              horizons, an institution looking to expand your global footprint,
              or a partner committed to advancing education, Janikk
              International is here to support you on your journey.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutFounderSection;
