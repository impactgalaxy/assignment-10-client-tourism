import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

export default function MyList() {
    // const [mySpot, setMySpot] = useState([]);
    const loaderData = useLoaderData();
    // const [filterSpot, setFilterSpot] = useState([]);
    const { user } = useContext(AuthContext);
    const filter = loaderData.filter(spot => {
        return spot.owner === null ? spot.email === user.email : spot.owner === user.email;
    })
    console.log(filter, user?.email);
    return (
        <div className="space-y-12 p-4 lg:p-8 overflow-x-auto lg:overflow-x-hidden">
            {
                filter.map(item => {
                    return (
                        <table className="table p-4 hover:border" key={item._id}>
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Country & Spot</th>
                                    <th>Season</th>
                                    <th>Cost</th>
                                    <th>Visitor per year</th>
                                    <th>Travel Time</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.country}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{item.spot}</span>
                                    </td>
                                    <td>{item.season}</td>
                                    <th>
                                        {item.cost}
                                    </th>
                                    <td>{item.visitorPerYear}</td>
                                    <td>{item.travelTime}</td>


                                </tr>
                            </tbody>
                            {/* foot */}
                            <tfoot className="py-5">
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th><button className="btn btn-success">Update</button></th>
                                    <th><button className="btn btn-warning">Delete</button></th>
                                </tr>
                            </tfoot>

                        </table>
                    )
                })
            }

        </div>
    )
}
