import React from 'react';
import educationImg from '../../../../assets/Services/education.png';
import jobAssistanceImg from '../../../../assets/Services/job-assistance.jpeg';
import migrationImg from '../../../../assets/Services/migration.png';
import ServiceCard from '../../../../components/UiComponents/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Education',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: educationImg,
      navigateTo: '/services/education/course',
    },
    {
      title: 'Job Assistance',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: jobAssistanceImg,
      navigateTo: '/services/job-assistance',
    },
    {
      title: 'Migration',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s',
      imageSrc: migrationImg,
      navigateTo: '/services/migration',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {services.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                navigateTo={service.navigateTo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg font-semibold">No services available</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;