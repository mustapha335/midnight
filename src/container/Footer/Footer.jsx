import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>92 Mill Road HARROGATE HG75 8NV</p>
        <p className='p__opensans'>+44 70 4303 2839 </p>
        <p className='p__opensans'>+44 77 0256 5425</p>
      </div>

      <div className='app__footer-links_logo'>
        <h1 className='app__footer-links_heading'>Midnight.</h1>
        <p className='p__opensans'>
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className='spoon__img'
          style={{ marginTop: 15 }}
          alt='spoon'
        />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gerito. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
