import { PostItem } from "custom-type";

type RankItem = Pick<PostItem, 'title' | 'author'> & { category: string; rank: number; };

interface HomeData {
  maincontents: PostItem[];
  tagContents: {
    tagTitle: string;
    content: PostItem[];
  }[];
  rankContents: RankItem[];
}

const homeData: HomeData = {
  maincontents: [
    {
      title: "출연료 얼마나 받길래\n연애예능 출연 하나?",
      author: "머그타임즈",
      imgUrl:
        "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/09/13/08/3bf0a18f280b403bb2a16456ce30b967.jpg",
    },
    {
      title: "경기 불황 속 주목받아\n8만대 팔린 차",
      author: "한국경제",
      imgUrl:
        "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/30/14/679dbe12f948435ea2885acda054c633.jpg",
    },
    {
      title: "예쁜 얼굴에 속았다\n엔딩 요정의 반전",
      author: "YTN",
      imgUrl:
        "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/24/15/15bd72fce6ea434aac22af4805384a63.jpg",
    },
    {
      title: "400년 역사 숲 드디어\n일반인에 개방했다",
      author: "트래비 매거진",
      imgUrl:
        "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/25/13/49f3899ac0324ac5b089d164b41d165d.jpg",
    },
    {
      title: "박세리, 김연아, 이승엽...\n은퇴 선수들의 재산은",
      author: "머니그라운드",
      imgUrl:
        "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/09/13/08/a90b68fcaabe4296b2e30efc80e339fa.jpg",
    },
    {
      title: "왼쪽은 고택, 오른쪽은 현대\n세상에 이런 집이",
      author: "PHM ZINE",
      imgUrl:
        "https://thumb.zumst.com/512x320/https://static.hubzum.zumst.com/hubzum/2022/08/25/13/f53b0c1a3cfa4e9e81a5fe6a5a60d802_640x480c.jpg",
    },
  ],
  tagContents: [
    {
      tagTitle: "#주부",
      content: [
        {
          title: "바쁜 주부들을 위해 간단 레시피를 소개합니다",
          author: "중앙일보",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/12/21/14/e972c6a0cfdd4a43867b58456a26f2cf.jpg",
        },
        {
          title:
            "누구나 작가가 될 수 있다? 웹소설 작가로 2라운드를 사는 주부들",
          author: "전성기",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/07/22/13/b6aa0b87d3ce4aefb9c48ac1a98c90e0.jpg",
        },
        {
          title:
            "전업주부로 생활하고 있다는 개그맨 '요즘 왜 일 안하냐고요?'",
          author: "스마트인컴",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/09/baac98e6d538497fb9cf40da82432d83.jpg",
        },
        {
          title:
            "전업주부가 어떻게 1년 6개월 만에공인중개사 사무소를 성공시켰을까?",
          author: "전성기",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/06/20/17/6628359ff6dc476595c59327d9c95c5a.jpg",
        },
      ],
    },
    {
      tagTitle: "#나는_내일_연차",
      content: [
        {
          title: "연휴도 막바지니까 당일치기 먹방 코스!",
          author: "반려생활",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/22/10/4949f483302c48e69cc6c2a1306c1184.jpg",
        },
        {
          title: "연차 상관없이 일 잘하는 사람들의 특징",
          author: "북적북적",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/02/09/14/efe17b1405bf4fbba9c6e8a35c3c77c0_640x480c.jpeg",
        },
        {
          title: "연휴, 휴가철 이후 내 자동차 관리",
          author: "쉐어하우스",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2020/10/12/14/656a47d8f0c748ce8ca2f8167c7e197d.jpg",
        },
        {
          title: "근교 여행지로 추천! 당일치기 뚝딱 가볼까",
          author: "스마트라이프",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/06/21/11/86a61663ff0d46d3879533eab725afc0_640x480c.jpg",
        },
      ],
    },
    {
      tagTitle: "#급찐_급빠",
      content: [
        {
          title: "아침마다 '이 부위'문지르면 다이어트가 된다!?",
          author: "마음건강 길",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/09/29/11/f51996f1dd0f4ca1aa1f24207430ed96_640x480c.jpg",
        },
        {
          title: "요즘 인기인 그릭 요거트의 각광받는 비법",
          author: "리얼푸드",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/18/09/17b84c2c385b4766a80e23d0614ecb22_640x480c.jpg",
        },
        {
          title: "이 자리 지압했더니 지방분해 효과 있었다!",
          author: "아시아투데이",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2021/07/07/09/921a8717807d442e9e35c5f04ae6372c.jpg",
        },
        {
          title: "살 뺀다고 이 운동만 했다간 힘만 듭니다",
          author: "한국일보",
          imgUrl:
            "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/02/14/17/3318ff5ef11b4a5b98399fe4ee27fc8f.jpg",
        },
      ],
    },
  ],
  rankContents: [
    {
      rank: 1,
      title:
        "제2의 인생살겠다며 '미우새' 하차한 배우 엄마, 두달 만에 이렇게 됐다.",
      author: "머니그라운드",
      category: "라이프",
    },
    {
      rank: 2,
      title:
        "근육 때문에 옷도 잘 못 입는다는 여배우의 뒤태에 모두가 놀랐다.",
      author: "머니그라운드",
      category: "연예",
    },
    {
      rank: 3,
      title: "아들아 50대에 비참해지지 않으려면 제발 지금 '이것'해라",
      author: "북적북적",
      category: "라이프",
    },
    {
      rank: 4,
      title:
        "첫사랑 붙잡으려 촬영 도중 제주도까지 찾아갔다는 배우의 현재모습",
      author: "머니그라운드",
      category: "연예",
    },
    {
      rank: 5,
      title:
        "'펜트하우스' 하은별 역으로 데뷔한 신인 여배우의 확 달라진 최근 모습",
      author: "머니그라운드",
      category: "연예",
    },
    {
      rank: 6,
      title:
        "'100kg->27kg 감량' 서재경 '의료사고로 父잃고 母는 혈액암 투병'",
      author: "OSEN",
      category: "연예",
    },
    {
      rank: 7,
      title:
        "'DMZ 평화의 길 방문 신청하세요' 금강산을 볼 수 있는 코스 개방!",
      author: "도서출판 길벗",
      category: "여행",
    },
    {
      rank: 8,
      title: "한국 야구 초토화시킨 일본 야구 6승 투수의 '마구'",
      author: "오마이뉴스",
      category: "이슈",
    },
    {
      rank: 9,
      title: "'Find Dining' | 여행길에서 만난 우연한 행운",
      author: "중앙일보",
      category: "푸드",
    },
  ],
};

export default homeData;
