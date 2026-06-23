import { useState } from 'react';
import { faqData } from '../data/faq';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq container" id="faq">
      <div className="section-header">
        <span className="section-header__badge">FAQ</span>
        <h2 className="section-header__title">Frequently Asked Questions</h2>
        <p className="section-header__desc">Everything you need to know about the product and billing.</p>
      </div>
      
      <div className="faq__list">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className={`faq__item ${openId === item.id ? 'faq__item--open' : ''}`}
          >
            <button 
              className="faq__question" 
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={openId === item.id}
            >
              <span>{item.question}</span>
              <svg 
                className="faq__icon" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div 
              className="faq__answer-wrapper"
              style={{ maxHeight: openId === item.id ? '500px' : '0' }}
            >
              <div className="faq__answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
