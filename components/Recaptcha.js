// components/Recaptcha.js
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange }) => {
  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onChange}
      />
    </div>
  );
};

export default Recaptcha;
