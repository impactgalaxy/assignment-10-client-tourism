import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { logIn, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);

    const handleLogin = (data) => {
        console.log(data);
        const { email, password } = data;
        logIn(email, password)
            .then((result) => {
                if (result.user.uid) {
                    Swal.fire({
                        title: "Login successful",
                        timer: 3000,
                        icon: "success"
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
                    case 'auth/wrong-password':
                        errorText = "Incorrect password.";
                        break;
                    case 'auth/user-not-found':
                        errorText = "No user found with the provided email.";
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
                    icon: "error",
                    showConfirmButton: true,
                    title: `${errorText}`
                })
            })
    }
    const handleGoogleLogin = () => {
        createUserWithGoogle().then((result) => {
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
        createUserWithGithub().then((result) => {
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
                            <input type="password" {...register("password", { required: true })} placeholder="Password here" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                                {errors.password && <span className="label-text-alt text-red-600">You should provide password</span>}

                            </div>
                        </label>

                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="grid flex-grow card bg-base-200 rounded-box place-items-center p-4 gap-2">
                        <div>

                            <button className="btn uppercase" onClick={handleGoogleLogin}><FcGoogle></FcGoogle> Sign in with google</button>
                        </div>
                        <div>

                            <button className="btn uppercase" onClick={handleGithubLogin}><FaGithub></FaGithub> Sign in with google</button>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Sign In" className="btn btn-block btn-secondary" />
            </form>
        </div>
    )
}
