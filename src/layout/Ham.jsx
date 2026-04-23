export default function Hamburger() {
    return (
        <div className="border-r-2 border-gray-300 h-full w-full [grid-area:ham]">
            <header className="pl-[10%] items-center">
                <h3 className="text-xl"><b>The Curator</b></h3>
                <h4 className="text-gray-500 text-xs">PREMIUM MEMBER</h4>
            </header>
            <section className="mt-[10%] pl-[10%]">
                <ul className="list-none flex flex-col gap-[10px]">
                    <li>
                        <div className="flex gap-[5%] items-center">
                            <img src="/homeicon.svg" alt="Home" className="h-[5vh] w-auto" />
                            <span>Home</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[5%] items-center">
                            <img src="/shortsicon.svg" alt="Shorts" className="h-[5vh] w-auto" />
                            <span>Shorts</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[5%] items-center">
                            <img src="/subscriptionsicon.svg" alt="Subscriptions" className="h-[5vh] w-auto" />
                            <span>Subscriptions</span>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="border-t-2 border-gray-300 mt-[10%] pt-[10%] pl-[10%]">
                <ul className="list-none flex flex-col gap-[10px]">
                    <li>
                        <div className="flex gap-[5%] items-center">
                            <img src="/libraryicon.svg" alt="Library" className="h-[5vh] w-auto" />
                            <span>Library</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[5%] items-center">
                            <img src="/historyicon.svg" alt="History" className="h-[5vh] w-auto" />
                            <span>History</span>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[5%] items-center">
                            <img src="/likedvideosicon.svg" alt="Liked Videos" className="h-[5vh] w-auto" />
                            <span>Liked Videos</span>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}