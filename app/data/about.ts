export interface AboutDetailEntry {
  date: string;
  title: string;
  info: string;
  organized?: string;
}

export interface AboutDetailSection {
  category: string;
  entries: AboutDetailEntry[];
}

export const profileInfo = {
  name: "김민지",
  birth: "1992. 04. 15",
  role: "마크업 개발자",
  description:
    "저는 브랜드와 가치를 만드는 것을 좋아하는 사람입니다. 그래서 제가 할 수 있는 것에 안주하지 않고 새로운 것을 도전하려 노력합니다. 단순히 주어진 일에 머무르기보다는, 새로운 영역에 끊임없이 도전하며 제 가능성을 확장해 나가고자 합니다. 퍼블리싱, 기획, 그리고 디자인 감각까지 아우르며 사용자의 흐름을 설계하고 실제 구현 가능한 형태로 팀과 소통하는 것을 즐깁니다.",
};

export const aboutDetails: AboutDetailSection[] = [
  {
    category: "교육",
    entries: [
      {
        date: "2011.03 - 2017.02",
        title: "가천대학교",
        info: "시각디자인과 졸업",
      },
      {
        date: "2016.09 - 2016.12",
        title: "하이미디어 아카데미",
        info: "반응형 디자인 웹퍼블리셔반 수료",
      },
    ],
  },
  {
    category: "자격",
    entries: [
      {
        date: "2014.06.27",
        title: "웹디자인기능사",
        info: "한국산업인력공단",
      },
      {
        date: "2014.06.27",
        title: "컴퓨터그래픽스기능사",
        info: "한국산업인력공단",
      },
      {
        date: "2014.11.11",
        title: "가천대학교 중앙도서관 다독상",
        info: "최우수상",
      },
      {
        date: "2016.06.17",
        title: "GTQ 1급",
        info: "한국생산성본부",
      },
    ],
  },
  {
    category: "대외활동",
    entries: [
      {
        date: "2012.06 - 2012.10",
        title: "유네스코 디자인 창의도시 서울 시민 서포터즈 3기",
        info: "",
        organized: "서울디자인재단 주관 / 서울특별시 주최",
      },
      {
        date: "2013.03 - 2013.08",
        title: "대학생 머문자리 서포터즈 8기",
        info: "",
        organized: "화장실문화시민연대 주관 / 안전행정부 & 서울특별시 후원",
      },
    ],
  },
];
