import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles/ImmersionProgramme.module.scss";
import img1 from "../assets/images/LandingPageHero.png";
import singapore from "../assets/images/Immersion/Singapore.webp";
import dubai from "../assets/images/Immersion/Dubai.webp";
import europ from "../assets/images/Immersion/Europ.webp";
import germany from "../assets/images/Immersion/Germany.webp";
import uk from "../assets/images/Immersion/uk.webp";
import london from "../assets/images/Immersion/london.webp";
import paris from "../assets/images/Immersion/paris.webp";
import Switzerland from "../assets/images/Immersion/swiz.jpg";
import Czech from "../assets/images/Immersion/Czech.jpg";
import iceland from "../assets/images/Immersion/iceland.jpg";
// import delphi from "../assets/images/Immersion/delphi.png";
// import Bicocca from "../assets/images/Immersion/Ulogo/Bicocca.png";
// import Eit from "../assets/images/Immersion/Ulogo/Eit.png";
// import Epf from "../assets/images/Immersion/Ulogo/Epf.png";
// import Eu from "../assets/images/Immersion/Ulogo/Eu.png";
// import Groningen from "../assets/images/Immersion/Ulogo/Groningen.png";
// import Ie from "../assets/images/Immersion/Ulogo/Ie.png";
// import Moscow from "../assets/images/Immersion/Ulogo/Moscow.png";
// import Pisa from "../assets/images/Immersion/Ulogo/Pisa.png";
// import Polytech from "../assets/images/Immersion/Ulogo/Polytech.png";
// import Rwth from "../assets/images/Immersion/Ulogo/Rwth.png";
// import SCI from "../assets/images/Immersion/Ulogo/SCI.png";
// import SMU from "../assets/images/Immersion/Ulogo/SMU.png";
// import Summer from "../assets/images/Immersion/Ulogo/Summer.png";
// import TU from "../assets/images/Immersion/Ulogo/TU.png";
// import TuD from "../assets/images/Immersion/Ulogo/TuD.png";
// import UTP from "../assets/images/Immersion/Ulogo/UTP.png";
// import Venice from "../assets/images/Immersion/Ulogo/Venice.png";
import carImg1 from "../assets/images/Immersion/img1.jpg";
import carImg2 from "../assets/images/Immersion/img2.jpg";
import carImg3 from "../assets/images/Immersion/img3.jpg";
import carImg4 from "../assets/images/Immersion/img4.jpg";
import carImg5 from "../assets/images/Immersion/img5.jpg";
import { programDomains } from "./programDomains";
const slides = [
  {
    id: 1,
    imageUrl: carImg1,
    title: "Innovative Learning",
    caption: "Driving technological advancement in every curriculum.",
  },
  {
    id: 2,
    imageUrl: carImg5,
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
    imageUrl: carImg4,
    title: "Innovative Learning",
    caption: "Driving technological advancement in every curriculum.",
  },
];

