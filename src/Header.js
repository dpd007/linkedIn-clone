import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
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
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
