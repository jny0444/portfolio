"use client";

import { useState } from "react";

export default function OMR() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleBubbleClick = (questionNumber: number, option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNumber]: option,
    }));
  };

  const isBubbleFilled = (questionNumber: number, option: string) => {
    return answers[questionNumber] === option;
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-2 sm:p-4 md:p-6 bg-white [filter:url(#ink-bleed)]">
        {/* OMR Sheet Header */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            ANSWER SHEET
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="truncate">Name: _________________________</div>
            <div>Roll No: ___________</div>
            <div>Date: ___________</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-4 md:mb-6 p-2 sm:p-4 border border-gray-300">
          <h3 className="font-bold mb-2 text-sm sm:text-base">INSTRUCTIONS:</h3>
          <ul className="text-xs space-y-1">
            <li>• Click on the bubbles to fill them</li>
            <li>• Fill the bubbles completely</li>
            <li>• Click again to change your answer</li>
            <li>• Only one answer per question</li>
          </ul>
        </div>

        {/* OMR Answer Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8">
          {/* Questions 1-25 */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-center mb-2 md:mb-4 text-xs sm:text-sm md:text-base">
              Questions 1-25
            </h4>
            <div className="w-full">
              {Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i + 1}
                  className="flex items-center justify-center mb-1 md:mb-2"
                >
                  <span className="w-4 sm:w-6 md:w-8 text-right mr-1 sm:mr-2 md:mr-4 text-xs sm:text-sm font-mono">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex space-x-1 sm:space-x-2 md:space-x-4">
                    {["A", "B", "C", "D"].map((option) => (
                      <div key={option} className="flex items-center">
                        <span className="text-xs mr-0.5 sm:mr-1">{option}</span>
                        <button
                          onClick={() => handleBubbleClick(i + 1, option)}
                          className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                          aria-label={`Question ${i + 1}, option ${option}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                              isBubbleFilled(i + 1, option)
                                ? "bg-black"
                                : "bg-transparent"
                            }`}
                          ></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questions 26-50 */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-center mb-2 md:mb-4 text-xs sm:text-sm md:text-base">
              Questions 26-50
            </h4>
            <div className="w-full">
              {Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i + 26}
                  className="flex items-center justify-center mb-1 md:mb-2"
                >
                  <span className="w-4 sm:w-6 md:w-8 text-right mr-1 sm:mr-2 md:mr-4 text-xs sm:text-sm font-mono">
                    {String(i + 26).padStart(2, "0")}.
                  </span>
                  <div className="flex space-x-1 sm:space-x-2 md:space-x-4">
                    {["A", "B", "C", "D"].map((option) => (
                      <div key={option} className="flex items-center">
                        <span className="text-xs mr-0.5 sm:mr-1">{option}</span>
                        <button
                          onClick={() => handleBubbleClick(i + 26, option)}
                          className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                          aria-label={`Question ${i + 26}, option ${option}`}
                        >
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                              isBubbleFilled(i + 26, option)
                                ? "bg-black"
                                : "bg-transparent"
                            }`}
                          ></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 md:mt-8 text-center text-xs">
          <div className="border-t border-gray-300 pt-4">
            <p>FOR OFFICE USE ONLY</p>
            <div className="flex flex-col sm:flex-row sm:justify-around mt-2 gap-2 sm:gap-0">
              <span>Marks Obtained: _____</span>
              <span>Total Marks: _____</span>
              <span>Percentage: _____</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
