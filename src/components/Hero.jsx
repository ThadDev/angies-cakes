import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

// Preload first image for instant load
const preloadImages = [
  "/optimized/mobile/7.webp",
  "/optimized/mobile/download (1).webp",
  "/optimized/mobile/10.webp",
];

// Preload images
preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

const slides = [
  {
    img: "/assets/7.jpg",
    title: "Delicious chops",
    subtitle: "Every bite is a bliss",
  },
  {
    img: "/assets/download (1).jpeg",
    title: "Fresh Pastries",
    subtitle: "Baked Daily with Love",
  },
  {
    img: "/assets/10.jpg",
    title: "Delicious Cakes",
    subtitle: "Perfect for Any Event",
  },
];

export default function HeroCarousel() {
  // Typing animation state
  const words = ["Cakes", "Pastries", "Chops", "Delights"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const typeSpeed = deleting ? 150 : 150;
//     const timeout = setTimeout(() => {
//       const currentWord = words[wordIndex];
//       if (!deleting) {
//         setText(currentWord.slice(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//         if (charIndex + 1 === currentWord.length) setDeleting(true);
//       } else {
//         setText(currentWord.slice(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//         if (charIndex === 0) {
//           setDeleting(false);
//           setWordIndex((wordIndex + 1) % words.length);
//         }
//       }
//     }, typeSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, deleting, wordIndex]);

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        preloadimages="true" // preload slides
        lazy={false} // disable lazy to force instant load
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[90vh] overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                loading="eager" // ensure image loads immediately
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center md:items-start px-6 md:px-20 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mt-3 drop-shadow-md">
                  {slide.subtitle}
                </p>

                {/* Typing animation */}
                <p className="mt-4 text-white/90 text-lg sm:text-xl font-semibold">
                  Explore our <span className="text-[var(--primary)]">{slide.title}</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                  <Link to={"/products"}>
                    <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition transform">
                      Order Now
                    </button>
                  </Link>
                  <Link to={"/menu"}>
                    <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                      View Menu
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

