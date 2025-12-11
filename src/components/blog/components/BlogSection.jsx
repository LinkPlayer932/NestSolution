// import React from "react";

// const BlogSection = () => {
//   const blogs = [
//     {
//       title: "How to Build a Modern Website",
//       desc: "A step-by-step guide to creating a clean and responsive website.",
//       img: "/Bitmap-Copy-3.webp",
//     },
//     {
//       title: "Top 5 UI/UX Tips",
//       desc: "Improve your design with these simple UI/UX tricks.",
//       img: "/5.webp",
//     },
//     {
//       title: "Next.js Beginner Guide",
//       desc: "Everything you need to know to get started with Next.js.",
//       img: "/4.webp",
//     },
//   ];

//   return (
//     <div className="pt-28 px-6 md:px-16 lg:px-32">
//       <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Blog</h2>
//       <p className="text-gray-600 mb-10">
//         Read the latest articles, tips, and updates.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((b, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
//           >
//             <img
//               src={b.img}
//               alt={b.title}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-5">
//               <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
//               <p className="text-gray-600 text-sm">{b.desc}</p>

//               <button className="mt-4 text-blue-600 font-medium hover:underline">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const BlogSection = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const res = await fetch(
//           "https://nest-solution-backend.vercel.app/api/articles"
//         );
//         const data = await res.json();
//         setArticles(data);
//       } catch (err) {
//         console.log("Error fetching:", err);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div className="pt-28 px-6 md:px-16 lg:px-32">
//       <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Blog</h2>
//       <p className="text-gray-600 mb-10">
//         Read the latest articles from our admin panel.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {articles.length === 0 && (
//           <p className="text-gray-500">No articles found.</p>
//         )}

//         {articles.map((a) => (
//           <div
//             key={a._id}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col"
//           >
//             {/* Fixed Image Height */}
//             {a.image && (
//               <img
//                 src={a.image}
//                 alt={a.title}
//                 className="w-full h-56 object-cover"
//               />
//             )}

//             {/* Content */}
//             <div className="p-5 flex flex-col flex-grow">
//               <h3 className="text-xl font-semibold mb-2">{a.title}</h3>

//               <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
//                 {a.subtitle || a.description?.slice(0, 140) + "..."}
//               </p>

//               {/* Button Stays at Bottom ALWAYS */}
//               <Link
//                 href={`/blog/${a._id}`}
//                 className="mt-4 text-blue-600 font-medium hover:underline block"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const BlogSection = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6; // 👈 per page kitne articles dikhane hain

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://nest-solution-backend.vercel.app/api/articles"
        );
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.log("Error fetching:", err);
      }
    };

    fetchArticles();
  }, []);

  // -------------------------------
  // PAGINATION LOGIC
  // -------------------------------
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  const prevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="pt-28 px-6 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Blog</h2>
      <p className="text-gray-600 mb-10">
        Read the latest articles from our admin panel.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.length === 0 && (
          <p className="text-gray-500">No articles found.</p>
        )}

        {currentArticles.map((a) => (
          <div
            key={a._id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            {a.image && (
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-56 object-cover"
              />
            )}

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>

              <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                {a.subtitle || a.description?.slice(0, 140) + "..."}
              </p>

              <Link
                href={`/blog/${a._id}`}
                className="mt-4 text-blue-600 font-medium hover:underline block"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION BUTTONS */}
      {articles.length > articlesPerPage && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            className="px-4 py-2 border rounded-lg"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-4 py-2 border rounded-lg"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
