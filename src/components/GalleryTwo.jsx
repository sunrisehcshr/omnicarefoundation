"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const GalleryTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='ff-gallery pt-120 pb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-7'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  We are always open for children
                </span>
                <h2 className='title-animation_inner mt-0 fw-6'>
                  Recent Causes gallery
                </h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-xl-6'>
              <div className='thumb-lg'>
                <img
                  src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20video%20thumbnail%20showing%20a%20supportive%20mental%20health%20community%20gathering%20professional%20photography&image_size=landscape_16_9'
                  alt='Image_inner'
                />
                <div className='video-btn-wrapper'>
                  <button
                    onClick={() => setIsOpen(true)}
                    className='open-video-popup'
                  >
                    <i className='icon-play' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='left-group'>
          <div className='m-one move-image'>
            <img
              src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20diverse%20group%20of%20children%20smiling%20together%20mental%20health%20support%20professional%20photography&image_size=square'
              alt='Image_inner'
              data-aos='fade-right'
              data-aos-duration={1000}
            />
          </div>
          <div className='m-two move-image'>
            <img
              src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20caring%20therapist%20listening%20to%20a%20young%20adult%20mental%20health%20professional%20photography&image_size=square'
              alt='Image_inner'
              data-aos='fade-right'
              data-aos-duration={1000}
            />
          </div>
          <div className='m-three move-image'>
            <img
              src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20close-up%20of%20hands%20held%20in%20support%20mental%20health%20care%20professional%20photography&image_size=square'
              alt='Image_inner'
              data-aos='fade-right'
              data-aos-duration={1000}
            />
          </div>
        </div>
        <div className='right-group'>
          <div className='m-one move-image'>
            <img
              src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20diverse%20group%20of%20children%20smiling%20together%20mental%20health%20support%20professional%20photography&image_size=square'
              alt='Image_inner'
              data-aos='fade-left'
              data-aos-duration={1000}
            />
          </div>
          <div className='m-two move-image'>
            <img
              src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20caring%20therapist%20listening%20to%20a%20young%20adult%20mental%20health%20professional%20photography&image_size=square'
              alt='Image_inner'
              data-aos='fade-left'
              data-aos-duration={1000}
            />
          </div>
          <div className='m-three move-image'>
            <img
              src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20support%20group%20sitting%20in%20a%20circle%20smiling%20mental%20health%20professional%20photography&image_size=square'
              alt='Image_inner'
              data-aos='fade-left'
              data-aos-duration={1000}
            />
          </div>
        </div>
      </section>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default GalleryTwo;
