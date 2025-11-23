import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const MenuBar = ({onMenuClick}) => {
  const navigate = useNavigate('');

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <div className="menu-bar">
            <div className="menu">
              <button onClick={() => onMenuClick("home")}><span>HOME</span></button>
              <button onClick={() => onMenuClick("aboutme")}><span>ABOUT ME</span></button>
              <button onClick={() => onMenuClick("project")}><span>MAIN PROJECT</span></button>
              <button onClick={() => onMenuClick("clone")}><span>CLONE CODING</span></button>
              <button onClick={() => onMenuClick("practical")}><span>PRACTICAL</span></button>
            </div>
        </div>
    );
};

export default MenuBar;