import React from "react";

export default function BlogsDetail() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Keep Your Home Clean and Fresh All Year Round
        </h1>
        <p className="text-gray-600">
          Published on <span className="font-semibold">October 17, 2025</span>{" "}
          by <span className="font-semibold">Cleava Cleaning Team</span>
        </p>
        <img
          src="https://media.istockphoto.com/id/1439954031/photo/boy-and-father-wearing-gloves-collecting-bottles.webp?a=1&b=1&s=612x612&w=0&k=20&c=LQhjdLeggCPG7Ymdu1S0QnAMLHQ9jJKgbA8NK4QIlpU="
          alt="Cleaning illustration"
          className="mt-8 rounded-2xl shadow-md w-full max-h-[500px] object-cover"
        />
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Article */}
        <article className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Keeping your home clean isn’t just about appearances—it’s about
            creating a healthy and comfortable space for your family. In this
            article, we’ll explore simple habits and routines that can help you
            maintain a spotless and organized home without stress.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            1. Daily Cleaning Habits
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            suscipit metus vel urna lacinia, ac lacinia odio imperdiet. Donec
            fringilla mi in ante porttitor, nec vehicula justo vehicula. Aenean
            in sapien id eros congue commodo at id purus.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            2. Weekly Deep Cleaning
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Sed cursus ligula et urna porttitor, ac tempus mi dapibus. Donec
            venenatis euismod magna, id vulputate lorem tincidunt ac. In
            vulputate, purus nec lacinia viverra, nulla lorem ullamcorper odio,
            vel suscipit nulla justo ac est.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            3. Eco-Friendly Cleaning Tips
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Praesent congue libero sed magna interdum feugiat. Integer non
            eleifend lorem. Aliquam erat volutpat. Mauris blandit augue nec nisi
            condimentum, ac tincidunt libero feugiat. Fusce vehicula odio in sem
            blandit, nec dapibus justo hendrerit.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Etiam commodo eros vel gravida aliquet. Clean homes lead
            to peaceful minds—start small and stay consistent!
          </p>
        </article>

        {/* Sidebar */}
        <aside className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6 border-b pb-2">
            Recent Posts
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                7 Tips to Keep Your Apartment Fresh and Clean
              </a>
              <p className="text-sm text-gray-500">September 12, 2025</p>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                The Benefits of Eco-Friendly Cleaning Products
              </a>
              <p className="text-sm text-gray-500">August 8, 2025</p>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                How to Create a Weekly Cleaning Routine That Works
              </a>
              <p className="text-sm text-gray-500">July 22, 2025</p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
