import {Link} from "react-router-dom"
import "../css/NavBar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">iMovie 🍿</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/top-rated" className="nav-link">Top Rated</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar