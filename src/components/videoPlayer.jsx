import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function VideoPlayer() {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [channelStats, setChannelStats] = useState(null);
    const [error, setError] = useState(null);

    const formatCount = (count) => {
        if (!count) return "0";
        const num = parseInt(count);
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    const handleChannelClick = (e, channelId) => {
        if (e) e.stopPropagation();
        navigate(`/creator/${channelId}`);
    };

    useEffect(() => {
        if (!videoId) return;

        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error.message);
                    return;
                }
                if (data.items && data.items.length > 0) {
                    const video = data.items[0];
                    setSelectedVideo(video);

                    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${video.snippet.channelId}&key=${API_KEY}`)
                        .then(res => res.json())
                        .then(channelData => {
                            if (channelData.items && channelData.items.length > 0) {
                                setChannelStats(channelData.items[0].statistics);
                            }
                        })
                        .catch(err => console.error("Channel fetch error:", err));
                } else {
                    setError("Video not found.");
                }
            })
            .catch(err => setError(err.message));

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&key=${API_KEY}&q=trending`)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    setVideos(data.items);
                }
            })
            .catch(err => console.error("Recommendations fetch error:", err));
    }, [videoId]);

    if (error) return <div className="p-6 text-center text-red-500 bg-[#0f0f0f] min-h-screen">Error: {error}</div>;
    if (!selectedVideo) return <div className="p-6 text-center text-white bg-[#0f0f0f] min-h-screen">Loading...</div>;

    return (
        <div className="bg-[#0f0f0f] min-h-screen text-white font-sans">
            <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row gap-6 p-4">

                <div className="flex-grow lg:max-w-[calc(100%-420px)]">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl mb-4">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                    <h1 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 leading-tight">
                        {selectedVideo.snippet.title}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div
                                onClick={(e) => handleChannelClick(e, selectedVideo.snippet.channelId)}
                                className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center font-bold text-gray-400 cursor-pointer overflow-hidden hover:opacity-80 transition"
                            >
                                {selectedVideo.snippet.channelTitle[0]}
                            </div>
                            <div className="flex flex-col">
                                <h4
                                    onClick={(e) => handleChannelClick(e, selectedVideo.snippet.channelId)}
                                    className="font-bold text-base cursor-pointer hover:text-gray-300 transition"
                                >
                                    {selectedVideo.snippet.channelTitle}
                                </h4>
                                <p className="text-[12px] text-[#aaa] font-medium">{formatCount(channelStats?.subscriberCount)} subscribers</p>
                            </div>
                            <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm ml-3 hover:bg-gray-200 transition">
                                Subscribe
                            </button>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                            <div className="flex items-center bg-[#272727] rounded-full overflow-hidden flex-shrink-0">
                                <button className="px-4 py-2 hover:bg-[#3f3f3f] border-r border-white/10 flex items-center gap-2 font-bold text-sm transition">
                                    <span className="text-lg">👍</span>
                                    <span>{formatCount(selectedVideo.statistics?.likeCount)}</span>
                                </button>
                                <button className="px-4 py-2 hover:bg-[#3f3f3f] flex items-center transition">
                                    <span className="text-lg rotate-180">👍</span>
                                </button>
                            </div>
                            <button className="bg-[#272727] px-4 py-2 rounded-full hover:bg-[#3f3f3f] font-bold text-sm flex items-center gap-2 flex-shrink-0 transition">
                                <span>↪️</span> Share
                            </button>
                            <button className="bg-[#272727] px-4 py-2 rounded-full hover:bg-[#3f3f3f] font-bold text-sm flex items-center gap-2 flex-shrink-0 transition">
                                <span>📥</span> Save
                            </button>
                            <button className="bg-[#272727] w-10 h-10 rounded-full hover:bg-[#3f3f3f] flex items-center justify-center font-bold text-lg flex-shrink-0 transition">
                                ...
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#272727] p-3 rounded-xl hover:bg-[#333] transition-colors cursor-pointer group">
                        <div className="flex gap-2 text-sm font-bold mb-1">
                            <span>{parseInt(selectedVideo.statistics?.viewCount).toLocaleString()} views</span>
                            <span>•</span>
                            <span>{new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-gray-100 whitespace-pre-wrap line-clamp-3 group-hover:line-clamp-none leading-relaxed">
                            {selectedVideo.snippet.description}
                        </p>
                    </div>
                </div>

                <div className="lg:w-[400px] flex-shrink-0 flex flex-col gap-3">
                    {videos.map((item) => (
                        <div
                            key={item.id.videoId}
                            onClick={() => navigate(`/watch_v/${item.id.videoId}`)}
                            className="flex gap-2 cursor-pointer group"
                        >
                            <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-[#121212]">
                                <img
                                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                                    src={item.snippet.thumbnails.medium.url}
                                    alt={item.snippet.title}
                                />
                                <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[10px] font-bold text-white">
                                    10:00
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5 overflow-hidden pr-2">
                                <h3 className="font-bold text-sm line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">
                                    {item.snippet.title}
                                </h3>
                                <p className="text-xs text-[#aaa] font-medium mt-1 hover:text-white transition-colors" onClick={(e) => handleChannelClick(e, item.snippet.channelId)}>
                                    {item.snippet.channelTitle}
                                </p>
                                <div className="flex gap-1 text-[11px] text-[#aaa] font-medium">
                                    <span>{parseInt(selectedVideo.statistics?.viewCount).toLocaleString()} views</span>
                                    <span>•</span>
                                    <span>{new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}