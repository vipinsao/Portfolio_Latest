"use client";
import { blogs } from "../data/portfolio";
import { useModal } from "../context/ModalContext";

export default function Blogs() {
  const { openModal } = useModal();

  return (
    <section id="blogs" className="w-full py-28 bg-white border-t">
      <div className="max-w-6xl mx-auto w-full px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Writing & Technical Blogs
        </h2>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <button
              key={blog.id}
              onClick={() => openModal("blog", blog)}
              className="w-full text-left border rounded-xl p-6 hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {blog.title}
              </h3>

              <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <span>{blog.platform}</span>
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>

              <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                {blog.description}
              </p>

              <div className="mt-4 text-sm underline text-blue-700">Read →</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
