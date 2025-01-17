import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Countries from "../components/Countries";
import LastMinuteOffers from "../components/LastMinuteOffers";
import TopReviews from "../components/TopReviews";
import TouristSpot from "../components/TouristSpot";

export default function HomePage() {

    return (
        <div>
            <Banner></Banner>
            <TouristSpot></TouristSpot>
            <Countries></Countries>
            <LastMinuteOffers></LastMinuteOffers>
            <TopReviews></TopReviews>
            <Blogs></Blogs>
        </div>
    )
}
