import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


export default function TouristSpot_Details() {
    const { id } = useParams();
    const [spotInfo, setSpotInfo] = useState({});
    const { photo, description, country, location, spot, season, visitorPerYear, cost, travelTime } = spotInfo;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/touristSpots/${id}`)
            .then(res => res.json()).then(data => {
                setSpotInfo(data)
                setLoading(false)

            })
    }, [id])

    return (
        <div>
            <Link to="/" className="btn">Go Home</Link>
            {
                loading
                    ? <div className="h-14 flex items-center justify-center">
                        <div className="loading loading-bars loading-lg"></div>
                    </div>
                    : <div className="flex items-center justify-center container p-5">
                        <div className="md:w-3/4 m-auto p-3 space-y-5">
                            <img src={photo} alt="" className="h-80 block m-auto object-cover w-full" />

                            <div>
                                <h1 className="text-slate-400">{description}</h1>
                                <div className="lg:w-3/4 m-auto py-5 space-y-3">
                                    <Fade cascade>
                                        <h1 className="text-xl">Country <span className="font-bold">{country}</span></h1>
                                        <h1 className="text-xl">Spot Name <span className="font-bold">{spot}</span></h1>
                                        <h1 className="text-xl">Location <span className="font-bold">{location}</span></h1>
                                        <h1 className="text-xl">Season <span className="font-bold">{season}</span></h1>
                                        <h1 className="text-xl">Visitor Per Year <span className="font-bold">{visitorPerYear}</span></h1>
                                        <h1 className="text-xl">Travel time <span className="font-bold">{travelTime}</span></h1>
                                        <h1 className="text-xl">Average Cost <span className="font-bold">{cost}</span></h1>
                                    </Fade>
                                </div>
                            </div>
                        </div>


                    </div>

            }
        </div>
    )
}
