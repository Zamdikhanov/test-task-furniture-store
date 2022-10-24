import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper";
import ProductSlide from "../ProductSlide/ProductSlide";
import "swiper/css";
import "swiper/css/pagination";
import css from "./Slider.module.scss";

import imageSlide1 from "../../assets/images/sofa-01.png";
import imageSlide2 from "../../assets/images/sofa-02.png";
import imageSlide3 from "../../assets/images/sofa-03.png";
import imageSlide4 from "../../assets/images/sofa-04.png";

const slidesData = [
  { imgUrl: imageSlide1 },
  { imgUrl: imageSlide2 },
  { imgUrl: imageSlide3 },
  { imgUrl: imageSlide4 },
];

function Slider() {
  const [index, setIndex] = useState(0);
  // const swiper = useSwiper();

  return (
    <Swiper
      className={css.swiper}
      modules={[Pagination, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "bullets",
      }}
      onSlideChange={(swiper) => {
        setIndex(swiper.realIndex + 1);
      }}
    >
      <SwiperSlide>
        <ProductSlide imgUrl={slidesData[0].imgUrl} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSlide imgUrl={slidesData[1].imgUrl} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSlide imgUrl={slidesData[2].imgUrl} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSlide imgUrl={slidesData[3].imgUrl} />
      </SwiperSlide>
      <div className={css.swiper__counter}>
        <span className={css.swiper__counterCurrent}>{index}</span>
        /4
      </div>
    </Swiper>
  );
}

export default Slider;
