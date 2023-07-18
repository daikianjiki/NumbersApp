import { Link, Route, Routes } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="navbar-container">
          <Link to={"/math"} className="nav-link">Math</Link>
          <Link to={"/trivia"} className="nav-link">Trivia</Link>
          <Link to={"/date"} className="nav-link">Date</Link>
        </div>
    )
}