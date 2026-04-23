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

    useEffect(() => {
        if (!videoId) return;

        // Fetch current video details
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
                    
                    // Fetch channel statistics (subscribers)
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

        // Fetch related/recommended videos
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&key=${API_KEY}&q=react`)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    setVideos(data.items);
                }
            })
            .catch(err => console.error("Recommendations fetch error:", err));
    }, [videoId]);

    function IframePlayer({ videoId }) {
        return (
            <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
            ></iframe>
        );
    }

    if (error) {
        return <div className="p-6 text-center text-red-500">Error: {error}</div>;
    }

    if (!selectedVideo) {
        return <div className="p-6 text-center">Loading...</div>;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
            <div className="lg:w-2/3 flex flex-col gap-4">
                <IframePlayer videoId={videoId} />
                
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-bold mb-2">{selectedVideo.snippet.title}</h2>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                                {selectedVideo.snippet.channelTitle ? selectedVideo.snippet.channelTitle[0] : "?"}
                            </div>
                            <div>
                                <h4 className="font-semibold">{selectedVideo.snippet.channelTitle}</h4>
                                <p className="text-sm text-gray-500">{formatCount(channelStats?.subscriberCount)} Subscribers</p>
                            </div>
                            <button className="bg-black text-white px-4 py-2 rounded-full font-medium ml-4 hover:bg-gray-800 transition">
                                Subscribe
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <div className="flex bg-gray-100 rounded-full overflow-hidden">
                                <button className="px-4 py-2 hover:bg-gray-200 border-r border-gray-200 flex items-center gap-1">
                                    👍 <span className="text-sm">{formatCount(selectedVideo.statistics?.likeCount)}</span>
                                </button>
                                <button className="px-4 py-2 hover:bg-gray-200">
                                    👎
                                </button>
                            </div>
                            <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 font-medium">
                                Share
                            </button>
                            <button className="bg-gray-100 w-10 h-10 rounded-full hover:bg-gray-200 flex items-center justify-center font-bold">
                                ...
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 bg-gray-50 p-4 rounded-xl">
                        <div className="flex gap-2 text-sm font-semibold mb-1">
                            <span>{formatCount(selectedVideo.statistics?.viewCount)} views</span>
                            <span>•</span>
                            <span>{new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            {selectedVideo.snippet.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/3 flex flex-col gap-4">
                <h3 className="font-bold text-lg px-2">Recommended</h3>
                <div className="flex flex-col gap-3">
                    {videos.map((item) => (
                        <div 
                            key={item.id.videoId} 
                            onClick={() => navigate(`/watch_v/${item.id.videoId}`)}
                            className="flex gap-3 cursor-pointer group hover:bg-gray-100 p-2 rounded-lg transition"
                        >
                            <div className="relative w-40 flex-shrink-0">
                                <img 
                                    className="w-full h-24 object-cover rounded-lg" 
                                    src={item.snippet.thumbnails.medium.url} 
                                    alt={item.snippet.title} 
                                />
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition">
                                    {item.snippet.title}
                                </h3>
                                <p className="text-xs text-gray-600">{item.snippet.channelTitle}</p>
                                <div className="flex gap-1 text-[10px] text-gray-500">
                                    <span>{new Date(item.snippet.publishedAt).getFullYear()} views</span>
                                    <span>•</span>
                                    <span>2 days ago</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}