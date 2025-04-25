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

const LikeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 37.546">
    <g id="like" transform="translate(0)">
      <path id="Path_153" data-name="Path 153" className="cls-1" d="M0,120.773a1.1,1.1,0,0,0,1.1,1.1H7.7a3.3,3.3,0,0,0,2.6-1.277,27.44,27.44,0,0,0,8.28,1.277H27.5a3.3,3.3,0,0,0,3.067-4.516,3.3,3.3,0,0,0,1.59-5.384,3.292,3.292,0,0,0,0-4.4,3.3,3.3,0,0,0-2.457-5.5H23.678q.128-.3.264-.616A12.482,12.482,0,0,0,25.3,96.573,5.559,5.559,0,0,0,19.8,91a1.1,1.1,0,0,0-1.078.884l-.562,2.809c-.738,3.689-1.553,4.107-4.585,5.66-.8.41-1.743.893-2.842,1.52a3.305,3.305,0,0,0-3.033-2H1.1a1.1,1.1,0,0,0-1.1,1.1Zm14.577-18.462a12.315,12.315,0,0,0,3.757-2.478,9.318,9.318,0,0,0,1.983-4.709l.36-1.8A3.419,3.419,0,0,1,23.1,96.573a10.911,10.911,0,0,1-1.178,4.013c-.21.487-.424.985-.615,1.487H19.8a1.1,1.1,0,0,0,0,2.2h9.9a1.1,1.1,0,0,1,0,2.2H27.5a1.1,1.1,0,1,0,0,2.2h2.2a1.1,1.1,0,0,1,0,2.2H27.5a1.1,1.1,0,1,0,0,2.2h2.2a1.1,1.1,0,0,1,0,2.2H27.5a1.1,1.1,0,1,0,0,2.2,1.1,1.1,0,0,1,0,2.2H18.584A25.249,25.249,0,0,1,11,118.509V104.264c1.418-.846,2.6-1.454,3.578-1.952ZM2.2,102.073H7.7a1.1,1.1,0,0,1,1.1,1.1v15.4a1.1,1.1,0,0,1-1.1,1.1H2.2Zm0,0" transform="translate(0 -84.327)" />
      <path id="Path_154" data-name="Path 154" className="cls-1" d="M62.2,423.1a1.1,1.1,0,1,1-1.1-1.1A1.1,1.1,0,0,1,62.2,423.1Zm0,0" transform="translate(-55.6 -391.054)" />
      <path id="Path_155" data-name="Path 155" className="cls-1" d="M270,1.1V3.373a1.1,1.1,0,0,0,2.2,0V1.1a1.1,1.1,0,0,0-2.2,0Zm0,0" transform="translate(-250.201)" />
      <path id="Path_156" data-name="Path 156" className="cls-1" d="M340.664,35.716l-1.556,1.556a1.1,1.1,0,0,0,1.556,1.556l1.555-1.556a1.1,1.1,0,0,0-1.555-1.556Zm0,0" transform="translate(-313.942 -32.798)" />
      <path id="Path_157" data-name="Path 157" className="cls-1" d="M180.323,35.716a1.1,1.1,0,0,0,0,1.556l1.555,1.556a1.1,1.1,0,0,0,1.556-1.556l-1.556-1.556A1.1,1.1,0,0,0,180.323,35.716Zm0,0" transform="translate(-166.801 -32.798)" />
    </g>
  </svg>
);

const TelephoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28 28">
    <g id="telephone-call" transform="translate(-2 -2)">
      <path id="Path_158" data-name="Path 158" className="cls-1" d="M29.393,23.36c-.874-.733-6-3.979-6.852-3.83-.4.071-.706.412-1.525,1.389a11.687,11.687,0,0,1-1.244,1.347,10.757,10.757,0,0,1-2.374-.88A14.7,14.7,0,0,1,10.614,14.6a10.757,10.757,0,0,1-.88-2.374,11.687,11.687,0,0,1,1.347-1.244c.976-.819,1.318-1.123,1.389-1.525.149-.854-3.1-5.978-3.83-6.852C8.334,2.243,8.056,2,7.7,2,6.668,2,2,7.772,2,8.52c0,.061.1,6.07,7.689,13.791C17.41,29.9,23.419,30,23.48,30c.748,0,6.52-4.668,6.52-5.7,0-.356-.243-.634-.607-.94Z" />
      <path id="Path_159" data-name="Path 159" className="cls-1" d="M23,15h2a8.009,8.009,0,0,0-8-8V9a6.006,6.006,0,0,1,6,6Z" />
      <path id="Path_160" data-name="Path 160" className="cls-1" d="M28,15h2A13.015,13.015,0,0,0,17,2V4A11.013,11.013,0,0,1,28,15Z" />
    </g>
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
export const Like = (props) => <LikeIcon {...props} />;
export const Telephone = (props) => <TelephoneIcon {...props} />;

const Icons = {
  Call,
  Mail,
  Hamburger,
  WhiteShadow,
  Like,
  Telephone
};

export default Icons;