import React, { Suspense, useRef, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import slugify from "slugify";
import Banner from "../../../components/Banner";
import bannerImg from "../../../assets/blog/banner png_result.webp";
import ContactSection from "../../../pages/Home/UiComponents/ContactSection";
import postImage1 from "../../../assets/blog/Heading.webp";
import postImage2 from "../../../assets/blog/I_result.webp";
import postImage3 from "../../../assets/blog/H_result.webp";
import postImage4 from "../../../assets/blog/D_result.webp";
import postImage5 from "../../../assets/blog/E_result.webp";
import postImage6 from "../../../assets/blog/F_result.webp";
import postImage7 from "../../../assets/blog/G_result.webp";

// Combine blogPostsHead and blogPosts for lookup
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

// Combine all posts for lookup
const allPosts = [...blogPostsHead, ...blogPosts];

const BlogDetail = () => {
  const { slug } = useParams();

  // Find the blog post by slug
  const post = allPosts.find(
    (p) => slugify(p.title, { lower: true, strict: true }) === slug
  );

  // Handle case where post is not found
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

  // Checklist content
  const checklistContent = {
    "Start with Research": [
      "Are you dreaming of studying abroad but feeling overwhelmed with the choices and process?",
      "Choosing the right step-by-step process is key to help you choose the consultants to fit your unique needs.",
      "Evaluate services."
    ],
    "Check Their Credentials": [
      "Start with research, educational consultants, and student success stories.",
      "Read reviews, check Google reviews, testimonials.",
      "Check their credentials and ensure success rates and partnerships with accredited universities.",
      "Accreditation ensures they are accredited by relevant educational bodies.",
      "Certifications: Verify their certifications and affiliations."
    ],
    "Evaluate Their Success": [
      "Evaluate their success rate to understand your expectations.",
      "University Selection: Guidance in choosing the right university based on your profile.",
      "Consider Their Network: A wide network of universities can offer more options.",
      "Alumni Success: Ask for alumni success stories and testimonials from past students.",
      "Transparency is Key: Ensure they share the success rate and track records."
    ],
    "Location and Accessibility": [
      "Location makes it easier for you to have consultations.",
      "Online Presence: A strong online presence indicates they are up-to-date with the latest trends."
    ],
    "Student Support Services": [
      "Ask the right questions about company services.",
      "Success Stories: Can they share success stories and connect with past students?",
      "Student Support: Ensure they provide visa applications and interview preparation.",
      "Visa Assistance: Help with visa applications and preparation."
    ],
    "Why Choose This Consultant?": [
      "Overseas Education: Guidance on overseas education and preparation.",
      "Why Choose: Understand what experts expect and how they prepare you for leaving."
    ],
  };

  const contentRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observers = [];
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(Object.keys(checklistContent)[index]);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  
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
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 max-w-6xl mx-auto h-screen">
          {/* Sticky Left Sidebar */}
          <div className="w-full lg:w-1/4 h-full bg-white shadow-md p-6 rounded-lg overflow-y-auto"> 
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contents</h3>
            <ul className="space-y-4"> 
              {Object.keys(checklistContent).map((sectionTitle, index) => (
                <li key={index}>
                  <a
                    href={`#${slugify(sectionTitle, { lower: true, strict: true })}`}
                    className={`text-sm ${activeSection === sectionTitle ? "text-[#F9920A]" : "text-gray-600 hover:text-[#e07a00]"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        slugify(sectionTitle, { lower: true, strict: true })
                      );
                      if (element && contentRef.current) {
                        const offsetTop = element.offsetTop - contentRef.current.offsetTop;
                        contentRef.current.scrollTo({ top: offsetTop, behavior: "smooth" });
                      }
                    }}
                  >
                    {sectionTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div
            ref={contentRef}
            className="w-full lg:w-3/4 h-full overflow-y-auto bg-white p-6 rounded-lg shadow-md" 
          >
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-[300px] object-cover mb-6 rounded-lg"
            />
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{post.date}</p>

            
            {Object.entries(checklistContent).map(([sectionTitle, items], index) => (
              <div
                ref={(el) => (sectionRefs.current[index] = el)}
                key={sectionTitle}
                id={slugify(sectionTitle, { lower: true, strict: true })}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{sectionTitle}</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            
            <a
              href="#"
              className="inline-block bg-[#F9920A] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#e07a00] transition-colors mb-4"
            >
              Explore Now
            </a>

            <Link
              to="/Blogs"
              className="text-[#F9920A] hover:text-[#e07a00] font-medium inline-block"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-10 bg-[#1A2A44] text-white">
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