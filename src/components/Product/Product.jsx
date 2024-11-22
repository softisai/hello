import React from 'react';
import './projects.css';
import project1 from '../assets/project-1.jpg';
import hotelCheckin from '../assets/hotel-checkin.jpg';
import project3 from '../assets/voice.jpg';
import gradient from '../assets/grad.png'
const Product = () => {
  const products = [
    {
      title: 'AI driven Checkin',
      description:
        'Our AI self-checkin system provides quick, contactless check-ins with AI voice, making the process fast, secure, and user-friendly for guests.',
      image: hotelCheckin,
    },
    {
      title: 'AI driven Ordering',
      description: 'Our self-ordering system offers fast, contactless orders with payment and recipt printing, making ordering quick, secure, and hassle-free for customers.',
      image: project1,
    },
    {
      title: 'Conversational Voice AI',
      description:
        'Our AI-powered voice AI system provide real time virtual assistance in existing system, streamlines operations.',
      image: project3,
    },
  ];

  return (
    <>
    <section className="promo" id="products">
          <div className="promo-bg">
            <img src={gradient} alt="" />
          </div>
          <div className="promo-header">
            <h2>Our Products</h2>
          </div>
        </section>

    <section className="product-section">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-content">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-cta">

              {/* <button className="cta-button">Contact us</button> */}
              {/* <button className="cta-button">More info</button> */}
            </div>
          </div>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default Product;
