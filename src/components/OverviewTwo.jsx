import Link from "next/link";

const OverviewTwo = () => {
  return (
    <section className='ff-overview'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='ff-overview-inner'>
              <div className='thumb'>
                <img src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20caring%20therapist%20smiling%20while%20talking%20to%20a%20teenager%20in%20a%20cozy%20office%20setting%20mental%20health%20support%20professional%20photography&image_size=landscape_16_9' alt='Image_inner' />
                <div className='icon'>
                  <i className='icon-support-heart' />
                </div>
              </div>
              <div className='content'>
                <span className='sub-title'>
                  We are always open for children
                </span>
                <h3 className='fw-6 title-animation_inner'>
                  Our Goal is to Help Poor People
                </h3>
                <Link href='/become-volunteer'>
                  Become volunteer
                  <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewTwo;
