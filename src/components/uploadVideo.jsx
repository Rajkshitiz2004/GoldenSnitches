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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
            <div id="Upload_video_class" className="bg-[#121212] text-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col">
    
                <div className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
                    <h2 className="text-xl font-bold">Upload Video</h2>
                    <button onClick={handleClose} className="text-gray-400 hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row p-8 gap-8 overflow-y-auto max-h-[70vh]">
                    
                    <div className="lg:w-1/2 border-2 border-dashed border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#181818] group hover:border-gray-600 transition-colors">
                        <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2a2a2a] transition-colors">
                            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <p className="text-lg font-medium mb-1">Drag and drop video files to upload</p>
                        <p className="text-xs text-gray-500 mb-8">Your videos will be private until you publish them</p>
                        <button className="bg-[#ff4b2b] hover:bg-[#ff5b3b] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg active:scale-95">
                            SELECT FILES
                        </button>
                    </div>

                    
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Title (required)</label>
                            <input 
                                type="text" 
                                placeholder="Add a title that describes your video"
                                className="bg-[#181818] border border-gray-800 rounded-lg p-4 focus:border-gray-600 outline-none transition text-sm text-gray-200 placeholder:text-gray-600"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Description</label>
                            <textarea 
                                rows="5"
                                placeholder="Tell viewers about your video"
                                className="bg-[#181818] border border-gray-800 rounded-lg p-4 focus:border-gray-600 outline-none transition text-sm text-gray-200 placeholder:text-gray-600 resize-none"
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-5 border-t border-gray-800 bg-[#0d0d0d] flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-600 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border border-gray-800 flex items-center justify-center text-[8px] font-bold italic">i</span>
                        By submitting, you agree to our Terms of Service
                    </p>
                    <div className="flex items-center gap-4 ml-auto">
                        <button onClick={handleClose} className="text-xs font-bold text-gray-500 hover:text-gray-300 transition-colors uppercase tracking-widest">
                            Cancel
                        </button>
                        <button className="bg-[#222222] text-gray-600 px-10 py-2 rounded-full font-bold text-xs uppercase tracking-widest cursor-not-allowed">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}