import React from 'react';

const CallIcon = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    width="18" 
    className={className} 
    fill="#fff"
  >
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
  </svg>
);

const MailIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="18" 
    className={className} 
    fill="#fff"
  >
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
  </svg>
);

const HamburgerIcon = ({ className = '' }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    fill="#fff"
    stroke="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const WhiteShadowIcon = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="77" 
    height="311.011" 
    viewBox="0 0 77 311.011"
    className={className}
  >
    <g id="Group_465" data-name="Group 465" transform="translate(6)">
      <rect 
        id="Rectangle_44" 
        data-name="Rectangle 44" 
        width="23" 
        height="222.011" 
        rx="11.5" 
        transform="translate(21 45)" 
        opacity="0.37"
      />
      <rect 
        id="Rectangle_45" 
        data-name="Rectangle 45" 
        width="44" 
        height="311.011" 
        transform="translate(0 0)" 
        fill="#fff"
      />
    </g>
  </svg>
);

export const Call = (props) => <CallIcon {...props} />;
export const Mail = (props) => <MailIcon {...props} />;
export const Hamburger = (props) => <HamburgerIcon {...props} />;
export const WhiteShadow = (props) => <WhiteShadowIcon {...props} />;

const Icons = {
  Call,
  Mail,
  Hamburger,
  WhiteShadow
};

export default Icons;