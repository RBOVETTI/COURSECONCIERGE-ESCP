'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface LectureImageSectionProps {
  imageSrc: string;
  imageAlt: string;
}

export default function LectureImageSection({ imageSrc, imageAlt }: LectureImageSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white border-b border-gray-200">
        <div className="container-width py-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="bg-white/90 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Click to enlarge
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
    </>
  );
}
