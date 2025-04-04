import React from 'react';

const SocialIcon = ({ iconPath, label, href }) => (
  <a href={href} aria-label={label} className="text-white hover:text-[#F9920A]">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={iconPath} />
    </svg>
  </a>
);

const FooterCard = ({ title, description, links, socialLinks, contactInfo }) => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {description && <p className="text-gray-300 text-sm mb-4">{description}</p>}
      {links && (
        <ul className="space-y-2 text-gray-300 text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-[#F9920A]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {contactInfo && (
        <div className="text-gray-300 text-sm">
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
              <a href={`tel:${contactInfo.phone}`} className="hover:text-[#F9920A]">
                {contactInfo.phone}
              </a>
            </p>
          )}
          {contactInfo.email && (
            <p>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-[#F9920A]">
                {contactInfo.email}
              </a>
            </p>
          )}
        </div>
      )}
      {socialLinks && (
        <div className="flex space-x-4 mt-4">
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