import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Blogs = () => {
  const items = [
    { name: "Blog-1", to: "/blogs/1" },
    { name: "Blog-2", to: "/blogs/2" },
    { name: "Blog-3", to: "/blogs/3" },
  ];
  return (
    <div>
      <h2>Blogs page</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <Link to={{pathname: item.to,search:"sort=name"}}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Blogs;
