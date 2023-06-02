import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {AnimatePresence} from "framer-motion";
import Contact from "./pages/Contact.tsx";

function App() {

    return (<>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>

            </AnimatePresence>
        </>
    )
}

export default App
