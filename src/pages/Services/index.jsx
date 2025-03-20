// src/pages/Services/index.jsx
import React, { Suspense, lazy } from 'react';

// Lazy load the ServiceCard component
const ServiceCard = lazy(() => import('../../components/UiComponents/ServiceCard'));

import educationImg from '../../../assets/Services/education.png';
import jobAssistanceImg from '../../../assets/Services/job-assistance.jpg';
import migrationImg from '../../../assets/Services/migration.jpg';

const Services = () => {
  const services = [
    {
      title: 'Education',
      description:
        'Detailed education services to help you achieve your academic goals abroad. Lorem ipsum has been the industry’s standard.',
      imageSrc: educationImg,
    },
    {
      title: 'Job Assistance',
      description:
        'Comprehensive job assistance to secure your dream career internationally. Lorem ipsum has been the industry’s standard.',
      imageSrc: jobAssistanceImg,
    },
    {
      title: 'Migration',
      description:
        'Seamless migration services to make your transition smooth and hassle-free. Lorem ipsum has been the industry’s standard.',
      imageSrc: migrationImg,
    },
    {
      title: 'Additional Service',
      description:
        'An additional service tailored to your needs. Lorem ipsum has been the industry’s standard dummy text.',
    },
  ];

  return (
    <div>
      {/* Main Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            Explore Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Placeholder for additional sections */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-950">More About Our Services</h2>
          <p className="text-center mt-4 text-gray-600">
            This is a placeholder for additional content related to services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;