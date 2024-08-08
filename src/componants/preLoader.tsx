import React from "react";

interface PreLoaderProps {
  onLanguageSelect: (language: "en" | "ja") => void;
  isVisible: boolean;
}

const PreLoader: React.FC<PreLoaderProps> = ({
  onLanguageSelect,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 loader-bg ">
      <div className="bg-white p-8 shadow-lg text-center preloader-option">
        <h1 className="text-4xl font-bold mb-8">Select Your Language</h1>
        <div className="space-x-4">
          <button
            onClick={() => onLanguageSelect("en")}
            className="px-6 py-3  text-white  transition duration-300 option en"
          >
            English
          </button>
          <button
            onClick={() => onLanguageSelect("ja")}
            className="px-6 py-3  text-white   transition duration-300 option jp"
          >
            日本語
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
