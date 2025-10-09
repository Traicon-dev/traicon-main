// components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = ({
  phoneNumber = '919901857629', // Use international format without "+" (e.g., for India)
  message = '',
  label = 'Chat on WhatsApp',
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '12px 16px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: 24, height: 24, marginRight: 8 }}
      />
      {label}
    </a>
  );
};

export default WhatsAppButton;
