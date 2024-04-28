import { useForm } from "react-hook-form"
import { Link, useLoaderData } from "react-router-dom"

export default function UpdateSpot() {
    const loaderData = useLoaderData();
    const { spot, location, country, visitorPerYear, cost, travelTime, photo, season, description } = loaderData;
    const { register, handleSubmit, formState: { errors } } = useForm();
    // setValue('fieldArray', [{ spot }, { location }, { country }, { visitorPerYear }, { cost }, { travelTime },]);

    const handleUpdate = () => {
        console.log("..update");

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
                            <input type="text" defaultValue={country} {...register("country", { required: true })} className="input input-bordered w-full" />
                            {errors.country && <span className="label-text-alt text-red-600 py-1">You should provide country name</span>}

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

                    </div>
                    <div className="p-3 border-l">
                        <label className="form-control w-full block">
                            <div className="label">
                                <span className="label-text">Enter seasonality</span>
                            </div>
                            <input type="text" defaultValue={season} {...register("season", { required: true })} className="input input-bordered w-full" />
                            {errors.season && <span className="label-text-alt text-red-600 py-1">You should provide winter or summer or other</span>}

                        </label>
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
                    </div>
                    <input type="submit" value="Add Spot" className="btn w-full md:w-1/2 md:col-span-2 m-auto" />
                </div>

            </form>

        </div>
    )
}
