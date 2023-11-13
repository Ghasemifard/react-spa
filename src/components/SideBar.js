import { NavLink } from "react-router-dom";
const SideBar = () => {
    return ( <aside>
        <ul className="aside">
            <li><NavLink to="/profile/dashboard" activeClassName="activeTab">Dashboard</NavLink></li>
            <li><NavLink to="/profile/downloads" activeClassName="activeTab">Downloads</NavLink></li>

        </ul>
    </aside> );
}
 
export default SideBar;