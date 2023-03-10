import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import gameTourImg from '../../assets/images/games_tournament_t.png'
import gameEventImg from '../../assets/images/Financial Assistance_B.png'
import clickIcon from '../../assets/icon/click.jpg';
import sliderImg1 from '../../assets/images/slider1.jpg';
import brandImg from '../../assets/images/india-portal.jpg';
import fb from "../../assets/images/facebook.png"
import tw from "../../assets/images/twitter.png"
import ig from "../../assets/images/instagram.png"
import yt from "../../assets/images/youtube.png"
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './home.css';


const sliderData = [
  {
    img: sliderImg1,
  },
  {
    img: sliderImg1,
  },
  {
    img: sliderImg1,
  }
]

const brandsSlider = [
  {
    img: brandImg,
  },
  {
    img: brandImg,
  },
  {
    img: brandImg,
  },
  {
    img: brandImg,
  },
  {
    img: brandImg,
  },
  {
    img: brandImg,
  },
  {
    img: brandImg,
  },
]
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};


const Home = () => {





  return (
    <div className="hero">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <div className="slider">
              <Carousel indicators={false}>
                {
                  sliderData.map((item, index) => (

                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={item.img}
                        alt=""
                      />
                    </Carousel.Item>

                  ))

                }

              </Carousel>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="left-col-container">
                  <div className="game-torna">
                    <img src={gameTourImg} alt="" />
                    <Link className="link ">games tournament</Link>
                  </div>
                  <div className="coaching">
                    <img src={gameTourImg} alt="" />
                    <Link className="link ">coaching</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hero-link-teg">

                  <Link className="link">
                    <span className="hero-ul-icon">
                      <i className='bx bx-chevrons-right'></i>
                    </span>
                    sustainable development goals(sdgs)
                  </Link>
                  <img src={clickIcon} alt="" />
                </div>
                <ul className="hero-ul">
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-chevrons-right'></i>
                      </span>
                      RTI</Link>
                  </li>
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-chevrons-right'></i>
                      </span>
                      Tenders</Link>
                  </li>
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-chevrons-right'></i>
                      </span>
                      Media Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row how-do-i mt-3">
          <div className="col-lg-6 col-md-12">
            <h3>Do you want to know more about:</h3>
            <ul className="hero-ul">
              <li>
                <Link className="link" to='/'>
                  <span className="hero-ul-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                  Title goes here</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h3>How do I?</h3>
            <ul className="hero-ul">
              <li>
                <Link className="link" to='/'>
                  <span className="hero-ul-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                  Apply for Financial Assistan..</Link>
              </li>
              <li>
                <Link className="link" to='/'>
                  <span className="hero-ul-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                  Apply for Financial Assistan..</Link>
              </li>
              <li>
                <Link className="link" to='/'>
                  <span className="hero-ul-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                  Apply for Financial Assistan..</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h3>Latest</h3>
            <ul className="hero-ul">
              <li>
                <Link className="link" to='/'>
                  <span className="hero-ul-icon">
                    <i className='bx bx-right-arrow-alt'></i>
                  </span>
                  Title goes here</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row game-event">
          <div className="col-lg-3 col-md-12">
            <div className="event">
              <img src={gameEventImg} alt="" />
              <Link className="link ">games tournament</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="event">
              <img src={gameEventImg} alt="" />
              <Link className="link ">games tournament</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="event">
              <img src={gameEventImg} alt="" />
              <Link className="link ">games tournament</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="event">
              <img src={gameEventImg} alt="" />
              <Link className="link ">games tournament</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid info-services-container p-0 mt-3">
        <div className="info-services-head"></div>

        <div className="info-services">

          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-12">
                <div className="service-header">
                  <h3>Information & Services</h3>
                </div>
                <ul className="hero-ul">
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-square'></i>
                      </span>
                      Infrastructure</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="service-header">
                  <h3>Policies</h3>
                </div>
                <ul className="hero-ul">
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-square'></i>
                      </span>
                      Infrastructure</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="service-header">
                  <h3>About the Government</h3>
                </div>
                <ul className="hero-ul">
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-square'></i>
                      </span>
                      Infrastructure</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="service-header">
                  <h3>About the Government</h3>
                </div>
                <ul className="hero-ul">
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-square'></i>
                      </span>
                      Assam State Portal</Link>
                  </li>
                  <li>
                    <Link className="link" to='/'>
                      <span className="hero-ul-icon">
                        <i className='bx bx-square'></i>
                      </span>
                      CM Portal</Link>
                  </li>
                </ul>
                <div className="service-header">
                  <h3>FOLLOW US ON</h3>
                </div>
                <ul className="hero-ul social-link  d-flex">
                  <li>
                    <Link className="link" to='/'>
                      <img src={fb} alt="" />
                     </Link>
                  </li>
                  <li>
                    <Link className="link" to='/'>
                      <img src={yt} alt="" />
                     </Link>
                  </li>
                  <li>
                    <Link className="link" to='/'>
                      <img src={tw} alt="" />
                     </Link>
                  </li>
                  <li>
                    <Link className="link" to='/'>
                      <img src={ig} alt="" />
                     </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="brand mb-3">
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-12">
                <Slider {...settings}>
                  {
                    brandsSlider.map((item, index) => (
                      <div className="m-0 ">
                        <img
                          className="m-0"
                          src={item.img}
                          alt=""
                        />
                      </div>
                    ))
                  }
                </Slider>
              </div>

            </div>
          </div>
        </div>


      </div>

    </div>

  )
}

export default Home