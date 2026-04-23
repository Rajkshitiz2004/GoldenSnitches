import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function CreatorChannel() {
    const { channelId } = useParams();
    const navigate = useNavigate();
    const [channelData, setChannelData] = useState(null);
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [recentVideos, setRecentVideos] = useState([]);
    const [error, setError] = useState(null);

    const formatCount = (count) => {
        if (!count) return "0";
        const num = parseInt(count);
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    useEffect(() => {
        if (!channelId) return;

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setChannelData(data.items[0]);
                } else {
                    setError("Channel not found.");
                }
            })
            .catch(err => setError(err.message));

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.items.length);
                    setFeaturedVideo(data.items[randomIndex]);
                    setRecentVideos(data.items);
                }
            })
            .catch(err => console.error("Videos fetch error:", err));
    }, [channelId]);

    if (error) return <div className="p-8 text-center text-red-500 bg-[#0f0f0f] min-h-screen">Error: {error}</div>;
    if (!channelData) return <div className="p-8 text-center text-white bg-[#0f0f0f] min-h-screen">Loading...</div>;

    const { snippet, statistics, brandingSettings } = channelData;
    const bannerUrl = brandingSettings?.image?.bannerExternalUrl || 
                      brandingSettings?.image?.bannerTvHighImageUrl ||
                      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

    const profileUrl = snippet?.thumbnails?.high?.url || 
                       snippet?.thumbnails?.medium?.url;

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen w-full font-sans pb-20">
            <div className="w-full h-32 sm:h-48 md:h-64 lg:h-80 overflow-hidden">
                <img 
                    src={bannerUrl} 
                    alt="Banner" 
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"}
                />
            </div>

            <div className="max-w-[1284px] mx-auto px-4 md:px-16 pt-4 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                    <img 
                        src={profileUrl} 
                        alt="Profile" 
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
                    />
                </div>
                <div className="flex flex-col gap-3 text-center md:text-left flex-grow pt-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{snippet.title}</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm md:text-base text-gray-400 font-medium">
                        <span>{snippet.customUrl}</span>
                        <span>•</span>
                        <span>{formatCount(statistics.subscriberCount)} subscribers</span>
                        <span>•</span>
                        <span>{formatCount(statistics.videoCount)} videos</span>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base line-clamp-1 max-w-2xl cursor-pointer hover:text-white transition">
                        {snippet.description || "More about this channel ›"}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-3 mt-1">
                        <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition">
                            Subscribe
                        </button>
                        <button className="bg-[#272727] p-2 rounded-full hover:bg-[#3f3f3f] transition">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1284px] mx-auto px-4 md:px-16 mt-4 border-b border-[#303030]">
                <ul className="flex gap-8 text-sm md:text-base font-bold overflow-x-auto no-scrollbar">
                    <li className="pb-3 border-b-2 border-white cursor-pointer transition whitespace-nowrap">Home</li>
                    <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition whitespace-nowrap">Videos</li>
                    <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition whitespace-nowrap">Shorts</li>
                    <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition whitespace-nowrap">Playlists</li>
                    <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition whitespace-nowrap">Community</li>
                    <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition whitespace-nowrap flex items-center gap-2 ml-auto">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </li>
                </ul>
            </div>

            <div className="max-w-[1284px] mx-auto px-4 md:px-16">
                {featuredVideo && (
                    <div className="py-6">
                        <div 
                            onClick={() => navigate(`/watch_v/${featuredVideo.id.videoId}`)}
                            className="flex flex-col md:flex-row gap-6 cursor-pointer group"
                        >
                            <div className="md:w-[420px] lg:w-[480px] flex-shrink-0 aspect-video rounded-xl overflow-hidden bg-[#121212]">
                                <img 
                                    src={featuredVideo.snippet.thumbnails.high.url} 
                                    alt="Featured" 
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-2 justify-center py-2">
                                <h3 className="text-xl font-bold line-clamp-2 leading-tight group-hover:text-blue-400 transition">
                                    {featuredVideo.snippet.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-bold">
                                    {new Date(featuredVideo.snippet.publishedAt).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-400 line-clamp-2 leading-snug">
                                    {featuredVideo.snippet.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="py-6 border-t border-[#303030]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold tracking-tight">Recent Uploads</h2>
                        <button className="text-blue-400 text-sm font-bold hover:bg-blue-400/10 px-3 py-1.5 rounded-full transition">Play all</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
                        {recentVideos.slice(0, 5).map((video) => (
                            <div 
                                key={video.id.videoId} 
                                onClick={() => navigate(`/watch_v/${video.id.videoId}`)}
                                className="flex flex-col gap-3 cursor-pointer group"
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#121212]">
                                    <img 
                                        src={video.snippet.thumbnails.medium.url} 
                                        alt="Video" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 pr-2">
                                    <h3 className="font-bold text-sm line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                                        {video.snippet.title}
                                    </h3>
                                    <p className="text-[#aaa] text-xs font-bold mt-1">
                                        {new Date(video.snippet.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}