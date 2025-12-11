// "use client";

// import React, { useEffect, useState } from "react";
// import { use } from "react";

// export default function BlogDetails({ params }) {
//   // 🔥 FIX: unwrap params promise
//   const { id } = use(params);

//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const fetchSingle = async () => {
//       try {
//         const res = await fetch(
//           `https://nest-solution-backend.vercel.app/api/articles/${id}`
//         );
//         const data = await res.json();
//         setArticle(data);
//       } catch (err) {
//         console.log("Error:", err);
//       }
//     };

//     fetchSingle();
//   }, [id]);

//   if (!article) return <div className="p-10">Loading...</div>;

//   return (
//     <div className="pt-38 px-12 md:px-16 lg:px-40 max-w-4xl mx-auto">
//       <img
//         src={article.image}
//         alt={article.title}
//         className="w-full h-90 object-cover rounded-2xl shadow"
//       />

//       <h1 className="text-4xl font-bold mt-6">{article.title}</h1>
//       <p className="text-gray-600 mt-2">{article.subtitle}</p>

//       <div className="mt-6 text-gray-700 leading-8 whitespace-pre-line">
//         {article.content || article.description}
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import { use } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogDetails({ params }) {
  const { id } = use(params);

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const res = await fetch(
          `https://nest-solution-backend.vercel.app/api/articles/${id}`
        );
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchSingle();
  }, [id]);

  if (!article) return <div className="p-10">Loading...</div>;

  return (
    <div className="pt-28 mycontainer px-6 md:px-16 lg:px-40 max-w-4xl mx-auto">
      
      {/* Header Image */}
      {article.image && (
        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold mt-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
        {article.title}
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mt-3 text-lg">
        {article.subtitle}
      </p>

      {/* Author + Share */}
      <div className="flex justify-between items-center mt-8">
        <div className="text-gray-500 text-sm">
          ✍️ <span className="font-medium">{article.author}</span>  
          <br />
          <span className="text-xs">Published: {new Date().toDateString()}</span>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition">
            <Facebook size={18} />
          </button>
          <button className="p-3 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white transition">
            <Twitter size={18} />
          </button>
          <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition">
            <Linkedin size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 text-gray-700 leading-8 text-lg whitespace-pre-line">
        {article.content || article.description}
      </div>

      {/* Divider */}
      <div className="w-full border-t mt-12 pt-8"></div>

      {/* Related Articles (optional) */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Related Articles</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((x) => (
            <div
              key={x}
              className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="h-32 bg-gray-200 rounded-md"></div>
              <h4 className="font-semibold mt-3">Coming Soon...</h4>
              <p className="text-gray-500 text-sm">Related article preview</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
