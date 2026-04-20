export interface CareerItem {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export const careerItems: CareerItem[] = [
  {
    company: "TmaxCloud",
    role: "UX 매니저 @CL2-2-2팀",
    period: "2024.06 - 2024.10",
    description:
      "자사 프로덕트 UI 유지보수와 기능 개선을 담당하며, 컴포넌트 리팩토링·접근성 개선 및 Storybook 기반 테스트 환경 구축과 문서화를 수행했습니다.",
    skills: ["HTML5", "CSS3", "SCSS", "React", "Storybook", "GIT", "vscode", "Redmine"],
  },
  {
    company: "휴머스온",
    role: "퍼블리셔 @프런트엔드개발파트",
    period: "2022.11 - 2023.12",
    description:
      "프론트엔드 퍼블리싱을 전담하며 React 기반 UI 구현과 SCSS 전환을 통해 구조화 및 스타일 관리 효율을 개선했습니다.",
    skills: ["HTML5", "CSS3", "SCSS", "React", "Storybook", "GIT", "Jira", "Confluence", "webstorm"],
  },
  {
    company: "티몬",
    role: "마크업 개발자 @마크업 개발팀",
    period: "2021.02 - 2022.06",
    description:
      "이커머스 플랫폼 티몬의 PC·모바일 UI 개발을 담당하며, HTML·SCSS·JavaScript(jQuery) 기반으로 UI 구현 및 기능 개선을 수행했습니다.",
    skills: ["HTML5", "CSS3", "SCSS", "jQuery", "GIT", "Jira", "Confluence", "vscode"],
  },
  {
    company: "엑스이허브",
    role: "UI 개발자 @UI개발팀",
    period: "2020.03 - 2021.01",
    description:
      "오픈소스 CMS인 XE3 기반으로 각기 다른 클라이언트 니즈에 맞춰 반응형 웹사이트를 퍼블리싱하고, 기능 요구에 따른 커스터마이징 작업도 함께 수행하였습니다.",
    skills: ["HTML5", "CSS3", "SCSS", "jQuery", "GIT", "Jira", "Confluence", "phpstorm"],
  },
  {
    company: "개인사업자",
    role: "디자이너 & 퍼블리셔 @개인사업",
    period: "2018.02 - 2019.12",
    description:
      "카드 뉴스 디자인, 랜딩 페이지 제작, 워드프레스를 활용한 홈페이지 구축, 온라인 광고용 배너 작업 등 다양한 클라이언트의 니즈에 맞춘 맞춤형 솔루션을 제공하는 데 집중해왔습니다.",
    skills: ["HTML5", "CSS3", "wordpress", "photoshop", "illustrator", "vscode"],
  },
];
