import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Index.css";

const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function Search({ Input_value }) {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        if (!Input_value) return;
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${Input_value}&maxResults=20&type=video&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error("YouTube Search API Error:", data.error);
                }
                setSearchResults(data);
            })
            .catch(err => console.error("Fetch error:", err));
    }, [Input_value])

    const handleChannelClick = (e, channelId) => {
        e.stopPropagation();
        navigate(`/creator/${channelId}`);
    };

    function SearchCard({ data }) {
        const { snippet, id } = data;
        return (
            <div
                key={id.videoId}
                onClick={() => navigate(`/watch_v/${id.videoId}`)}
                className="flex flex-col md:flex-row gap-4 mb-4 p-2 cursor-pointer group rounded-xl transition duration-200"
            >
                <div className="w-full md:w-[360px] flex-shrink-0 relative aspect-video rounded-xl overflow-hidden bg-[#121212]">
                    <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={snippet.thumbnails.medium.url}
                        alt={snippet.title}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[11px] font-bold text-white">
                        12:45
                    </div>
                </div>

                <div className="flex flex-col gap-1 flex-grow pr-4">
                    <h3 className="text-white text-lg md:text-xl font-bold line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">
                        {snippet.title}
                    </h3>
                    <div className="text-xs text-gray-500 font-medium mb-2">
                        <span>{new Date(snippet.publishTime).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2 group/channel" onClick={(e) => handleChannelClick(e, snippet.channelId)}>
                        <div className="w-6 h-6 rounded-full bg-[#333] flex items-center justify-center text-[10px] font-bold text-gray-400 hover:bg-[#444] transition overflow-hidden">
                            {snippet.channelTitle[0]}
                        </div>
                        <span className="text-gray-400 text-sm font-medium hover:text-white transition">
                            {snippet.channelTitle}
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 line-clamp-2 max-w-2xl leading-relaxed">
                        {snippet.description}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[#0f0f0f] min-h-screen p-4 md:p-6 [grid-area:main]">
            <div className="max-w-[1096px] mx-auto flex flex-col gap-4">
                {searchResults?.items?.map((item) => (
                    <SearchCard key={item.id.videoId} data={item} />
                ))}
            </div>
        </div>
    )
}