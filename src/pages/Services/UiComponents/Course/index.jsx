import { Suspense, useRef, useEffect } from "react";
import Banner from "../../../../components/Banner";
import bannerImg from "../../../../assets/Courses/Course Page_result.webp";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import CourseSection from "../../../Home/UiComponents/CourseSection";
import FreeEducationSection from "../../../Home/UiComponents/FreeEducationSection";
import FindCourse from './FindCourse';

const Course = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Courses",
    className: "px-10 relative",
    classNameTitle: "relative text-center text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
    subtitle: "Discover the journeys of individuals who transformed ambition into achievement...",
  };

  const findCourseRef = useRef(null);
  const courseSectionRef = useRef(null);
  const freeEducationRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show or hide the scroll-to-top button based on scroll position
      const scrollButton = document.getElementById('scrollToTopButton');
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <div ref={findCourseRef} className="max-w-full mx-auto">
        <FindCourse />
      </div>

      <Suspense fallback={<div></div>}>
        <div ref={courseSectionRef}>
          <CourseSection {...bannerProps} showPagination={true} />
        </div>
      </Suspense>

      <Suspense fallback={<div></div>}>
        <div ref={freeEducationRef}>
          <FreeEducationSection {...bannerProps}  />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div ref={contactSectionRef}>
          <ContactSection />
        </div>
      </Suspense>

      <button
        id="scrollToTopButton"
        onClick={scrollToTop}
        style={{
          display: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#F9920A',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    </div>
  );
};

export default Course;
