import PageBanner from "@/src/components/PageBanner";
import TeamSkills from "@/src/components/TeamSkills";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Team = () => {
  return (
    <Layout dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Expert Team"} />
      {/* Page Banner End */}
      {/* Skill Area start */}
      <section className="skill-area py-130 rpt-100 rpb-60 rel z-1">
        <div className="container container-1210">
          <div className="row gap-120 align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="skill-image wow fadeInUp delay-0-2s">
                <img src="assets/images/team/skill-left.png" alt="Skill" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-content pt-40 rpt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Best Skills</span>
                  <h2>We Have Lot’s Experience and Professionals</h2>
                </div>
                <p>
                  Similique sunin culpa qui officia deserunt mollitia animi est
                  laborum et dolorum fuga. Et harum quidem rerum facilis esty
                  expedita distinctioam nobis est eligendi optio cumquey
                </p>
                <TeamSkills />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Area end */}
      {/* Team Area start */}
      
      {/* Team Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Team;
