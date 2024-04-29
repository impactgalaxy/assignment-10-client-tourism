import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function AddTouristsSpot() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const handleAddSpot = (data) => {
        console.log(data);
        data.owner = user?.email;

        fetch("https://assignment-10-server-wine-eight.vercel.app/touristSpots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        }).then((res) => res.json()).then((data) => {
            if (data?.insertedId) {
                reset();
                Swal.fire({
                    icon: "success",
                    title: "Your tourist spot added successfully",
                    showConfirmButton: true,
                })
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: "Your tourist spot not added try again",
                    showConfirmButton: true
                })
            }
        })
    }
    return (
        <div>
            <div className="text-center space-y-5 p-4 md:p-10">
                <h1 className="text-2xl md:text-4xl">Welcome, Traveler</h1>
                <p>You can add your visited site that you like most</p>
            </div>
            <form onSubmit={handleSubmit(handleAddSpot)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 container m-auto">
                    <label className="form-control w-full block md:col-span-2 md:w-1/2 m-auto p-3">
                        <div className="label">
                            <span className="label-text">Enter your email</span>
                        </div>
                        <input type="email" {...register("email", { required: true })} placeholder="Email " className="input input-bordered w-full" />
                        {errors.email && <span className="label-text-alt text-red-600 py-1">You should provide email</span>
                        }

                    </label>
                    <div className="p-3 md:border-r">
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter your name</span>
                            </div>
                            <input type="text" {...register("name", { required: true })} placeholder="Name " className="input input-bordered w-full" />
                            {errors.name && <span className="label-text-alt text-red-600 py-1">You should provide your name</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter your tourist spot</span>
                            </div>
                            <input type="text" {...register("spot", { required: true })} placeholder="Tourists spot " className="input input-bordered w-full" />
                            {errors.spot && <span className="label-text-alt text-red-600 py-1">You should provide tourist spot</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter country name</span>
                            </div>
                            <input type="text" {...register("country", { required: true, pattern: /^[A-Z]/ })} placeholder="Country " className="input input-bordered w-full" />
                            {errors.country?.type === "required" && <span className="label-text-alt text-red-600 py-1">You should provide country name</span>}
                            {errors.country?.type === "pattern" && <span className="label-text-alt text-red-600 py-1">Please ensure first letter capital of country name</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter spot location</span>
                            </div>
                            <input type="text" {...register("location", { required: true })} placeholder="Location " className="input input-bordered w-full" />
                            {errors.location && <span className="label-text-alt text-red-600 py-1">You should provide location</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter short description</span>
                            </div>
                            <input type="text" {...register("description", { required: true })} placeholder="Description " className="input input-bordered w-full" />
                            {errors.description && <span className="label-text-alt text-red-600 py-1">You should provide description</span>}
                        </label>

                    </div>
                    <div className="p-3 border-l">
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter seasonality</span>
                            </div>
                            <input type="text" {...register("season", { required: true })} placeholder="Seasonality like winter / summer " className="input input-bordered w-full" />
                            {errors.season && <span className="label-text-alt text-red-600 py-1">You should provide winter or summer or other</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter travel time</span>
                            </div>
                            <input type="text" {...register("travelTime", { required: true })} placeholder="Travel time like 7 days or more " className="input input-bordered w-full" />
                            {errors.travelTime && <span className="label-text-alt text-red-600 py-1">You should provide travel time</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter total visitor per year</span>
                            </div>
                            <input type="text" {...register("visitorPerYear", { required: true })} placeholder="Visitor per year like 10000000 " className="input input-bordered w-full" />
                            {errors.visitorPerYear && <span className="label-text-alt text-red-600 py-1">You should provide visitor per year</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter your text</span>
                            </div>
                            <input type="text" {...register("photo", { required: true })} placeholder="Photo url like https://photo.png" className="input input-bordered w-full" />
                            {errors.photo && <span className="label-text-alt text-red-600 py-1">You should provide photo url</span>}
                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter average cost</span>
                            </div>
                            <input type="text" {...register("cost", { required: true })} placeholder="Average cost " className="input input-bordered w-full" />
                            {errors.cost && <span className="label-text-alt text-red-600 py-1">You should provide average cost</span>}
                        </label>
                    </div>
                    <input type="submit" value="Add Spot" className="btn w-full md:w-1/2 md:col-span-2 m-auto" />
                </div>

            </form>

        </div>
    )
}
