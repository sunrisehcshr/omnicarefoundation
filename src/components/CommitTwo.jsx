"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";
const CommitTwo = () => {
  return (
    <section className='commit help-two ff-commit pt-120 pb-120'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-5 col-xl-5'>
            <div className='commit__thumb'>
              <div className='thumb-lg'>
                <img src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' alt='Image_inner' />
              </div>
              <div className='thumb-sm'>
                <img src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' alt='Image_inner' />
              </div>
              <div className='commit-count'>
                <h4>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='odometer fw-7'>
                          <CountUp delay={0} start={0} end={5000} />
                          <span className='prefix fw-7'>+</span>
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h4>
                <p className='text-black'>People Helped Annually</p>
              </div>
              <div className='vertical-text'>
                <h5>
                  Empowering <span>Mental</span> Health {" "}
                </h5>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7 col-xl-7'>
            <div className='help-two__content'>
              <div className='section__content'>
                <span className='sub-title'>
                  Serving Our Community Since 2015
                </span>
                <h2 className='title-animation_inner mt-0'>
                  Accessible Mental Health Support For Everyone
                </h2>
                <p className='text-gr-2'>
                  Omni Cares is dedicated to providing high-quality, subsidized mental health services to children, adults, LGBTQ+ individuals, and immigrants. We believe that financial barriers should never prevent anyone from getting the care they need.
                </p>
              </div>
              <div className='help-two__inner cta'>
                <div className='help-two__inner-content'>
                  <div className='help__content-icon-group'>
                    <div className='help__content-icon'>
                      <div className='thumb'>
                        <i className='icon-make-donation' />
                      </div>
                      <div className='content'>
                        <h6 className='fw-5'>Support Our Mission</h6>
                        <p>
                          Help us subsidize therapy sessions for those in need.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className='help__content-icon'>
                      <div className='thumb'>
                        <i className='icon-support-heart' />
                      </div>
                      <div className='content'>
                        <h6 className='fw-5'>Explore Programs</h6>
                        <p>
                          Learn more about our specialized community programs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='cta'>
                    <Link
                      href='/our-causes'
                      aria-label='explore programs'
                      title='explore programs'
                      className='btn--primary'
                    >
                      Explore Programs
                    </Link>
                  </div>
                </div>
                <div className='help-two-card-wrapper'>
                  <div className='help-two__card van-tilt'>
                    <div className='help-card-thumb'>
                      <img
                        src='https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                        alt='Image_inner'
                      />
                      <i className='icon-star' />
                    </div>
                    <div className='help-card-content'>
                      <h4>10+</h4>
                      <h6>Therapy Programs</h6>
                      <p>Tailored for diverse communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fc-two'>
        <img src='assets/images/fc-nine.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default CommitTwo;
