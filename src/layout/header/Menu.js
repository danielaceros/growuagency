import Link from "next/link";
import { PopupWidget } from "react-calendly";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
      <li className="dropdown">
        <a href="/#">Home</a>    
      </li>
      <li>
        <a href="/#about">about</a>
      </li>
      <li className="dropdown">
        <a href="/#services">services</a>
      </li>
      <li className="dropdown">
        <a href="/#numbers">numbers</a>
      </li>
      <li className="dropdown">
        <a href="/#clients">clients</a>
      </li>
      <li className="dropdown">
        <a href="/#team">team</a>
      </li>
      <li className="dropdown">
        <a href="/#contact">contact</a>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <Link href="/#">
          Home
        </Link>
      </li>
      <li>
        <Link href="/#about">
          about
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/#services">
          services
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/#numbers">
          numbers
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/#clients">
          clients
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/#team">
          team
        </Link>
      </li>
      <li className="dropdown">
        <Link href="/#contact">
          contact
        </Link>
      </li>
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};
