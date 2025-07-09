import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

type Props = {
    images: string[];
}

function Carousel({images}: Props) {
    return (
        <Swiper spaceBetween={30}
                slidesPerView={2}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}>
            {images.map((url, index) => (
                <SwiperSlide key={index}>
                    <img src={url} alt={url}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;