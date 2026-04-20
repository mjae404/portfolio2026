import portfolio2025Webp from "@/app/assets/images/portfolio/portfolio2025.webp";
import portfolio2025Jpg from "@/app/assets/images/portfolio/portfolio2025.jpg";
import markupGuideV2Webp from "@/app/assets/images/portfolio/markupguide_v2.webp";
import markupGuideV2Jpg from "@/app/assets/images/portfolio/markupguide_v2.jpg";
import waveClinicWebp from "@/app/assets/images/portfolio/waveclinic.webp";
import waveClinicJpg from "@/app/assets/images/portfolio/waveclinic.jpg";
import weddingWebp from "@/app/assets/images/portfolio/wedding.webp";
import weddingJpg from "@/app/assets/images/portfolio/wedding.jpg";
import portfolio2024Webp from "@/app/assets/images/portfolio/portfolio2024.webp";
import portfolio2024Jpg from "@/app/assets/images/portfolio/portfolio2024.jpg";
import portfolio2022Webp from "@/app/assets/images/portfolio/portfolio2022.webp";
import portfolio2022Jpg from "@/app/assets/images/portfolio/portfolio2022.jpg";
import markupGuideWebp from "@/app/assets/images/portfolio/markup_guide.webp";
import markupGuideJpg from "@/app/assets/images/portfolio/markup_guide.jpg";
import targetMarketingWebp from "@/app/assets/images/portfolio/targetmarketing.webp";
import targetMarketingJpg from "@/app/assets/images/portfolio/targetmarketing.jpg";
import portfolio2021Webp from "@/app/assets/images/portfolio/portfolio2021.webp";
import portfolio2021Jpg from "@/app/assets/images/portfolio/portfolio2021.jpg";
import xeWebp from "@/app/assets/images/portfolio/xe01.webp";
import xeJpg from "@/app/assets/images/portfolio/xe01.jpg";
import tonyryuWebp from "@/app/assets/images/portfolio/tonyryu01.webp";
import tonyryuJpg from "@/app/assets/images/portfolio/tonyryu01.jpg";
import uniuniWebp from "@/app/assets/images/portfolio/uniuni.webp";
import uniuniJpg from "@/app/assets/images/portfolio/uniuni.jpg";

import detailPortfolio2025Webp from "@/app/assets/images/portfolio/details/detail-portfolio2025.webp";
import detailPortfolio2025Jpg from "@/app/assets/images/portfolio/details/detail-portfolio2025.jpg";
import detailMarkupGuideV2Webp from "@/app/assets/images/portfolio/details/detail-markupguide_v2.webp";
import detailMarkupGuideV2Jpg from "@/app/assets/images/portfolio/details/detail-markupguide_v2.jpg";
import detailWaveClinicWebp from "@/app/assets/images/portfolio/details/detail-waveclinic.webp";
import detailWaveClinicJpg from "@/app/assets/images/portfolio/details/detail-waveclinic.jpg";
import detailWeddingWebp from "@/app/assets/images/portfolio/details/detail-wedding.webp";
import detailWeddingJpg from "@/app/assets/images/portfolio/details/detail-wedding.jpg";
import detailPortfolio2024Webp from "@/app/assets/images/portfolio/details/detail-portfolio2024.webp";
import detailPortfolio2024Jpg from "@/app/assets/images/portfolio/details/detail-portfolio2024.jpg";
import detailPortfolio2022Webp from "@/app/assets/images/portfolio/details/detail-portfolio2022.webp";
import detailPortfolio2022Jpg from "@/app/assets/images/portfolio/details/detail-portfolio2022.jpg";
import detailMarkupGuideWebp from "@/app/assets/images/portfolio/details/detail-markupguide.webp";
import detailMarkupGuideJpg from "@/app/assets/images/portfolio/details/detail-markupguide.jpg";
import detailTargetMarketingWebp from "@/app/assets/images/portfolio/details/detail-targetmarketing.webp";
import detailTargetMarketingJpg from "@/app/assets/images/portfolio/details/detail-targetmarketing.jpg";
import detailPortfolio2021Webp from "@/app/assets/images/portfolio/details/detail-portfolio2021.webp";
import detailPortfolio2021Jpg from "@/app/assets/images/portfolio/details/detail-portfolio2021.jpg";
import detailXe01Webp from "@/app/assets/images/portfolio/details/detail-xe01.webp";
import detailXe01Jpg from "@/app/assets/images/portfolio/details/detail-xe01.jpg";
import detailXe02Webp from "@/app/assets/images/portfolio/details/detail-xe02.webp";
import detailXe02Jpg from "@/app/assets/images/portfolio/details/detail-xe02.jpg";
import detailXe03Webp from "@/app/assets/images/portfolio/details/detail-xe03.webp";
import detailXe03Jpg from "@/app/assets/images/portfolio/details/detail-xe03.jpg";
import detailTonyryuWebp from "@/app/assets/images/portfolio/details/detail-tonyryu.webp";
import detailTonyryuJpg from "@/app/assets/images/portfolio/details/detail-tonyryu.jpg";
import detailTonyryu02Webp from "@/app/assets/images/portfolio/details/detail-tonyryu02.webp";
import detailTonyryu02Jpg from "@/app/assets/images/portfolio/details/detail-tonyryu02.jpg";
import detailUniuniWebp from "@/app/assets/images/portfolio/details/detail-uniuni.webp";
import detailUniuniJpg from "@/app/assets/images/portfolio/details/detail-uniuni.jpg";

