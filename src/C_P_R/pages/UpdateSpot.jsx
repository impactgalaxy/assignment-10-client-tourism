import { useForm } from "react-hook-form"
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

export default function UpdateSpot() {
    const loaderData = useLoaderData();
    const { _id, spot, location, country, visitorPerYear, cost, travelTime, photo, season, description } = loaderData;
    const { register, handleSubmit, formState: { errors } } = useForm();
    // setValue('fieldArray', [{ spot }, { location }, { country }, { visitorPerYear }, { cost }, { travelTime },]);

    const handleUpdate = (data) => {
        console.log(data);

        fetch(`http://localhost:5000/touristSpots/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json()).then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(({
                        icon: "success",
                        title: "Updated!",
                        text: "Your spot updated successfully",
                        timer: 3000,
                        showConfirmButton: false
                    }))
                } else {
                    Swal.fire({
                        icon: "error",
                        timer: 5000,
                        showConfirmButton: true,
                        text: "Failed to update your spot"
                    })
                }
            })


    }
    return (
        <div>
            <div className="text-center space-y-5 p-4 md:p-10 relative">
                <h1 className="text-2xl md:text-4xl">Welcome, Traveler update your spot</h1>
                <Link to="/" className="absolute top-[10%] right-[10%] text-warning">Cancel</Link>

            </div>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 container m-auto">

                    <div className="p-3 md:border-r">

                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter your tourist spot</span>
                            </div>
                            <input type="text" defaultValue={spot} {...register("spot", { required: true })} className="input input-bordered w-full" />
                            {errors.spot && <span className="label-text-alt text-red-600 py-1">You should provide tourist spot</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter country name</span>
                            </div>
                            <input type="text" defaultValue={country} {...register("country", { required: true, pattern: /^[A-Z]/ })} className="input input-bordered w-full" />
                            {errors.country?.type === "required" && <span className="label-text-alt text-red-600 py-1">You should provide country name</span>}
                            {errors.country?.type === "pattern" && <span className="label-text-alt text-red-600 py-1">Please ensure first letter capital of country name</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter spot location</span>
                            </div>
                            <input type="text" defaultValue={location} {...register("location", { required: true })} className="input input-bordered w-full" />
                            {errors.location && <span className="label-text-alt text-red-600 py-1">You should provide location</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter short description</span>
                            </div>
                            <input type="text" defaultValue={description} {...register("description", { required: true })} className="input input-bordered w-full" />
                            {errors.description && <span className="label-text-alt text-red-600 py-1">You should provide description</span>}
                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter seasonality</span>
                            </div>
                            <input type="text" defaultValue={season} {...register("season", { required: true })} className="input input-bordered w-full" />
                            {errors.season && <span className="label-text-alt text-red-600 py-1">You should provide winter or summer or other</span>}

                        </label>

                    </div>
                    <div className="p-3 border-l">

                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter travel time</span>
                            </div>
                            <input type="text" defaultValue={travelTime} {...register("travelTime", { required: true })} className="input input-bordered w-full" />
                            {errors.travelTime && <span className="label-text-alt text-red-600 py-1">You should provide travel time</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter total visitor per year</span>
                            </div>
                            <input type="text" defaultValue={visitorPerYear} {...register("visitorPerYear", { required: true })} className="input input-bordered w-full" />
                            {errors.visitorPerYear && <span className="label-text-alt text-red-600 py-1">You should provide visitor per year</span>}

                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter your text</span>
                            </div>
                            <input type="text" defaultValue={photo.slice(0, 20)} {...register("photo", { required: true })} className="input input-bordered w-full" />
                            {errors.photo && <span className="label-text-alt text-red-600 py-1">You should provide photo url</span>}
                        </label>
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter average cost</span>
                            </div>
                            <input type="text" defaultValue={cost} {...register("cost", { required: true })} className="input input-bordered w-full" />
                            {errors.cost && <span className="label-text-alt text-red-600 py-1">You should provide average cost</span>}
                        </label>
                        <label className="form-control w-full block mt-10">
                            <input type="submit" value="Update Spot" className="btn w-full m-auto btn-primary" />
                        </label>
                    </div>

                </div>

            </form>

        </div>
    )
}
