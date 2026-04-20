export interface SummarySection {
  title: string;
  items: string[];
}

export const summarySections: SummarySection[] = [
  {
    title: "skills",
    items: [
      "HTML5, CSS3, SCSS",
      "JavaScript (ES6+), TypeScript",
      "Tailwind CSS, Styled-components",
      "REACT, Next.js, Storybook",
      "Git, Jira, Confluence",
    ],
  },
  {
    title: "career",
    items: [
      "TmaxCloud (UX 매니저 @CL2-2-2팀)",
      "휴머스온 (퍼블리셔 @프런트엔드개발파트)",
      "티몬 (마크업 개발자 @마크업 개발팀)",
      "엑스이허브 (UI 개발자 @UI 개발팀)",
      "개인사업자 (디자이너 & 퍼블리셔)",
    ],
  },
  {
    title: "credential",
    items: [
      "GTQ 1급 (한국생산성본부)",
      "가천대학교 중앙도서관 다독상 최우수 수상",
      "컴퓨터그래픽스기능사 (한국산업인력공단)",
      "웹디자인기능사 (한국산업인력공단)",
    ],
  },
  {
    title: "experience",
    items: [
      "가천대학교 (시각디자인과)",
      "하이미디어 아카데미 (웹퍼블리셔반)",
      "대학생 머문자리 서포터즈 8기",
      "유네스코 디자인 창의도시 서울 서포터즈 3기",
    ],
  },
];
