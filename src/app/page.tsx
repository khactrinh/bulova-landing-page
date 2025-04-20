"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 md:text-5xl">Bulova 97C105</h1>
            <h2 className="text-2xl mb-6 md:text-3xl">Phong Cách Đàn Ông Lịch Lãm</h2>
            <p className="text-xl mb-6">Chỉ <span className="font-bold text-gold">4.900.000 VNĐ</span> - Tuyệt phẩm chính hãng!</p>
            <a href="#contact" className="bg-gold text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition">Đặt Hàng Ngay</a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src={images[0]} alt="Bulova 97C105" width={500} height={500} className="mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vì Sao Chọn Bulova 97C105?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 text-center">
              <div className="mb-4 text-4xl">🕰️</div>
              <h3 className="text-xl font-semibold mb-2">Thiết Kế Vuông Vắn</h3>
              <p>Phù hợp mọi phong cách, từ lịch lãm đến năng động.</p>
            </div>
            <div className="p-4 text-center">
              <div className="mb-4 text-4xl">✨</div>
              <h3 className="text-xl font-semibold mb-2">Tone Vàng Sang Trọng</h3>
              <p>Vỏ và dây thép không gỉ mạ vàng, bền bỉ mãi mãi.</p>
            </div>
            <div className="p-4 text-center">
              <div className="mb-4 text-4xl">📏</div>
              <h3 className="text-xl font-semibold mb-2">Kích Thước 40mm</h3>
              <p>Vừa vặn, nổi bật trên cổ tay, tạo điểm nhấn.</p>
            </div>
            <div className="p-4 text-center">
              <div className="mb-4 text-4xl">💧</div>
              <h3 className="text-xl font-semibold mb-2">Chống Nước 50m</h3>
              <p>Đi mưa, rửa tay thoải mái, tự tin mọi lúc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Khám Phá Bulova 97C105</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={images[currentImage]}
                alt={`Bulova 97C105 - Image ${currentImage + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-4/3"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
              aria-label="Previous image"
            >
              ❮
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
              aria-label="Next image"
            >
              ❯
            </button>
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${index === currentImage ? 'bg-gold' : 'bg-gray-400'}`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-navy py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sở Hữu Bulova 97C105 Ngay!</h2>
          <p className="text-xl mb-6">Sang trọng - Đẳng cấp - Chính hãng 100%</p>
          <p className="mb-4">📞 Gọi ngay: <a href="tel:0969313137" className="underline">0969 313 137</a></p>
          <p className="mb-6">🚚 Ship COD toàn quốc - Kiểm tra hàng trước khi trả tiền</p>
          <a href="tel:0969313137" className="bg-gold text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
            Liên Hệ Đặt Hàng
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <p>© 2025 Tin Nguyên Shop. All rights reserved.</p>

        </div>
      </footer>
    </div>
  );
}