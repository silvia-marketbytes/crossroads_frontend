// src/components/UiComponents/FooterCard/index.jsx
import React from 'react';

// Social media icons (using SVGs for simplicity; you can replace with react-icons)
const SocialIcon = ({ iconPath, label, href }) => (
  <a href={href} aria-label={label} className="text-white hover:text-orange-500">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={iconPath} />
    </svg>
  </a>
);

const FooterCard = ({ title, description, links, socialLinks, contactInfo }) => {
  return (
    <div className="text-white">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      {description && <p className="text-gray-300 mb-6">{description}</p>}
      {links && (
        <ul className="space-y-2 text-gray-300">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-orange-500">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {contactInfo && (
        <div className="text-gray-300">
          {contactInfo.address && (
            <p className="mb-2">
              {contactInfo.address.split('\n').map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
          )}
          {contactInfo.phone && (
            <p className="mb-2">
              <a href={`tel:${contactInfo.phone}`} className="hover:text-orange-500">
                {contactInfo.phone}
              </a>
            </p>
          )}
          {contactInfo.email && (
            <p>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-orange-500">
                {contactInfo.email}
              </a>
            </p>
          )}
        </div>
      )}
      {socialLinks && (
        <div className="flex space-x-4 mt-6">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              label={social.label}
              href={social.href}
              iconPath={social.iconPath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterCard;