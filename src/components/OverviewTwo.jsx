import Link from "next/link";

const OverviewTwo = () => {
  return (
    <section className='ff-overview'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='ff-overview-inner'>
              <div className='thumb'>
                <img src='https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' alt='Image_inner' />
                <div className='icon'>
                  <i className='icon-support-heart' />
                </div>
              </div>
              <div className='content'>
                <span className='sub-title'>
                  You are not alone
                </span>
                <h3 className='fw-6 title-animation_inner'>
                  Need Immediate Help? Access Crisis Resources
                </h3>
                <Link href='/contact-us'>
                  View Crisis Lines
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
