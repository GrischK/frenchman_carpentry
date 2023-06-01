import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NavBar from "./components/NavBar.tsx";
import {AnimatePresence} from "framer-motion";

function App() {

    return (<>
            <AnimatePresence>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>

            </AnimatePresence>
        </>
    )
}

export default App
