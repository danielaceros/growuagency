import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Services = () => {
  return (
    <Layout dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Digital Services
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
                For Digital People
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row gap-130">
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">01</span>
                </div>
                <div className="content">
                  <h4>
                      Social Media
                  </h4>
                  <p>
                  Unlock the power of social media with our expert service: Growing Profiles. We specialize in expanding your social media presence organically, engaging your audience, and maximizing your reach. Let us elevate your online influence and help your brand thrive in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">02</span>
                </div>
                <div className="content">
                  <h4>
                      Web Development
                  </h4>
                  <p>
                  Elevate your online presence with our web development service. We craft bespoke websites tailored to your needs, blending creativity with functionality to captivate your audience. From sleek designs to seamless user experience, trust us to bring your digital vision to life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">03</span>
                </div>
                <div className="content">
                  <h4>
                      Application Development
                  </h4>
                  <p>
                  Step into the digital future with our app development service. We design and develop innovative mobile applications that elevate user experiences and drive engagement. From concept to launch, we're committed to crafting cutting-edge solutions that make an impact in the ever-evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">04</span>
                </div>
                <div className="content">
                  <h4>
                      SEO Optimization
                  </h4>
                  <p>
                  Boost your online visibility with our SEO optimization service. We employ proven strategies to enhance your website's search engine rankings, driving targeted traffic and increasing conversions. Let us optimize your online presence, so you can rise above the competition and attract more customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">05</span>
                </div>
                <div className="content">
                  <h4>
                      Design &amp; Branding
                  </h4>
                  <p>
                  Elevate your brand with our design and branding service. We craft visually stunning identities that resonate with your audience, from captivating logos to cohesive brand guidelines. Whether you're launching a new venture or refreshing your image, trust us to bring your vision to life and make a lasting impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">06</span>
                </div>
                <div className="content">
                  <h4>
                      IT Consulting
                  </h4>
                  <p>
                  Empower your business with our IT consulting service. We offer strategic guidance and innovative solutions to optimize your technology infrastructure, streamline processes, and maximize efficiency. From cybersecurity to cloud computing, trust our expertise to drive your digital transformation and propel your business forward.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s">
                <div className="top-part">
                  <span className="serial-number">07</span>
                </div>
                <div className="content">
                  <h4>
                      Business Development
                  </h4>
                  <p>
                  Accelerate your growth with our business development service. We provide tailored strategies and actionable insights to expand your market reach, forge strategic partnerships, and drive revenue growth. Whether you're a startup or an established enterprise, trust us to unlock new opportunities and propel your business to new heights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <span className="serial-number">08</span>
                </div>
                <div className="content">
                  <h4>
                      eCommerce Development
                  </h4>
                  <p>
                  Transform your online business with our eCommerce development service. We specialize in creating custom, user-friendly platforms that drive sales and enhance customer experiences. From intuitive interfaces to seamless payment integration, trust us to build a robust eCommerce solution that scales with your business and maximizes your online potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
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
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Client Analysis</h4>
                <div className="content">
                  <p>First, we study each case and each client</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 02</span>
                <h4 className="title">Build Strategy</h4>
                <div className="content">
                  <p>Second, we build a personalized strategy</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s">
                <span className="step-number">Step 03</span>
                <h4 className="title">Produce</h4>
                <div className="content">
                  <p>Third, we start producing the content</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                <span className="step-number">Step 04</span>
                <h4 className="title">Analyze Feedback</h4>
                <div className="content">
                  <p>Fourth, we analyze the audience feedback</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-line-shape">
            <img
              src="assets/images/shapes/work-process-line.png"
              alt="Work Process Line"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
      {/* Testimonial Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Services;
