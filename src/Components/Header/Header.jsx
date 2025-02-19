import { Link } from "react-router-dom";
export default function Header({useId}) {
  return (
    <nav>
        <Link to="/" style={{ marginRight: '30px font:bold' }}>Home</Link>
        <Link to="/About" style={{ marginRight: '30px font:bold' }}>About</Link>
        <Link to="/User" style={{ marginRight: '30px font:bold' }}>User</Link>
        <Link to={'/posts'}>Posts</Link>
    </nav>
  )
}
