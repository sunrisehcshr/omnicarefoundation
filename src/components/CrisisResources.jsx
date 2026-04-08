import Link from "next/link";

const CrisisResources = () => {
  return (
    <section className='pt-80 pb-80' style={{ backgroundColor: '#FAF9F6', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className='container'>
        <div className='row align-items-center gutter-60'>
          
          {/* Left Text Anchor */}
          <div className='col-12 col-xl-5 mb-5 mb-xl-0'>
            <div className='section__header mb-0 text-start'>
              <span className='sub-title' style={{ color: '#E12D39', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                You Are Not Alone
              </span>
              <h2 className='title-animation_inner fw-7 mt-10 mb-20' style={{ fontSize: '42px', lineHeight: '1.2' }}>
                Immediate help is available 24/7.
              </h2>
              <p className='text-lg' style={{ color: '#555', maxWidth: '450px' }}>
                If you or someone you know is experiencing a mental health crisis, please reach out to these free, confidential resources. Support is just a call or text away.
              </p>
            </div>
          </div>

          {/* Right Layout without generic cards */}
          <div className='col-12 col-xl-7'>
            <div className='row gutter-30'>
              
              {/* Item 1 */}
              <div className='col-12 col-md-6 mb-30'>
                <div style={{ padding: '30px 0', borderTop: '2px solid #E12D39' }}>
                  <h4 className='fw-7 mb-10' style={{ fontSize: '32px', color: '#111' }}>988</h4>
                  <h6 className='fw-6 mb-15' style={{ fontSize: '18px', color: '#333' }}>Suicide & Crisis Lifeline</h6>
                  <p className='mb-20' style={{ color: '#666', fontSize: '15px' }}>
                    Call or text 988 anytime for compassionate, professional support.
                  </p>
                  <a href='tel:988' style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, color: '#E12D39', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                    Call 988 <i className='fa-solid fa-arrow-right' style={{ marginLeft: '8px', fontSize: '14px' }} />
                  </a>
                </div>
              </div>

              {/* Item 2 */}
              <div className='col-12 col-md-6 mb-30'>
                <div style={{ padding: '30px 0', borderTop: '2px solid #111' }}>
                  <h4 className='fw-7 mb-10' style={{ fontSize: '32px', color: '#111' }}>741741</h4>
                  <h6 className='fw-6 mb-15' style={{ fontSize: '18px', color: '#333' }}>Crisis Text Line</h6>
                  <p className='mb-20' style={{ color: '#666', fontSize: '15px' }}>
                    Text HOME to 741741 to connect with a trained Crisis Counselor.
                  </p>
                  <a href='sms:741741?body=HOME' style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, color: '#111', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                    Text HOME <i className='fa-solid fa-arrow-right' style={{ marginLeft: '8px', fontSize: '14px' }} />
                  </a>
                </div>
              </div>

              {/* Item 3 */}
              <div className='col-12 col-md-6 mb-30'>
                <div style={{ padding: '30px 0', borderTop: '2px solid #111' }}>
                  <h4 className='fw-7 mb-10' style={{ fontSize: '28px', color: '#111' }}>1-800-662-HELP</h4>
                  <h6 className='fw-6 mb-15' style={{ fontSize: '18px', color: '#333' }}>SAMHSA National Helpline</h6>
                  <p className='mb-20' style={{ color: '#666', fontSize: '15px' }}>
                    Free, confidential treatment referral and info service.
                  </p>
                  <a href='tel:18006624357' style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, color: '#111', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                    Call SAMHSA <i className='fa-solid fa-arrow-right' style={{ marginLeft: '8px', fontSize: '14px' }} />
                  </a>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className='col-12 col-md-6 mb-30'>
                <div style={{ padding: '30px 0', borderTop: '2px solid #111' }}>
                  <h4 className='fw-7 mb-10' style={{ fontSize: '28px', color: '#111' }}>Local Support</h4>
                  <h6 className='fw-6 mb-15' style={{ fontSize: '18px', color: '#333' }}>Colmar Community</h6>
                  <p className='mb-20' style={{ color: '#666', fontSize: '15px' }}>
                    Reach out to our local office for non-emergency guidance.
                  </p>
                  <a href='tel:2677185022' style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, color: '#111', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                    Call 267-718-5022 <i className='fa-solid fa-arrow-right' style={{ marginLeft: '8px', fontSize: '14px' }} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CrisisResources;
