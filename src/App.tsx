import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {AnimatePresence} from "framer-motion";

function App() {

    return (<>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>

            </AnimatePresence>
        </>
    )
}

export default App
