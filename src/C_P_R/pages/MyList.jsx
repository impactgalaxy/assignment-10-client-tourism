import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

export default function MyList() {
    const [myData, setMyData] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch("https://assignment-10-server-wine-eight.vercel.app/touristSpots")
            .then(res => res.json()).then(data => {
                const filter = data.filter((myList) => myList.uid === user.uid);
                setMyData(filter);
            })
    }, [user.uid]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this spot!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-wine-eight.vercel.app/touristSpots/${id}`, {
                    method: "DELETE"
                }).then(res => res.json()).then(data => {
                    if (data.deletedCount > 0) {
                        const removeData = myData.filter(rmv => rmv._id !== id);
                        setMyData(removeData);

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your spot deleted successfully",
                            icon: "success"
                        })
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Not Complete",
                            text: "Something wrong, please try again",
                            showConfirmButton: true,
                            timer: 5000,
                        })
                    }
                })
            }
        });


    }
    return (
        <div className="space-y-12 p-4 lg:p-8 overflow-x-auto lg:overflow-x-hidden">
            {
                myData.length === 0 && <div className="p-5 md:py-8 lg:py-10 flex items-center justify-center flex-col gap-7">
                    <Fade cascade>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">No spots found of in your list</h1>
                    </Fade>
                    <Link to="/add-tourists-spot" className="btn">Please Add Tourist Spot</Link>
                </div>
            }
            {
                myData.map(item => {
                    return (
                        <table className="table p-4 hover:border transition-all" key={item._id}>
                            {/* head */}
                            <thead>
                                <tr className="*:text-lg">
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
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src={item.photo} alt="No photo found" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{item.country}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{item.spot}</span>
                                    </td>
                                    <td>{item.season}</td>
                                    <th>{item.cost}</th>
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
                                    <th><Link to={`/update_spot/${item._id}`} className="btn btn-success">Update</Link></th>
                                    <th><button className="btn btn-warning" onClick={() => handleDelete(item._id)}>Delete</button></th>
                                </tr>
                            </tfoot>

                        </table>
                    )
                })
            }

        </div>
    )
}
