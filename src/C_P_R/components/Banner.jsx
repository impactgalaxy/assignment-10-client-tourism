import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from "react-simple-typewriter";
// import bannerBg from "/banner.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const sitesName = "Sundarban, Cox’s Bazar,Rangamati, Bandarban, Saint Martin’s Island, Bangkok, Chiang Mai, Ayutthaya, Phuket, Phi Phi Islands, Bali, Borobudur Temple, Komodo National Park, Raja Ampat Islands, Yogyakarta, Kuala Lumpur, Penang Taman, Negara National Park, Ha Long Bay, Ho Chi Minh City, Hoi An Ancient Town, Phong Nha Caves, Mekong Delta, Angkor Wat, Siem Reap, Phnom Penh, Bokor National Park, Kep";
const sites = sitesName.split(",");


export default function Banner() {

    return (
        <div className="bg-bannerBg bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row gap-5 lg:*:w-1/2">
            <div className='p-4 md:p-6 flex items-center justify-center'>
                <h1 className="text-lg text-white ">
                    <span>Hey, If you are a real tour lover, You should visit these sites first</span> {' '}<br></br>
                    <span className="font-black text-green-600 text-xl">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={sites}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span><br></br>
                    then try another
                </h1>
            </div>
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-3'>
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    spaceBetween={0}
                    loop={true}

                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/myMdbSb/giuseppe-mondi-xy-E1p1r-G04-U-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5YV0ZrG/raimond-klavins-KKm1ua7-MSf0-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/FmLx018/meera-pankhania-7c-ENZhgyf7c-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vJC2P1L/azin-javadzadeh-WMpy-RPa-S7-DQ-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/gmsjKh3/kaushal-subedi-z-RWq-7-SWVSU-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5FbLBx6/tobse-fritz-BLTc-Ki-KXbz-U-unsplash.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    spaceBetween={0}
                    loop={true}

                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5FbLBx6/tobse-fritz-BLTc-Ki-KXbz-U-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5YV0ZrG/raimond-klavins-KKm1ua7-MSf0-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/FmLx018/meera-pankhania-7c-ENZhgyf7c-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5YV0ZrG/raimond-klavins-KKm1ua7-MSf0-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/gmsjKh3/kaushal-subedi-z-RWq-7-SWVSU-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/myMdbSb/giuseppe-mondi-xy-E1p1r-G04-U-unsplash.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    spaceBetween={0}
                    loop={true}

                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/myMdbSb/giuseppe-mondi-xy-E1p1r-G04-U-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vJC2P1L/azin-javadzadeh-WMpy-RPa-S7-DQ-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/FmLx018/meera-pankhania-7c-ENZhgyf7c-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vJC2P1L/azin-javadzadeh-WMpy-RPa-S7-DQ-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/gmsjKh3/kaushal-subedi-z-RWq-7-SWVSU-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5FbLBx6/tobse-fritz-BLTc-Ki-KXbz-U-unsplash.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    spaceBetween={0}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/myMdbSb/giuseppe-mondi-xy-E1p1r-G04-U-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5YV0ZrG/raimond-klavins-KKm1ua7-MSf0-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vJC2P1L/azin-javadzadeh-WMpy-RPa-S7-DQ-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/5FbLBx6/tobse-fritz-BLTc-Ki-KXbz-U-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/gmsjKh3/kaushal-subedi-z-RWq-7-SWVSU-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/FmLx018/meera-pankhania-7c-ENZhgyf7c-unsplash.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}
