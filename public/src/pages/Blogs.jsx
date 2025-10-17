import React from "react";
import { useTranslation } from "../../languages"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      title: t("blogsPage").blog1Title,
      date: t("blogsPage").blog1Date,
      excerpt: t("blogsPage").blog1Excerpt,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1639621108959-15f9c4257508?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      title: t("blogsPage").blog2Title,
      date: t("blogsPage").blog2Date,
      excerpt: t("blogsPage").blog2Excerpt,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1625694061463-4e3734dd7aa1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      title: t("blogsPage").blog3Title,
      date: t("blogsPage").blog3Date,
      excerpt: t("blogsPage").blog3Excerpt,
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/2231252303/photo/group-of-asian-people-with-friends-on-birthday-party-at-night-celebration-and-friendship.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZbFuEmV4I-3vSsupT9nYrS6JHxWZ47Y5Bzte16ZYHPs=",
      title: t("blogsPage").blog4Title,
      date: t("blogsPage").blog4Date,
      excerpt: t("blogsPage").blog4Excerpt,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24">
      {/* Page Title */}
      <div className="text-center py-10 sm:py-16 px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-gray-800 leading-tight">
          {t("blogsPage").title}
        </h1>
      </div>

      {/* Blog Cards Grid */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-primary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Blog Image */}
              <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif italic font-medium mb-2 sm:mb-3 line-clamp-3">
                  {post.title}
                </h2>

                {post.date && (
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">
                    {post.date}
                  </p>
                )}

                <p className="text-sm sm:text-base text-gray-700 mb-5 line-clamp-5">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => {
                    navigate("/blog/6541");
                  }}
                  className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 uppercase tracking-wider font-medium transition-colors"
                >
                  {t("blogsPage").readMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
