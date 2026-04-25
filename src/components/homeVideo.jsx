import React from "react";
import "../Index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function Mainfeed() {
    const navigate = useNavigate();
    const [mainFeedData, setMainFeedData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=24&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error("YouTube API Error:", data.error);
                }
                setMainFeedData(data);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const handleVideoClick = (videoId) => {
        navigate(`/watch_v/${videoId}`);
    };

    const handleChannelClick = (e, channelId) => {
        e.stopPropagation(); // Prevent video navigation
        navigate(`/creator/${channelId}`);
    };

    const formatViews = (views) => {
        const num = parseInt(views);
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toLocaleString();
    };

    return (
        <div className="[grid-area:main] bg-[#0f0f0f] min-h-screen overflow-y-auto px-4 sm:px-6 md:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
                {mainFeedData?.items?.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleVideoClick(item.id)}
                        className="flex flex-col cursor-pointer group"
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-[#121212] mb-3">
                            <img
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={item.snippet.thumbnails.medium.url}
                                alt={item.snippet.title}
                            />
                            <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[11px] font-bold text-white">
                                12:45
                            </div>
                        </div>

                        <div className="flex gap-3 px-1">
                            <div
                                onClick={(e) => handleChannelClick(e, item.snippet.channelId)}
                                className="w-9 h-9 rounded-full bg-[#333] flex-shrink-0 mt-0.5 overflow-hidden border border-gray-800 hover:opacity-80 transition"
                            >
                                <div className="w-full h-full flex items-center justify-center text-sm font-bold text-gray-400 bg-gradient-to-br from-[#222] to-[#444]">
                                    {item.snippet.channelTitle.charAt(0)}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="text-white text-sm md:text-base font-bold line-clamp-2 leading-tight tracking-tight group-hover:text-blue-400 transition-colors">
                                    {item.snippet.title}
                                </h3>
                                <div className="text-[#aaa] text-xs md:text-sm font-medium flex flex-col mt-0.5">
                                    <span
                                        onClick={(e) => handleChannelClick(e, item.snippet.channelId)}
                                        className="hover:text-white transition-colors cursor-pointer w-fit"
                                    >
                                        {item.snippet.channelTitle}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <span>{formatViews(item.statistics.viewCount)} views</span>
                                        <span>•</span>
                                        <span>{new Date(item.snippet.publishedAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}