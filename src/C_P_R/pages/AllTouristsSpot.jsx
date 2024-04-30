import { Link, useLoaderData } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import defaultImg from "/banner.svg";
import 'swiper/css/pagination';
import { useState } from "react";
import Swal from "sweetalert2";


export default function AllTouristsSpot() {
    const loadedSpot = useLoaderData();
    const [loaderData, setLoadedSpot] = useState(loadedSpot);
    const copyOfLoaderData = [...loadedSpot];
    const handleFilter = (e) => {
        const value = e.target.value;
        if (value === "higher") {
            const filter = copyOfLoaderData.sort((a, b) => {
                const regEx = /[0-9.]/g;

                const first = a.cost.match(regEx).join("");
                const second = b.cost.match(regEx).join("");
                return parseInt(first) - parseInt(second)
            });
            setLoadedSpot(filter);
            Swal.fire(({
                icon: "success",
                title: "Success",
                timer: 2000,
                showConfirmButton: false,
                text: "Sorted successfully by lower cost"
            }))
        } else if (value === "lower") {
            const filter = copyOfLoaderData.sort((a, b) => {
                const regEx = /[0-9.]/g;
                const first = a.cost.match(regEx).join("");
                const second = b.cost.match(regEx).join("");
                return parseInt(second) - parseInt(first)
            });
            setLoadedSpot(filter);
            Swal.fire(({
                icon: "success",
                title: "Success",
                timer: 2000,
                showConfirmButton: false,
                text: "Sorted successfully by higher cost"
            }))
        } else {
            setLoadedSpot(copyOfLoaderData);
        }

    }



    return (
        <div>
            {loaderData.length === 0 && <div className="flex items-center justify-center h-40">
                <div className="loading loading-bars loading-lg"></div>
            </div>}
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
                            <img src={item.photo.length > 8 ? item.photo : defaultImg} alt="" className="relative" />
                            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl">{item.country}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div>
                <div className="py-5 flex items-center justify-center gap-10">
                    <select className="dropdown btn" onChange={handleFilter}>
                        <option>Filter by</option>
                        <option value="higher">Lower to Higher</option>
                        <option value="lower">Higher to lower</option>
                    </select>
                    <Link to="/add-tourists-spot" className="btn border-t-red-200">Add Tourist Spots</Link>
                </div>
                <div className="flex gap-4 flex-wrap items-center justify-center lg:my-10">

                    {
                        loaderData.map(spot => {
                            return (
                                <div key={spot._id}

                                    className="rounded-2xl p-3  w-64 items-center"
                                >
                                    <img src={spot.photo.length > 8 ? spot.photo : defaultImg} alt={`This is image of ${spot.country}'s tourist spot`} className="h-48 w-full block m-auto object-cover opacity-80 hover:opacity-100 transition-all rounded-md" />
                                    <div className="flex items-start flex-col justify-center gap-2 py-4 ">
                                        <p><span className="font-bold flex-grow">Location</span> {spot.location}</p>
                                        <p><span className="font-bold">Spot Name</span> {spot.spot}</p>
                                        <p><span className="font-bold">Country</span> {spot.country}</p>
                                        <p><span className="font-bold">Average cost</span> {spot.cost}</p>
                                        <p><span className="font-bold">Season</span> {spot.season}</p>
                                        <p><span className="font-bold">Travel time</span> {spot.travelTime}</p>
                                        <p><span className="font-bold">Spot added by</span> {spot.name}</p>
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

