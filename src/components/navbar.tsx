import { Link, Route, Routes } from "react-router-dom";
import Math from "./math";
import Trivia from "./trivia";
import Date from "./date";


export default function Navbar() {

    return (
        
        <div className="navbar-container">
        <Link to={"/math"} className="nav-link">
          Math
        </Link>
        <Link to={"/trivia"} className="nav-link">
          Trivia
        </Link>
        <Link to={"/date"} className="nav-link">
          Date
        </Link>

            {/* <Routes>
                <Route path="/math" element={ <Math/> } />
                <Route path="/trivia" element={ <Trivia/> } />
                <Route path="/date" element={ <Date/> } />
            </Routes> */}
        </div>
    
    )
}