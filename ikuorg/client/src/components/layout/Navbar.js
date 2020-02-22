const Navbar = () => {
    return (
      <nav className="navbar bg-dark">
        <h1>
        </h1>
        <ul>
            <li>
                <Link to="!#">About</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
     </nav>
    )
}
