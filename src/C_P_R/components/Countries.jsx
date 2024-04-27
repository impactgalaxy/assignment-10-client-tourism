import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Countries() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/countries")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    console.log(data);
    const countries = ["Bangladesh", "Indonesia", "Thailand", "Malaysia", "Vietnam", "Cambodia"]
    return (
        <div>
            <div className="lg:w-1/2 p-4 md:p-8 text-center">
                <h1 className="text-2xl"><span className="font-black">In Southeast Asia</span>, most visited countries by traveler are...{' '}
                    <span className="font-black text-rose-600">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
                {
                    data.map(c => {
                        return (
                            <div key={c._id}>
                                <img src={c.Img} alt="" className="block w-full h-80 object-cover m-auto" />
                                <h1 className="text-2xl">{c.Country_name}</h1>
                                <p>{c.Description}</p>
                                <Link to={`view_all_spots/${c.Country_name}`} className="btn">View All Spots</Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
