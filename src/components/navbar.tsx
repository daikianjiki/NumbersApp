import { Link, Route, Routes } from "react-router-dom";
import Math from "./math";
import Trivia from "./trivia";
import Date from "./date";

export default function Navbar() {

    return (
        <>
            <Link to={"/math"}>Math</Link>
            <Link to={"/trivia"}>Trivia</Link>
            <Link to={"/date"}>Date</Link>

            {/* <Routes>
                <Route path="/math" element={ <Math/> } />
                <Route path="/trivia" element={ <Trivia/> } />
                <Route path="/date" element={ <Date/> } />
            </Routes> */}
        </>
    )

}