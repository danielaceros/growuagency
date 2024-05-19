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
                      GrowUAgency® for Business
                  </h4>
                  <p>Elevate the social media presence of your business, relay to us the content production, and focus your attention in more important things.</p>
                  <a href="https://i.ibb.co/LDTSq2J/Copia-de-Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-1-1.png" target="_blank">
                  <img src="https://i.ibb.co/LDTSq2J/Copia-de-Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-1-1.png"></img>
                  </a>
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
                      GrowUAgency® for Creators
                  </h4>
                  <p>Perfect for SFC (Short File Format) creators, produce content better, faster and focus on the main thing, having viral ideas.</p>
                  <a href="https://i.ibb.co/W55DSH3/Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-2-1.png" target="_blank">
                  <img src="https://i.ibb.co/W55DSH3/Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-2-1.png"></img>
                  </a>
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
                      GrowUAgency® for Youtubers
                  </h4>
                  <p>Perfect for LFC (Large File Format) creators and focused on Youtube plaform, produce confortably and relaxed, and have better ideas relying this stuff.</p>
                  <a href="https://i.ibb.co/j5bmF4k/Copia-de-Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-2-1.png" target="_blank">
                  <img src="https://i.ibb.co/j5bmF4k/Copia-de-Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-2-1.png"></img>
                  </a>
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
                      GrowUAgency® for Podcasters
                  </h4>
                  <p>Ideal for podcasts, produce your podcast quickly and hook your audience with visuals, you only have to center your full attention on having incredible talks.</p>
                  <a href="https://i.ibb.co/266LWtV/Copia-de-Copia-de-Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-1.png" target="_blank">
                  <img src="https://i.ibb.co/266LWtV/Copia-de-Copia-de-Cream-Minimal-Social-Media-Strategy-Pricing-Table-Document-1.png"></img>
                  </a>
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
