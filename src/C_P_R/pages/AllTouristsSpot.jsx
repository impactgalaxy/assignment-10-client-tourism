import { Link, useLoaderData } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

export default function AllTouristsSpot() {
    const loadedSpot = useLoaderData();
    const [loaderData, setLoadedSpot] = useState(loadedSpot);


    return (
        <div>
            <div className="p-4 lg:p-8">
                <Swiper
                    slidesPerView={1}
                    autoplay={true}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true
                    }

                    }
                    modules={[Autoplay, Pagination]}
                    className="mySwiper hidden md:block"
                >
                    {
                        loaderData.map(item => <SwiperSlide key={item._id}>
                            <img src={item.photo} alt="" className="relative" />
                            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-3xl">{item.country}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div>
                <div className="py-5 flex items-center justify-center">
                    <select className="dropdown" >
                        <option>Filter by</option>
                        <option value="higher">Higher </option>
                        <option value="lower">Lower </option>
                    </select>
                </div>
                <div className="flex gap-4 flex-wrap items-center justify-center lg:my-10">

                    {
                        loaderData.map(spot => {
                            return (
                                <div key={spot._id}

                                    className="rounded-2xl p-3  w-64 items-center"
                                >
                                    <img src={spot.photo} alt="" className="h-48 w-full block m-auto object-cover opacity-80 hover:opacity-100 transition-all rounded-md" />
                                    <div className="flex items-start flex-col justify-center gap-2 py-4 ">
                                        <p><span className="font-bold flex-grow">Location</span> {spot.location}</p>
                                        <p><span className="font-bold">Spot Name</span> {spot.spot}</p>
                                        <p><span className="font-bold">Country</span> {spot.country}</p>
                                        <p><span className="font-bold">Average cost</span> {spot.cost}</p>
                                        <p><span className="font-bold">Season</span> {spot.season}</p>
                                        <p><span className="font-bold">Travel time</span> {spot.travelTime}</p>
                                        <Link to={`/tourist_spot_details/${spot._id}`} className="btn btn-outline float-right" >View Details</Link>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

