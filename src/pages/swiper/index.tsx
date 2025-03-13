import { useState } from "react";
import Header from "components/mainHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//resources
import Image1 from "../../assets/swiper_img/clothes_1.png";
import Image2 from "../../assets/swiper_img/clothes_2.png";
import Image3 from "../../assets/swiper_img/clothes_3.png";

//css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperPage() {
  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="swiper_container">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} />
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </>
  );
}
