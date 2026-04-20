import React from "react";
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function Mainfeed() {
    const [mainFeedData, setMainFeedData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMainFeedData(data));
    }, []);

    return (
        <div className="homeMainFeed">
            <ul className="itemsList">
                {mainFeedData && mainFeedData.items.map((item) => (
                    <button>
                        <li className="item" key={item.id}>
                            <img
                                src={item.snippet.thumbnails.default.url}
                                alt={item.snippet.title}
                            />
                            <p>{item.snippet.title}</p>
                    </li>
                    </button>
                ))}
            </ul>
        </div>
    )
}