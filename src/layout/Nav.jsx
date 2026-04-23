import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Upload from "../components/uploadVideo.jsx";

export default function Navsearch({ search, setSearch }) {
    const navigate = useNavigate();
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/search?q=${encodeURIComponent(search)}`);
        }
    }

    return (
        <div className="flex justify-between items-center py-[1%] px-[5%] [grid-area:nav]">
            <div className="flex items-center gap-[5%]">
                <button onClick={() => navigate("/")}><img className="h-[8vh] w-auto" src="/hamicon.svg" alt="hamburger" /></button>
                <span className="text-2xl cursor-pointer" onClick={() => navigate("/")}><b>Cinematic</b></span>
            </div>
            <div className="flex gap-[1px] w-[50%]">
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-[80%] border-2 border-gray-300 rounded-l-full pt-[0.5%] pb-[0.5%] pl-[5%] pr-[5%]" 
                    type="text" 
                    placeholder="Search Cinematic" 
                />
                <button onClick={handleSearch} className="border-2 border-gray-300 rounded-r-full p-[1%] ">🔍</button>
            </div>
            <div className="flex items-center gap-[15%]">
                <button onClick={() => setIsUploadOpen(true)}><img className="h-[8vh] w-auto " src="/uploadicon.svg " alt="Upload" /></button>
                <button><img className="h-[8vh] w-auto" src="/notificationicon.svg" alt="Notification" /></button>
                <button><img className="h-[8vh] w-auto" src="/profileicon.svg" alt="Profile" /></button>
            </div>

            {isUploadOpen && <Upload onClose={() => setIsUploadOpen(false)} />}
        </div>
    )
}