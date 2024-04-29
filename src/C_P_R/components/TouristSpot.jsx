import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import defaultImg from "/banner.svg"
AOS.init();

export default function TouristSpot() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://assignment-10-server-wine-eight.vercel.app/touristSpots")
            .then(res => res.json()).then(data => {
                setData(data);
                setLoading(false);
            })
    }, [])
    return (
        <div>
            <div className="md:w-1/2 m-auto p-4 md:p-8 text-center space-y-5">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Available Spots</h1>
                <p>There are thousand of tourist spots available in Southeast Asia.So, Don&apos;t waste time make your choice and enjoy your tour</p>

            </div>
            {
                loading ? <div className="flex items-center justify-center h-40">
                    <div className="loading loading-bars loading-lg"></div>
                </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 md:gap-6 container m-auto overflow-hidden">

                        {
                            data.slice(0, 6).map((spot) => {
                                return (
                                    <div key={spot._id}
                                        data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        className="rounded-2xl  p-3  w-64 shadow-sm hover:shadow-lg transition-all"
                                    >
                                        <img src={spot.photo.length > 8 ? spot.photo : defaultImg} alt="" className="h-48 w-full block m-auto object-cover opacity-80 hover:opacity-100 transition-all rounded-md" />
                                        <div className="flex items-start flex-col justify-center gap-2 py-4 ">
                                            <p><span className="font-bold flex-grow">Location</span> {spot.location}</p>
                                            <p><span className="font-bold">Spot Name</span> {spot.spot}</p>
                                            <p><span className="font-bold">Country</span> {spot.country}</p>
                                            <Link to={`/tourist_spot_details/${spot._id}`} className="btn btn-outline float-right" >View Details</Link>

                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
            }
            <div className="text-center py-5">
                <Link to="/all-tourists-spot" className="btn">Show More</Link>
            </div>

        </div>
    )
}
