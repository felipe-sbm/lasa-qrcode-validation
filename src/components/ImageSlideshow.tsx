"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/photos/pexels-fabianwiktor-994605.jpg",
  "/photos/pexels-pixabay-37730.jpg",
  "/photos/pexels-pixabay-62307.jpg",
  "/photos/pexels-pixabay-64219.jpg",
  "/photos/pexels-pixelcop-1556796.jpg",
  "/photos/pexels-tomfisk-1125979.jpg",
  "/photos/pexels-w-w-299285-889929.jpg",
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Oceano - Imagem ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 bg-white" 
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
