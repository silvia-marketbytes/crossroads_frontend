import { Suspense, useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import slugify from "slugify";
import Banner from "../../../components/Banner";
import bannerImg from "../../../assets/blog/detailedpagebanner.webp";
import ContactSection from "../../../pages/Home/UiComponents/ContactSection";
import postImage1 from "../../../assets/blog/Heading.webp";
import postImage2 from "../../../assets/blog/I_result.webp";
import postImage3 from "../../../assets/blog/H_result.webp";
import postImage4 from "../../../assets/blog/D_result.webp";
import postImage5 from "../../../assets/blog/E_result.webp";
import postImage6 from "../../../assets/blog/F_result.webp";
import postImage7 from "../../../assets/blog/G_result.webp";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../components/modal";
 
const blogPostsHead = [
  {
    id: 1,
    image: postImage1,
    imageAlt: "Overseas education consultation",
    title: "What to Expect from Overseas Education Consultants in Kochi: A Step-by-Step Process",
    date: "Feb 28, 2025",
    excerpt: "We share a wealth of resources, including study guides, practice questions, and sample papers...",
    fullContent: "We share a wealth of resources, including study guides, practice questions, and sample papers. Our consultants provide personalized guidance to help you navigate the complex process of studying abroad, from selecting the right university to visa application assistance"
  },
];
 
const blogPosts = [
  {
    id: 1,
    image: postImage2,
    imageAlt: "Over RESPONSIVE education consultation",
    title: "How Overseas Education Consultants in Kochi Can Transform Your Future",
    date: "Feb 21, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and realization can be bridged with the right guidance. Our consultants in Kochi offer personalized support to help you achieve your goals."
  },
  {
    id: 2,
    image: postImage3,
    imageAlt: "Choosing the best consultant",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 3,
    image: postImage4,
    imageAlt: "Education consultation",
    title: "How Overseas Education Consultants in Kochi Can Transform Your Future",
    date: "Feb 21, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and realization can be bridged with the right guidance. Our consultants in Kochi offer personalized support to help you achieve your goals."
  },
  {
    id: 4,
    image: postImage5,
    imageAlt: "Job and education",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 5,
    image: postImage6,
    imageAlt: "Graduation success",
    title: "How Overseas Education Consultants in Kochi Can Transform Your Future",
    date: "Feb 21, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and realization can be bridged with the right guidance. Our consultants in Kochi offer personalized support to help you achieve your goals."
  },
  {
    id: 6,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 7,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 8,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 9,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
];
 
const allPosts = [...blogPostsHead, ...blogPosts];
 
const BlogDetail = () => {
  const { slug } = useParams();
  const post = allPosts.find(
    (p) => slugify(p.title, { lower: true, strict: true }) === slug
  );
 
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  const checklistContent = {
    "Start with Research": [
      "Google search for 'overseas education consultants in [your location]'.",
      "Read reviews: Check out Google reviews, testimonials, and student success stories.",
      "Visit websites: Look at their services, success rates, and partnerships with universities."
    ],
    "Check Their Credentials": [
      "Accreditation: Ensure they're accredited by relevant educational bodies.",
      "Experience: Look for a proven track record of accomplishments.",
      "Certifications: Verify their certifications and affiliations."
    ],
    "Evaluate Their Services": [
      "Personalized counseling to understand your aspirations.",
      "University Selection: Guidance in choosing the right university based on your profile.",
      "Application Assistance: Help with documentation and submission."
    ],
    "Consider Their Network": [
      "University Connections: Consultants with a wide network can offer more options.",
      "Alumni Network: A strong alumni network means better support and insights."
    ],
    "Transparency Is Key": [
      "Fee Structure: Ensure there are no hidden charges.",
      "Process Clarity: Clear explanation of each step in the process.",
      "Success Rate: Ask for their success rate and track record."
    ],
    "Location and Accessibility": [
      "Local Office: Having a local office makes it easier for face-to-face consultations.",
      "Online Presence: A strong online presence indicates they're up-to-date."
    ],
    "Ask the Right Questions": [
      "Experience: How long has the company been in the market?",
      "Success Stories: Can they provide references from past students?",
      "Services Offered: What's included in their package?"
    ],
    "Student Support Services": [
      "Visa Assistance: Help with visa applications and interview preparation.",
      "Pre-Departure Briefing: Guidance on what to expect before leaving."
    ]
  };
 
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRefs = useRef([]);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [activeSection, setActiveSection] = useState(Object.keys(checklistContent)[0]);
 
  const updateThumbPosition = (activeIndex) => {
    const container = scrollRef.current;
    if (!container) return;
 
    const totalItems = Object.keys(checklistContent).length;
    const trackHeight = 400;
    const thumbSize = Math.max(trackHeight / totalItems, 20);
    const maxScroll = trackHeight - thumbSize;
    const thumbOffset = (activeIndex / (totalItems - 1)) * maxScroll;
 
    setThumbTop(thumbOffset);
    setThumbHeight(thumbSize);
  };
 
  useEffect(() => {
    sectionRefs.current = Array(Object.keys(checklistContent).length).fill().map((_, i) => sectionRefs.current[i] || null);
 
    const observers = Object.keys(checklistContent).map((sectionTitle, index) => {
      const section = sectionRefs.current[index];
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionTitle);
              updateThumbPosition(index);
            }
          },
          {
            root: contentRef.current,
            threshold: 0.5,
            rootMargin: "-100px 0px 0px 0px"
          }
        );
        observer.observe(section);
        return observer;
      }
      return null;
    });
 
    updateThumbPosition(0);
 
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);
 
  if (!post) {
    return (
      <div className="px-4 sm:px-4 lg:px-20 my-14 mx-auto">
        <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
        <p className="text-gray-700">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/Blogs" className="text-[#F9920A] hover:text-[#e07a00] font-medium">
          Back to Blog
        </Link>
      </div>
    );
  }
 
  const recentPosts = allPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
 
  const bannerProps = {
    backgroundImage: bannerImg,
    title: post.title,
    className: "px-1 relative",
    classNameTitle: "relative -top-15 text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: false,
    counterPosition: "overlay",
  };
 
  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>
 
      <section className="px-4 sm:px-4 lg:px-20 my-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/4 h-full relative top-6 self-start">
            <div className="bg-white p-4 md:p-6">
              <div className="relative">
                <div className="absolute top-0 left-0 h-[400px] w-[4px] bg-[#fbe3c3] rounded-full z-10" />
                <div
                  className="absolute left-0 w-[4px] bg-[#F9920A] rounded-full z-20 transition-all duration-300"
                  style={{ top: `${thumbTop}px`, height: `${thumbHeight}px` }}
                />
                <div
                  ref={scrollRef}
                  className="max-h-[400px] pl-4 md:pl-6"
                >
                  <ul className="space-y-4">
                    {Object.keys(checklistContent).map((sectionTitle, index) => (
                      <li key={index}>
                        <a
                          href={`#${slugify(sectionTitle, { lower: true, strict: true })}`}
                          className={`block text-sm md:text-base pl-3 -ml-1px py-1 transition-colors ${
                            activeSection === sectionTitle
                              ? "text-[#F9920A] font-semibold"
                              : "border-transparent text-gray-600 hover:text-[#e07a00]"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(
                              slugify(sectionTitle, { lower: true, strict: true })
                            );
                            if (element && contentRef.current) {
                              element.scrollIntoView({ behavior: "smooth", block: "start" });
                              setActiveSection(sectionTitle);
                              updateThumbPosition(index);
                            }
                          }}
                        >
                          {sectionTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 mt-10 mb-12">
                <h3 className="text-lg font-semibold text-gray-800 pb-4">Share This Article</h3>
                <div className="flex space-x-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"/>
                    <path d="M29 20.5C29.8284 20.5 30.5 19.8284 30.5 19C30.5 18.1716 29.8284 17.5 29 17.5C28.1716 17.5 27.5 18.1716 27.5 19C27.5 19.8284 28.1716 20.5 29 20.5Z" fill="#F9920A"/>
                    <path d="M28 15C30.76 15 33 17.24 33 20V28C33 30.76 30.76 33 28 33H20C17.24 33 15 30.76 15 28V20C15 17.24 17.24 15 20 15H24H28Z" stroke="#F9920A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24 20C26.21 20 28 21.79 28 24C28 26.21 26.21 28 24 28C21.79 28 20 26.21 20 24C20 21.79 21.79 20 24 20Z" stroke="#F9920A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"/>
                    <path d="M21.1724 26.829L26.8294 21.172M19.0504 23.293L17.6364 24.707C17.265 25.0784 16.9704 25.5194 16.7693 26.0047C16.5683 26.49 16.4648 27.0102 16.4648 27.5355C16.4648 28.0608 16.5683 28.5809 16.7693 29.0662C16.9704 29.5515 17.265 29.9925 17.6364 30.364C18.0079 30.7354 18.4489 31.03 18.9342 31.2311C19.4195 31.4321 19.9396 31.5356 20.4649 31.5356C20.9902 31.5356 21.5104 31.4321 21.9957 31.2311C22.481 31.03 22.922 30.7354 23.2934 30.364L24.7054 28.95M23.2924 19.05L24.7064 17.636C25.0779 17.2645 25.5189 16.9699 26.0042 16.7688C26.4895 16.5678 27.0096 16.4644 27.5349 16.4644C28.0602 16.4644 28.5804 16.5678 29.0657 16.7688C29.551 16.9699 29.992 17.2645 30.3634 17.636C30.7349 18.0074 31 Creator: .0295 18.4484 31.2306 18.9337C31.4316 19.419 31.535 19.9392 31.535 20.4645C31.535 20.9898 31.4316 21.5099 31.2306 21.9952C31.0295 22.4805 30.7349 22.9215 30.3634 23.293L28.9494 24.707" stroke="#F9920A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"/>
                    <path d="M18.9404 15C18.9402 15.5305 18.7292 16.0391 18.3539 16.4139C17.9787 16.7888 17.4699 16.9993 16.9394 16.999C16.409 16.9988 15.9004 16.7878 15.5255 16.4125C15.1506 16.0373 14.9402 15.5285 14.9404 14.998C14.9407 14.4676 15.1517 13.959 15.5269 13.5841C15.9022 13.2092 16.411 12.9988 16.9414 12.999C17.4719 12.9993 17.9805 13.2103 18.3554 13.5855C18.7302 13.9608 18.9407 14.4696 18.9404 15ZM19.0004 18.48H15.0004V31H19.0004V18.48ZM25.3204 18.48H21.3404V31H25.2804V24.43C25.2804 20.77 30.0504 20.43 30.0504 24.43V31H34.0004V23.07C34.0004 16.9 26.9404 17.13 25.2804 20.16L25.3204 18.48Z" fill="#F9920A"/>
                  </svg>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"/>
                    <path d="M21.396 34H25.396V25.99H29L29.396 22.01H25.396V20C25.396 19.7348 25.5014 19.4804 25.6889 19.2929C25.8764 19.1054 26.1308 19 26.396 19H29.396V15H26.396C25.0699 15 23.7981 15.5268 22.8605 16.4645C21.9228 17.4021 21.396 18.6739 21.396 20V22.01H19.396L19 25.99H21.396V34Z" fill="#F9920A"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
 
          <div className="w-full lg:w-3/4">
            <div className="bg-white p-4 md:p-6 h-full">
              <div
                ref={contentRef}
                className="h-[100vh] pr-4 mb-8 overflow-y-auto scrollbar-visible-custom relative pb-16"
              >
                <p className="text-gray-700 mb-8 mt-5 text-base md:text-lg">
                  Are you dreaming of studying abroad but feeling overwhelmed with the choices and process? Choosing the right overseas education consultant can make or break your plans. Here's a user-friendly guide to help you choose the best consultants for your unique needs.
                </p>
                {Object.entries(checklistContent).map(([sectionTitle, items], index) => (
                  <div
                    key={sectionTitle}
                    id={slugify(sectionTitle, { lower: true, strict: true })}
                    className="mb-12 last:mb-0"
                    ref={(el) => (sectionRefs.current[index] = el)}
                  >
                    <h3 className="text-xs md:text-xl font-medium text-[#00334D] mb-4">{sectionTitle}</h3>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700 text-base md:text-lg">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-[16px] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
 
              <div className="flex justify-between items-center">
                <button
                  onClick={openModal}
                  className="inline-block bg-[#F9920A] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#e07a00] transition-colors"
                >
                  Enquire Now
                </button>
                <Link
                  to="/Blogs"
                  className="text-[#F9920A] hover:text-[#e07a00] font-medium inline-flex items-center"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section className="py-10 bg-[#00334D] text-white">
        <div className="px-4 sm:px-4 lg:px-20 mx-auto max-w-8xl">
          <h2 className="text-xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => {
              const postSlug = slugify(post.title, { lower: true, strict: true });
              return (
                <div key={post.id} className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-700 mb-4 text-base">{post.excerpt.substring(0, 100)}...</p>
                    <Link
                      to={`/Blogs/${postSlug}`}
                      className="text-[#F9920A] hover:text-[#e07a00] font-medium inline-flex items-center"
                    >
                      Continue Reading →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
 
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};
 
export default BlogDetail;