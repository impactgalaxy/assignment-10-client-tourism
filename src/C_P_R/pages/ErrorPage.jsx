import { TbFaceIdError } from "react-icons/tb";
import { Link, useRouteError } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="p-10 flex flex-col items-center justify-center gap-6">
            <TbFaceIdError className="text-8xl"></TbFaceIdError>
            <h1 className="md:text-2xl">Sorry! We can&apos;t provide your information.</h1>
            <p>Page {error.statusText || error.status}</p>
            <Link to="/" className="btn btn-outline">Please Go Back</Link>
        </div>
    )
}
