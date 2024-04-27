import { useLoaderData } from "react-router-dom"

export default function AllTouristsSpot() {
    const loadedSpot = useLoaderData()
    return (
        <div>
            <h1>There are available tourist spot {loadedSpot.length}</h1>
        </div>
    )
}
