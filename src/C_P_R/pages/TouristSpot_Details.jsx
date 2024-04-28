import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function TouristSpot_Details() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/touristSpots/${id}`)
            .then(res => res.json()).then(data => {
                setData(data)
                setLoading(false)
            })
    }, [id]);
    console.log(data);
    return (
        <div>
            {
                loading ? <div className="flex items-center justify-center h-40">
                    <div className="loading loading-bars loading-lg"></div>
                </div> :
                    <div>
                        {
                            data.map(item => <div key={item._id}>
                                <Link to={`/touristSpot_update/${id}`} className="btn">Update</Link>
                                <button className="btn">Delete</button>

                            </div>)
                        }
                    </div>

            }
        </div>
    )
}
