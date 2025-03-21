//src->pages->Uicomponents->ServiceSection->index.jsx
import React from 'react';
import educationImg from '../../../../assets/Services/education.png';
import jobAssistanceImg from '../../../../assets/Services/job-assistance.jpeg';
import migrationImg from '../../../../assets/Services/migration.jpeg';
import ServiceCard from '../../../../components/UiComponents/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Education',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: educationImg,
    },
    {
      title: 'Job Assistance',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: jobAssistanceImg,
    },
    {
      title: 'Migration',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: migrationImg,
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-950 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default ServicesSection;