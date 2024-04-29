import Banner from "../components/Banner";
import Countries from "../components/Countries";
import TopReviews from "../components/TopReviews";
import TouristSpot from "../components/TouristSpot";

export default function HomePage() {


    return (
        <div>
            <Banner></Banner>
            <TouristSpot></TouristSpot>
            <Countries></Countries>
            <TopReviews></TopReviews>
        </div>
    )
}