const features = [
  {
    title: "Dedicated Support",
    text: "Highly trained and service oriented staff at your disposal right from the booking & pre tour process. Dedicated on-tour support staff available via phone, web chat and mobile chat for real-time issue resolution.",
    icon: "👩‍💼",
  },
  {
    title: "Best Prices & Services",
    text: "Never pay more than it's worth! We offer the best pricing in the industry complemented with impeccable services. We are partnered with some of the best suppliers across top destinations.",
    icon: "💰",
  },
  {
    title: "Tailor-Made Interactions",
    text: "We offer destinations and industrial visit itineraries customized as per the students course / branch. We avoid generic tours as we understand the importance of an industrial visit.",
    icon: "🧩",
  },
  {
    title: "One - Stop Shop",
    text: "Book your Flights, Visa, Accommodation, Transfers, Meals, Industrial visits, Campus visits, Sightseeing tours and Attraction tickets – all from a single source.",
    icon: "🏪",
  },
  {
    title: "Global Presence",
    text: "We are a Pune based company with our corporate office in Pune, India and strategically located office in United Kingdom.",
    icon: "🌍",
  },
];
const domains = [
  {
    title: "Management & Commerce",
    cards: [
      {
        location: "Singapore",
        image: singapore,
        points: [
          "NeWater Recycling & Water Purification Plant",
          "Yakult Factory Tour",
          "Gardenia Bread Factory Tour",
          "Coffee Factory Production Tour",
          "Brewery Tour",
        ],
      },
      {
        location: "Dubai",
        image: dubai,
        points: [
          "Nakheel Properties",
          "Unique Group Headquarters",
          "Al Masaood Bergum Steel Manufacturing",
          "Emaar Warehouse Operations",
          "Tourism Operations & Fleet Management",
        ],
      },
    ],
  },
  {
    title: "Mass Media",
    cards: [
      {
        location: "Germany",
        image: germany,
        points: [
          "Babelsberg Film Studios",
          "ARD TV Studio Tour",
          "Berlin Film Museum",
          "Museum for Communication",
          "German Museum of Technology",
        ],
      },
      {
        location: "Czech Republic",
        image: Czech,
        points: [
          "Barrandov Film Studio",
          "Czech Radio",
          "Radio Free Europe – Behind-the-Scenes",
          "Black Light Theatre Show",
        ],
      },
      {
        location: "London",
        image: london,
        points: [
          "Animation Workshop at Chocolate Films",
          "Full Day Workshop at London Film Academy / Sky Academy Studios",
          "London Film Museum",
          "Museum of Brands, Packaging & Advertising",
          "BFI IMAX Theatre",
        ],
      },
    ],
  },
  {
    title: "Mechanical & Electrical Engineering",
    cards: [
      {
        location: "Central Europe",
        image: europ,
        points: [
          "Wien Energy Plant | Austria",
          "Voestalpine Steelworks Factory | Austria",
          "Rukl Glassworks Factory | Czech Republic",
          "Tatra Trucks Plant | Czech Republic",
          "Skoda Auto Factory | Czech Republic",
        ],
      },
      {
        location: "Northwest Europe",
        image: europ,
        points: [
          "Hydrema Hi-Tec Manufacturing | Denmark",
          "KUKA Robotics Factory | Germany",
          "Thyssenkrupp Steel Plant | Germany",
          "Lutosa Frozen Foods | Belgium",
          "Airbus Tour | France",
          "EOL Wind Power Center | France",
        ],
      },
    ],
  },
  {
    title: "Automotive Engineering",
    cards: [
      {
        location: "Germany",
        image: germany,
        points: [
          "Volkswagen Factory & Plant",
          "AMG Mercedes Museum & Factory",
          "BMW Factory",
          "Porsche Leipzig Tour",
          "Airbus Manufacturing",
          "Future Mobility Transparent Manufactory",
        ],
      },
      {
        location: "United Kingdom",
        image: uk,
        points: [
          "Triumph Motorcycles Factory",
          "Morgan Motor Company Factory",
          "Aston Martin Behind-The-Scenes",
          "Bentley Motors Factory",
          "Land Rover Manufacturing",
        ],
      },
    ],
  },
  {
    title: "Computer Science",
    cards: [
      {
        location: "London",
        image: london,
        points: [
          "National Museum of Computing",
          "Meet an App Developer",
          "Silicon Roundabout Tech Guided Tour",
          "Tour & Workshop – Microsoft Flagship Store",
          "Workshop on Social Media Platforms",
        ],
      },
      {
        location: "Germany",
        image: germany,
        points: [
          "Computer Spiele Museum",
          "BMW Motorcycle Plant",
          "German Museum of Technology",
          "The Game Science Center",
          "Berlin TV Tower",
        ],
      },
    ],
  },
  {
    title: "Science",
    cards: [
      {
        location: "Switzerland",
        image: Switzerland,
        points: [
          "World Meteorological Organization",
          "CERN – European Organization for Nuclear Research",
          "VSIG Energy Pavilion",
          "History of Science Museum",
          "Swiss Plasma Center",
          "Geneva Observatory",
        ],
      },
      {
        location: "Iceland",
        image: iceland,
        points: [
          "Ljósifoss Power Station Interactive Exhibition",
          "Hellisheiði Power Plant",
          "Geothermal Green Houses",
          "The Northern Lights",
          "Hveragerði Geothermal Park",
          "Perlan – Wonders of Iceland",
        ],
      },
    ],
  },
  {
    title: "Design & Technology",
    cards: [
      {
        location: "Germany",
        image: germany,
        points: [
          "Olympic Stadium Tour",
          "Allianz Arena Tour",
          "Bauhaus-Archiv Museum of Design",
          "BMW AG Factory Tour and Museum",
          "Deutsche Museum",
          "KPM Welt",
          "German Museum of Technology",
        ],
      },
      {
        location: "United Kingdom",
        image: uk,
        points: [
          "Nissan Innovation Station",
          "Design Museum",
          "Victoria and Albert Museum Workshops",
          "The Crystal – Urban Sustainability",
          "Wembley Stadium Tour",
        ],
      },
    ],
  },
  {
    title: "Fine Arts",
    cards: [
      {
        location: "London",
        image: london,
        points: [
          "National Theatre Backstage Tour",
          "Shakespeare’s Globe Theatre",
          "Leighton House Museum",
          "Tate Modern",
          "Royal Shakespeare Company Backstage Tour",
          "Shoreditch Street Art Tour",
        ],
      },
      {
        location: "Paris",
        image: paris,
        points: [
          "Palais Garnier Opera House Backstage Tour",
          "Street Art Tour Paris",
          "Centre Pompidou",
          "Le Marais District Art Tour",
          "French Furniture & Objet d’Art Tour",
          "Saint-Germain Art & Design",
          "Cinema Rex – Behind-the-Scenes",
        ],
      },
    ],
  },
  {
    title: "Fashion & Design",
    cards: [
      {
        location: "London",
        image: london,
        points: [
          "Design Museum",
          "Museum of London",
          "Fashion and Textile Museum",
        ],
      },
      {
        location: "Paris",
        image: paris,
        points: [
          "Fashion Guided Walking Tour",
          "Première Vision Textiles Exhibition",
          "Yves Saint Laurent Museum",
          "Galeries Lafayette Fashion Show",
          "Fashion & Textiles Museum",
        ],
      },
    ],
  },

  // {
  //   title: "Management & Commerce",
  //   cards: [
  //     {
  //       location: "SINGAPORE",
  //       image: singapore,
  //       points: [
  //         "NE Water Recycling & Water Purification Plant",
  //         "Yakult Factory Tour",
  //         "Gardenia Bread Factory Tour",
  //         "Coffee Factory Production Tour",
  //         "Brewery Tour",
  //       ],
  //     },
  //     {
  //       location: "Dubai",
  //       image: dubai,
  //       points: [
  //         "Nakheel Properties",
  //         "Unique Group Headquarters",
  //         "Al Masaood Bergum Steel Manufacturing",
  //         "Emaar Warehouse Operations",
  //         "Tourism Operations & Fleet Management",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Mechanical & Electrical Engineering",
  //   cards: [
  //     {
  //       location: "Central Europe",
  //       image: europ,
  //       points: [
  //         "Wien Energy Plant | Austria",
  //         "Voestalpine Steelworks Factory | Austria",
  //         "Rukl Glassworks Factory | Czech Republic",
  //         "Tatra Trucks Plant | Czech Republic",
  //         "Skoda Auto Factory | Czech Republic",
  //       ],
  //     },
  //     {
  //       location: "Singapore",
  //       image: singapore,
  //       points: [
  //         "Wien Energy Plant | Austria",
  //         "Voestalpine Steelworks Factory | Austria",
  //         "Rukl Glassworks Factory | Czech Republic",
  //         "Tatra Trucks Plant | Czech Republic",
  //         "Skoda Auto Factory | Czech Republic",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Automotive Engineering",
  //   cards: [
  //     {
  //       location: "Germany",
  //       image: germany,
  //       points: [
  //         "Volkswagen Factory & Plant",
  //         "AMG Mercedes Museum & Factory",
  //         "BMW Factory",
  //         "Porsche Leipzig Tour",
  //         "Airbus Manufacturing",
  //         "Future Mobility Transparent Manufactory",
  //       ],
  //     },
  //     {
  //       location: "United Kingdom",
  //       image: uk,
  //       points: [
  //         "Triumph Motorcycles Factory",
  //         "Morgan Motor Company Factory",
  //         "Aston Martin Behind-The-Scenes",
  //         "Bentley Motors Factory",
  //         "Land Rover Manufacturing",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Computer Science",
  //   cards: [
  //     {
  //       location: "London",
  //       image: london,
  //       points: [
  //         "National Museum of Computing",
  //         "Meet An App Developer",
  //         "Silicon Roundabout Tech Guided Tour",
  //         "Tour & Workshop - Microsoft Flagship Store",
  //         "Workshop on Social Media Platforms",
  //       ],
  //     },
  //     {
  //       location: "Singapore",
  //       image: singapore,
  //       points: [
  //         "Computer Spiele Museum",
  //         "BMW Motorcycle Plant",
  //         "German Museum of Technology",
  //         "The Game Science Center",
  //         "Berlin TV Tower",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Science",
  //   cards: [
  //     {
  //       location: "Switzerland",
  //       image: Switzerland,
  //       points: [
  //         "World Meteorological Organization",
  //         "CERN - European Organization for Nuclear Research",
  //         "VSIG Energy Pavilion",
  //         "History of Science Museum",
  //         "Swiss Plasma Center",
  //         "Geneva Observatory",
  //       ],
  //     },
  //     {
  //       location: "Iceland",
  //       image: iceland,
  //       points: [
  //         "Ljósifoss Power Station Interactive Exhibition",
  //         "Hellisheiði Power Plant",
  //         "Geothermal Green Houses",
  //         "The Northern Lights",
  //         "Hveragerði Geothermal Park",
  //         "Perlan - Wonders Of Iceland",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Design & Technology",
  //   cards: [
  //     {
  //       location: "Germany",
  //       image: germany,
  //       points: [
  //         "Olympic Stadium Tour",
  //         "Allianz Arena Tour",
  //         "Bauhaus-Archiv Museum of Design",
  //         "BMW AG Factory Tour and Museum",
  //         "Deutsche Museum",
  //         "KPM Welt",
  //         "German Museum of Technology",
  //       ],
  //     },
  //     {
  //       location: "United Kingdom",
  //       image: uk,
  //       points: [
  //         "Nissan Innovation Station",
  //         "Design Museum",
  //         "Victoria and Albert Museum Workshops",
  //         "The Crystal - Urban Sustainability",
  //         "Wembley Stadium Tour",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Fine Arts",
  //   cards: [
  //     {
  //       location: "London",
  //       image: london,
  //       points: [
  //         "National Theatre Backstage Tour",
  //         "Shakespeare’s Globe Theatre",
  //         "Leighton House Museum",
  //         "Tate Modern",
  //         "Royal Shakespeare Company Backstage Tour",
  //         "Shoreditch Street Art Tour",
  //       ],
  //     },
  //     {
  //       location: "Paris",
  //       image: paris,
  //       points: [
  //         "Palais Garnier Opera House Backstage Tour",
  //         "Street Art Tour Paris",
  //         "Centre Pompidou",
  //         "Le Marais District Art Tour",
  //         "French Furniture & Objet d’Art Tour",
  //         "Saint-Germain Art & Design",
  //         "Cinema Rex - Behind-the-Scenes",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Fashion & Design",
  //   cards: [
  //     {
  //       location: "London",
  //       image: london,
  //       points: [
  //         "Design Museum",
  //         "Museum of London",
  //         "Fashion & Textile Museum",
  //       ],
  //     },
  //     {
  //       location: "Paris",
  //       image: paris,
  //       points: [
  //         "Fashion Guided Walking Tour",
  //         "Première Vision Textiles Exhibition",
  //         "Yves Saint Laurent Museum",
  //         "Galeries Lafayette Fashion Show",
  //         "Fashion & Textile Museum",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   title: "Mass Media",
  //   cards: [
  //     {
  //       location: "Germany",
  //       image: germany,
  //       points: [
  //         "Design Museum",
  //         "Museum of London",
  //         "Fashion & Textile Museum",
  //       ],
  //     },
  //     {
  //       location: "Paris",
  //       image: paris,
  //       points: [
  //         "Fashion Guided Walking Tour",
  //         "Première Vision Textiles Exhibition",
  //         "Yves Saint Laurent Museum",
  //         "Galeries Lafayette Fashion Show",
  //         "Fashion & Textile Museum",
  //       ],
  //     },
  //   ],
  // },
];
// export const programDomains = [
//   {
//     domain: "Business Management",
//     programs: [
//       {
//         title: "Advanced Digital Marketing",
//         duration: "1 Week",
//         institute: "DELPHI",
//         location: "Dubai, UAE",
//         image: delphi,
//       },
//       {
//         title: "Strategic Entrepreneurship",
//         duration: "1 Week",
//         institute: "Utrecht Summer School",
//         image: Summer,
//         location: "Utrecht, Netherlands",
//       },
//       {
//         title: "Winter Business School",
//         duration: "2 Weeks",
//         institute: "EU Business School",
//         image: Eu,
//         location: "Munich, Germany",
//       },
//       {
//         title: "Internship Program",
//         duration: "1 Week",
//         institute: "Asian Institute of Technology",
//         // image: delphi,
//         location: "AIT, Thailand",
//       },
//       {
//         title: "Sustainable Business & Economy For Smart Cities",
//         duration: "2 Weeks",
//         institute: "University of Groningen",
//         image: Groningen,
//         location: "Dubai, UAE",
//       },
//       {
//         title: "Marketing Strategy in Business Markets",
//         duration: "3 Days",
//         institute: "IE Business School",
//         image: Ie,
//         location: "Madrid, Spain",
//       },
//       {
//         title: "Driving Sustainability Through Innovation",
//         duration: "1 Week",
//         institute: "Singapore Management University",
//         image: SMU,
//         location: "Singapore",
//       },
//     ],
//   },

