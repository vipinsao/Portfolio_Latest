"use client";
import Image from "next/image";
import { useModal } from "../context/ModalContext";

export default function ModalComponent() {
  const { isOpen, view, data, closeModal } = useModal();

  if (!isOpen || !data) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="relative w-full max-w-xl md:max-w-2xl max-h-[85vh] bg-white dark:bg-neutral-950 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-3 top-3 text-gray-700 dark:text-gray-200 text-xl font-bold"
        >
          ×
        </button>

        {/* Top Image */}
        {data.image && (
          <div className="relative w-full h-[230px] border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6 max-h-[calc(85vh-230px-50px)] overflow-y-auto text-gray-900 dark:text-gray-200">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>

          {/* Category Tag */}
          <div className="text-xs inline-flex px-3 py-1 border rounded-md mb-4">
            {view.toUpperCase()}
          </div>

          {/* Description */}
          {data.description && (
            <p className="text-sm leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
              {data.description}
            </p>
          )}

          {/* PROJECT / WORKFLOW DETAILS */}
          {(view === "project" || view === "workflow") && (
            <>
              {data.problem && (
                <Section title="Problem" content={data.problem} />
              )}
              {data.solution && (
                <Section title="Solution" content={data.solution} />
              )}
              {data.myApproach && (
                <Section title="My Approach" content={data.myApproach} />
              )}

              {data.challenges?.length > 0 && (
                <ListSection title="Challenges" items={data.challenges} />
              )}

              {data.features?.length > 0 && (
                <ListSection title="Features" items={data.features} />
              )}

              {data.techStack?.length > 0 && (
                <ListSection title="Tech Stack" items={data.techStack} small />
              )}

              {data.results && (
                <Section title="Result" content={data.results} />
              )}
              {data.lessonsLearned && (
                <Section title="Key Lesson" content={data.lessonsLearned} />
              )}
            </>
          )}

          {/* BLOG */}
          {view === "blog" && (
            <>
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <span>{data.platform}</span>
                <span>{data.date}</span>
                <span>{data.readTime}</span>
              </div>

              {data.summary && (
                <Section title="Summary Insight" content={data.summary} />
              )}
              {data.tags && (
                <ListSection title="Tags" items={data.tags} small />
              )}
            </>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {data.liveLink && (
              <a
                target="_blank"
                href={data.liveLink}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Live Demo
              </a>
            )}
            {data.githubLink && (
              <a
                target="_blank"
                href={data.githubLink}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Code Repo
              </a>
            )}
            {data.link && (
              <a
                target="_blank"
                href={data.link}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Visit Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* SUB COMPONENTS */
function Section({ title, content }) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

function ListSection({ title, items, small }) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <ul
        className={`list-disc pl-5 space-y-1 ${
          small ? "text-xs" : "text-sm"
        } text-gray-700 dark:text-gray-300`}
      >
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
