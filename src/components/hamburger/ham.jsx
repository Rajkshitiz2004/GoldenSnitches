export default function Hamburger() {
    return (
        <div className="ham">
            <header>
                <h3>The Curator</h3>
                <h4>PREMIUM MEMBER</h4>
            </header>
            <section>
                <ul>
                    <li>
                        <button>
                            <img src="./homeicon.svg" alt="Home" />
                            <span>Home</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src="./shortsicon.svg" alt="Shorts" />
                            <span>Shorts</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src="./subscriptionsicon.svg" alt="Subscriptions" />
                            <span>Subscriptions</span>
                        </button>
                    </li>
                </ul>
            </section>
            <section>
                <ul>
                    <li>
                        <button>
                            <img src="./libraryicon.svg" alt="Library" />
                            <span>Library</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src="./historyicon.svg" alt="History" />
                            <span>History</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src="./likedvideosicon.svg" alt="Liked Videos" />
                            <span>Liked Videos</span>
                        </button>
                    </li>
                </ul>
            </section>
        </div>
    )
}