//   {
//     domain: "Automotive Engineering",
//     programs: [
//       {
//         title: "Automotive & Mobility Studies",
//         duration: "1 Month",
//         institute: "RWTH Aachen University",
//         image: Rwth,
//         location: "Aachen, Germany",
//       },
//       {
//         title: "Vehicle Safety",
//         duration: "2 Days",
//         institute: "Universiti Teknologi Petronas",
//         image: UTP,
//         location: "Ipoh, Malaysia",
//       },
//       {
//         title:
//           "Automotive Technology Electro Mobility Hybrid Systems & Energy – Fault Diagnosis & Design",
//         duration: "4 Weeks",
//         institute: "Stephen Consulting International",
//         image: SCI,
//         location: "Gundheimerhof, Germany",
//       },
//     ],
//   },

//   {
//     domain: "Electronics & Embedded Technology",
//     programs: [
//       {
//         title: "Control Technology- Automation Technology",
//         duration: "2 Weeks",
//         institute: "STEPHEN CONSULTING INTERNATIONAL",
//         image: SCI,
//         location: "GUNDHEIMERHOF, GERMANY",
//       },
//       {
//         title: "Smart Electrical Power Systems",
//         duration: "2 Weeks",
//         institute: " RWTH AACHEN UNIVERSITY",
//         image: Rwth,
//         location: "AACHEN, GERMANY",
//       },
//       {
//         title: "Summer School in Topological Photonics",
//         duration: "2 Weeks",
//         institute: " ITMO UNIVERSITY",
//         // image: ITMO,
//         location: "SAINT PETERSBURG, RUSSIA",
//       },
//       {
//         title:
//           "Automotive Technology- Electro Mobility Hybrid Systems & Engine fault Diagnosis & Design",
//         duration: "2 Weeks",
//         institute: "Stephen Consulting International",
//         image: SCI,
//         location: "Gundheimerhof, Germany",
//       },
//     ],
//   },

