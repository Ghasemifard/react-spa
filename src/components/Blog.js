import { Link } from "react-router-dom";
import queryString from "query-string";

const Blog = ({location,match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const id = match.params.id;
    return ( <div>
        <h2>Blog detail - {id}</h2>
        {/* <Link to="/blogs">Go to blogs page</Link> */}
        <br/>
        <Link to={`/blogs/${parseInt(id)+1}`}>go to next blog page?</Link>
    </div> );
}
 
export default Blog;