import { Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoard from "../components/Dashboard";
import Downloads from "../components/Downloads";

const Profile = (props) => {
  return (
    <>
      <p>Wellcom back to your profile</p>
      <SideBar />
      <Route path="/profile/dashboard" component={DashBoard} />
      <Route path="/profile/downloads" component={Downloads} />
    </>
  );
};

export default Profile;