//   {
//     domain: "Mechanical, Robotics & Electrical",
//     programs: [
//       {
//         title: "Artificial Intelligence & Robotics",
//         duration: "4 Weeks",
//         institute: "Technische Universität Berlin",
//         image: TU,
//         location: "Berlin, Germany",
//       },
//       {
//         title: "Production Technology Meets Industry 4.0",
//         duration: "2 Weeks",
//         institute: "RWTH Aachen University",
//         image: Rwth,
//         location: "Aachen, Germany",
//       },
//       {
//         title: "Mechatronics Control Technology Pneumatic Hydalic",
//         duration: "2 Weeks",
//         institute: "Stephen Consulting International",
//         image: SCI,
//         location: "Gundheimerhof, Germany",
//       },
//       {
//         title: "Space Robotics",
//         duration: "4 Weeks",
//         institute: "Technische Universität Berlin",
//         image: TU,
//         location: "Berlin, Germany",
//       },
//     ],
//   },

//   {
//     domain: "Aerospace Engineering",
//     programs: [
//       {
//         title: "Cansat Hands On Satellite Design",
//         duration: "4 Weeks",
//         institute: "Technische Universität Berlin",
//         image: TU,
//         location: "Berlin, Germany",
//       },
//       {
//         title: "Space Technologies",
//         duration: "2 Weeks",
//         institute: "Saint Petersburg Polytechnic University",
//         image: Polytech,
//         location: "Saint Petersburg, Russia",
//       },
//       {
//         title: "Aircraft Technology Practical Training in Aircraft Maintenance",
//         duration: "2 Weeks",
//         institute: "Stephen Consulting International",
//         image: SCI,
//         location: "Gundheimerhof, Germany",
//       },
//     ],
//   },

