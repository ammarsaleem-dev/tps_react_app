import { Link, useLocation } from 'react-router-dom';
import './sidebar.css'

function Sidebar() {

    const location = useLocation();

    return (
        <div className="sidebar">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} >Home</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} >About</Link>
            <Link to="/customers" className={location.pathname === '/customers' ? 'active' : ''} >Customers</Link>
        </div>
    )
}

export default Sidebar;