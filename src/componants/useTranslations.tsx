// src/hooks/useTranslation.tsx
import React from "react";
import { useLanguage } from "./languagecontext";
import { translations, TranslationKey } from "./translation";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): JSX.Element => {
    const translation = translations[language][key] || key;
    return <span dangerouslySetInnerHTML={{ __html: translation }} />;
  };

  return { t };
};
