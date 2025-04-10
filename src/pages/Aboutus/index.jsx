import React, { Suspense, useRef, useEffect } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/aboutus/aboutbg.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";
import CoursesOffered from "../../components/UiComponents/CoursesOffered";
import NewsEventsSection from "../Home/UiComponents/NewsEventsSection";
import TestimonialsSection from "../Home/UiComponents/TestimonialsSection";
import rightSideImg from "../../assets/aboutus/about_whychooseus.webp";

// Reusable TickSVG component with smaller, fixed size
const TickSVG = () => (
  <svg
    className="w-6 h-6 text-[#F9920A] mr-2 inline-block shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#F9920A" />
    <path
      d="M8 12L11 15L17 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Aboutus = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "About Us",
    className: "px-1 relative",
    classNameTitle: "relative -top-24 text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: true,
    counterPosition: "overlay",
  };

  const listRef = useRef(null);
  const lineRef = useRef(null);

  const scrollableContents = [
    {
      heading: "Wide Range of Courses:",
      description:
        "Explore a diverse selection of programs, including MBBS, Bachelor’s, Master’s, and Diplomas across various fields such as Nursing, Engineering, and Management, available in multiple countries.",
    },
    {
      heading: "Global Study Destinations",
      description:
        "Choose to study in the country that best suits your aspirations. We offer services in India, Germany, the UK, the USA, Australia, Canada, France, New Zealand, Slovakia, Austria, Finland, and many more.",
    },
    {
      heading: "Supporting You on Your Journey",
      description:
        "Receive dedicated, high-quality guidance and support to ensure a strong start to a rewarding career.",
    },
    {
      heading: "Experienced Service Providers:",
      description:
        "Access opportunities for 100% tuition-free education, with stipends exceeding 1 lakh INR per month, and the freedom to earn while you learn.",
    },
    {
      heading: "Results Driven",
      description:
        "At Crossroads, we are committed to delivering results. Over the years, we have successfully met the varied learning needs of our students, empowering them to realize their aspirations.",
    },
  ];

  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;

    const handleScroll = () => {
      if (list && line) {
        const scrollTop = list.scrollTop;
        const scrollHeight = list.scrollHeight;
        const clientHeight = list.clientHeight;
        const maxScroll = scrollHeight - clientHeight;

        const baseThumbHeight = (clientHeight / scrollHeight) * clientHeight;
        const thumbHeight = Math.max(baseThumbHeight * 0.5, 20);
        line.style.height = `${thumbHeight}px`;

        const scrollPercentage = maxScroll > 0 ? scrollTop / maxScroll : 0;
        const maxLineScroll = clientHeight - thumbHeight;
        const lineScroll = scrollPercentage * maxLineScroll;

        line.style.transform = `translateY(${lineScroll}px)`;
      }
    };

    if (list) {
      list.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (list) {
        list.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-0">
            <span style={{ color: "#00334D" }}>At </span>
            <span style={{ color: "#F9920A" }}>Crossroads</span>
          </h2>
          <h2
            className="text-4xl md:text-5xl font-semibold mt-0"
            style={{ color: "#00334D" }}
          >
            we tailor our guidance
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-7xl mx-auto mt-10">
            We are a team of seasoned professionals who provide comprehensive
            educational support, from selecting the right study programs to
            assisting with job placements, both in India and internationally.
            Our experts are with our students every step of the way, ensuring
            that they reach their educational goals and embark on successful
            careers.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="relative mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="relative bg-[#00334D] text-white flex flex-col items-start justify-center text-left p-6 md:pl-20 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                <span>Why </span>
                <span style={{ color: "#F9920A" }}>Crossroads?</span>
              </h2>
              <p className="text-lg mb-10">
                At Crossroads, we are committed to guiding students toward their
                dreams with personalized support and expert advice. Our mission
                is to simplify the complex journey of education and career
                planning.
              </p>

              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-white overflow-hidden">
                  <div
                    ref={lineRef}
                    className="w-full bg-orange-500 transition-transform duration-200 ease-out"
                  />
                </div>
                <div
                  ref={listRef}
                  className="pl-8 ml-4 overflow-y-auto scrollbar-hide"
                  style={{ maxHeight: "300px" }}
                >
                  <ul className="space-y-6 pr-4">
                    {scrollableContents.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <TickSVG />
                        <div>
                          <h4
                            className="font-bold"
                            style={{ color: "#F9920A" }}
                          >
                            {item.heading}
                          </h4>
                          <p className="mt-1">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <img
                src={rightSideImg}
                alt="Crossroads Illustration"
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <CoursesOffered />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsEventsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Aboutus;
