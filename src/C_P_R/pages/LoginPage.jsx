import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className="md:w-1/2 m-auto p-4 md:p-8 text-center space-y-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">Welcome Please Login</h1>
                <p>If you do not have an account. Please <Link className="font-bold" to="/register">Register</Link></p>

            </div>
            <form className="md:w-3/4 m-auto p-1 space-y-5" onSubmit={handleSubmit(handleLogin)}>
                <div className="flex flex-col w-full lg:flex-row ">
                    <div className="grid flex-grow card bg-base-200 rounded-box place-items-center p-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Enter your email</span>
                            </div>
                            <input type="email" {...register("email", { required: true })} placeholder="Name here" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                {errors.email && <span className="label-text-alt text-red-600">This field is required</span>}

                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Enter your password</span>
                            </div>
                            <input type="password" {...register("password", { required: true })} placeholder="Password here" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                {errors.password && <span className="label-text-alt text-red-600">This field is required</span>}

                            </div>
                        </label>

                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="grid flex-grow card bg-base-200 rounded-box place-items-center p-4 gap-2">
                        <div>

                            <button className="btn uppercase"><FcGoogle></FcGoogle> Sign in with google</button>
                        </div>
                        <div>

                            <button className="btn uppercase"><FaGithub></FaGithub> Sign in with google</button>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Sign In" className="btn btn-block btn-secondary" />
            </form>
        </div>
    )
}
