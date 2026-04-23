import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Index.css";

const API_KEY = import.meta.env.VITE_YOUR_API_KEY;

export default function Search({ Input_value }) {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState(null);
    console.log("Input_value", Input_value)

    useEffect(() => {
        if (!Input_value) return;
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${Input_value}&type=video&key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error("YouTube Search API Error:", data.error);
                }
                setSearchResults(data);
            })
            .catch(err => console.error("Fetch error:", err));
    }, [Input_value])



    console.log("searchResults", searchResults)

    function SearchCard({ data }) {
        return (
            <div 
                key={data.id.videoId} 
                onClick={() => navigate(`/watch_v/${data.id.videoId}`)}
                className="flex gap-[5%] mb-4 p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition"
            >
                <img className="w-[25%] h-auto rounded" src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
                <div className="w-[75%] flex flex-col gap-[1%]">
                    <div><h3><b>{data.snippet.title}</b></h3></div>
                    <div><p>{data.snippet.publishTime}</p></div>
                    <div className="flex items-center gap-[2%]">
                        <span className="text-gray-600 text-sm">{data.snippet.channelTitle}</span>
                    </div>
                    <div><p className="text-sm text-gray-500 line-clamp-2">{data.snippet.description}</p></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {searchResults?.items?.map((item) => <SearchCard data={item} />)}
        </div>
    )
}