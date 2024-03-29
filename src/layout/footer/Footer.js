import DefaultFooter from "./DefaultFooter";
const Footer = ({ footer, dark }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter dark={dark} />;
    case 2:
      return <DefaultFooter dark={dark} />;
    case 3:
      return <DefaultFooter dark={dark} />;
    case 4:
      return <DefaultFooter dark={dark} />;
    case 5:
      return <DefaultFooter dark={dark} />;
    case 6:
      return <DefaultFooter dark={dark} />;
    default:
      return <DefaultFooter dark={dark} />;
  }
};
export default Footer;
