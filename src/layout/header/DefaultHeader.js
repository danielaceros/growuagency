import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";
import { PopupModal } from "react-calendly";
import React from "react";

const DefaultHeader = ({ singleMenu, dark }) => {
  const [isOpen, setisOpen] = React.useState(false)
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo m-5">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/gc.png"
                          : "assets/images/logos/gc.png"
                      }
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <NavSearch />
            {/* Menu Button */}
            <div className="menu-btns">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                  <div>
                  <button
                    style={{ display: "block", margin: "0 auto" }}
                    onClick={() => setisOpen(true)}
                  >
                    <i className="far fa-calendar-alt" style={{
                    color: "black"
                  }}/>
                  </button>
                  <PopupModal
                    url="https://calendly.com/danielaceros/growuagency"
                    onModalClose={() => setisOpen(false)}
                    open={isOpen}
   
                    rootElement={document.getElementById("__next")}
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
