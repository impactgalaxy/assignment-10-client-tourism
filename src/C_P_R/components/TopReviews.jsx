import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import user from "/user.png";

export default function TopReviews() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 *:h-[500px]">
            <div className="bg-farmerBg bg-center bg-repeat bg-cover h-96">
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-worldBg bg-center bg-no-repeat bg-cover">
                <div className="text-center py-4">
                    <h1 className="text-white text-2xl md:text-4xl font-semibold">Our Top Reviews</h1>
                </div>
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    spaceBetween={0}
                    pagination={
                        { clickable: true }
                    }
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper hidden md:block"
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1>Kuala Lumpur</h1>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p className="p-4">Kuala Lumpur is the capital city of Malaysia, known for its modern skyline, iconic landmarks, and cultural diversity.</p>
                            <p>Md. Alauddin</p>
                            <div className="w-12 h-12 rounded-full">
                                <img src={user} alt="" />
                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1>Saint Martin&apos;s Island</h1>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p className="p-4">Saint Martin&apos;s Island is a small coral island located in the Bay of Bengal, near the southern tip of Bangladesh</p>
                            <p>Jhon Doe</p>
                            <div className="w-12 h-12 rounded-full">
                                <img src={user} alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1>Cox&apos;s Bazar</h1>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p className="p-4">Cox&apos;s Bazar is a town and beach resort located in southeastern Bangladesh, known for having the longest natural sea beach in the world.</p>
                            <p>NUR E ALAM</p>
                            <div className="w-12 h-12 rounded-full">
                                <img src={user} alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center justify-center flex-col gap-3">
                            <h1>Bangkok</h1>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p className="p-4">Bangkok is the capital city of Thailand, known for its vibrant street life, ornate temples, bustling markets, and vibrant nightlife.</p>
                            <p>Kamal</p>
                            <div className="w-12 h-12 rounded-full">
                                <img src={user} alt="" />
                            </div>

                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}
