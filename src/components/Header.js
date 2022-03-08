import "./css/Header.css";
import HeaderOption from "./reusable/HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={GroupIcon} title="my newtwork" />
        <HeaderOption Icon={WorkIcon} title="jobs" />
        <HeaderOption Icon={MessageIcon} title="messaging" />
        <HeaderOption Icon={NotificationsIcon} title="notifications" />
        <HeaderOption avatar={"https://media-exp1.licdn.com/dms/image/C4E03AQFqojVVlb9yTQ/profile-displayphoto-shrink_100_100/0/1609923136295?e=1652313600&v=beta&t=hPNmgw4ISHPCPT9BBf2YoQxCLVGZTGrfv6CP9SuwtCI"} title="me" />
      </div>
    </div>
  );
};

export default Header;
