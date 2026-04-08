"use client";
import Link from "next/link";
import Slider from "react-slick";

const CauseThree = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "10%", // adjust padding to simulate 1.1, 1.8, 2.5 views
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "7%",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        },
      },
    ],
  };
  return (
    <section className='cause fc-cause ff-cause pt-120 pb-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header text-center'>
              <span className='sub-title'>We are always open for children</span>
              <h2 className='title-animation_inner mt-0 text-black'>
                Our Recent Causes
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30 mt-60'>
          <div className='col-12'></div>
        </div>
        <div className='row'>
          <div className='col-12'></div>
        </div>
      </div>
      <div className='ff-cause-slider swiper'>
        <Slider {...settings} className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20smiling%20child%20talking%20with%20a%20friendly%20therapist%20in%20a%20bright%20room%20mental%20health%20support%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Health</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>70%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20diverse%20support%20group%20of%20adults%20sitting%20in%20a%20circle%20listening%20attentively%20mental%20health%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Food</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>80%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='80%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20warm%20embrace%20between%20two%20people%20showing%20care%20and%20support%20mental%20health%20awareness%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Health</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>90%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='90%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20smiling%20child%20talking%20with%20a%20friendly%20therapist%20in%20a%20bright%20room%20mental%20health%20support%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Health</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>70%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20diverse%20support%20group%20of%20adults%20sitting%20in%20a%20circle%20listening%20attentively%20mental%20health%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Food</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>80%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='80%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20warm%20embrace%20between%20two%20people%20showing%20care%20and%20support%20mental%20health%20awareness%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Health</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>90%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='90%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20smiling%20child%20talking%20with%20a%20friendly%20therapist%20in%20a%20bright%20room%20mental%20health%20support%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Health</Link>
                </div>
              </div>
              <div className='content'>
                <h6 className='fw-7'>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>70%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20diverse%20support%20group%20of%20adults%20sitting%20in%20a%20circle%20listening%20attentively%20mental%20health%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Food</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>80%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='80%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-slide'>
            <div className='cause__slider-single'>
              <div className='thumb'>
                <Link href='/cause-details'>
                  <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20warm%20embrace%20between%20two%20people%20showing%20care%20and%20support%20mental%20health%20awareness%20professional%20photography&image_size=landscape_4_3' alt='Image_inner' />
                </Link>
                <div className='tag'>
                  <Link href='/our-causes'>Health</Link>
                </div>
              </div>
              <div className='content'>
                <h6>
                  <Link href='/cause-details'>
                    It is a long established fact that a reader
                  </Link>
                </h6>
                <p>
                  Business is the activity of making one's buying and selling
                  product
                </p>
              </div>
              <div className='cause__slider-cta'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__intro'>
                    <p>
                      <span className='raised'>$25,294</span> raised of{" "}
                      <span className='goal'>$100,000</span> goal
                      <span className='percent-value'>90%</span>
                    </p>
                  </div>
                  <div className='cause-progress__bar'>
                    <div className='progress-bar-wrapper' data-percent='90%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__cta'>
                  <Link
                    href='/donate-us'
                    aria-label='donate now'
                    title='donate now'
                    className='btn--secondary'
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className='cta text-center'>
        <Link
          href='/our-causes'
          aria-label='view all'
          title='view all'
          className='btn--primary'
        >
          All Causes <i className='icon-heart' />
        </Link>
      </div>
    </section>
  );
};

export default CauseThree;
