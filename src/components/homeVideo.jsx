import React from "react";
import "../Index.css";

import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function Mainfeed() {
    const [mainFeedData, setMainFeedData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=10&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error("YouTube API Error:", data.error);
                }
                setMainFeedData(data);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    return (
        <div className="border-t-2 border-gray-300 [grid-area:main]">
            <ul className="p-[10px] grid grid-rows-[auto] grid-cols-[25%_24%_24%_24%] gap-[10px]">
                {mainFeedData?.items?.map((item) => (
                    <div key={item.id} className="border-2 border-gray-300 rounded-lg text-center ">
                        <li className="list-none">
                            <img
                                className="w-full h-auto rounded-lg"
                                src={item.snippet.thumbnails.default.url}
                                alt={item.snippet.title}
                            />
                            <p>{item.snippet.title}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}