import React from "react";

const WeddingLocation = () => {
  return (
    <section className="section w-details-area center-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="heading">
              <h2 className="title">Wedding & Reception Details</h2>
              <span className="heading-bottom">
                <i className="icon icon-star"></i>
              </span>
            </div>

            <div className="wedding-details margin-bottom">
              <div className="w-detail right">
                <i className="icon icon-ciurclke"></i>
                <h4 className="title">WEDDING CEREMONY</h4>
                <p>Friday, November 22nd, 2024</p>
                <p>Vill: Tutilawa, P.S: Simariya</p>
                <p>
                  <i className="icon icon-email-plane"></i>
                </p>
                <p>Chatra, Hazaribagh Road, Jharkahnad</p>
                <p>
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4065.6656515275367!2d84.93039917568272!3d24.050676077181674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b55c91f3944fb%3A0xb10375f36a93702d!2sTUTILAWA!5e1!3m2!1sen!2sus!4v1729914318143!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </p>
              </div>

              <div className="w-detail right">
                <i className="icon icon-wine-glass"></i>
                <h4 className="title">DINNER</h4>
                <p>Time: 7PM Onwards</p>
              </div>

              <div className="w-detail left">
                <i className="icon icon-cake"></i>
                <h4 className="title">RECEPTION PARTY</h4>
                <p>Monday, November 25th, 2024</p>
                <p>Dhaniyabagicha, Near: New Thana Delha</p>
                <p>
                  <i className="icon icon-email-plane"></i>
                </p>
                <p>Delha, Gaya, Bihar</p>
                <p>
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2020.6922618210422!2d84.98360909811403!3d24.806266814832973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sus!4v1729915142236!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                    ></iframe>
                 
                  </div>
                </p>
              </div>

              <div className="w-detail left">
                <i className="icon icon-wine-glass"></i>
                <h4 className="title">DINNER</h4>
                <p>Time: 7PM Onwards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingLocation;
