
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <img className='w-full h-full rounded-lg' src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full rounded-lg' src="https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full rounded-lg' src="https://www.bproperty.com/blog/wp-content/uploads/2021/07/Feature-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full h-full rounded-lg' src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/23163145/modern-office-interior-design-with-partition-plants.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </>
      );
};

export default Slider;