//   {
//     domain: "Biomedical & Environmental Engineering",
//     programs: [
//       {
//         title: "Innovation In Medicine",
//         duration: "1 Week",
//         institute: "University of Groningenroningen",
//         image: Groningen,
//         location: "Groningen, Netherlands",
//       },
//       {
//         title: "Advanced Course Bioprocess Design",
//         duration: "1 Week",
//         institute: "TU Delft",
//         image: TuD,
//         location: "Delft, Netherlands",
//       },
//       {
//         title: "Life Cycle Assessment",
//         duration: "1 Week",
//         institute: "RWTH Aachen University",
//         image: Rwth,
//         location: "Aachen, Germany",
//       },
//     ],
//   },

//   {
//     domain: "Medical Sciences",
//     programs: [
//       {
//         title: "Mutagenesis & Carcinogenesis",
//         duration: "1 Week",
//         institute: "University of Groningenroningen",
//         image: Groningen,
//         location: "Groningen, Netherlands",
//       },
//       {
//         title: "Translational Pediatrics",
//         duration: "1 Week",
//         institute: "University of Groningenroningen",
//         image: Groningen,
//         location: "Groningen, Netherlands",
//       },
//       {
//         title: "Summer School On Global Health",
//         duration: "1 Week",
//         institute: "University of Groningenroningen",
//         image: Groningen,
//         location: "Groningen, Netherlands",
//       },
//       {
//         title: "Translational Neurosciences",
//         duration: "1 Week",
//         institute: "University of Groningenroningen",
//         image: Groningen,
//         location: "Groningen, Netherlands",
//       },
//     ],
//   },
// ];

