import { Zoom } from "react-awesome-reveal";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddCountry() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleAddCountry = (data) => {
        const countries = ["Bangladesh", "Indonesia", "Thailand", "Malaysia", "Vietnam", "Cambodia"];
        if (!countries.includes(data.Country_name)) {
            Swal.fire({
                icon: "warning",
                title: "Attention!",
                text: `You can only add countries within South Asia eg "Bangladesh", "Indonesia", "Thailand", "Malaysia", "Vietnam", "Cambodia" `,
                showConfirmButton: true
            })
            return;
        }


        fetch("https://assignment-10-server-wine-eight.vercel.app/countries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json()).then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Country added successfully",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false
                    })
                    reset()
                }

            })
    }
    return (
        <div className="p-5 relative">
            <Zoom>
                <Link to="/add-tourists-spot" className="btn btn-active absolute top-0 right-5 btn-xs md:btn-sm lg:btn-lg">Add Tourist Spot</Link>
            </Zoom>
            <form onSubmit={handleSubmit(handleAddCountry)} className="md:w-1/2 m-auto p-6">
                <label className="block py-4 w-full">
                    <span>Enter country name</span>
                    <input type="text" {...register("Country_name", { required: true })} className="input input-bordered w-full" />
                    {errors.Country_name && <span className="label-text-alt text-red-600 py-1">You should provide country name</span>}
                </label>
                <label className="block py-4 w-full">
                    <span>Enter short description about country</span>
                    <input type="text" {...register("Description", { required: true })} className="input input-bordered w-full" />
                    {errors.Description && <span className="label-text-alt text-red-600 py-1">Need short description about country</span>}
                </label>
                <label className="block py-4 w-full">
                    <span>Enter image URL</span>
                    <input type="text" {...register("Img", { required: true })} className="input input-bordered w-full" />
                </label>
                {errors.Img && <span className="label-text-alt text-red-600 py-1">You should provide country&apos;s image source</span>}
                <input type="submit" value="Add Country" className="btn btn-block btn-accent" />

            </form>

        </div>
    )
}
