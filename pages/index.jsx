import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout dark>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  the <span>growu</span> Agency
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">

        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <div id="about"></div>
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about"></div>
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Us</span>
                  <h2>
                    We make brands and public figures grow in social media
                  </h2>
                </div>
                <div className="content">
                  <p>
                    We're a flexible SMMA focused on the client, we make special strategies for our clients, also we take care for every detail, and we have flexible fares adaptaded easily to the final client.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              THE <span>GROWU</span> AGENCY
            </span>
          </div>
        </div>
      </div>
      <div id="services"></div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="services"></div>
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>These are the principal services we offer</h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span><i className="fas fa-bullhorn" /></span>
                  </div>
                  <div className="content">
                    <h5>Social Growth</h5>
                    <p>
                      We design strategies for each client in order to make more numbers in their socials
                    </p>
                    <Link legacyBehavior href="/services">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span><i className="fas fa-desktop	" /></span>
                  </div>
                  <div className="content">
                    <h5>Web Solutions</h5>
                    <p>
                      We develop web solutions for clients, incluiding web presence, mail, domain and another services
                    </p>
                    <Link legacyBehavior href="/services">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span><i className="fas fa-mobile-alt	" /></span>
                  </div>
                  <div className="content">
                    <h5>App Development</h5>
                    <p>
                      We develop custom projects for clients, incluiding Android and iOS native development and cross-platform development
                    </p>
                    <Link legacyBehavior href="/services">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/services/what-we-do.jpg"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="numbers"></div>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
          <div id="solutions"></div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={6} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={64} extraClass={"k"} />
                <span className="counter-title">Grows</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Current Clients</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={4} extraClass={"k"}/>
                <span className="counter-title">Projects Finished</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Popular Services</span>
                <h2>We Provide Amazing Grow Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                      Social Media Grow
                  </h5>
                  <img src="assets/images/services/ico2.webp" alt="Icon" />
                </div>
                <div className="content">
                  <p>We grow up your business with a personalized strategy</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                      Web Development
                  </h5>
                  <img src="assets/images/services/icon2.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>We build and maintain the web presence for your business</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                      Android, i0S App Building
                  </h5>
                  <img src="assets/images/services/icon4.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>We develop your native or cross-app for your business</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                      Custom Solutions
                  </h5>
                  <img src="assets/images/services/ico3.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>We also offer custom services for custom clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>growu</span> agency
            </span>
            <div id="clients"></div>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      {/* Project Timeline Area end */}
      {/* Team Area start */}
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
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image">
                  <img src="assets/images/services/i4.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Adamancio</h4>
                  <span>Travel Influencer</span>
                </div>
                <div className="btn-social">
                      <span>Adamancio</span>{" "}
                  <div className="social-style-two">
                    <a href="https://instagram.com/soy.adamancio" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://tiktok.com/@adamancio.clips" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://youtube.com/@adamancio_oficial" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                  <img src="assets/images/services/i5.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>AprendeHipnosis</h4>
                  <span>Hypnosis Influencer</span>
                </div>
                <div className="btn-social">
                      <span>AprendeHipnosis</span>{" "}
                  <div className="social-style-two">
                    <a href="https://instagram.com/aprende_hipnosis" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://tiktok.com/@caminodelcambio" target="_blank">
                      <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://youtube.com/@aprendehipnosis" target="_blank">
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
      {/* Headline area start */}
      <div className="headline-area pt-900 rpt-55 rel z-1">
      </div>
      {/* Headline Area end */}
      {/* Pricing style three start */}
      {/* Pricing style three end */}
      {/* Why Choose Us Area start */}
      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      {/* Blog Style Two end */}
      <div id="team"></div>
      <section
        className="team-page-area pt-130 rpt-100 pb-70 rpb-40 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet Our Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Team Member */}
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/das.jpg"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Daniel Acero</h4>
                  <span>CEO</span>
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                </div>
                <div className="btn-social">
                  <span>Daniel Acero</span>{" "}
                  <div className="social-style-two">
                    <a href="mailto:dani@acsinframe.com" target="_blank">
                      <i className="fas fa-envelope" />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-acero-sagredo-6093871b5/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://instagram.com/acsinframe" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=34629819696" target="_blank">
                      <i className="fab fa-whatsapp" />
                    </a>
                    <a href="tel:+34629819696" target="_blank">
                      <i className="fas fa-mobile-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer area start */}
    </Layout>
  );
};
export default Index;
