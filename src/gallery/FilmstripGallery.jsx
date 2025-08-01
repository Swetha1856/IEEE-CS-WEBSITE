import React from "react";

const images = [
  "/images/pic1.png",
  "/images/pic2.png",
  "/images/pic3.png",
  "/images/pic4.png",
  "/images/pic5.png",
];

// Repeat the image pattern many times to ensure infinite feel
const repeatedImages = Array(20).fill(images).flat();

const FilmstripGallery = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Filmstrip Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[60px] bg-black z-10 overflow-hidden rounded-md">
        <div className="flex w-[200%] space-x-12 px-8">
          {Array(30).fill(0).map((_, i) => (
            <div key={i} className="w-7 h-11 bg-[#f5a400] rounded-md"></div>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex overflow-hidden w-full mt-[60px]">
        <div className="flex animate-faster-scroll-right space-x-8">
          {repeatedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[550px] h-[400px] object-cover rounded-xl"
              alt={`Member ${i % 5 + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Filmstrip Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] h-[60px] bg-black z-10 overflow-hidden rounded-md">
        <div className="flex w-[200%] space-x-12 px-8 items-end">
          {Array(30).fill(0).map((_, i) => (
            <div key={i} className="w-7 h-11 bg-[#f5a400] rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmstripGallery;
