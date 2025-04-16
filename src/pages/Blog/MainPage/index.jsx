import React, { Suspense, useState } from "react";
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

const BlogPostHeadCard = ({ post }) => {
  const slug = slugify(post.title, { lower: true, strict: true });

  return (
    <div className="px-4 sm:px-4 lg:px-1 my-14 sm:my-14 lg:my-10 shadow-lg mx-auto">
      <img
        src={post.image}
        alt={post.imageAlt}
        className="w-full h-[340px] object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{post.date}</p>
        <p className="text-gray-700 mb-6">{post.excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="text-[#F9920A] hover:text-[#e07a00] font-medium inline-flex items-center"
        >
          Continue Reading →
        </a>
      </div>
    </div>
  );
};

const BlogPostCard = ({ post }) => {
  const slug = slugify(post.title, { lower: true, strict: true });

  return (
    <div className="blog-post-card border border-gray-200 overflow-hidden shadow-sm">
      <img
        src={post.image}
        alt={post.imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{post.date}</p>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="text-[#F9920A] hover:text-[#e07a00] font-medium inline-flex items-center"
        >
          Continue Reading →
        </a>
      </div>
    </div>
  );
};

const RecentUpdatesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  console.log("Current Page:", currentPage);
  console.log("Index of First Post:", indexOfFirstPost);
  console.log("Index of Last Post:", indexOfLastPost);
  console.log("Current Posts Length:", currentPosts.length);

  return (
    <section className="recent-updates">
      <div className="px-4 sm:px-4 lg:px-20 mt-14 sm:mt-14 lg:mt-10 mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-1">Recent Updates</h2>
          {blogPostsHead.map(post => (
            <BlogPostHeadCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-4 lg:px-20 my-14 sm:my-14 lg:my-20 mx-auto">
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={handlePrevPage}
              className={`px-3 py-1 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#F9920A] hover:text-[#e07a00]'}`}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-3 py-1 rounded ${currentPage === number ? 'bg-[#F9920A] text-white' : 'text-[#F9920A] hover:text-[#e07a00]'}`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className={`px-3 py-1 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#F9920A] hover:text-[#e07a00]'}`}
              disabled={currentPage === totalPages} 
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Blog = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: '<div style="margin-bottom: 1rem;">Blog Education News &</div>Study Abroad Updates',
    className: "px-1 relative",
    classNameTitle: "relative -top-24 text-services-title",
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

      <RecentUpdatesSection />

      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Blog;