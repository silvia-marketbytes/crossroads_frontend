import { Suspense } from "react";
import Banner from "../../../../components/Banner";
import bannerImg from "../../../../assets/Services/languagelabbanner.webp";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import CourseSection from "../../../Home/UiComponents/CourseSection";
import FreeEducationSection from "../../../Home/UiComponents/FreeEducationSection";
import FindCourse from './FindCourse'; // Import the FindCourse component

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

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <div className="max-w-full mx-auto ">
        <FindCourse /> 
      </div>

      <Suspense fallback={<div></div>}>
        <CourseSection {...bannerProps} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <FreeEducationSection {...bannerProps} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Course;
