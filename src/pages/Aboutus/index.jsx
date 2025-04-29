import React, { Suspense, useRef, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/aboutus/aboutbg.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";
import CoursesOffered from "../../components/UiComponents/CoursesOffered";
import NewsEventsSection from "../Home/UiComponents/NewsEventsSection";
import TestimonialsSection from "../Home/UiComponents/TestimonialsSection";
import rightSideImg from "../../assets/aboutus/about_whychooseus.webp";
import visionImage from "../../assets/aboutus/ourvision.webp";
import missionImage from "../../assets/aboutus/ourmision.webp";
import videoFile from "../../assets/aboutus/dummyvideo.mp4";
import leftImage from "../../assets/aboutus/videothumpnail.webp";

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

const AboutMission = () => {
  return (
    <section className="bg-white text-center">
      <div className="container mx-auto">
        <p className="text-lg md:text-xl text-gray-600 max-w-7xl mx-auto">
          At Crossroads, we’ve been passionately committed to shaping the
          futures of students since our establishment in 2008. With over a
          decade of experience, we’ve remained steadfast in our mission to
          provide quality education that acknowledges the unique potential of
          each student, empowering them to achieve their dreams. Our team is
          dedicated to staying ahead of the curve, consistently offering the
          latest and most promising educational opportunities in partnership
          with our esteemed associates. We recognize that every student is
          unique, with individual strengths and aspirations. At Crossroads, we
          tailor our guidance to help each student unlock their full potential
          and pursue their ambitions through carefully selected courses in
          prestigious institutions around the world.
        </p>
      </div>
    </section>
  );
};

const VisionMissionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const handleVideoEnd = () => setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnd);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <section className="w-full mx-auto container flex flex-col md:flex-row h-full pt-20 md:pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Video Section */}
          <div className="w-full md:w-1/2 h-[400px] md:h-full relative overflow-hidden">
            {isPlaying ? (
              <video
                ref={videoRef}
                src={videoFile}
                controls
                className="w-full h-auto object-cover"
              />
            ) : (
              <>
                <img
                  src={leftImage}
                  className="w-full h-auto object-cover"
                  alt="Students in discussion"
                />
                <button
                  onClick={handlePlayClick}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="189.524"
                    height="189.524"
                    viewBox="0 0 189.524 189.524"
                  >
                    <g id="play" opacity="0.46">
                      <g id="Group_564" data-name="Group 564">
                        <path
                          id="Path_6387"
                          data-name="Path 6387"
                          d="M94.762,180.048A85.286,85.286,0,1,0,9.476,94.762,85.286,85.286,0,0,0,94.762,180.048Zm0,9.476A94.762,94.762,0,1,0,0,94.762,94.763,94.763,0,0,0,94.762,189.524Z"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                      </g>
                      <g id="Group_565" data-name="Group 565">
                        <path
                          id="Path_6388"
                          data-name="Path 6388"
                          d="M119.386,94.762,75.809,65.711v58.1Zm8.8-5.519a6.633,6.633,0,0,1,0,11.039L76.645,134.646a6.634,6.634,0,0,1-10.313-5.52V60.4A6.633,6.633,0,0,1,76.645,54.88Z"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Vision and Mission Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 order-2">
                <img
                  src={visionImage}
                  className="w-full h-auto"
                  alt="Graduation ceremony"
                />
              </div>
              <div className="w-full md:w-1/2 text-center p-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#F9920A" }}>
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be a world leader in empowering students to achieve their academic and career aspirations by providing unparalleled guidance and access to world-class education opportunities across the globe.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <img
                  src={missionImage}
                  className="w-full h-auto"
                  alt="Students together"
                />
              </div>
              <div className="w-full md:w-1/2 text-center p-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#F9920A" }}>
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to inspire and support students in their pursuit of international education, offering personalized guidance, comprehensive services, and dedicated support to ensure they are well-prepared for success in a globalized world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  const scrollableContents = [
    {
      heading: "Wide Range of Courses:",
      description:
        "Explore a diverse selection of programs, including MBBS, Bachelor's, Master's, and Diplomas across various fields such as Nursing, Engineering, and Management, available in multiple countries.",
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
    const container = scrollContainerRef.current;

    const updateScrollbar = () => {
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

    const handleWheel = (event) => {
      if (!list) return;

      const { deltaY } = event;
      const scrollTop = list.scrollTop;
      const scrollHeight = list.scrollHeight;
      const clientHeight = list.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      // Prevent default to control inner scroll first
      event.preventDefault();

      // Calculate new scroll position
      const newScrollTop = scrollTop + deltaY;
      if (newScrollTop >= 0 && newScrollTop <= maxScroll) {
        // Scroll the inner container
        list.scrollTop = newScrollTop;
      } else if (newScrollTop < 0) {
        // At top, scroll page up
        list.scrollTop = 0;
        window.scrollBy(0, deltaY);
      } else if (newScrollTop > maxScroll) {
        // At bottom, scroll page down
        list.scrollTop = maxScroll;
        window.scrollBy(0, deltaY);
      }
    };

    const handleWheelOnScrollbar = (event) => {
      if (!list) return;

      event.preventDefault();
      const delta = event.deltaY > 0 ? 50 : -50; // Adjust scroll speed
      list.scrollTop += delta;
    };

    const handleMouseDown = (event) => {
      event.preventDefault();
      setIsDragging(true);
      setStartY(event.clientY);
      setStartScrollTop(list.scrollTop);
    };

    const handleMouseMove = (event) => {
      if (!isDragging || !list || !line) return;

      const deltaY = event.clientY - startY;
      const scrollHeight = list.scrollHeight;
      const clientHeight = list.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const maxLineScroll = clientHeight - parseFloat(line.style.height || 20);

      const scrollPercentage = deltaY / maxLineScroll;
      const newScrollTop = startScrollTop + scrollPercentage * maxScroll;

      list.scrollTop = Math.max(0, Math.min(newScrollTop, maxScroll));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (list) {
      list.addEventListener("scroll", updateScrollbar);
    }
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    if (line) {
      line.addEventListener("wheel", handleWheelOnScrollbar, { passive: false });
      line.addEventListener("mousedown", handleMouseDown);
    }
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    updateScrollbar();

    return () => {
      if (list) {
        list.removeEventListener("scroll", updateScrollbar);
      }
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (line) {
        line.removeEventListener("wheel", handleWheelOnScrollbar);
        line.removeEventListener("mousedown", handleMouseDown);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, startScrollTop]);

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <section className="bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mt-10">
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
          <div ref={scrollContainerRef} className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="relative bg-[#00334D] text-white flex flex-col items-start justify-center text-left p-4 md:pl-40 md:pr-20">
              <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                <span>Why </span>
                <span style={{ color: "#F9920A" }}>Crossroads?</span>
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-10">
                At Crossroads, we are committed to guiding students toward their
                dreams with personalized support and expert advice. Our mission
                is to simplify the complex journey of education and career
                planning.
              </p>

              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-white overflow-hidden md:block hidden">
                  <div
                    ref={lineRef}
                    className="w-full bg-orange-500 transition-transform duration-200 ease-out cursor-pointer"
                  />
                </div>
                <div
                  ref={listRef}
                  className="pl-4 md:pl-8 ml-4 overflow-y-auto scrollbar-hide"
                  style={{ maxHeight: "300px" }}
                >
                  <ul className="space-y-4 md:space-y-6 pr-4">
                    {scrollableContents.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <TickSVG />
                        <div>
                          <h4
                            className="font-bold text-base md:text-lg"
                            style={{ color: "#F9920A" }}
                          >
                            {item.heading}
                          </h4>
                          <p className="mt-1 text-sm md:text-base">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full mt-6 md:mt-0">
              <img
                src={rightSideImg}
                alt="Crossroads Illustration"
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMission />
      <VisionMissionSection />

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