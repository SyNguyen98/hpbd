import "./App.scss";
import {useState} from "react";
import Avatar from "./component/avatar/Avatar.tsx";
import CountdownClock from "./component/countdown-clock/CountdownClock.tsx";
import Timeline from "./component/timeline/Timeline.tsx";
import WishCards from "./component/wish-card/WishCards.tsx";
import {DAY_OF_BIRTH} from "./constants";

function App() {
    const [page, setPage] = useState("info");

    return (
        <>
            <header className="main-header">
                <div className="page-title"
                     style={{color: page === "info" ? "#2196F3" : "inherit"}}
                     onClick={() => setPage("info")}>
                    Thông Tin
                </div>
                <div className="page-title"
                     style={{color: page === "timeline" ? "#2196F3" : "inherit"}}
                     onClick={() => setPage("timeline")}>
                    Dòng Thời Gian
                </div>
                <div className="page-title"
                     style={{color: page === "wishes" ? "#2196F3" : "inherit"}}
                     onClick={() => setPage("wishes")}>
                    Lời Chúc
                </div>
            </header>

            <div className="main-container">
                {page === "info" && (
                    <>
                        <Avatar/>
                        <CountdownClock startDate={DAY_OF_BIRTH}/>
                    </>
                )}

                {page === "timeline" && (
                    <Timeline/>
                )}

                {page === "wishes" && (
                    <WishCards/>
                )}
            </div>
        </>

    );
}

export default App;