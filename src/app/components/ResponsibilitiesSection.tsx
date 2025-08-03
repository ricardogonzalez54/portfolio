"use client";

import React, { useState } from "react";

const CodeIcon = () => (
  <svg
    className="mr-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const ChevronDownIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${
      isExpanded ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

interface ResponsibilitiesSectionProps {
  responsibilities: string[];
}

const ResponsibilitiesSection: React.FC<ResponsibilitiesSectionProps> = ({
  responsibilities,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer w-full flex items-center justify-between font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150"
      >
        <div className="flex items-center">
          <CodeIcon />
          Responsabilidades principales:
        </div>
        <ChevronDownIcon isExpanded={isExpanded} />
      </button>

      <div
        className={`overflow-hidden transition-opacity duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {responsibility}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsibilitiesSection;
