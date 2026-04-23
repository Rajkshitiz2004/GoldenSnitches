import { useSidebar } from "../context/SidebarContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Hamburger() {
    const { isCollapsed } = useSidebar();
    const navigate = useNavigate();
    const mainLinks = [
        { name: "Home", icon: "/homeicon.svg", path: "/" },
        { name: "Shorts", icon: "/shortsicon.svg" },
        { name: "Subscriptions", icon: "/subscriptionsicon.svg" },
    ];

    const libraryLinks = [
        { name: "Library", icon: "/libraryicon.svg" },
        { name: "History", icon: "/historyicon.svg" },
        { name: "Liked Videos", icon: "/likedvideosicon.svg" },
    ];

    const SidebarItem = ({ name, icon, path }) => (
        <li className="px-3">
            <div 
                onClick={() => path && navigate(path)}
                className={`flex ${isCollapsed ? 'flex-col items-center justify-center py-4 gap-1' : 'flex-row items-center gap-5 px-3 py-2'} hover:bg-[#272727] rounded-lg cursor-pointer transition-all duration-200 group`}
            >
                <img src={icon} alt={name} className="w-6 h-6 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className={`${isCollapsed ? 'text-[10px]' : 'text-sm'} text-white font-medium tracking-tight text-center truncate w-full`}>
                    {!isCollapsed ? name : (name.length > 8 ? name.substring(0, 5) + '...' : name)}
                </span>
            </div>
        </li>
    );

    return (
        <div className={`bg-[#0f0f0f] h-full ${isCollapsed ? 'w-[72px]' : 'w-full'} border-r border-[#303030] py-3 flex flex-col gap-2 overflow-y-auto [grid-area:ham] scrollbar-hide transition-all duration-300`}>
            {!isCollapsed && (
                <header className="px-6 py-2 mb-2 hidden lg:block animate-in fade-in">
                    <h3 className="text-white text-base font-bold tracking-tight">The Curator</h3>
                    <p className="text-[#aaa] text-[10px] font-bold tracking-widest uppercase">Premium Member</p>
                </header>
            )}

            <section>
                <ul className="flex flex-col gap-1">
                    {mainLinks.map((link) => (
                        <SidebarItem key={link.name} {...link} />
                    ))}
                </ul>
            </section>

            <div className="mx-3 my-2 border-t border-[#303030]"></div>

            <section>
                {!isCollapsed && (
                    <header className="px-6 py-2 hidden lg:block animate-in fade-in">
                        <h4 className="text-white text-sm font-bold flex items-center gap-2">
                            You <span className="text-gray-500 text-xs font-normal">›</span>
                        </h4>
                    </header>
                )}
                <ul className="flex flex-col gap-1">
                    {libraryLinks.map((link) => (
                        <SidebarItem key={link.name} {...link} />
                    ))}
                </ul>
            </section>
        </div>
    )
}