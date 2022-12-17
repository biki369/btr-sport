import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './footer.css';
import footerLogo from '../../assets/logo/footer-logo.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-link d-flex justify-content-center align-items-center">
          <Link to='/' className="link">Home</Link>
          <Link to='/' className="link">Site Map</Link>
          <Link to='/' className="link">Contact Us</Link>
          <Link to='/' className="link">Feedback</Link>
          <Link to='/' className="link">Disclaimer</Link>
          <Link to='/' className="link">Website Governance</Link>
          <Link to='/' className="link">Website Information Manager</Link>
        </div>
        <div className="footer-bottom d-flex justify-content-center align-items-center">
          <div>
            <div className="footer-logo-img  d-flex justify-content-center align-items-center my-3">
              <img src={footerLogo} alt="" />
            </div>
            <p className="mb-3">Standardised Website Framework of Govt. of Assam</p>
            <p className="update-version">Last Reviewed & Updated: <span>25 Nov 2022</span>  Visitors:<span>36933.99</span></p>
            <p>Content Ownership <b>Directorate of Sports & Youth Welfare, Govt. of Assam.</b> </p>
          </div>
        </div>
        <div className="develop-by  d-flex justify-content-center align-items-center mt-3">
          <div className="row">

            <div className="col-md-6 col-sm-12">
              <h6>Designed & Developed by</h6>
              <p>Dipankar Rabha</p>
            </div>

            <div className="col-md-6  col-sm-12">
              <h6>Nodal Department</h6>
              <p>Secretariat Administration Department,Govt. of Assam</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer