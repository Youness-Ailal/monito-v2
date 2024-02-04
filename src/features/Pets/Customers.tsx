import { Swiper, SwiperSlide } from "swiper/react";
import "./customers.scss";
import "swiper/css";
import { IMAGE_URL } from "@/utils/constants";

function Customers() {
  return (
    <Swiper className="customers" slidesPerView={"auto"} spaceBetween={10}>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <SwiperSlide className="customers__slide" key={i}>
            <img
              className="customers__image"
              src={IMAGE_URL(`customer-${i + 1}`, 500)}
              alt="customer"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Customers;
