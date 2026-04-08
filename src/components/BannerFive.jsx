import Link from "next/link";

const BannerFive = () => {
  return (
    <section
      className='banner-five commit'
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='banner-five__content'>
              <span className='text-xl sub-title'>Mental Health & Community Support</span>
              <h1 className='title-animation_inner fw-7'>
                Welcome to <span className='bottom-line'>Omni Cares</span>
              </h1>
              <p>
                Providing accessible mental health programs and crisis resources for children, adults, LGBTQ+ individuals, immigrants, and the general public since 2015.
              </p>
              <div className='mt-40'>
                <Link
                  href='/our-causes'
                  aria-label='our programs'
                  title='our programs'
                  className='btn--primary'
                >
                  Explore Our Programs
                </Link>
              </div>
              <div className='commmit-tab-single mt-40'>
                <div className='commit-tab-inner'>
                  <div className='thumb'>
                    <i className='icon-donation' />
                  </div>
                  <div className='content'>
                    <p className='text-lg fw-7'>501(c)(3) Registered</p>
                    <p>We ensure full financial transparency and annual reporting.</p>
                  </div>
                </div>
                <span className='divider d-none d-xxl-block' />
                <div className='commit-tab-inner'>
                  <div className='thumb'>
                    <i className='icon-award' />
                  </div>
                  <div className='content'>
                    <p className='text-lg fw-7'>Accessible Care</p>
                    <p>Offering subsidized sliding scale programs for everyone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <img src='assets/images/spade-green-two.png' alt='Image_inner' />
      </div>
      <div className='shape'>
        <img src='assets/images/c-shape.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default BannerFive;
