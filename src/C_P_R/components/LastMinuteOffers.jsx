
export default function LastMinuteOffers() {

    return (
        <div>
            <div className="text-center lg:w-1/2 space-y-7 py-4 m-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Last Minute Offers</h1>
                <p className="font-semibold text-lg"> Book a memorable tour at great price! Grab our last minute offer and pack the things for the journey you dream about. See our recommendations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 my-4 container m-auto p-5">
                <div className="flex items-center justify-center p-10 md:p-4">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-black">50%</h1>
                    <p className="text-xl font-black rotate-45">Discount</p>
                </div>
                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold">News Letter</h1>
                    <p>Send us your Opinion and Reviews</p>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" className="w-full input input-bordered" placeholder="Enter name" />
                        <input type="email" className="w-full input input-bordered" placeholder="Enter email" />
                        <input type="text" className="w-full input input-bordered" placeholder="Enter address" />
                        <textarea className="textarea input input-bordered w-full h-20" placeholder="Your comments or opinion"></textarea>
                        <button className="btn" >Send</button>

                    </form>
                </div>

            </div>
        </div>
    )
}
