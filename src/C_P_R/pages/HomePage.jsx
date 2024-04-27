import { Typewriter } from "react-simple-typewriter";
import Countries from "../components/Countries";

export default function HomePage() {
    //     const handleType = (count: number) => {
    //         // access word count number
    //         console.log(count)
    //     }
    // }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    const sitesName = "Sundarban, Cox’s Bazar,Rangamati, Bandarban, Saint Martin’s Island, Bangkok, Chiang Mai, Ayutthaya, Phuket, Phi Phi Islands, Bali, Borobudur Temple, Komodo National Park, Raja Ampat Islands, Yogyakarta, Kuala Lumpur, Penang Taman, Negara National Park, Ha Long Bay, Ho Chi Minh City, Hoi An Ancient Town, Phong Nha Caves, Mekong Delta, Angkor Wat, Siem Reap, Phnom Penh, Bokor National Park, Kep";
    const site = sitesName.split(",");
    return (
        <div>
            <div className='border App p-4 md:p-6 lg:p-10'>
                <h1 className="text-lg">
                    Hey, If you are a real tour lover, You should visit these sites first {' '}
                    <span className="font-black text-green-600">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={site}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </span><br></br>
                    then try another
                </h1>
            </div>
            <Countries></Countries>
        </div>
    )
}
