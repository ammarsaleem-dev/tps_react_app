import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="left-items">
                <li><a href="##">Home</a></li>
                <li><a href="##">About</a></li>
                <li><a href="##">Contact</a></li>
                {/* <li><a href="##">dropdown</a></li> */}
                <li className="dropdown">
                    <a className="dropbtn">Dropdown</a>
                    <div className="dropdown-content">
                        <a href="##">Link 1</a>
                        <a href="##">Link 2</a>
                        <a href="##">Link 3</a>
                    </div>
                </li>
            </ul>
            <ul className="right-items">
                <li><a href="##">Login</a></li>
                <li><a href="##">Register</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;