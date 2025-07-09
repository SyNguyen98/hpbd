import "./App.scss";
import CountdownClock from "./component/countdown-clock/CountdownClock.tsx";
import Timeline from "./component/timeline/Timeline.tsx";
import {DAY_OF_BIRTH} from "./constants";

function App() {
    return (
        <div className="main-container">
            <h1 className="main-heading">
                Hành Trình
            </h1>

            <CountdownClock startDate={DAY_OF_BIRTH}/>

            <hr className="divider" />

            <Timeline/>
        </div>
    );
}

export default App;