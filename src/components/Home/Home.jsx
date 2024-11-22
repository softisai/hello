import React, { useEffect, useState } from 'react';
import '../css/global.css'
import '../css/nav.css';
import '../css/menu.css';
import '../css/hero.css';
import '../css/about.css'
import '../css/promo.css'
import { gsap } from 'gsap';
import gradient from '../assets/grad.png'
import sitelogo from '../assets/site-logo.png'
import { IonIcon } from '@ionic/react';  // Replace with the actual IonIcons import
import { ellipseSharp, closeSharp } from 'ionicons/icons';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    // GSAP Animation setup
    gsap.set('.menu-container', { y: 50, opacity: 0 });
    gsap.set('.menu-item', { y: 50, opacity: 0 });
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      gsap.set('.menu-container', { y: 50, opacity: 0 });
      gsap.set('.menu-item', { y: 30, opacity: 0 });
  
      gsap.to('.menu-container', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      });
  
      gsap.to('.menu-item', {
        pointerEvents: 'all',
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        onComplete: () => setIsMenuOpen(true),
      });
    } else {
      gsap.to('.menu-item', {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.in',
        onComplete: () => {
          gsap.to('.menu-container', {
            y: -50,
            opacity: 0,
            duration: 0.4,
            ease: 'power3.in',
            onComplete: () => {
              gsap.set('.menu-container', { y: 50, opacity: 0 });
              gsap.set('.menu-item', { y: 30, opacity: 0, pointerEvents: 'none' });
              setIsMenuOpen(false);
            },
          });
        },
      });
    }
  };
  

  return (
    <div className="container">
      {/* Navbar */}
      <nav>
        <div className="logo">
          <a href="#hero">
            <img src={sitelogo} alt="Logo" />
          </a>
        </div>
        <div className="clock"></div>
        <div className="ctas">
          <div className="contact">
            <div className="contact-icon">
              <IonIcon icon={ellipseSharp} />
            </div>
            <a href="#contact">Let's talk</a>
          </div>

          <div className="menu" onClick={toggleMenu}>
            <div className="menu-icon">
              <IonIcon icon={closeSharp} />
            </div>
            <p>Menu</p>
          </div>
        </div>
      </nav>

      {/* Menu Links */}
      <div className={`menu-container ${isMenuOpen ? 'active' : ''}`}>
        <div className="whitespace"></div>
        <div className="whitespace"></div>
        <div className="menu-items">
          {['About', 'Products',  'Contact'].map((item, index) => (
            <a href={`#${item.toLowerCase().replace(' ', '')}`} className="menu-item" key={index}>
              <span>{`0${index + 1}`}</span>
              <span>{item}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-img">
          <img src={gradient} alt="Gradient background" />
        </div>
        <div className="hero-header">
          <div className="hero-col">
            <h1>Softis AI</h1>
            {/* <p>Where AI Meets Hardware: Redefining Simplicity.</p> */}
          </div>
        </div>
      </section>



      <section className="about" id="about">
      <div className="about-header">
        
        <div className="about-col">
          <p className="callout">How can we help</p>
        </div>

        <div className="about-col">
          <h2>
            We integrate cutting-edge AI into hardware solutions, 
            streamlining complexity. 
            Discover how our innovations redefine simplicity in technology.
            <span style={{ opacity: 0 }}>.</span>
          </h2>
          <p className="about-copy">
            Our team of experts excels in creating state-of-the-art digital
            products and providing top-tier AI solutions.
          </p>
        </div>
        
      </div>
    </section>
    
    </div>
  );
};

export default Home;
