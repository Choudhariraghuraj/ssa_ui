import { useState } from "react";
import { galleryImages } from "../data/gallery";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-10 bg-[#1e1e2f] text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#cd8500]">Temple Gallery</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {galleryImages.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: img.id * 0.1 }}
            className="cursor-pointer rounded-xl overflow-hidden hover:scale-105 transition-transform"
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            src={selectedImg}
            alt="Full View"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
