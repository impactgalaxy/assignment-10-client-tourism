import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);

    const { registerUser } = useContext(AuthContext);

    const handleRegister = (data) => {
        console.log(data);
        const { email, password } = data;
        registerUser(email, password)
            .then(result => {
                if (result.user.uid) {
                    <Navigate to="/"></Navigate>
                    Swal.fire({
                        title: "Registered Successful",
                        titleText: "You have successfully register your account",
                        icon: "success",
                        timer: 3000,
                    })
                }


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                let errorText = "";
                switch (errorCode) {
                    case 'auth/invalid-email':
                        errorText = "Invalid email format.";
                        break;
                    case 'auth/weak-password':
                        errorText = "The password is too weak.";
                        break;
                    case 'auth/email-already-in-use':
                        errorText = "The email address is already in use try another account.";
                        break;
                    case 'auth/network-request-failed':
                        errorText = "A network error occurred. Please check your internet connection.";
                        break;
                    case 'auth/operation-not-allowed':
                        errorText = "The operation is not allowed.";
                        break;
                    default:
                        errorText = "An unknown error occurred:", errorMessage;
                        break;
                }
                Swal.fire({
                    // title: "Failed",
                    title: `${errorText}`,
                    icon: "error",
                    showConfirmButton: true,
                })
            })
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
                            <input type={`${showPass ? "text" : "password"}`} {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])/, minLength: 6 })} placeholder="Password here" className="input input-bordered w-full max-w-lg" />
                            <div className="label flex-col lg:flex-row items-start">
                                <div className="flex items-center gap-1"><input type="checkbox" onChange={(e) => setShowPass(e.target.checked)} className="checkbox checkbox-xs" /><span className="label-text-alt"> Show Password</span> </div>
                                {
                                    errors.password?.type === "required" ? <span className="label-text-alt text-red-600">This field is required</span> :
                                        errors.password?.type === "minLength" ? <span className="label-text-alt text-red-600">Password must be 6 character length</span> :
                                            errors.password?.type === "pattern" ?
                                                <span className="label-text-alt text-red-600">Please ensure at least one uppercase and one lowercase</span> : ""
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
