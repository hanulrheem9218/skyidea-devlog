import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { RiArrowRightSLine } from "react-icons/ri";

interface NavBarProps {
  isBlack?: boolean;
}
const Navbar: React.FC<NavBarProps> = ({ isBlack }) => {
  const navigator = useNavigate();
  const navDivRef = useRef<HTMLDivElement | null>(null);
  const navLiRef = useRef<HTMLLIElement | null>(null);
  const [open, setOpen] = useState(true);
  const handleClick = (e: MouseEvent) =>{
    const isList:boolean | HTMLCollectionOf<Element>= (e.target instanceof HTMLParagraphElement) && e.target.getElementsByClassName("navbar -item-text");
    if(navDivRef.current && !navDivRef.current.contains(e.target as Node) && !isList){
        setOpen(true);
    }
    else if(navLiRef.current && !navLiRef.current.contains(e.target as Node)&& !isList){
        setOpen(true);
    }
  }
  useEffect(()=> {
    document.addEventListener("mousedown", handleClick);
    return () =>{
      document.removeEventListener("mousedown", handleClick);
    }
  })
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={isBlack ? "navbar -black" : "navbar"}>
      <img
        className="navbar -img"
        src="/skyidea-white.svg"
        onClick={() => {
          navigator("/");
        }}
      />
      {isMobile ? (
        <div className="navbar -burger" ref={navDivRef}>
         <Searchbar/>
          {open ? (
            <IoIosMenu
              onClick={toggle}
              size={30}
              style={{ backgroundColor: "transparent" }}
            />
          ) : (
            <MdClose
              onClick={toggle}
              size={30}
              style={{ backgroundColor: "transparent" }}
            />
          )}
          {open ? null : (
            <div className="navbar -item-menu">
              <ul className="navbar -item-list">
                <li
                  className="navbar -item"
                  onClick={() => {
                    navigator("/");
                  }}
                >
                  <p className="navbar -item-text">Home</p>
                  <RiArrowRightSLine className="arrows" />
                </li>
                <li
                  className="navbar -item"
                  onClick={() => {
                    navigator("/devlog");
                  }}
                >
                  <p className="navbar -item-text">Devlog</p>
                  <RiArrowRightSLine className="arrows" />
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
            <li className="navbar -burger-list" onClick={toggle} ref={navLiRef}>
              {open ? (
                <RxHamburgerMenu
                  size={14}
                  style={{ backgroundColor: "transparent" }}
                />
              ) : (
                <MdClose size={14} style={{ backgroundColor: "transparent" }} />
              )}
            </li>
            <li>
              {open ? null : (
                <div className="navbar -item-menu">
                  <ul className="navbar -item-list">
                    <li className="navbar -item"  onClick={() => {
                    navigator("/");
                  }}>
                      <p className="navbar -item-text">
                        Home
                      </p>
                      <RiArrowRightSLine className="arrows" />
                    </li>
                    <li className="navbar -item" onClick={() => {
                    navigator("/devlog");
                  }}>
                      <p className="navbar -item-text">
                        Devlog
                      </p>
                      <RiArrowRightSLine className="arrows" />
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
