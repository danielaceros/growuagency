import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const About = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                We're a Social Media
                <img
                  className="mxw-20"
                  src="assets/images/banner/inside-title1.png"
                  alt="title"
                />
                <img
                  className="mxw-40"
                  src="assets/images/banner/inside-title2.png"
                  alt="title"
                />
                Marketing Agency
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-30 pb-50">
              Transforming ideas into digital realities with innovative strategies to boost your online presence. <br></br>Grow your brand with us! Our clients have been trusting us since:
              </div>
              <div className="row">
                <div className="col-xl-10">
                  <div className="client-logo-wrap">
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two1.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two2.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two3.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s mb-100">
              <div className="video-year text-lg-end text-center rel">
                2018
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Who We Are start */}
      
      {/* Who We Are end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Social Media</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Social Media</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Social Media</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Team Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-between mx-auto">
          <div id="solutions"></div>
          <div className="col-xl-2 col-lg-3 col-6 mx-auto">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
              <i className="fal fa-check-circle" />
              <Counter end={6} />
              <span className="counter-title">Years Of Experience</span>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-6 mx-auto">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
              <i className="fal fa-check-circle" />
              <Counter end={4} extraClass={"k"} />
              <span className="counter-title">Accounts Growed</span>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-6 mx-auto">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
              <i className="fal fa-check-circle" />
              <Counter end={48} />
              <span className="counter-title">Current Clients</span>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-6 mx-auto">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
              <i className="fal fa-check-circle" />
              <Counter end={8} extraClass={"k"}/>
              <span className="counter-title">Projects Finished</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="team-area pt-70 rpt-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Our Clients</span>
                <h2>people that trust in us</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/ixc.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Brahim Díaz</h4>
                  <span>Professional Footballer</span>
                </div>
                <div className="btn-social">
                      <span>Brahim Díaz</span>{" "}
                  <div className="social-style-two">
                    <a href="https://instagram.com/brahim" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@iambrahimdiaz" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image">
                  <img src="assets/images/services/iom.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Omar Montes</h4>
                  <span>Emergent Artist</span>
                </div>
                <div className="btn-social">
                      <span>Omar Montes</span>{" "}
                  <div className="social-style-two">
                    <a href="https://www.instagram.com/omarmontes" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://tiktok.com/@omarmontesoficial" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://youtube.com/@omarmontes" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/ir.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Royki</h4>
                  <span>Adventure Influencer</span>
                </div>
                <div className="btn-social">
                      <span>Royki</span>{" "}
                  <div className="social-style-two">
                    <a href="https://www.instagram.com/royki" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@roykii" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://www.youtube.com/@royki" target="_blank"> 
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/ib.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Brian Zaballos</h4>
                  <span>Fitness Influencer</span>
                </div>
                <div className="btn-social">
                      <span>Brian Zaballos</span>{" "}
                  <div className="social-style-two">
                    <a href="https://www.instagram.com/brianzaballxs" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@brianzaballxs" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://www.youtube.com/@brianzaballos" target="_blank"> 
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/imp.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Manuel Palop</h4>
                  <span>Founder of Team Heretics</span>
                </div>
                <div className="btn-social">
                      <span>Manuel Palop</span>{" "}
                  <div className="social-style-two">
                    <a href="https://www.instagram.com/manupalop84" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@manupalop84" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://www.youtube.com/@manupalop84" target="_blank"> 
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/i1.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Celia Rubio</h4>
                  <span>Financial Influencer</span>
                </div>
                <div className="btn-social">
                      <span>Celia Rubio</span>{" "}
                  <div className="social-style-two">
                    <a href="https://instagram.com/_celiarubio" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://tiktok.com/@_celiarubio" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://youtube.com/@CeliaRubiofinanzas" target="_blank"> 
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
              <div className="image">
                  <img src="assets/images/services/i2.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>MerigoPsico</h4>
                  <span>Psycology Influencer</span>
                </div>
                <div className="btn-social">
                      <span>MerigoPsico</span>{" "}
                  <div className="social-style-two">
                    <a href="https://instagram.com/merigopsico" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://tiktok.com/@merigopsico" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://youtube.com/@merigopsico" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/services/i3.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Alpacatech</h4>
                  <span>Tech Influencer</span>
                </div>
                <div className="btn-social">
                      <span>Alpacatech</span>{" "}
                  <div className="social-style-two">
                    <a href="https://instagram.com/alpacatechyt" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://tiktok.com/@alpacatechyt" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://youtube.com/@alpacatech" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Statistics Area start */}
      
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      
      {/* Testimonial Area end */}
      {/* Client Logo Two start */}
      <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h4>Also Colaborated With</h4>
          </div>
          <div className="client-logo-wrap">
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/client-logos/client-logo1.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/client-logos/client-logo2.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/client-logos/client-logo3.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/client-logos/client-logo4.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/client-logos/client-logo5.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
            <Link legacyBehavior href="/contact">
              <a className="client-logo-item wow fadeInUp delay-0-7s">
                <img
                  src="assets/images/client-logos/client-logo6.png"
                  alt="Client Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
