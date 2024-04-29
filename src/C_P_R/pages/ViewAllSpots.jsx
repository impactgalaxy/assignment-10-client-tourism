import { Link, useLoaderData } from "react-router-dom"
import { Fade } from "react-awesome-reveal";

export default function ViewAllSpots() {

    const loadedData = useLoaderData();

    return (
        <div>
            {
                loadedData.length === 0 && <div className="p-5 md:py-8 lg:py-10 flex items-center justify-center flex-col gap-7">
                    <Fade cascade>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">No spot found of selected Country</h1>
                    </Fade>
                    <div className="flex items-center gap-3">
                        <Link to="/" className="btn">Go Home</Link>
                        <Link to="/add-tourists-spot" className="btn">Add Tourist Spot</Link>
                    </div>
                </div>
            }
            {
                loadedData.length > 0 && <div className="p-4 md:py-8 lg:py-10 flex items-center justify-center ">
                    <h1 className="text-2xl md:text-4xl">Travel To {loadedData[0].country}</h1>

                </div>
            }
            <div className="space-y-6">
                {
                    loadedData.map(spot => {
                        return (
                            <div key={spot._id} className="md:w-1/2 m-auto p-4">
                                <img src={spot.photo} alt={spot.spot} className="w-full block m-auto object-cover h-60" />
                                <div className="flex justify-between items-center py-5">
                                    <p><span className="font-semibold">Spot:</span> {spot.spot}</p>
                                    <p><span className="font-semibold">Country:</span> {spot.country}</p>
                                </div>
                                <div className="py-2">
                                    <p><span className="font-semibold">Location:</span> {spot.location}</p>
                                    <p><span className="font-semibold">Average Cost:</span> {spot.cost}</p>
                                    <p><span className="font-semibold">Seasonality:</span> {spot.season}</p>
                                </div>
                                <p><span className="font-semibold">Description:</span> {spot.description.slice(0, 30)}...</p>
                                <Link to={`/tourist_spot_details/${spot._id}`} className="btn-sm btn btn-ghost float-right text-red-400">View Details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
// short description
// e.average_cost
// f.seasonality
// g. “View Details” butto