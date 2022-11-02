import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Practice from "./Components/Practice/Practice";
import Training from "./Components/Training/Training";
import TuringMachine from "./Components/TuringMachine/TuringMachine";
import Layout from "./Layout/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="turing-machine-simulator" element={<Landing />} />
                    <Route path="app" element={<TuringMachine />} />
                    <Route path="training" element={<Training />} />
                    <Route path="practice" element={<Practice />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
