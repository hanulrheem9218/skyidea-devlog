import { useState } from "react";
import { isMobile } from "react-device-detect";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { RiArrowRightSLine } from "react-icons/ri";
const Navbar = () => {
  const navigator = useNavigate();
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <img
        className="navbar -img"
        src="/skyidea-white.svg"
        onClick={() => {
          navigator("/");
        }}
      />
      {isMobile ? (
        <div className="navbar">
          {open ? (
            <RxHamburgerMenu onClick={toggle} size={35} />
          ) : (
            <MdClose onClick={toggle} size={35} />
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
        <>
        <ul className="navbar -burger">
          <li className="navbar -none">
            <Searchbar />
          </li>
          <li className="navbar -burger-list">
            {open ? (
              <RxHamburgerMenu
                onClick={toggle}
                size={14}
                style={{ backgroundColor: "transparent" }}
              />
            ) : (
              <MdClose onClick={toggle} size={14}
              style={{backgroundColor:"transparent"}} />
            )}
          </li>
          <li>
          {open ? null : (
          <div className="navbar -item-menu">
            <ul className="navbar -item-list">
              <li className="navbar -item">
                <a className="navbar -item-text" href="/">Personal</a>
                <RiArrowRightSLine className="arrows"/>
              </li>
              <li className="navbar -item">
                <a className="navbar -item-text" href="/">Devlog</a>
                <RiArrowRightSLine className="arrows"/>
              </li>
            </ul>
          </div>
        )}
          </li>
        </ul>
    
        </>
      )}
    </div>
  );
};

export default Navbar;
