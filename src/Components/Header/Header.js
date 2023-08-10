import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Banner from '../Images/img1.jpg';
import Logo from '../Images/logo-black.png';
const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Add other content here */}
      <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container ">
          <a className="navbar-brand" href="/"><img src={Logo} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu-right" id="navbarNav">
            <ul className="navbar-nav nav-list ">
              {/* Add your navigation links here */}
              <li className="nav-item ">
                <a className="nav-link " href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Tracking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item Dropdown">
                <a className="nav-link" href="/Login">
                  {/* dropdown  */}
                  <div class="dropdown ">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Login
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><a className="dropdown-item" href="#">Admistrator</a></li>
                      <li><a className="dropdown-item" href="#">Employee</a></li>
                    </ul>
                  </div>
                </a>

              </li>

            </ul>
          </div>
        </div>
      </header>
      {/* slider section hire */}
      <div className='slider-section'>
        <div className='text-overlay'>
          <img src={Logo} alt="" className='img-overlay' />
          <div className='list-overlay'>
            <ul>
              <li>
                Easy
              </li>
              <li>
                Fast
              </li>
              <li>
                Secure
              </li>
            </ul>
            
          </div>
          <h1>DOOR TO DOOR COURIER FOR YOUR BUSINESS
              PICKUP & DELIVERY SERVICES</h1>
        </div>
        <Slider {...settings}>
          <div>
            <img src={Banner} />
          </div>
          <div>
            <img src={Banner} />
          </div>
          <div>
            <img src={Banner} />
          </div>
        </Slider>

      </div>


    </div>

  );
};

export default Header;