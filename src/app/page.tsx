"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "../app/globals.css";
import ThreeScene from "@/componants/threescene";
import dynamic from "next/dynamic";
import "../componants/banner.css";
import GalleryComponent from "./Gallery";
import { initializeAnimations } from "./animations";
import PreLoader from "@/componants/preLoader";
import {
  handleHomeClick,
  handleInfoClick,
  handleProjectsClick,
} from "@/componants/clickHandler";
import JamieLLMProject from "@/componants/projects/JamieLLM";
import KonnichiwaAppProject from "@/componants/projects/KonnichiwaApp";
import NotesAppProject from "@/componants/projects/NotesApp";
import { LanguageProvider, useLanguage } from "@/componants/languagecontext";
import { useTranslation } from "@/componants/useTranslations";
import { Language, translations } from "@/componants/translation";

const RandomReveal = dynamic(
  () => import("react-random-reveal").then((mod) => mod.RandomReveal),
  { ssr: false }
);

function HomeContent() {
  const [loading, setLoading] = useState(true);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const columnsContainerRef = useRef<HTMLDivElement>(null);
  const slideInDivRef1 = useRef<HTMLDivElement>(null);
  const slideInDivRef2 = useRef<HTMLDivElement>(null);
  const slideInDivRef3 = useRef<HTMLDivElement>(null);
  const slideInDivRef4 = useRef<HTMLDivElement>(null);
  const imagePlaceholder1Ref = useRef<HTMLDivElement>(null);
  const imagePlaceholder2Ref = useRef<HTMLDivElement>(null);
  const [dividerOpacity, setDividerOpacity] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!loading) {
      initializeAnimations(
        contentRef,
        topBarRef,
        bottomBarRef,
        columnsContainerRef,
        slideInDivRef1,
        slideInDivRef2,
        slideInDivRef3,
        slideInDivRef4,
        imagePlaceholder1Ref,
        imagePlaceholder2Ref,
        setDividerOpacity
      );
    }
  }, [loading]);

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setLoading(false);
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center"
      suppressHydrationWarning
    >
      <PreLoader onLanguageSelect={handleLanguageSelect} isVisible={loading} />
      {!loading && (
        <>
          <div
            ref={topBarRef}
            className="w-full bg-gray-800 fixed text-white p-3 text-center font-bold topbar top-0 z-50 "
          >
            <div className="flex justify-between w-full h-full">
              <div
                className="flex-1 text-center border-r border-black cursor-pointer topbar"
                onClick={handleHomeClick}
              >
                {isMounted && (
                  <RandomReveal
                    isPlaying
                    duration={3}
                    revealDuration={0.5}
                    characters={translations[language].home}
                  />
                )}
              </div>
              <div
                className="flex-1 text-center border-r border-black cursor-pointer topbar"
                onClick={handleInfoClick}
              >
                {isMounted && (
                  <RandomReveal
                    isPlaying
                    duration={4}
                    revealDuration={0.5}
                    characters={translations[language].info}
                  />
                )}
              </div>
              <div
                className="flex-1 text-center border-r border-black cursor-pointer topbar"
                onClick={handleProjectsClick}
              >
                {isMounted && (
                  <RandomReveal
                    isPlaying
                    duration={5}
                    revealDuration={0.5}
                    characters={translations[language].projects}
                  />
                )}
              </div>
              <div className="flex-1 text-center topbar">
                {isMounted && (
                  <RandomReveal
                    isPlaying
                    duration={6}
                    revealDuration={0.5}
                    characters={translations[language].design}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            ref={contentRef}
            className="w-full max-w-7xl flex items-center justify-center h-1/2 p-10 mt-10"
          >
            <div
              className="flex justify-center items-center border border-black"
              style={{ background: "#dceaf7", width: "90%", height: "40%" }}
            >
              <ThreeScene width={1500} height={600} />
            </div>
          </div>
          <div ref={columnsContainerRef} className="w-full mt-4 uppercase">
            <div className="flex justify-around items-center ">
              <div className="flex-1 w-1/3 m-2 text-white p-2 col col-1 ">
                <div className="title ">{t("about")}</div>
                <div className="mr-3 self">{t("aboutContent")}</div>
              </div>
              <div className="flex-1 w-1/3 m-2 text-white p-2 col col-2">
                <div className="title"> {t("backEnd")}</div>
                <div className="self">
                  <div className="flex">
                    <div className="w-1/2">
                      <span className="star">*</span>Node JS <br />
                      <span className="star">*</span>Python
                      <br />
                      <span className="star">*</span>C++ <br />
                      <span className="star">*</span>AWS <br />
                      <span className="star">*</span>Mongo DB <br />
                      <span className="star">*</span>MySQL <br />
                    </div>
                    <div className="w-1/2">
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-1/3 m-2 text-white p-2 col col-3">
                <div className="title">{t("other")}</div>
                <div className="self">
                  <div className="flex">
                    <div className="w-1/2">
                      <span className="star">*</span>Swift
                      <br />
                      <span className="star">*</span>Git <br />
                      <span className="star">*</span>Solana/Web3 <br />
                      <span className="star">*</span>FIGMA <br />
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 m-2 text-white p-2 col col-4">
                <div className="title">{t("frontEnd")}</div>
                <div className="self">
                  <div className="flex">
                    <div className="w-1/2">
                      <span className="star">*</span>React
                      <br />
                      <span className="star">*</span>Python <br />
                      <span className="star">*</span>HTML + CSS <br />
                      <span className="star">*</span>Javascript <br />
                      <span className="star">*</span>Three JS <br />
                    </div>
                    <div className="w-1/2">
                      <span className="star">*</span>Tailwind CSS <br />
                      <span className="star">*</span>Redux <br />
                      <span className="star">*</span>GSAP <br />
                      <span className="star">*</span>FRAMER MOTION <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            style={{ background: "transparent", width: "100%", height: "40%" }}
          >
            <div
              className="divider"
              style={{
                opacity: dividerOpacity,
                transition: "opacity 0.1s ease",
                zIndex: 12,
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                width: "100%",
                height: "100%",
              }}
            >
              {" "}
            </div>
          </div>
          <div
            ref={slideInDivRef1}
            className="fixed top-1/2 left-1/2 w-1/2 h-1/2 flex items-center justify-center z-50 slide-1"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <JamieLLMProject />
          </div>
          <div
            ref={slideInDivRef2}
            className="fixed top-1/2 left-1/2 w-1/2 h-1/2 flex items-center justify-center z-50 slide-2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <KonnichiwaAppProject />
          </div>
          <div
            ref={slideInDivRef3}
            className="fixed top-1/2 left-1/2 w-1/2 h-1/2 flex items-center justify-center z-50 slide-3"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <NotesAppProject />
          </div>
          <div
            ref={slideInDivRef4}
            className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-40 slide-4"
            style={{ transform: "translateY(100%)" }}
          >
            <div className="w-full h-full flex">
              <div className="w-1/2 h-full flex flex-col design-info p-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2 uppercase">
                    {t("digitalAgencyWebsite")}
                  </div>
                  <div className="text-sm uppercase">
                    {t("digitalAgencyDescription")}
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2 uppercase">
                    {t("saasBoilerplate")}
                  </div>
                  <div className="text-sm uppercase">
                    {t("saasBoilerplateDescription")}
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2 uppercase">
                    {t("portfolio")}
                  </div>
                  <div className="text-sm uppercase">
                    {t("portfolioDescription")}
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full overflow-hidden">
                <div
                  ref={imagePlaceholder1Ref}
                  className="w-1/2 h-full design-1 flex items-center justify-center absolute"
                >
                  <div className="w-3/4 h-3/4 flex items-center justify-center">
                    <video
                      className="w-full  object- z-50 video-1"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/nxt.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div
                  ref={imagePlaceholder2Ref}
                  className="w-1/2 h-full design-2 flex items-center justify-center absolute"
                  style={{ transform: "translateY(100%)" }}
                >
                  <div className="p-10 flex items-center justify-center">
                    <video
                      className="w-full h-full object- z-50 video-2"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/saas.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
