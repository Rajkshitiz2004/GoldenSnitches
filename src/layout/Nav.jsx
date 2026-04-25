import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Upload from "../components/uploadVideo.jsx";
import { useSidebar } from "../context/SidebarContext.jsx";

export default function Navsearch({ search, setSearch }) {
    const navigate = useNavigate();
    const { toggleSidebar } = useSidebar();
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/search?q=${encodeURIComponent(search)}`);
        }
    }

    return (
        <div className="flex justify-between items-center px-4 py-2 bg-[#0f0f0f] sticky top-0 z-[100] [grid-area:nav]">
            <div className="flex items-center gap-4">
                <button 
                    onClick={toggleSidebar} 
                    className="p-2 hover:bg-[#272727] rounded-full transition-colors hidden md:block"
                >
                    <img className="h-6 w-6 invert" src="/hamicon.svg" alt="menu" />
                </button>
                <div 
                    onClick={() => navigate("/")} 
                    className="flex items-center gap-1 cursor-pointer select-none"
                >
                    <span className="text-white text-xl font-bold tracking-tighter flex items-center">
                        <span className="bg-red-600 px-1 rounded-lg mr-1 text-xs py-0.5">▶</span>
                        Cinematic
                    </span>
                </div>
            </div>

            <div className="flex-grow max-w-[720px] mx-4 hidden sm:flex">
                <div className="flex w-full group">
                    <div className="flex flex-grow items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 group-focus-within:border-blue-500 transition-all ml-4">
                        <span className="hidden group-focus-within:block pr-3 text-gray-400">🔍</span>
                        <input 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="w-full bg-transparent text-white py-2 outline-none text-base placeholder:text-[#888]" 
                            type="text" 
                            placeholder="Search" 
                        />
                    </div>
                    <button 
                        onClick={handleSearch} 
                        className="bg-[#222222] border border-[#303030] border-l-0 rounded-r-full px-5 py-2 hover:bg-[#2a2a2a] transition-colors"
                        title="Search"
                    >
                        <span className="text-gray-300 text-lg">🔍</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <button 
                    onClick={() => setIsUploadOpen(true)}
                    className="p-2 hover:bg-[#272727] rounded-full transition-colors"
                    title="Create"
                >
                    <img className="h-6 w-6 invert" src="/uploadicon.svg" alt="Upload" />
                </button>
                <button 
                    className="p-2 hover:bg-[#272727] rounded-full transition-colors relative"
                    title="Notifications"
                >
                    <img className="h-6 w-6 invert" src="/notificationicon.svg" alt="Notification" />
                    <span className="absolute top-1 right-1 bg-red-600 text-[10px] text-white px-1 rounded-full border border-[#0f0f0f]">9+</span>
                </button>
                <button 
                    className="ml-2 hover:opacity-80 transition-opacity"
                    title="Profile"
                >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 border border-gray-700"></div>
                </button>
            </div>

            {isUploadOpen && <Upload onClose={() => setIsUploadOpen(false)} />}
        </div>
    )
}