import { StaticImageData } from "next/image";

export interface DetailImage {
  webp: StaticImageData;
  jpg: StaticImageData;
}

export interface WorkItem {
  id: string;
  title: string;
  term: string;
  summary: string;
  description: string;
  contribution: string;
  skills: string;
  url: string;
  imageWebp: StaticImageData;
  imageJpg: StaticImageData;
  detailImages: DetailImage[];
}

export const workItems: WorkItem[] = [
  {
    id: "markupguide_v2",
    title: "마크업 가이드 v2 (개인 프로젝트)",
    term: "2026.04",
    summary:
      "UI 컴포넌트 및 마크업 패턴을 문서화한 개인 퍼블리싱 가이드의 리뉴얼 버전",
    description:
      "기존 마크업 가이드를 전면 리뉴얼한 v2 버전으로, Next.js와 TypeScript 환경에서 재사용 가능한 컴포넌트 패턴과 마크업 구조를 체계적으로 정리했습니다. 접근성 가이드라인과 반응형 설계 원칙을 보강하고, 실무에서 바로 참고할 수 있도록 코드 예제와 문서를 개선했습니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, Next.js, TypeScript",
    url: "http://guide.mjaedot.com/",
    imageWebp: markupGuideV2Webp,
    imageJpg: markupGuideV2Jpg,
    detailImages: [
      { webp: detailMarkupGuideV2Webp, jpg: detailMarkupGuideV2Jpg },
    ],
  },
  {
    id: "portfolio2025",
    title: "개인 포트폴리오 사이트 2025",
    term: "2025.05",
    summary: "포트폴리오 사이트(mjaedot.com)의 2025년 버전",
    description:
      "매년 갱신되는 개인 포트폴리오 시리즈의 2025년판으로, Next.js와 TypeScript를 도입하여 성능과 코드 품질을 한 단계 끌어올린 버전입니다. 접근성을 고려한 시맨틱 마크업, 스크롤 기반 인터랙션 등을 적용했습니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, Next.js, TypeScript",
    url: "http://2025.mjaedot.com/",
    imageWebp: portfolio2025Webp,
    imageJpg: portfolio2025Jpg,
    detailImages: [
      { webp: detailPortfolio2025Webp, jpg: detailPortfolio2025Jpg },
    ],
  },
  {
    id: "waveclinic",
    title: "웨이브 언어 클리닉",
    term: "2025.08",
    summary: "의사소통 어려움을 겪는 대상자를 위한 맞춤형 언어치료 클리닉 웹사이트",
    description: "WAVE 언어 클리닉은 언어치료 전문 기관으로, 개인별 맞춤 프로그램을 제공하는 클리닉의 공식 웹사이트입니다. 퍼블리싱 전 과정을 단독으로 담당한 의료·복지 분야 클라이언트를 대상으로 한 외주 프로젝트입니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, React",
    url: "https://waveclinic.co.kr",
    imageWebp: waveClinicWebp,
    imageJpg: waveClinicJpg,
    detailImages: [{ webp: detailWaveClinicWebp, jpg: detailWaveClinicJpg }],
  },
  {
    id: "wedding",
    title: "모바일 웨딩 청첩장",
    term: "2024.01",
    summary: "React + Firebase로 만든 개인 모바일 웨딩 청첩장",
    description: "모바일 환경에 최적화된 디지털 청첩장 프로젝트로, React를 기반으로 퍼블리싱 작업을 진행하고 방명록 기능은 Firebase를 활용해 구현했습니다. 단순한 정적 페이지를 넘어 실시간 데이터 연동이 필요한 기능까지 직접 소화했습니다. 초기 GitHub Pages를 통해 배포되어 누구나 접근 가능한 형태로 운영되었습니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, React, firebase",
    url: "https://mingdangworld.dev",
    imageWebp: weddingWebp,
    imageJpg: weddingJpg,
    detailImages: [{ webp: detailWeddingWebp, jpg: detailWeddingJpg }],
  },
  {
    id: "portfolio2024",
    title: "개인 포트폴리오 사이트 2024",
    term: "2024.01",
    summary: "포트폴리오 사이트(mjaedot.com)의 2024년 버전",
    description: "매년 갱신되는 개인 포트폴리오 시리즈의 2024년판으로, 현재 운영 중인 mjaedot.com의 이전 사이트입니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, React",
    url: "http://2024.mjaedot.com",
    imageWebp: portfolio2024Webp,
    imageJpg: portfolio2024Jpg,
    detailImages: [{ webp: detailPortfolio2024Webp, jpg: detailPortfolio2024Jpg }],
  },
  {
    id: "portfolio2022",
    title: "개인 포트폴리오 사이트 2023",
    term: "2023.04",
    summary: "포트폴리오 사이트(mjaedot.com)의 2023년 버전",
    description: "포트폴리오를 연도별로 꾸준히 갱신해온 결과물 중 하나로, 2023년 시점의 경력과 작업물을 담은 개인 사이트입니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, React",
    url: "http://2023.mjaedot.com",
    imageWebp: portfolio2022Webp,
    imageJpg: portfolio2022Jpg,
    detailImages: [{ webp: detailPortfolio2022Webp, jpg: detailPortfolio2022Jpg }],
  },
  {
    id: "markupguide",
    title: "마크업 가이드 (개인 프로젝트)",
    term: "2023.04",
    summary: "UI 컴포넌트 및 마크업 패턴을 문서화한 개인 프로젝트를 위한 웹 퍼블리싱 가이드",
    description: "React 환경에서 재사용 가능한 마크업 구조와 UI 컴포넌트 패턴을 정리한 개인 퍼블리싱 가이드입니다. 협업과 유지보수를 고려하여 코드를 문서화하고 표준화하기 위한 프로젝트입니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, React",
    url: "http://protoguide.mjaedot.com",
    imageWebp: markupGuideWebp,
    imageJpg: markupGuideJpg,
    detailImages: [{ webp: detailMarkupGuideWebp, jpg: detailMarkupGuideJpg }],
  },
  {
    id: "targetmarketing",
    title: "타겟 마케팅 솔루션",
    term: "2023.02",
    summary: "SKT 데이터 마케팅 자동화 관련 B2B 웹사이트",
    description: "SKT의 데이터 마케팅 자동화 플랫폼과 연계된 B2B 성격의 웹사이트로, 휴머스온 재직 시절 진행한 프로젝트입니다. React 환경에서 퍼블리싱 작업 전반을 담당했습니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, React",
    url: "https://www.targetmarketing.co.kr",
    imageWebp: targetMarketingWebp,
    imageJpg: targetMarketingJpg,
    detailImages: [{ webp: detailTargetMarketingWebp, jpg: detailTargetMarketingJpg }],
  },
  {
    id: "portfolio2021",
    title: "개인 포트폴리오 사이트 2021",
    term: "2021.12",
    summary: "포트폴리오 사이트(mjaedot.com)의 2021년 버전",
    description: "연도별 포트폴리오 시리즈의 출발점인 2021년판 개인 사이트입니다. 이후 2023년, 2024년 버전으로 계속 발전하는 포트폴리오 갱신 습관의 첫 공식 기록이기도 합니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, javascript, gulp",
    url: "https://mjaedot.com/portfolio2021",
    imageWebp: portfolio2021Webp,
    imageJpg: portfolio2021Jpg,
    detailImages: [{ webp: detailPortfolio2021Webp, jpg: detailPortfolio2021Jpg }],
  },
  {
    id: "xe01",
    title: "XE3 게시판 스킨",
    term: "2020.03 / 2020.09 (리뉴얼)",
    summary: "XE3 CMS용 게시판 스킨 제작 및 리뉴얼 프로젝트",
    description: "XE(XpressEngine)3 기반의 게시판 스킨을 퍼블리싱하고 약 반년 후 리뉴얼한 프로젝트입니다. CMS 환경에 맞는 커스텀 스킨 작업으로, 템플릿 구조 이해를 보여주는 작업물이라 할 수 있습니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, jQuery",
    url: "https://github.com/xpressengine/plugin-board/commits?author=mjae404",
    imageWebp: xeWebp,
    imageJpg: xeJpg,
    detailImages: [
      { webp: detailXe01Webp, jpg: detailXe01Jpg },
      { webp: detailXe02Webp, jpg: detailXe02Jpg },
      { webp: detailXe03Webp, jpg: detailXe03Jpg },
    ],
  },
  {
    id: "tonyryu",
    title: "건승정한",
    term: "2020.06",
    summary: "뮤지컬 배우 류정한의 공식 팬사이트",
    description: "뮤지컬 배우 류정한(Tony Ryu)의 공식 팬사이트로, 뮤지컬 정보 공유 등 팬 커뮤니티의 활발한 문화 활동을 지원하는 플랫폼입니다. 엑스이허브 재직 시절에 제작된 프로젝트로, 실제 팬덤이 활용하는 운영형 사이트를 목표로 한 작업입니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, jQuery",
    url: "https://www.tonyryu.net",
    imageWebp: tonyryuWebp,
    imageJpg: tonyryuJpg,
    detailImages: [
      { webp: detailTonyryuWebp, jpg: detailTonyryuJpg },
      { webp: detailTonyryu02Webp, jpg: detailTonyryu02Jpg },
    ],
  },
  {
    id: "uniuni",
    title: "UNIUNI",
    term: "2020.06",
    summary: "베트남 대상 모바일 화장품 리뷰 커뮤니티",
    description: "베트남 사용자를 타겟으로 한 모바일 전용 화장품 리뷰 커뮤니티 사이트입니다. 엑스이허브 재직 시절에 제작된 프로젝트로, 모바일 환경에 최적화된 UI 설계와 뷰티 커뮤니티 특성에 맞는 마크업이 요구되었습니다. 현재는 서비스가 종료되어 사이트가 폐쇄된 상태입니다.",
    contribution: "100%",
    skills: "HTML5, CSS3, SCSS, jQuery",
    url: "https://prj-kbeauty.xehub.co.kr",
    imageWebp: uniuniWebp,
    imageJpg: uniuniJpg,
    detailImages: [{ webp: detailUniuniWebp, jpg: detailUniuniJpg }],
  },
];
