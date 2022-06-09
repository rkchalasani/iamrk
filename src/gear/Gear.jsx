import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cam from "../img/cam3.jpg";
import gimbal from "../img/gimbal.png";
import lens from "../img/img10.jpeg";
import acc from "../img/lens5.jpg";

import { Parallax, FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gear.css";
const Gear = () => {
  return (
    <div className="gearmaindiv">
      <div className="gearrow">
        <h1 className="gearh1">MERCH</h1>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={1}
          speed={1900}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1500,

            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="slide3">
            <div className="swiper3a">
              <h5 className="gearh5">CAMERAS</h5>
              <div>
                <img class="gearcard1" src={cam} alt="" />
              </div>
              {/* </div>
          <div className="swiper3b"> */}
              <p className="gearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quae, sit inventore rem labore, saepe
                similique, expedita totam omnis porro temporibus praesentium
                reprehenderit? Iste dolorem cupiditate blanditiis ut? Fuga,
                error velit?
              </p>
              <button className="gearbutton">Purchase</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <div className="swiper3a">
              <h5 className="gearh5">GIMBALS</h5>
              <div>
                <img class="gearcard2" src={gimbal} alt="" />
              </div>
              {/* </div>
          <div className="swiper3b"> */}
              <p className="gearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio.
              </p>
              <button className="gearbutton">Purchase</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <div className="swiper3a">
              <h5 className="gearh5">LENS</h5>
              <div>
                <img class="gearcard3" src={lens} alt="" />
              </div>
              {/* </div>
          <div className="swiper3b"> */}
              <p className="gearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio.
              </p>
              <button className="gearbutton">Purchase</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <div className="swiper3a">
              <h5 className="gearh5">Accessories</h5>
              <div class="gearcard4">
                <img src={acc} alt="" />
              </div>
              {/* </div>
          <div className="swiper3b"> */}
              <p className="gearp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                incidunt odit iure fugiat neque, autem eligendi, quia animi
                ratione fuga cupiditate possimus tenetur corrupti illum dolorem
                sapiente rem alias? Odio.
              </p>
              <button className="gearbutton">Purchase</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Gear;
