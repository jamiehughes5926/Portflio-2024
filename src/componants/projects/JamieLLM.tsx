import React, { useState } from "react";
import GalleryComponent from "@/app/Gallery";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/componants/languagecontext";
import { useTranslation } from "@/componants/useTranslations";
import Link from "next/link";

const translations = {
  en: {
    title: "JAMIE LLM",
    projectInfo:
      "Jamie LLM: A fine-tuned Llama 3 8B model trained on ~6,000 personal messages and writings from Facebook, Instagram, and university assignments. Used for emails, messages, and cover letters via LM Studio local server. Trained using Unsloth AI for cost efficiency.",
    expand: "Expand",
    collapse: "Collapse",
    extendedInfo: "Extended Information",
    processTitle: "Process",
    processContent:
      "First I downloaded my messages from Facebook and instagram, next i used python to clean the data. From the messages I found that alot of the messages had a lot of random symbols and characters espcially in place of emojis i removed these emojis/symbols.\n\nAfter the first cleaning I used Google Collab and Unsloth to train my mode. In the first iteration i found that it was likely that the data needed further cleaning, while testing it would output very random reponses. In the next iteration instead of just feeding it all the messages, i decided to remove messages from groupchats, and only include direct message and answers.\n\nThis new version yielded better results but the output was still not completely how i wanted it, I decided to provide more context of messages instead of just including my messages I included the message it was responding to or if I was first to mesasge i included the message to provide more context.",
    technicalDetailsTitle: "Technical Details",
    technicalDetails: [
      "Finetuned the LLaMA 3 8B model",
      "Fine-tuned on 6,000+ personal messages",
      "Utilizes data from Facebook and Instagram",
      "Incorporates previous university assignments",
      "Use LM studio for inference",
      "Trained using Unsloth AI for cost efficiency",
    ],
    useCasesTitle: "Use Cases",
    useCases: [
      "Responding to emails",
      "Drafting cover letters",
      "Generating personalized messages",
    ],
    futureImprovementsTitle: "Future Improvements",
    futureImprovementsContent:
      "Although I did get it to respond in ways similar to myself the reponses were very casual if not too casual, While cleaning the data I should of also made sure to not include sensitive information, It did a good job of capturing the style of conversation i would have in a very casual setting, it also made me realise how badly i was spelling in message form. Instead of trying to train in Memories I think it would be more beneficial to use a RAG system for information on myself, as although it did remeber some things it would also hallucinate some of the memories and expand on information in an incorrect way.",
  },
  ja: {
    title: "ジェイミーLLM",
    projectInfo:
      "ジェイミーLLM：Facebook、Instagram、大学の課題から約6,000件の個人的なメッセージと文章を使って微調整されたLlama 3 8Bモデル。LM Studioローカルサーバーを通じて、メール、メッセージ、カバーレターに使用。コスト効率のためにUnsloth AIを使用して訓練。",
    expand: "展開",
    collapse: "折りたたむ",
    extendedInfo: "詳細情報",
    processTitle: "プロセス",
    processContent:
      "まず、FacebookとInstagramからメッセージをダウンロードし、Pythonを使ってデータをクリーニングしました。メッセージには多くのランダムな記号や文字が含まれており、特に絵文字の代わりに使用されていたため、これらの絵文字や記号を削除しました。\n\n最初のクリーニングの後、Google CollabとUnslothを使ってモデルを訓練しました。最初の反復では、データがさらなるクリーニングを必要とする可能性が高いことがわかりました。テスト中にはとてもランダムな応答が出力されました。次の反復では、すべてのメッセージをそのまま与えるのではなく、グループチャットからのメッセージを削除し、直接のメッセージと回答のみを含めることにしました。\n\nこの新しいバージョンはより良い結果を生み出しましたが、出力は私が望んでいたものとは完全に一致していませんでした。そこで、私のメッセージだけでなく、応答するメッセージも含めることでより多くのコンテキストを提供することにしました。また、私が最初にメッセージを送る場合は、そのメッセージも含めてより多くのコンテキストを提供しました。",
    technicalDetailsTitle: "技術的詳細",
    technicalDetails: [
      "LLaMA 3 8Bモデルを微調整",
      "6,000以上の個人的なメッセージで微調整",
      "FacebookとInstagramのデータを活用",
      "過去の大学の課題を組み込む",
      "推論にLM studioを使用",
      "コスト効率のためにUnsloth AIを使用して訓練",
    ],
    useCasesTitle: "使用例",
    useCases: [
      "メールへの返信",
      "カバーレターの作成",
      "個人化されたメッセージの生成",
    ],
    futureImprovementsTitle: "将来の改善点",
    futureImprovementsContent:
      "自分に似た方法で応答させることはできましたが、応答が非常にカジュアル、あるいは過度にカジュアルでした。データのクリーニング中に、機密情報を含まないようにも注意すべきでした。非常にカジュアルな設定での会話スタイルを捉えることには成功しましたが、同時にメッセージ形式での自分のスペルの悪さにも気づかされました。記憶を訓練しようとするのではなく、自分に関する情報にはRAGシステムを使用する方が有益だと思います。いくつかのことを覚えてはいましたが、記憶を幻覚したり、情報を誤って拡大解釈したりすることもありました。",
  },
};

const JamieLLMProject = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex w-full h-full relative">
      <div className="w-1/2 h-full flex project1">
        <div className="project-content bold flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
            <div className="project-info">{t.projectInfo}</div>
            <div className="project-link flex justify-center space-x-8 mt-4">
              <Link
                href="https://github.com/jamiehughes5926/JamieLLM"
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
      <GalleryComponent project="jamieLLM" />
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
              <img
                src="chat1.png"
                alt="Jamie LLM Project"
                className="w-full mb-4"
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.processTitle}
              </h3>
              <p className="mb-4 whitespace-pre-line">{t.processContent}</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.technicalDetailsTitle}
              </h3>
              <img
                src="chat2.png"
                alt="Jamie LLM Project"
                className="w-full mb-4"
              />
              <ul className="list-disc pl-5 mb-4">
                {t.technicalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.useCasesTitle}
              </h3>
              <ul className="list-disc pl-5 mb-4">
                {t.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {t.futureImprovementsTitle}
              </h3>
              <p>{t.futureImprovementsContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JamieLLMProject;
