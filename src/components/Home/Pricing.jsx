import React from 'react';
import { IonIcon } from '@ionic/react'; 
import { checkmarkCircleOutline } from 'ionicons/icons';
import '../css/pricing.css';
import gradient from '../assets/grad.png'


const Pricing = () => {
  const pricingPlans = [
    {
      title: '8 hours (1 shift)',
      price: '$1000/month',
      subtitle: '$4500 one time cost for kisok only',
      billingInfo: 'Flexible subscription: choose and switch plans anytime.',
      features: [
        'Automate entire flow',
        'AI voice assistance',
        'AI hardware included',
        'All Softwares included',
        'Human assistance'
      ],
    },
    {
      title: '16 hours (2 shift)',
      price: '$1500/month',
      subtitle: '$4500 one time cost for kisok only',
      billingInfo: 'Flexible subscription: choose and switch plans anytime.',
      features: [
        'Automate entire flow',
        'AI voice assistance',
        'AI hardware included',
        'All Softwares included',
        'Human assistance'
      ],
    },
    {
      title: '24 hours (3 shift)',
      price: '$2000/month',
      subtitle: '$4500 one time cost for kisok only',
      billingInfo: 'Flexible subscription: choose and switch plans anytime.',
      features: [
       'Automate entire flow',
        'AI voice assistance',
        'AI hardware included',
        'All Softwares included',
        'Human assistance'
      ],
    },
  ];

  return (
    <>
         <section className="promo" id="prices">
          <div className="promo-bg">
            <img src={gradient} alt="" />
          </div>
          <div className="promo-header">
            <h2>Pricing</h2>
          </div>
        </section>
   
    <section className="pricing" id="pricing">
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-subtitle">
              {/* <IonIcon icon={checkmarkCircleOutline} className="icon" /> */}
              {plan.subtitle}
            </p>
            <p className="billing-info">{plan.billingInfo}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <IonIcon icon={checkmarkCircleOutline} className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Pricing;