export default function ImmersionProgramme() {
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
    <div className={styles.immersion}>
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
      <section className={styles.Aboutsection}>
        <div className={styles.container}>
          {/* Left */}
          <h2 className={styles.title}>
            About Immersion
            <br />
            Programme
          </h2>

          {/* Right */}
          <div className={styles.content}>
            <p>
              Leisure Tourism manages the best of destinations – partnered with
              a wide range of industries and educational institutions – thus
              offering tailor-made itineraries and industrial tours that deliver
              precise content to students of specific specialization.
            </p>

            <p>
              Our destinations, industries, and universities are all hand-picked
              to ensure that the students have ample insight, learning
              opportunities, and experience immense value from their overall
              tour.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.featuresSection}>
        <h2>
          Experiential Learning ! that’s what we Believe in, and that’s what we
          Facilitate.
        </h2>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.PlacesSection}>
        <h2 style={{ marginBottom: "2rem" }}>
          Recommended destinations based on the area of study
        </h2>
        {domains.map((domain, idx) => (
          <div key={idx} className={styles.domain}>
            <h2 className={styles.domainTitle}>{domain.title}</h2>

            <div className={styles.cards}>
              {domain.cards.map((card, i) => (
                <div key={i} className={styles.card}>
                  <img src={card.image} alt={card.location} />

                  <div className={styles.cardBody}>
                    <h3>{card.location}</h3>
                    <ul>
                      {card.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className={styles.domainsSection}>
        <h2 style={{ marginBottom: "2rem" }}>
          International On- Campus Summer Courses
        </h2>
        {programDomains.map((domain, i) => (
          <div key={i} className={styles.domain}>
            <h2>{domain.domain}</h2>
            <div className={styles.list}>
              {domain.programs.map((p, index) => (
                <div key={index} className={styles.card}>
                  <div>
                    <h3>{p.title}</h3>
                    <div className={styles.meta}>
                      <span>⏱ {p.duration}</span>
                      <span>🏫 {p.institute}</span>
                      <span>📍 {p.location}</span>
                    </div>
                  </div>
                  {p.image && (
                    <div className={styles.cardImage}>
                      {" "}
                      <img src={p.image} alt={p.institute} />{" "}
                    </div>
                  )}
                </div>
              ))}
            </div>{" "}
          </div>
        ))}
      </section>
    </div>
  );
}
