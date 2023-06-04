import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper transform rotate-3"
        >
            <SwiperSlide className="transform rotate-6 py-6">
                <div className="text-center text-white">
                    <h1 className="text-3xl mb-3 font-violet">GIFs</h1>
                    <img
                        src="https://media3.giphy.com/media/l41YqNeoHIVsBHEnm/giphy.gif?cid=ecf05e47umep8752obotpdhlusofrdo8mw63m3481d99rkmn&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="gif"
                        className="m-auto w-1/2 customShadow"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="transform rotate-6 py-6">
                <div className="text-center text-white">
                    <h1 className="text-3xl mb-3 font-violet">Clips</h1>
                    <img
                        src="https://media2.giphy.com/media/A30vnr2VaoPwwUFHXN/giphy.gif?cid=ecf05e47jmp6lza715z7m4ix0ax83njukak663ynjr2gi31a&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="clips"
                        className="m-auto w-1/2 customShadow"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className="transform rotate-6 py-6">
                <div className="text-center text-white">
                    <h1 className="text-2xl mb-3 font-violet">Stickers</h1>
                    <img
                        src="https://media0.giphy.com/media/8s1LmSHSlWGafq2yHT/giphy_s.gif?cid=ecf05e47hy4mu4u0oieq6allk0j7vbm8a6daxha5dtzoe5sm&ep=v1_stickers_search&rid=giphy_s.gif&ct=s"
                        alt="Stickers"
                        className="m-auto w-1/2 customShadow bg-orange"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
