import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import defaultUser from "/user.png";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

export default function TopReviews() {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch("https://assignment-10-server-wine-eight.vercel.app/userReviews")
            .then(res => res.json()).then(data => {
                setReview(data);
            })
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleReview = (data) => {
        if (user === null) {
            Swal.fire({
                title: "Please login",
                text: "For review you need login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    return navigate("/login", { state: location.pathname });
                }
            })
        }
        else {
            fetch("https://assignment-10-server-wine-eight.vercel.app/userReviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Review Send",
                        timer: 3000,
                        showConfirmButton: false
                    })
                }
            })
        }
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 *:h-[500px]">
            <div className="space-y-4 p-4 md:p-6 lg:p-8">
                <h1 className="text-2xl md:text-3xl font-bold">News Letter</h1>
                <p>Send us your Opinion and Reviews</p>
                <form className="space-y-4" onSubmit={handleSubmit(handleReview)}>
                    <input type="text" {...register("user_name", { required: true })} className="w-full input input-bordered" placeholder="Enter name" />
                    {errors.user_name && <span className="label-text-alt text-red-600 py-1">You should provide your name</span>}
                    <input type="text" {...register("country_name", { required: true })} className="w-full input input-bordered" placeholder="Enter country name" />
                    {errors.country_name && <span className="label-text-alt text-red-600 py-1">You should provide your name</span>}
                    <input type="text" {...register("spot_name", { required: true })} className="w-full input input-bordered" placeholder="Enter spot name" />
                    {errors.spot_name && <span className="label-text-alt text-red-600 py-1">You should provide your name</span>}
                    <textarea {...register("user_comment", { required: true })} className="textarea-bordered textarea w-full h-20" placeholder="Your comments or opinion"></textarea>
                    {errors.user_comment && <span className="label-text-alt text-red-600 py-1">You should provide your name</span>}
                    <input type="submit" value="Send" className="btn float-right" />

                </form>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-worldBg bg-center bg-no-repeat bg-cover *:text-white">
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
                    {
                        reviews.map(review => {
                            return (
                                <SwiperSlide key={review._id}>
                                    <div className="flex items-center justify-center flex-col gap-3">
                                        <h1 className="text-xl font-semibold">{review.country_name}</h1>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        </div>
                                        <h1>{review.spot_name}</h1>
                                        <p className="p-4">{review.user_comment}</p>
                                        <p>{review.user_name}</p>
                                        <div className="w-12 h-12 rounded-full">
                                            <img src={user?.photoURL ? user?.photoURL : defaultUser} alt="" />
                                        </div>

                                    </div>

                                </SwiperSlide>
                            )
                        })
                    }

                    {/* <SwiperSlide>
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
                                <img src={defaultUser} alt="" />
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
                                <img src={defaultUser} alt="" />
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
                                <img src={defaultUser} alt="" />
                            </div>

                        </div>
                    </SwiperSlide> */}


                </Swiper>
            </div>
        </div>
    )
}
