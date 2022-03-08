import Avatar from "@material-ui/core/Avatar";
import "./css/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQGL6cpOareZxg/profile-displaybackgroundimage-shrink_200_800/0/1624865063477?e=1652313600&v=beta&t=5o8cc2nmbHNHIyVQBetJzcycaKbFaxA6NogQGYVvM4E"
          alt=""
        />
        <Avatar className="sidebar__avatar" alt="" />
        <h2>Durga Prasad Das</h2>
        <h4>dasdurga923@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed your profile?</p>
          <p className="sidebar__statNumber">22</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">30</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
