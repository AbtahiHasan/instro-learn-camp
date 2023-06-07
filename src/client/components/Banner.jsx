import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
            <div className="before:content-[''] w-full h-screen relative before:absolute before:bg-[#000000bb] before:top-0 before:right-0 before:left-0 before:bottom-0 ">
                <img className="h-screen w-full" src="/banner1.jpg" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
                    <h2 className="text-5xl text-white my-4">LEARN HOW TO PLAY GUITAR</h2>
                    <p className="my-2 text-white">Songs. Techniques. Rhythm. Theory. Chords. Practice Tools. From Beginner to Advanced!</p>
                    <Link to="/classes"><button className="bg-main px-6 py-3 mt-5 block mx-auto  rounded-full text-white ">CHOOSE YOUR COURSE!</button></Link>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
        <div className="before:content-[''] w-full h-screen relative before:absolute before:bg-[#000000bb] before:top-0 before:right-0 before:left-0 before:bottom-0 ">
                <img className="h-screen w-full" src="/banner2.jpg" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
                    <h2 className="text-5xl text-white my-4">LEARN HOW TO PLAY GUITAR</h2>
                    <p className="my-2 text-white">Songs. Techniques. Rhythm. Theory. Chords. Practice Tools. From Beginner to Advanced!</p>
                    <Link to="/classes"><button className="bg-main px-6 py-3 mt-5 block mx-auto  rounded-full text-white ">CHOOSE YOUR COURSE!</button></Link>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="before:content-[''] w-full h-screen relative before:absolute before:bg-[#000000bb] before:top-0 before:right-0 before:left-0 before:bottom-0 ">
                <img className="h-screen w-full" src="/banner3.jpg" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
                    <h2 className="text-5xl text-white my-4">LEARN HOW TO PLAY GUITAR</h2>
                    <p className="my-2 text-white">Songs. Techniques. Rhythm. Theory. Chords. Practice Tools. From Beginner to Advanced!</p>
                    <Link to="/classes"><button className="bg-main px-6 py-3 mt-5 block mx-auto  rounded-full text-white ">CHOOSE YOUR COURSE!</button></Link>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    );
};

export default Banner;