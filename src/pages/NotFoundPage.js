import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = (props) => {
    return ( <>
    <p>404<br/>
    The page not found</p>
    <Link to="/">Go to home page</Link>
    </> );
}
 
export default NotFound;