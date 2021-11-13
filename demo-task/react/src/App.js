import './App.css';

function App() {
  return (
  <div>
    <div className="header">
    <div>LOGO</div>
    <div className="right-menu">
        <div className="right-menu-item">Offers</div>
        <div className="right-menu-item">Offers</div>
        <div className="right-menu-item">Offers</div>
    </div>
</div>
<div className="hero-container">
    <div className="hero-image"></div>
    <div className="carousel-container">
        <div>Massage & Spa</div>
        <div>Massage & Spa</div>
        <div>Massage & Spa</div>
        <div>Massage & Spa</div>
        <div>Massage & Spa</div>
    </div>
</div>
<div className="trending-container">
    <div className="trending-content">
        <div className="trending-heading">Trending</div>
        <div className="trending-card-container">
            <div className="trending-card" >
              {[1,2,3].map(()=>(
                                 <>
                                <div className="trending-card-image"></div>
                                <div className="trending-card-content">
                                    <div className="trending-card-heading">Total Relief Massage Center</div>
                                    <div className="trending-card-subheading">Massage Center</div>
                                    <div className="trending-card-text">Mulund, Mumbai</div>
                                </div>
                                <div className="trending-card-footer">
                                    <div className="rating">
                                        <img height="15px" width="15px" src="https://media.istockphoto.com/vectors/yellow-star-icon-vector-id1138148927?k=20&m=1138148927&s=170667a&w=0&h=g9luU7DzUMqOCv46ZRiSDiSdsyQqtV6UWfsN2AF1B2I=" alt="" srcset="" />
                                        <div>3.4</div>
                                    </div>
                                    <div>21 mins</div>
                                    <div>50% Off</div>
                                </div>
                            </>
              ))}
            </div>

        </div>
    </div>
</div>
<div className="subscribe-container">
    <div className="subscribe-content">
        <div>
            <div>Grow your business with us.</div>
            <div>Become a professional</div>
        </div>
        <div className="btn-container">
            <button className="subscribe-btn">Subscribe</button>
        </div>
    </div>
</div>
<div className="review-container">
    <div className="review-content">
        <div className="review-heading">
            <div>Customer Reviews</div>
        </div>
        <div className="review-card-container">
          {[1,2,3].map(()=>(
            <>
             <div className="review-card" >
                <div className="review-head">
                    <div className="review-profile"></div>
                    <div className="review-name">Kate Doe</div>
                </div>
                <div className="review-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                </div>
            </div>
            </>
          ))}
           
        </div>
    </div>
</div>
<div className="download-container">
    <div className="download-image"></div>
    <div className="download-right">
        <div className="download-right-heading">Download The App</div>
        <div className="download-right-text">
            <div>Choose and Apply from available</div>
            <div>Services anf platform</div>
        </div>
        <div className="download-btn-container">
            <div className="play-store-btn"></div>
            <div className="app-store-btn"></div>
        </div>
    </div>
</div>
<div className="footer-content">
    <div className="footer-left">
        <div>
            <div className="foot-head" style={{marginTop:'12px'}}>Company</div>
            <div className="foot-text">About</div>
            <div className="foot-text">News</div>
            <div className="foot-text">Others</div>
            <div className="foot-text">Terms & Conditions</div>
        </div>
        <div>
            <div className="foot-head">Help</div>
            <div className="foot-text">FAQs</div>
            <div className="foot-text">Contact</div>
            <div className="foot-text">Support</div>
            <div className="foot-text">Policy</div>
        </div>
    </div>
    <div className="footer-right">
        <div>
            <div className="foot-head">Follow Us On</div>
            <div className="foot-text">Twitter</div>
            <div className="foot-text">Facebook</div>
            <div className="foot-text">Linked In</div>
        </div>
        <div>
            <div className="foot-text">Youtube</div>
            <div className="foot-text">Instagram</div>
        </div>
    </div>
</div>
  </div>
  );
}

export default App;
