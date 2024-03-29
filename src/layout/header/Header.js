import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";
const Header = ({ header, singleMenu, dark }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <DefaultHeader singleMenu={singleMenu} dark={dark} />;

    case 2:
      return <DefaultHeader singleMenu={singleMenu} dark={dark} />;

    case 5:
      return <DefaultHeader singleMenu={singleMenu} dark={dark} />;

    default:
      return <DefaultHeader singleMenu={singleMenu} dark={dark} />;
  }
};
export default Header;
