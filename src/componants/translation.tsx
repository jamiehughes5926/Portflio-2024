export type TranslationKey =
  | "home"
  | "info"
  | "projects"
  | "design"
  | "about"
  | "aboutContent"
  | "frontEnd"
  | "backEnd"
  | "other" // Changed from "links"
  | "github"
  | "oldPortfolio"
  | "digitalAgencyWebsite"
  | "digitalAgencyDescription"
  | "saasBoilerplate"
  | "saasBoilerplateDescription"
  | "portfolio"
  | "portfolioDescription";

export type Language = "en" | "ja";

export type Translations = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

export const translations: Translations = {
  en: {
    home: "Home",
    info: "Info",
    projects: "Projects",
    design: "Design",
    about: "About:",
    aboutContent:
      "Hi, I am a recent Massey University Computer Science Graduate.<br/><br/>I Have previously freelanced using upwork developing websites and webapps along with creating websites for local brands.<br/><br/>I have skills in a range of different languages and would consider flexibility my biggest strength, building projects using React for Web development, Swift for iPhone Apps",
    frontEnd: "Front-End:",
    backEnd: "Back-end:",
    other: "Other:", // Changed from "links"
    github: "GITHUB",
    oldPortfolio: "Old portfolio",
    digitalAgencyWebsite: "1. Digital Agency Website",
    digitalAgencyDescription:
      "Created a website for a digital Agency Based in NZ called NXT, this was created using react, as well as GSAP for the animations.",
    saasBoilerplate: "2. A boiler plate for a SAAS website",
    saasBoilerplateDescription:
      "Created a website boiler plate for a SAAS company using HTML + CSS",
    portfolio: "3. A Minimilistic Portfolio",
    portfolioDescription:
      "Created A portfolio for an artist (Images and details have been changed)",
  },
  ja: {
    home: "ホーム",
    info: "情報",
    projects: "プロジェクト",
    design: "デザイン",
    about: "概要：",
    aboutContent:
      "こんにちは。私はマッセー大学のコンピューターサイエンスを最近卒業しました。<br/><br/>以前はUpworkを使ってウェブサイトやウェブアプリの開発をフリーランスで行い、地元のブランドのウェブサイトも制作しました。<br/><br/>様々な言語のスキルを持っており、柔軟性が私の最大の強みだと考えています。Reactを使ったWeb開発、Swiftを使ったiPhoneアプリの開発など、幅広いプロジェクトを構築しています。",
    frontEnd: "フロントエンド：",
    backEnd: "バックエンド：",
    other: "その他：", // Changed from "links"
    github: "GitHub",
    oldPortfolio: "旧ポートフォリオ",
    digitalAgencyWebsite: "1. デジタルエージェンシーウェブサイト",
    digitalAgencyDescription:
      "NXTというニュージーランドのデジタルエージェンシーのウェブサイトを作成しました。これはReactを使用し、アニメーションにはGSAPを利用しています。",
    saasBoilerplate: "2. SAASウェブサイトのボイラープレート",
    saasBoilerplateDescription:
      "HTML + CSSを使用してSAAS企業向けのウェブサイトボイラープレートを作成しました。",
    portfolio: "3. ミニマリスティックなポートフォリオ",
    portfolioDescription:
      "アーティストのためのポートフォリオを作成しました（画像と詳細は変更されています）。",
  },
};
