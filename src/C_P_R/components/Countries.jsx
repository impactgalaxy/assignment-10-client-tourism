import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Flip } from "react-awesome-reveal";


export default function Countries() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://assignment-10-server-wine-eight.vercel.app/countries")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    const countries = ["Bangladesh", "Indonesia", "Thailand", "Malaysia", "Vietnam", "Cambodia"];

    return (
        <div className="p-4 my-5">
            <div className="p-8 text-center">
                <h1 className="text-2xl"><span className="font-black">In Southeast Asia</span>, most visited countries by traveler are...{' '}<br></br>
                    <span className="font-black text-rose-600 p-4">
                        <Typewriter
                            words={countries}
                            loop={false}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center container m-auto p-4 my-4">
                {
                    data.map(country => <Link to={`view_all_spots/${country.Country_name}`} className="p-4 space-y-3 shadow-sm hover:shadow-lg" key={country._id}>
                        <div key={country._id} className="">
                            <img src={country.Img} alt={`This is the tourist spot of${country.Country_name}`} className="block w-full h-80 object-cover m-auto" />
                            <Flip cascade>
                                <h1 className="text-2xl">{country.Country_name}</h1>
                            </Flip>
                            <p className="py-4">{country.Description}</p>

                        </div>
                    </Link>)
                }

            </div>
        </div>
    )
}
