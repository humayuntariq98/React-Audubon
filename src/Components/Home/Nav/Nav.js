//The Link component is useful for user navigation
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/Birds">Birds Index</Link>
        </nav>
    )
}