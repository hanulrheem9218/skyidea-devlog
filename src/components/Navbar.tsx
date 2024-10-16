import { useState } from "react";
import { isMobile } from "react-device-detect";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigator = useNavigate();
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <audio id="audio-player">
        <source src="./ambient.mp3" type="audio/mpeg" />
      </audio>
      <img className="navbar -img" src="/skyidea-white.svg" onClick={()=>{navigator("/")}}/>
      {isMobile ? (
        <div className="navbar">
          {open ? (
            <RxHamburgerMenu onClick={toggle} size={35}/>
          ) : (
            <MdClose onClick={toggle} size={35}/>
          )}
          {open ? null : (
            <div className="navbar-menu">
              <ul className="navbar -burger">
                <li className="navbar -burger-list">
                  <a href="/">Personal</a>
                </li>
                <li className="navbar -burger-list">
                  <a href="/">Devlog</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ul className="navbar text -small">
          <li>
            <a className="navbar -list" href="/">
              Personal
            </a>
          </li>
          <li>
            <a className="navbar -list" href="/">
              Devlog
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
