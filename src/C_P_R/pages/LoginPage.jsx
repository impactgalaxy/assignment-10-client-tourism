import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
export default function LoginPage() {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigate();
    const location = useLocation();

    const { logIn, createUserWithGoogle, createUserWithGithub, user } = useContext(AuthContext);
    console.log(location);

    const handleLogin = (data) => {
        console.log(data);
        const { email, password } = data;
        logIn(email, password)
            .then((result) => {
                if (location.state === null) {
                    navigation("/");
                }
                else {
                    navigation(location.state);
                }
                if (result.user.uid) {
                    Swal.fire({
                        title: "Login successful",
                        timer: 3000,
                        icon: "success"
                    })
                }
            }).catch((error) => {
                const errorCode = error.code;
                console.log(error, errorCode);
                switch (errorCode) {
                    case 'auth/invalid-email':
                        Swal.fire({
                            title: "Invalid email format.",
                            icon: "error",
                        })
                        break;
                    case 'auth/invalid-credential':
                        Swal.fire({
                            icon: "error",
                            title: "User not found",
                        })
                        break;
                    case 'auth/wrong-password':
                        Swal.fire({
                            title: "Incorrect password.",
                            icon: "error",
                        })
                        break;
                    case 'auth/user-not-found':
                        Swal.fire({
                            title: "No user found with the provided email.",
                            icon: "error",
                        })
                        break;
                    case 'auth/network-request-failed':
                        Swal.fire({
                            title: "A network error occurred. Please check your internet connection.",
                            icon: "error",
                        })
                        break;
                    case 'auth/operation-not-allowed':
                        Swal.fire({
                            title: "The operation is not allowed.",
                            icon: "error",
                        })
                        break;
                    default:
                        Swal.fire({
                            title: "An unknown error occurred:",
                            icon: "error",
                        })
                }

            })
    }
    const handleGoogleLogin = () => {
        if (user) {
            Swal.fire({
                icon: "error",
                title: "You already login",
                showConfirmButton: false,
            })
            return;
        }
        return createUserWithGoogle().then((result) => {
            if (location.state === null) {
                navigation("/");
            }
            else {
                navigation(location.state);
            }
            if (result.user.uid) {
                Swal.fire({
                    title: "Login successful",
                    icon: "success",
                    timer: 3000
                })

            }
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: error.code,
            })
        })
    }
    const handleGithubLogin = () => {
        if (user) {
            Swal.fire({
                icon: "error",
                title: "You already login",
                showConfirmButton: false
            })
            return;
        }
        return createUserWithGithub().then((result) => {
            if (location.state === null) {
                navigation("/");
            }
            else {
                navigation(location.state);
            }
            if (result.user.uid) {
                return Swal.fire({
                    title: "Login successful",
                    icon: "success",
                    timer: 3000
                })
            }
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: error.code,
            })
        })
    }

    console.log(showPass);
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
                            <input type="email" {...register("email", { required: true })} placeholder="Email here" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                {errors.email && <span className="label-text-alt text-red-600">You should provide email</span>}

                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Enter your password</span>
                            </div>
                            <input type={`${showPass ? "text" : "password"}`} {...register("password", { required: true })} placeholder="Password here" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                <div className="flex items-center gap-1"><input type="checkbox" onChange={(e) => setShowPass(e.target.checked)} className="checkbox checkbox-xs" /><span className="label-text-alt"> Show Password</span> </div>
                                {errors.password && <span className="label-text-alt text-red-600">You should provide password</span>}

                            </div>
                        </label>

                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="grid flex-grow card bg-base-200 rounded-box place-items-center p-4 gap-2">
                        <div>

                            <button className="btn uppercase" type="button" onClick={handleGoogleLogin}><FcGoogle></FcGoogle> Login with google</button>
                        </div>
                        <div>

                            <button className="btn uppercase" type="button" onClick={handleGithubLogin}><FaGithub></FaGithub> Login with github</button>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Login" className="btn btn-block btn-secondary" />
            </form>
        </div>
    )
}
