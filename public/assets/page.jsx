"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: "/assets/nounou.jpg",
    title: "Trouvez par",
    subtitle: "Vos publications vos futures employes",
    description: "Notre ADN = Engagement + Sérénité au quotidien + Excellence",
  },
  {
    image: " /assets/securite.jpeg",
    title: "Confiance & Sécurité",
    subtitle: "Nous sélectionnons selon votre demande",
    description: "Des vigils garantissant une securite et un suivi irréprochables de vos residences.",
  },
  {
    image: "/assets/menage.jpg",
    title: "Un service de menagere inpecable",
    subtitle: "Trouvez des menagere a votre convenance  ",
    description: "Une  solution sur mesure pour répondre à vos besoins.",
  },

  {
    image: "assets/enfant.jpg",
    title: "Un service adapté",
    subtitle: "Pour les familles exigeantes",
    description: "Des solutions sur mesure pour répondre à vos besoins.",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="w-full h-[300px] md:h-[400px]"
      >
        {slides.map((slide, index) => (
         
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-200 to-transparent opacity-80"></div>

              {/* Texte */}
              <div className="relative z-10 text-white text-center px-4">
                <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
                <h2 className="text-xl md:text-3xl font-bold">{slide.subtitle}</h2>
                <p className="text-sm md:text-lg font-semibold mt-2">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}