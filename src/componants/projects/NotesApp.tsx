import React, { useState } from "react";
import GalleryComponent from "@/app/Gallery";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/componants/languagecontext";

const translations = {
  en: {
    title: "Notes App",
    projectInfo:
      "I created this notes app during university. It was developed in React and has the usual note app features including markdown support. You can insert HTML + CSS + JS codeblocks within the notes.",
    expand: "Expand",
    collapse: "Collapse",
    extendedInfo: "Extended Information",
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Markdown support for rich text formatting",
      "Custom HTML + CSS + JS code execution within the note",
      "Standard note-taking functionalities",
      "Built with React for a responsive UI",
    ],
    technicalDetailsTitle: "Technical Details",
    technicalDetails: [
      "React.js for frontend development",
      "Markdown parsing and rendering",
      "JavaScript evaluation within note content",
      "State management for note organization",
    ],
    enhancementsTitle: "Potential Enhancements",
    enhancements: [
      "I would probably look to host this online but as I am the only one who uses it, I am currently fine with just using local storage.",
      "Make the codeblocks run different languages such as C++",
    ],
  },
  ja: {
    title: "ノートアプリ",
    projectInfo:
      "このノートアプリは大学時代に作成しました。Reactで開発され、マークダウンサポートを含む通常のノートアプリ機能があります。ノート内にHTML + CSS + JSのコードブロックを挿入することができます。",
    expand: "詳細を表示",
    collapse: "詳細を隠す",
    extendedInfo: "詳細情報",
    keyFeaturesTitle: "主な機能",
    keyFeatures: [
      "リッチテキストフォーマット用のマークダウンサポート",
      "ノート内でのカスタムHTML + CSS + JSコードの実行",
      "標準的なノート取り機能",
      "レスポンシブUIのためのReactを使用",
    ],
    technicalDetailsTitle: "技術的詳細",
    technicalDetails: [
      "フロントエンド開発にReact.jsを使用",
      "マークダウンの解析とレンダリング",
      "ノートコンテンツ内でのJavaScript評価",
      "ノート整理のための状態管理",
    ],
    enhancementsTitle: "潜在的な改善点",
    enhancements: [
      "オンラインホスティングを検討しますが、現在は私だけが使用しているため、ローカルストレージの使用で十分です。",
      "C++などの異なる言語でコードブロックを実行できるようにする",
    ],
  },
};

const NotesAppProject = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex w-full h-full relative">
      <div className="w-1/2 h-full flex project3">
        <div className="project-content bold flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
            <div className="project-info">{t.projectInfo}</div>
          </div>
          <div className="w-full flex justify-center mb-[10vh]">
            <button
              className="expand-button text-white font-bold py-2 px-4 flex items-center"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  {t.collapse} <ChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  {t.expand} <ChevronDown className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <GalleryComponent project="notesApp" />
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 bg-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{t.extendedInfo}</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsExpanded(false)}
              >
                <ChevronDown size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-grow">
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.keyFeaturesTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.technicalDetailsTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.technicalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.enhancementsTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.enhancements.map((enhancement, index) => (
                  <li key={index}>{enhancement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesAppProject;
