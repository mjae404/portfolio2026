export interface StackDetailItem {
  title: string;
  descriptions: string[];
}

export const stackTags: string[] = [
  "HTML5", "CSS3", "SCSS", "REACT", "Next.js", "Storybook",
  "git", "Jira", "Confluence", "photoshop", "illustrator",
];

export const stackDetails: StackDetailItem[] = [
  {
    title: "Frontend",
    descriptions: [
      "협업을 위하여 재활용하기 쉽고 유지보수하기 용이한 코드를 짤 수 있도록 노력하고 여러 방법에 대해 고민합니다.",
      "페이지의 구조와 태그의 의미를 고려하여 마크업을 작성하는 것을 지향하며 웹표준, 웹 접근성에 맞춰 마크업을 작성합니다.",
      "CSS 전처리기 SCSS를 사용할 수 있으며, SCSS의 변수, 함수, 믹스인 등의 여러 기능들을 활용합니다.",
      "React.js를 활용한 컴포넌트 형태와, Storybook을 활용하여 디자인 시스템 형식의 마크업을 작성할 수 있습니다.",
    ],
  },
  {
    title: "Design",
    descriptions: [
      "포토샵 및 일러스트레이터를 활용하여 디자인 및 편집을 작업할 수 있습니다.",
      "피그마를 활용하여 UX/UI 설계 및 프로토 타이핑이 가능합니다.",
      "애프터 이펙트 및 프리미어를 활용하여 기초적인 영상 작업이 가능합니다.",
    ],
  },
  {
    title: "Tools",
    descriptions: [
      "Visual Studio Code, Web Storm을 주로 사용하고 있습니다.",
      "git을 이용한 형상관리를 통하여 협업을 진행할 수 있습니다.",
      "Jira 및 Confluence를 활용하여 다른 사람과 협업하고 스케줄링하며, 문서를 공유할 수 있습니다.",
      "npm, yarn을 활용하여 원하는 패키지 등을 설치하고 활용할 수 있습니다.",
      "gulp의 문법을 이해하고 기초적인 세팅을 할 수 있습니다.",
    ],
  },
];
