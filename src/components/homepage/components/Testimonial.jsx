"use client";
import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div className="mycontainer w-full py-16">
      {/* TITLE */}
      <h1 className="text-center text-[40px] font-extrabold text-red-600 mb-10">
        WHAT OUR CLIENTS SAYS
      </h1>

      <div className="max-w-7xl mx-auto mb-8">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* ===== CARD 1 ===== */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/allpurposelogo-e1598015912708.png"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-[16px]">DARK MIND</h3>
                  <p className="text-sm text-gray-500">3 years ago</p>
                </div>
                <img src="/google.png" className="w-5 ml-auto" />
              </div>

              <div className="flex text-yellow-500 text-xl">★★★★★</div>

              <p className="text-[15px] leading-relaxed">
                I have worked with this marketing agency. My experience is so
                good 👍
              </p>
            </div>
          </SwiperSlide>

          {/* ===== CARD 2 ===== */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/user2.jpg"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-[16px]">Shary Malik</h3>
                  <p className="text-sm text-gray-500">3 years ago</p>
                </div>
                <img src="/google.png" className="w-5 ml-auto" />
              </div>

              <div className="flex text-yellow-500 text-xl">★★★★★</div>

              <p className="text-[15px] leading-relaxed">
                That’s really good SEO company in Lahore.
              </p>
            </div>
          </SwiperSlide>

          {/* ===== CARD 3 ===== */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/user3.jpg"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div>
                  <h3 className="font-bold text-[16px]">Junaid Rasool</h3>
                  <p className="text-sm text-gray-500">3 years ago</p>
                </div>
                <img src="/google.png" className="w-5 ml-auto" />
              </div>

              <div className="flex text-yellow-500 text-xl">★★★★★</div>

              <p className="text-[15px] leading-relaxed">
                I have worked with this marketing agency. My experience is
                wonderful.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* VERIFIED BADGE */}
        <div className="flex justify-end mt-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            Verified by Trustindex ✔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
