import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
 
const SocialMedia = () => {
    return (
        <div className="flex justify-center items-center gap-4">
            <a
                href="https://www.facebook.com/share/12Knu6tfx4K/"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
            >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 -z-10" />
            </a>
            <a
                href="https://www.instagram.com/sakivisaconsultancy?igsh=MWkzM2E4MWo2cjd2eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
            >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 -z-10" />
            </a>
            <a
                href="https://www.linkedin.com/company/saki-visa-consultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
            >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 -z-10" />
            </a>
        </div>
    );
};
 
export default SocialMedia;