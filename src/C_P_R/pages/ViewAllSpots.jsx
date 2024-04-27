import { useLoaderData } from "react-router-dom"
import { Fade } from "react-awesome-reveal";

export default function ViewAllSpots() {

    const loadedData = useLoaderData();
    return (
        <div>
            <Fade cascade>
                <h1>This is all spots view page{loadedData.length}</h1>
                <h1>This is all spots view page{loadedData.length}</h1>
                <h1>This is all spots view page{loadedData.length}</h1>
                <h1>This is all spots view page{loadedData.length}</h1>
            </Fade>
            {
                (loadedData.length === 0) && <div className="h-52 flex items-center justify-center border">

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
                                </div>
                                <p><span className="font-semibold">Description:</span> {spot.description.slice(0, 30)}...</p>
                                <button className="btn-sm btn btn-ghost float-right">More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
