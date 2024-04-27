import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

export default function MyList() {
    // const [mySpot, setMySpot] = useState([]);
    const loaderData = useLoaderData();
    // const [filterSpot, setFilterSpot] = useState([]);
    const { user } = useContext(AuthContext);
    const filter = loaderData.filter(spot => {
        return spot.owner === null ? spot.email === user.email : spot.owner === user.email;
    })
    console.log(filter, user?.email);
    return (
        <div>
            <h1>I have added only {filter.length} data</h1>
        </div>
    )
}
