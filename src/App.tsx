import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import TuringMachine from "./Components/TuringMachine/TuringMachine";
import Layout from "./Layout/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Landing />} />
                    <Route path="app/*" element={<TuringMachine />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
