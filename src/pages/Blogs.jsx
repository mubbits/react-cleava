import React from "react";
import { useTranslation } from "../../languages"; // adjust path if needed
import blog1 from "../assets/images/blogs/blog1.jpg";
import blog2 from "../assets/images/blogs/blog2.jpg";
import blog3 from "../assets/images/blogs/blog3.jpg";
import blog4 from "../assets/images/blogs/blog4.jpg";
export default function Blogs() {
  const { t } = useTranslation();
  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556566353-cdcb88a69f3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: t("blogsPage").blog1Title,
      date: t("blogsPage").blog1Date,
      excerpt: t("blogsPage").blog1Excerpt,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1639621108959-15f9c4257508?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      title: t("blogsPage").blog2Title,
      date: t("blogsPage").blog2Date,
      excerpt: t("blogsPage").blog2Excerpt,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1625694061463-4e3734dd7aa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
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
    <div className="min-h-screen bg-white pt-24">
      {/* Page Title */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-serif italic text-gray-800">
          {t("blogsPage").title}
        </h1>
      </div>
      {/* Blog Cards Grid */}
      <div className="px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-primary">
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif italic font-medium mb-3 line-clamp-3">
                  {post.title}
                </h2>
                {post.date && (
                  <p className="text-sm text-gray-600 mb-4">{post.date}</p>
                )}
                <p className="text-lg text-gray-700 mb-6 line-clamp-5">
                  {post.excerpt}
                </p>
                <button className="text-sm text-gray-500 hover:text-gray-700 uppercase tracking-wider font-medium transition-colors">
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
