import Link from "next/link";

const CrisisResources = () => {
  return (
    <section className='pt-80 pb-80' style={{ backgroundColor: '#ffecec' }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 text-center'>
            <div className='section__header mb-40'>
              <h2 className='title-animation_inner fw-7 text-danger'>
                <i className='fa-solid fa-phone-volume' style={{marginRight: '15px'}}></i> 
                Crisis Resources
              </h2>
              <p className='mt-20 text-lg fw-6' style={{color: '#333'}}>
                If you or someone you know is in crisis, free and confidential help is available 24/7.
              </p>
            </div>
          </div>
        </div>
        <div className='row gutter-30 justify-content-center'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card h-100 shadow-sm border-0' style={{borderRadius: '10px', padding: '30px', textAlign: 'center'}}>
              <h4 className='fw-7 text-danger mb-3'>988</h4>
              <h6 className='mb-3'>Suicide & Crisis Lifeline</h6>
              <p className='mb-4'>Call or text 988 anytime for support.</p>
              <a href='tel:988' className='btn--primary w-100 d-block'>Call 988</a>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card h-100 shadow-sm border-0' style={{borderRadius: '10px', padding: '30px', textAlign: 'center'}}>
              <h4 className='fw-7 text-danger mb-3'>741741</h4>
              <h6 className='mb-3'>Crisis Text Line</h6>
              <p className='mb-4'>Text HOME to 741741 to connect with a Crisis Counselor.</p>
              <a href='sms:741741?body=HOME' className='btn--primary w-100 d-block'>Text HOME</a>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='card h-100 shadow-sm border-0' style={{borderRadius: '10px', padding: '30px', textAlign: 'center'}}>
              <h4 className='fw-7 text-danger mb-3'>1-800-662-4357</h4>
              <h6 className='mb-3'>SAMHSA National Helpline</h6>
              <p className='mb-4'>Free, confidential treatment referral and info service.</p>
              <a href='tel:18006624357' className='btn--primary w-100 d-block'>Call SAMHSA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisResources;
