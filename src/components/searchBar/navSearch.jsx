export default function Navsearch(){
    return (
        <div className="navSearch">
            <div>
                <button><img src="./hamtag.svg" alt="hamburger" /></button>
                <span><b>Cinematic</b></span>
            </div>
            <input type="text" placeholder="🔍 Search Cinematic" />
            <div>
                <button><img src="./uploadicon.svg" alt="Upload" /></button>
                <button><img src="./notificationicon.svg" alt="Notification" /></button>
                <button><img src="./profileicon.svg" alt="Profile" /></button>
            </div>
        </div>
    )
}