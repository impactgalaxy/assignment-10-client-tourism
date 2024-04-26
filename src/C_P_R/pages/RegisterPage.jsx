import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className="md:w-1/2 m-auto p-4 md:p-8 text-center space-y-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">Welcome, Please Register</h1>
                <p>If you have already an account. Please <Link className="font-bold" to="/login">Login</Link></p>

            </div>
            <form className="md:w-3/4 m-auto p-1 space-y-5" onSubmit={handleSubmit(handleRegister)}>
                <div className="flex flex-col w-full lg:flex-row ">
                    <div className="grid flex-grow card bg-base-200 rounded-box place-items-center p-4">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Enter your name</span>
                            </div>
                            <input type="text" {...register("text")} placeholder="Name here" className="input input-bordered w-full max-w-lg" />

                        </label>
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Enter your email</span>
                            </div>
                            <input type="email" {...register("email", { required: true })} placeholder="Email here" className="input input-bordered w-full max-w-lg" />
                            <div className="label">
                                {errors.email && <span className="label-text-alt text-red-600">This field is required</span>}

                            </div>
                        </label>
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Enter your photo URL</span>
                            </div>
                            <input type="text" {...register("photo")} placeholder="Photo URL here" className="input input-bordered w-full max-w-lg" />
                        </label>
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Enter your password</span>
                            </div>
                            <input type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])/, minLength: 6 })} placeholder="Password here" className="input input-bordered w-full max-w-lg" />
                            <div className="label">
                                {
                                    errors.password?.type === "required" ? <span className="label-text-alt text-red-600">This field is required</span> :
                                        errors.password?.type === "minLength" ? <span className="label-text-alt text-red-600">Password must be 6 character length</span> :
                                            errors.password?.type === "pattern" ?
                                                <span className="label-text-alt text-red-600">Password must contain at least one uppercase and one lowercase</span> : ""
                                }

                            </div>
                        </label>

                    </div>

                </div>
                <input type="submit" value="Register" className="btn btn-block btn-accent" />
            </form>
        </div>
    )
}
