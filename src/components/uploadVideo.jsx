import { useNavigate } from "react-router-dom";

export default function Upload({ onClose }) {
    const navigate = useNavigate();

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            navigate("/");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[200] backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div 
                id="Upload_video_class" 
                className="bg-[#282828] text-white w-full max-w-[960px] h-[90vh] max-h-[720px] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
            >
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                    <h2 className="text-xl font-medium tracking-tight">Upload videos</h2>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-400 hover:text-white transition-colors" title="Send Feedback">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
                            </svg>
                        </button>
                        <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors" title="Close">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex-grow flex flex-col lg:flex-row overflow-hidden bg-[#1f1f1f]">
                    <div className="lg:w-3/5 p-12 flex flex-col items-center justify-center text-center border-r border-white/5">
                        <div className="w-32 h-32 bg-[#282828] rounded-full flex items-center justify-center mb-8 shadow-inner group hover:bg-[#333] transition-colors cursor-pointer">
                            <svg className="w-16 h-16 text-[#909090] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">Drag and drop video files to upload</h3>
                        <p className="text-sm text-[#aaa] mb-10 max-w-sm">
                            Your videos will be private until you publish them.
                        </p>
                        <button className="bg-[#3ea6ff] hover:bg-[#65b8ff] text-[#0f0f0f] px-6 py-2.5 rounded-sm font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 uppercase">
                            Select Files
                        </button>
                    </div>

                    <div className="lg:w-2/5 p-8 flex flex-col gap-6 overflow-y-auto no-scrollbar border-l border-black/20">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Details</h4>
                        
                        <div className="flex flex-col gap-1.5 group">
                            <label className="text-[11px] font-bold text-[#3ea6ff] uppercase">Title (required)</label>
                            <div className="bg-transparent border border-white/20 rounded focus-within:border-[#3ea6ff] transition-all overflow-hidden">
                                <input 
                                    type="text" 
                                    placeholder="Add a title that describes your video"
                                    className="w-full bg-transparent p-3 outline-none text-base text-gray-100 placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 group">
                            <label className="text-[11px] font-bold text-gray-500 uppercase group-focus-within:text-[#3ea6ff]">Description</label>
                            <div className="bg-transparent border border-white/20 rounded focus-within:border-[#3ea6ff] transition-all overflow-hidden">
                                <textarea 
                                    rows="6"
                                    placeholder="Tell viewers about your video"
                                    className="w-full bg-transparent p-3 outline-none text-base text-gray-100 placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-4 p-4 rounded-lg bg-[#282828] border border-white/5">
                            <p className="text-xs text-[#aaa] leading-relaxed italic">
                                By submitting your videos to Cinematic, you acknowledge that you agree to our Terms of Service and Community Guidelines.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 border-t border-white/10 bg-[#282828] flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 font-medium">No files selected</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-[#3ea6ff] text-[#0f0f0f] px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-[#65b8ff] transition-colors disabled:opacity-50" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}