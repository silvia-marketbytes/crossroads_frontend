import React from 'react';
import AboutCard from '../../../../components/UiComponents/AboutCard';

const AboutSection = () => {
  return (
    <section className="py-10 sm:py-13">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {/* First Card (Heading with shadow) */}
          <AboutCard
            hasShadow={true}
            subheading="About Us"
            heading="At Crossroads we tailor our guidance"
          />

          {/* Second Card (Description, no shadow) */}
          <AboutCard
            description="We are a team of seasoned professionals who provide comprehensive educational support, from selecting the right study programs to assisting with job placements, both in India and internationally. Our expertise are with our students every step of the way, ensuring that they reach their educational goals and embark on successful careers. At Crossroads, we’ve been passionately committed to shaping the futures."
            linkText="Read More"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;