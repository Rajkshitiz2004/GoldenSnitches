let sampleData = [
    {
        "kind": "youtube#channelListResponse",
        "etag": "4hdkkkwm75g3dJR4ZGhq1IXR3MQ",
        "pageInfo": {
            "totalResults": 1,
            "resultsPerPage": 5
        },
        "items": [
            {
                "kind": "youtube#channel",
                "etag": "ITZ2oAjOKmG9dBy8J61O5PINZFc",
                "id": "UCeK0MtG4re-jj_hEW53BtnA",
                "snippet": {
                    "title": "Antil Entertainment",
                    "description": "ANTIL ENTERTAINMENT\nRedefining Haryanvi Music Since 2009\n\nAbout Us\nPioneers of the Haryanvi music revolution, Antil Entertainment has shaped the industry with iconic artists and contemporary folk fusion. Home to India's first dedicated Haryanvi YouTube channel featuring:  \n- Chart-topping DJ Remixes • HD Music Videos  \n- Authentic Desi Ragini • Lakhmichand Classics  \n- Folk Revivals • Live Stage Performances  \n\nDigital Partnerships \n🎵 Music Consultant & Promotions\n🌍 Global Distribution: \nWMG | Globe Music Junction  \n\nConnect With Us\n📧Email:amitchaudhary2109@gmail.com  ",
                    "customUrl": "@antilentertainment",
                    "publishedAt": "2017-03-28T08:07:52Z",
                    "thumbnails": {
                        "default": {
                            "url": "https://yt3.ggpht.com/bhtltCUneqU3fzetJSg1iDHP0AmP_M1LLQfRBeAWNtKLEaXS_zw_sRsf_ax3MKm-g_t4oqrHGA=s88-c-k-c0x00ffffff-no-rj",
                            "width": 88,
                            "height": 88
                        },
                        "medium": {
                            "url": "https://yt3.ggpht.com/bhtltCUneqU3fzetJSg1iDHP0AmP_M1LLQfRBeAWNtKLEaXS_zw_sRsf_ax3MKm-g_t4oqrHGA=s240-c-k-c0x00ffffff-no-rj",
                            "width": 240,
                            "height": 240
                        },
                        "high": {
                            "url": "https://yt3.ggpht.com/bhtltCUneqU3fzetJSg1iDHP0AmP_M1LLQfRBeAWNtKLEaXS_zw_sRsf_ax3MKm-g_t4oqrHGA=s800-c-k-c0x00ffffff-no-rj",
                            "width": 800,
                            "height": 800
                        }
                    },
                    "localized": {
                        "title": "Antil Entertainment",
                        "description": "ANTIL ENTERTAINMENT\nRedefining Haryanvi Music Since 2009\n\nAbout Us\nPioneers of the Haryanvi music revolution, Antil Entertainment has shaped the industry with iconic artists and contemporary folk fusion. Home to India's first dedicated Haryanvi YouTube channel featuring:  \n- Chart-topping DJ Remixes • HD Music Videos  \n- Authentic Desi Ragini • Lakhmichand Classics  \n- Folk Revivals • Live Stage Performances  \n\nDigital Partnerships \n🎵 Music Consultant & Promotions\n🌍 Global Distribution: \nWMG | Globe Music Junction  \n\nConnect With Us\n📧Email:amitchaudhary2109@gmail.com  "
                    },
                    "country": "IN"
                },
                "statistics": {
                    "viewCount": "455594954",
                    "subscriberCount": "1800000",
                    "hiddenSubscriberCount": false,
                    "videoCount": "3701"
                }
            }
        ]
    }
]

export default function CreatorChannel() {
    const channel = sampleData[0].items[0];
    const { snippet, statistics } = channel;

    const formatCount = (count) => {
        const num = parseInt(count);
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen w-full font-sans">
            {/* Banner Section */}
            <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                    alt="Channel Banner" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Profile Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-4">
                    <img 
                        src={snippet.thumbnails.high.url} 
                        alt={snippet.title} 
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0f0f0f] shadow-lg object-cover"
                    />
                    <div className="flex flex-col gap-4 text-center md:text-left flex-grow">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{snippet.title}</h1>
                            <p className="text-gray-400 mt-1 flex flex-wrap justify-center md:justify-start gap-2 text-sm md:text-base">
                                <span>{snippet.customUrl}</span>
                                <span>•</span>
                                <span>{formatCount(statistics.subscriberCount)} subscribers</span>
                                <span>•</span>
                                <span>{formatCount(statistics.videoCount)} videos</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-colors">
                                Subscribe
                            </button>
                            <button className="bg-[#222222] p-2.5 rounded-full hover:bg-[#333333] transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="border-b border-gray-800 mt-4 overflow-x-auto">
                    <ul className="flex gap-8 text-sm font-bold tracking-wide whitespace-nowrap">
                        <li className="pb-3 border-b-2 border-white cursor-pointer transition-colors">Home</li>
                        <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition-colors">Videos</li>
                        <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition-colors">Shorts</li>
                        <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition-colors">Playlists</li>
                        <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition-colors">Community</li>
                        <li className="pb-3 text-gray-400 hover:text-white cursor-pointer transition-colors">About</li>
                        <li className="pb-3 ml-auto text-gray-400 hover:text-white cursor-pointer transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </li>
                    </ul>
                </div>

                {/* Featured Video Section */}
                <div className="py-8">
                    <div className="bg-[#1a1a1a]/50 rounded-2xl p-6 flex flex-col lg:flex-row gap-8 hover:bg-[#1a1a1a]/80 transition-colors cursor-pointer group border border-gray-800/50">
                        <div className="lg:w-3/5 relative aspect-video overflow-hidden rounded-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop" 
                                alt="Featured Video" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-bold">15:42</div>
                        </div>
                        <div className="lg:w-2/5 flex flex-col justify-center gap-4">
                            <span className="text-[10px] font-bold bg-[#333] px-2 py-0.5 rounded tracking-widest uppercase w-fit">Featured</span>
                            <h2 className="text-2xl font-bold line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                                Mastering Cinematic Lighting in Unreal Engine 5.4
                            </h2>
                            <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                                In this deep dive, we explore the new volumetric lighting tools and Lumen enhancements. Learn how to create breathtaking atmosphere and realistic shadows for your next cinematic project.
                            </p>
                            <p className="text-gray-500 text-xs font-bold tracking-tight">
                                420K views • 2 days ago
                            </p>
                        </div>
                    </div>
                </div>

                {/* Recent Uploads Grid */}
                <div className="py-8 border-t border-gray-800">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Recent Uploads</h2>
                        <button className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                            Play all
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col gap-3 cursor-pointer group">
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                                    <img 
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?q=80&w=800&auto=format&fit=crop`} 
                                        alt={`Video ${i}`} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold">12:45</div>
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white shadow-xl" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-sm line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">
                                        {i === 1 ? "The Secrets of 35mm Film: Why it Still Matters..." : i === 2 ? "VFX Breakdown: Creating the 'Neon Storm'..." : i === 3 ? "Why Indie Horror is Winning the Box Office..." : "Color Grading Masterclass: The..."}
                                    </h3>
                                    <p className="text-gray-500 text-[11px] font-bold tracking-tight">
                                        {i * 240}K views • {i} {i === 1 ? 'week' : 'weeks'} ago
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