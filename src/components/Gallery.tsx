"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";

const images = [image1, image2, image3, image4];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); 
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="md:w-[60%] w-full px-5 flex flex-col gap-4">
      <div className="hidden md:grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${index === 3 ? "col-span-1 md:col-start-1" : ""}`}
          >
            <Image
              src={img}
              alt={`image${index + 1}`}
              width={220}
              height={150}
              className="w-full h-[150px] cursor-pointer object-cover hover:opacity-70 transition-opacity duration-300"
              style={{
                objectPosition: "center",
                objectFit: "cover",
              }}
              onClick={() => setSelectedImage(index)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-center items-center relative">
        <button
          className="absolute left-0 text-white p-3 rounded-full"
          onClick={handlePrev}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Selected image ${currentIndex + 1}`}
            width={220}
            height={100}
            className="object-cover w-[400px] h-[400px]"
            style={{
              objectPosition: "center",
              objectFit: "cover", 
            }}
          />
        </div>

        <button
          className="absolute right-0 text-white p-3 rounded-full"
          onClick={handleNext}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-5 text-white bg-gray-800 p-3 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedImage]}
                alt={`Selected image ${selectedImage + 1}`}
                width={800}
                height={500}
                style={{
                  objectPosition: "center",
                  objectFit: "contain", 
                }}
              />
            </motion.div>

            <button
              className="absolute right-5 text-white bg-gray-800 p-3 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;