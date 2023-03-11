import {Route, Routes} from "react-router-dom";
import HomePage from "./Homepage";
import Contacts from "./Contacts";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/contacts" element={<Contacts/>}></Route>
            </Routes>
        </>
    );
};

export default App;