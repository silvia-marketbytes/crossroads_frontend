import React, { Suspense, useRef, useState, useEffect } from "react";
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

const blogPostsHead = [
  {
    id: 1,
    image: postImage1,
    imageAlt: "Overseas education consultation",
    title: "What to Expect from Overseas Education Consultants in Kochi: A Step-by-Step Process",
    date: "Feb 28, 2025",
    excerpt: "We share a wealth of resources, including study guides, practice questions, and sample papers. These materials are curated to match the exam...",
    fullContent: "We share a wealth of resources, including study guides, practice questions, and sample papers. These materials are curated to match the exam patterns and difficulty levels of various tests. Our consultants provide personalized guidance to help you navigate the complex process of studying abroad, from selecting the right university to visa application assistance."
  },
];

const blogPosts = [
  {
    id: 1,
    image: postImage2,
    imageAlt: "Overseas education consultation",
    title: "How Overseas Education Consultants in Kochi Can Transform Your Future",
    date: "Feb 21, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and realization can be bridged with the right guidance. Our consultants in Kochi offer personalized support to help you achieve your goals."
  },
  {
    id: 2,
    image: postImage3,
    imageAlt: "Choosing the best consultant",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 3,
    image: postImage4,
    imageAlt: "Education consultation",
    title: "How Overseas Education Consultants in Kochi Can Transform Your Future",
    date: "Feb 21, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and realization can be bridged with the right guidance. Our consultants in Kochi offer personalized support to help you achieve your goals."
  },
  {
    id: 4,
    image: postImage5,
    imageAlt: "Job and education",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 5,
    image: postImage6,
    imageAlt: "Graduation success",
    title: "How Overseas Education Consultants in Kochi Can Transform Your Future",
    date: "Feb 21, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and realization can be bridged with the right guidance. Our consultants in Kochi offer personalized support to help you achieve your goals."
  },
  {
    id: 6,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 7,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 8,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
  {
    id: 9,
    image: postImage7,
    imageAlt: "Education consultation group",
    title: "How to Choose the Best Overseas Education Consultants in Kochi",
    date: "Feb 20, 2025",
    excerpt: "In today's globalized world, the dream of pursuing higher education abroad is more attainable than ever. But the gap between aspiration and...",
    fullContent: "Choosing the right consultant is crucial for your study abroad journey. Learn how our experts in Kochi can guide you through the process with tailored advice and resources."
  },
];

const allPosts = [...blogPostsHead, ...blogPosts];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = allPosts.find(
    (p) => slugify(p.title, { lower: true, strict: true }) === slug
  );

  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRefs = useRef([]);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [activeSection, setActiveSection] = useState(null); // New state for active section

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

  const updateThumbPosition = (activeIndex) => {
    const container = scrollRef.current;
    if (!container) return;

    const totalItems = Object.keys(checklistContent).length;
    const clientHeight = 300; // Matches max-h-[300px]
    const thumbSize = Math.max(clientHeight / totalItems, 20);
    const thumbOffset = (activeIndex / (totalItems - 1)) * (clientHeight - thumbSize);

    setThumbTop(thumbOffset);
    setThumbHeight(thumbSize);
  };

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (section) {
        const sectionTitle = Object.keys(checklistContent)[index];
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionTitle); // Update active section
              updateThumbPosition(index);
            }
          },
          { threshold: 0.5, root: contentRef.current }
        );
        observer.observe(section);
        return observer;
      }
      return null;
    });

    return () => observers.forEach((observer) => observer && observer.disconnect());
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
          {/* Left Side Navigation - Fixed Position */}
          <div className="w-full lg:w-1/4 h-full relative top-6 self-start">
            <div className="bg-white p-6">
              
              <div className="relative">
                <div className="absolute top-0 left-0 h-[300px] w-[4px] bg-[#fbe3c3] rounded-full z-10" />
                <div
                  className="absolute left-0 w-[4px] bg-[#F9920A] rounded-full z-20 transition-all duration-100"
                  style={{ top: `${thumbTop}px`, height: `${thumbHeight}px` }}
                />
                <div
                  ref={scrollRef}
                  className="scrollbar-hidden max-h-[300px] pl-6"
                >
                  <ul className="space-y-4">
                    {Object.keys(checklistContent).map((sectionTitle, index) => (
                      <li key={index}>
                        <a
                          href={`#${slugify(sectionTitle, { lower: true, strict: true })}`}
                          className={`block text-sm pl-3 -ml-1px py-1 transition-colors ${
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
                              const offsetTop = element.offsetTop - contentRef.current.offsetTop;
                              contentRef.current.scrollTo({ top: offsetTop, behavior: "smooth" });
                              setActiveSection(sectionTitle); // Update active section on click
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
            </div>
          </div>

          {/* Right Side Content - Non-Scrollable */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white p-6 h-full">
              {/* Inner Scrollable Content Container */}
              <div
                ref={contentRef}
                className="h-[60vh] pr-4 mb-8 overflow-y-auto scrollbar-visible-custom"
              >
                <p className="text-gray-700 mb-8">
                  Are you dreaming of studying abroad but feeling overwhelmed with the choices and process?
                  Choosing the right overseas education consultant can make or break your plans. Here's a
                  user-friendly guide to help you choose the best consultants for your unique needs.
                </p>
                {Object.entries(checklistContent).map(([sectionTitle, items], index) => (
                  <div
                    key={sectionTitle}
                    id={slugify(sectionTitle, { lower: true, strict: true })}
                    className="mb-12 last:mb-0"
                    ref={(el) => (sectionRefs.current[index] = el)}
                  >
                    <h2 className="text-2xl font-semibold text-[#00334D] mb-4">{sectionTitle}</h2>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Link
                  to="/Blogs"
                  className="text-[#F9920A] hover:text-[#e07a00] font-medium inline-flex items-center"
                >
                  ← Back to Blog
                </Link>
                <a
                  href="#"
                  className="inline-block bg-[#F9920A] text-white font-medium py-2 px-6 rounded-lg hover:bg-[#e07a00] transition-colors"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "You Might Also Like" Section */}
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
                    <p className="text-gray-700 mb-4">{post.excerpt.substring(0, 100)}...</p>
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
    </div>
  );
};

export default BlogDetail;