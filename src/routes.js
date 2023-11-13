import Blog from "./components/Blog";
import Posts from "./pages/PostsPage";
import AboutUs from "./pages/AboutUsPage";
import Blogs from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";
import Profile from "./pages/ProfilePage";


const routes = [
    { path: "/blogs/:id", component:Blog },
    { path: "/blogs", component:Blogs },
    { path: "/posts/:id([0-9]+)?", component:Posts },
    { path: "/about-us", component: AboutUs },
    { path: "/profile", component:Profile },
  { path: "/", component: HomePage, exact: true },
  {  component:NotFound },
];
export default routes;

// ([A_Za-z])
// ([0-9]+)