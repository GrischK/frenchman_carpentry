import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {

    return (<>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
