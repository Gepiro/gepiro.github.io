import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import ButtonAppBar from "./Navbar";
import HomePage from "./Homepage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </>
    );
};

export default App;