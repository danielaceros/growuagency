import Link from "next/link";
import { PopupWidget } from "react-calendly";

const DefaultFooter = ({ dark }) => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <PopupWidget
    url="https://calendly.com/danielaceros/growuagency"
    rootElement={document.getElementById("__next")}
    text="Book a FREE Consulting 🚀"
    textColor="#ffffff"
    color="#55e6a5"
  />
      <div className="container container-1290">
      <div className="mx-4 sm:mx-0">
        <div className="footer-top pt-25 pb-20">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/gc.png"
                          : "assets/images/logos/gc.png"
                      }
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a href="https://instagram.com/growuagency" target="_blank">
                  <i className="fab fa-instagram" /> <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="contact"></div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <img
                  src="https://img-c.udemycdn.com/user/200_H/28607384_1f53.jpg"
                  alt="Let's Work Man"
                />
                <span>Let’s Work Together</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:hello@growuagency"
                >
                  hello@growuagency <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="tel:+34629819696"
                >
                  +34 629 81 96 96 <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Quick Links
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <a href="/#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/#numbers">
                      Numbers
                    </a>
                  </li>
                  <li>
                    <a href="/#clients">
                      Clients
                    </a>
                  </li>
                  <li>
                    <a href="/#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
        <div className="row align-items-center">
          <p><br></br></p>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="">
            <div className="mb-40 wow fadeInLeft delay-0-2s animated">
              <p style={{
                fontSize: "12px"
              }}>
                <Link legacyBehavior href="/">
                  <a>GrowUAgency®</a>
                </Link>{" "}
                 by <u><a href="https://linktr.ee/danielacer">Daniel Acero</a></u> for passion and with love 🖤
              </p>
              <p><br></br></p>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
