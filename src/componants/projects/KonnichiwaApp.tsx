import React, { useState } from "react";
import GalleryComponent from "@/app/Gallery";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/componants/languagecontext";
import Link from "next/link";

const translations = {
  en: {
    title: "KONNICHIWA APP",
    projectInfo:
      "Konnichiwa app: Work-in-progress Swift app for Japan tourists. Features OpenAI GPT for AR image/voice translations, Apple Vision Kit for AR, and MapKit for custom maps showing toilets and convenience stores.",
    expand: "Expand",
    collapse: "Collapse",
    extendedInfo: "Extended Information",
    description:
      "I created an iPhone Application using Swift. I used the Swift Package SwiftOpenAI and the VisionKit package provided by Apple. This app is currently a work in progress, and I hope to release it to the App Store in the near future. I went into this project with no experience of Apple application development, with my only prior app development experience being a mobile application development paper I took at university where we developed an Android Application.",
    mainFeatures:
      "The main features of this app are the augmented reality translations, image analysis, and a live translation feature.",
    apiUsage:
      "All 3 features used the OpenAI API, using both the Whisper model as well as GPT-4 for image analysis and GPT-3.5 (now GPT-4 mini) for translations, both audio and AR.",
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Augmented Reality image translations",
      "Live voice translations",
      "Image Analysis in the context of Japanese to English",
      "Integration with OpenAI GPT API",
      "Built using Swift and Apple Vision Kit",
    ],
    technicalStackTitle: "Technical Stack",
    technicalStack: [
      "Swift programming language",
      "Apple Vision Kit for AR features",
      "MapKit for custom map functionality",
      "OpenAI GPT API for translations",
    ],
    futurePlansTitle: "Future Plans",
    futurePlans:
      "My future plans for this app are to introduce a few more features and clean up the app design before releasing on the App Store, where I would hope to monetize it using a subscription-based service.",
    upcomingFeaturesTitle: "Upcoming features:",
    upcomingFeatures: [
      "Map with specific points of interest that do not appear on regular maps, e.g., Toilets and Smoking areas",
      "Improving the object detection",
      "Weather Information",
      "Train and transit information",
      "Itinerary Planner",
      "Ask Japan AI chatbot",
    ],
  },
  ja: {
    title: "こんにちはアプリ",
    projectInfo:
      "こんにちはアプリ：日本を訪れる観光客向けの開発中のSwiftアプリ。OpenAI GPTを使用したAR画像/音声翻訳、AppleのVision KitによるAR機能、そしてトイレとコンビニエンスストアを表示するカスタムマップ用のMapKitを特徴としています。",
    expand: "詳細を表示",
    collapse: "詳細を隠す",
    extendedInfo: "詳細情報",
    description:
      "Swiftを使用してiPhoneアプリケーションを作成しました。SwiftOpenAIというSwiftパッケージと、AppleのVisionKitパッケージを使用しました。このアプリは現在開発中で、近い将来App Storeでリリースすることを目指しています。私はAppleアプリケーション開発の経験がない状態でこのプロジェクトに着手しました。唯一のアプリ開発経験は、大学で受講したモバイルアプリケーション開発の授業でAndroidアプリを開発したことだけでした。",
    mainFeatures:
      "このアプリの主な機能は、拡張現実（AR）翻訳、画像分析、そしてリアルタイム翻訳機能です。",
    apiUsage:
      "これら3つの機能すべてにOpenAI APIを使用しています。画像分析にはWhisperモデルとGPT-4を、音声とAR翻訳にはGPT-3.5（現在はGPT-4 mini）を使用しています。",
    keyFeaturesTitle: "主な機能",
    keyFeatures: [
      "拡張現実（AR）による画像翻訳",
      "リアルタイム音声翻訳",
      "日本語から英語へのコンテキストにおける画像分析",
      "OpenAI GPT APIとの統合",
      "SwiftとApple Vision Kitを使用して構築",
    ],
    technicalStackTitle: "技術スタック",
    technicalStack: [
      "Swiftプログラミング言語",
      "AR機能用のApple Vision Kit",
      "カスタムマップ機能用のMapKit",
      "翻訳用のOpenAI GPT API",
    ],
    futurePlansTitle: "今後の計画",
    futurePlans:
      "このアプリの今後の計画は、いくつかの新機能を追加し、App Storeでリリースする前にアプリのデザインを整理することです。サブスクリプションベースのサービスを使用して収益化することを目指しています。",
    upcomingFeaturesTitle: "今後追加予定の機能：",
    upcomingFeatures: [
      "通常の地図には表示されない特定の興味ポイント（例：トイレや喫煙所）を含むマップ",
      "オブジェクト検出の改善",
      "天気情報",
      "電車と交通情報",
      "旅程プランナー",
      "日本AIチャットボット",
    ],
  },
};

const KonnichiwaAppProject = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex w-full h-full relative">
      <div className="w-1/2 h-full flex project2">
        <div className="project-content bold flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
            <div className="project-info">{t.projectInfo}</div>
            <div className="project-link flex justify-center space-x-8 mt-4">
              <Link
                href="https://github.com/jamiehughes5926/Konnichiwa"
                legacyBehavior
              >
                <a target="_blank" className="text-center">
                  GITHUB
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center mb-[10vh]">
            <button
              className="text-white font-bold py-2 px-4 flex items-center expand-button"
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
      <GalleryComponent project="konnichiwaApp" />
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
              <p>{t.description}</p>
              <br />
              <p>{t.mainFeatures}</p>
              <br />
              <p>{t.apiUsage}</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.keyFeaturesTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.technicalStackTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.technicalStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.futurePlansTitle}
              </h3>
              <p>{t.futurePlans}</p>
              <br />
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.upcomingFeaturesTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.upcomingFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KonnichiwaAppProject;
