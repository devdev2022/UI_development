import { useState } from "react";
import Header from "components/mainHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//resources
import Image1 from "../../assets/countImg/album_cover.png";

//css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MusicPlayer() {
  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="player_container">
          <div className="player_main_container">
            <img className="player_thumbnail" src={Image1} />
          </div>
        </section>
      </main>
    </>
  );
}
