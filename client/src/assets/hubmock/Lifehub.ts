export interface Item {
  postid: number;
  imgUrl: string;
  title: string;
  author: string;
}

const ImgList = [
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/20/00/4b563667e8034e7bb4a7117af5699397.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/17/4bc39af67c0741e88a57d731e8abf0ce.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/17/62901a5e84ce4edd9ea253b6d0e8d930.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/09/0ecbf5b2d8f44774b2d4f72f81e3a6a5_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/16/c7939dc404d7414398f439c0ff3fcc8b_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/18/00/f9a450ca3adf4810ab9204034c485374.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/16/684e7a74098f4587aebf1baf94297e17.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/17/02/9ef887692f6d453380c4d444be1b5a99.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/16/e718d81658fd4e398253e054ae0045ec.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/09/ba2613e9308944c08f8e826893d69095_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/14/17/a1c89d7401c244aab03bd7f7d1f82286.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/15/15/b990a783f65e441cbe91a7d7a540fc64_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/15/09/6c9255b530ff46a2a70bffb99f6d8844_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/14/0e59c8c01cef434eb2c65637088daa7a_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/14/15/80f5dd9116de4cdd85f94ad2ca2f541d_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/14/16/1a30041f81b14da0b36c35f71dad13b9.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/14/16/dc58b1fada5749099500ec4b89a9133a.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/14/10/1ef2ae96e86241cb9f4d57e30931ebee_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/19/06/1fa1f9c5b2984e249dc83d6a7d409285.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/09/c7da9b358ec14ef1aa3cf89a46d00cb4_640x480c.jpeg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/18/90ae2df94fe348ee83a085e57bbd4cfc.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/18/b3a878783b1a43bbb54bcf1cd437e422.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/18/0d1fda7700a140b5821d83a30d0853e3_640x480c.jpeg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/10/12/27bd7f3330a7477faae71a3e653066b3.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/10/12/0fea1129b624454fb0cc68e59de183d3_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/18/238e1863d1824c68aec6c58b0f51417e_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/17/fea5f34e26d942a5936177181aa67c92_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/17/04da291c846d4dd78487f47fb4c85738_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/17/5a19a77d93c64eceb671253d779d0ad6_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/08/fcf977ab8cdd47368628327f707a6fcf_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/17/02ac4a90e8a84c668839a5aeb51f22e5.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/17/623c00c66b3e478b9d6e69aa2e1c4d44.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/09/30d20bc858b144afb508502ca13c8e3b_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/09/ecf91bae61fc4d07880ad07ce8016594.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/06/17/ec9baf402d4f4c2fb1f68f262aa3a4e9.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/06/18/6e20536e030a441aadf015454a389344.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/08/2f3c36a5690c440092986e23f08571ff_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/06/08/8f763f7b412c499fb9f7a4c79001f41d.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/05/16/d682bf5948e94a71aabf06310d5c5f67.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/05/16/52063148941649c494080a3075fef336.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/05/19/35c84da82dec4d25b9b9da59326165c2_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/05/09/78618180ef67459890434642fb97b9de.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/02/18/ac29558b0c104113bd52272c6391d799_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/02/18/ebe8e92316704787874c547561f2d1a2_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/03/18/3498290d9794490d89ce896181a38827.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/03/10/d9a96cdfe5554588a497812e9253cdde_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/03/08/6e2cf064c8ee4c95b8a023eb1e739606.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/02/18/5926c77125064553bb80d60752202ab7.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/02/08/906a8a86c1344a8fa5d8024bbda5b803.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/15/c0bbc7f4fc1a4fedacdd53df89673e63.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/01/17/4af8d0d237ba4a7d854fdbe82e353c96_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/01/08/ac7dd69df5ed48b5a77c2fcd114f4444.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/17/39adf00999a7465b8903a07704f73927_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/16/8ecfb8f51e3b44a19a720de378126a14_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/30/15/013a195151404bb982284caf7c29ae38.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/30/16/a5f0e6cb01ea404fa9a885164574076d.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/30/09/652e44f0733642399beb0c5246722d58_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/29/17/160f57d32acf41d08a08cc0b41e0fca9_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/29/17/197d70b8fd8547ad9e31ede282fc9907.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/29/00/1665d44336124fe09d4792d56335f2fc.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/17/50698058a79145409e1b54089181711c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/28/17/6337c8094580430a91dc9274f2847219.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/16/7b2365fbff8b453386b92311d23e31c0_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/16/6c99e1c52d824f8994c826ac12554431.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/17/d66b93fe3c5042d7be13ccec3ae1bcae.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/11/d1a1fdcd7b6941aaab248b467c87fd10.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/26/04/86e41e8ad60c41f0bf2c454dd4cacd0c.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/25/13/d0ec6cbb18004c36b727b148c0fecf2b.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/25/11/301320ccad254719b9117c372e593d8d.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/25/01/08d5df1a9bab41c3b065449439ac2b97.webp",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/03/17/15464e21f91e490783ff52cbccc23266.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/03/17/d9c3323bba8b47178705788e540d7247_640x480c.png",
];

const titleList = [
  "오은영 박사가 앓고 있다는 ‘강박증’ 고백에 모두가 충격받았다",
  "동네 아이 다 아는 이런 아파트가 있답니다",
  "승승장구하던 대기업 떠나 한국의 스필버그로…인생을 더 아끼세요",
  "단백질 파우더, 이렇게 골라라",
  "오히려 몸 해치는 건강검진들",
  "“대통령 월급 절대 안 받는다” 호언장담했던 트럼프가 임기 내 벌어들인 돈은",
  "빨강색 좋아하는 사람의 '의외의' 성격",
  "이정재와 함께 레드카펫 밟은 임세령, 화려한 에미상 드레스의 정체",
  "불금 성수동에 수백명을 줄 세운 소비괴짜들, 우리는 팀 ‘디에디트’",
  "푸석한 머릿결과 피부…단백질 부족해도 생긴다",
  "드라마 수리남은 약과였다... 동포도 팔아먹은 마약왕 조봉행은",
  "의사가 말하는 사람이 죽기 일주일 전 나타나는 증상",
  "심장 질환 예방에 좋은 최고의 음식",
  "사용된 목재 종류만 10개. 오직 나무로만 만든, 한국에도 잘 어울릴 일본 목조 주택",
  "배우 최희서 “제 이야기의 첫 관객을 모십니다”",
  "70년 재위한 ‘英 역사의 산증인’… 존경받는 리더십 세우다 [엘리자베스 英 여왕 서거]",
  "“여왕 장례식 오지마!” 英 왕실이 극구 거부한 ‘5명’ 누구?",
  "식사후 앉아있기는 최악의 습관",
  "대한민국 대표회사 회장님의 누나들 “제 직업 의외인가요?”",
  "길고양이 입양,구조 할 때 주의사항 3가지",
  "세균을 부르는 행동? ‘무심결에 한 이 행동’에 세균 수 14배 증가?!",
  "2030부터 할머니까지… 웬만해선 ‘플플’ 열풍을 막을 수 없다",
  "아들아 50대에 비참해지지 않으려면 제발 지금 '이것' 해라",
  "제2의 인생 살겠다며 ‘미우새’ 하차한 배우 엄마, 두달 만에 이렇게 됐다",
  "구구단 19단 외우던 ‘IQ 204’ 천재 어린이, 이렇게 자랐습니다",
  "만 9살 나이에 중학교 조기 입학",
  "남자보다 수명이 긴 이유는 바로 ‘이것’!",
  "어릴 때부터 내 맘대로 살겠다고 다짐했다",
  "입사 1년 만에 4명한테... 인기 너무 많아 결혼부터 해버린 미모의 아나운서 정체",
  "펫프렌즈, 반려인 사연 모집…인스타툰으로 MZ세대와 공감대 이어가",
  "추석때 전 부치지 마라, 예의 아니다 차례상 뼈때린 성균관",
  "“나름 즐기며 살아온 우리, 계속 이렇게 살아가겠지”",
  "추석 선물용 홍삼, 건기식은 진세노사이드 함량 달라",
  "“아버지·남동생 때문에…” 노브라 착용 인증한 오상진 아내의 깜짝 고백",
  "스물셋의 사랑, 마흔아홉의 성공, 일흔일곱의 감사… “제일 잘한 일은 결혼”",
  "어디서도 안 알려주는 안쓰는 치약 활용법 5가지 자취꿀팁",
  "참치 제쳤다…1위 수출 수산물 김, 글로벌 시장도 변화",
  "“쉬운 길을…” 웹툰 작가가 찾은 제2의 직업 수입에 모두가 놀란 현실 이유",
  "여섯 번 항암에도 놓치 않은 바늘... 꼭 패션쇼 하고 싶어요",
  "오래되고 익숙한 동네 속삼대가 알뜰하게 일궈낸 상가주택",
  "레스토랑 나온 미쉐린을 맛봤다…‘테이스트 오브 썸머 인 서울’ 체험",
  "재벌이라 소문난 금융맨과 결혼한 아나운서 “남편 진짜 돈 많냐고요?”",
  "부부 사이 좋을수록 많이 쓰는 호칭",
  "옷으로 덕질하는 부캐가 디즈니에 초청받는 크리에이터가 되기까지",
  "“손님에게 친한 척하면…” 백종원이 식당 사장님들에게 남긴 따끔한 일침",
  "타트체리 …더 건강한 신 맛의 매력",
  "“아내 덕에 먹고사는 줄 알았더니”…여에스더 남편 실제 수입 상상초월이었다",
  "교수가 된 ‘용접 아이돌’… “그 힘든 걸 왜 하냐고요? 재미있으니까!”",
  "‘빌 게이츠의 굴욕’ 세계 3대 부자 자리 뺏어간 의외의 인물, 바로 이 사람입니다",
  "“저 완전히 달라졌습니다” 과거 주먹 세계 주름잡았던 조폭 두목의 충격 근황",
  "만만하게 보여서 고민인 당신, 이것만은 체크하라",
  "이천수가 ‘손흥민 아내’로 점찍었던 국악소녀, 자필로 이런 소식 전해왔다",
  "“밥 대신 3잔 마시고 아침 시작해요”",
  "구절초에 관절염 효능이?…정읍 구절초 농원 가보니",
  "“라면 즐긴 盧, 美 쇠고기 찾던 MB, 혼밥 하던 朴… 생각하면 짠해”",
  "막 버리면 안돼요! 깨진 유리부터 식용유 버리는 방법까지 | 그냥 버리면 안 되는 쓰레기 A to Z",
  "의외로 건강하지 않은 습관",
  "이렇게 모았습니다... 200만원 월급, 3년에 1억 모았다는 22살 직장인",
  "“얼굴 다 팔리는데 고작 이거 받고 나오는거야?” 요즘 유행인 연애 예능 프로그램 출연료 수준",
  "한 달에 1억 원 벌어들이던 유튜버, 비싸게 채널 팔아치우더니 결국…",
  "나이 50 넘어 인간관계를 단절시키는 말습관 3가지",
  "“나 꼰대 맞나 봐, 우울해…” 위험 신호 알린 미남 아나운서가 사는 집 내부 공개됐는데요",
  "눈먼 고양이와의 산책, 시각장애 유기묘를 입양한 집사의 이야기",
  "주방에 ‘이것’ 두지 마세요",
  "고액 출연료·정치 편향 논란 있었던 김어준, 출연료 깎인 결정적 이유는요",
  "대기업 회장님들도 부러워한다는 나영석 PD의 어마어마한 연봉 수준",
  "부자로 알려진 손연재 남편, 충격적인 과거 행적 공개됐다",
  "“60세까진 인생여행 워밍업… 100세에도 캐리어 끌고 싶어요”",
  "광화문 복원용 나무 4그루 빼돌린 무형문화재 장인이 받은 벌금 액수",
  "‘LG 구본무 회장의 딸’이 공식행사에 처음으로 등장한 진짜 이유는 바로…",
  "검정색옷에 맥주를 부으면 벌어지는 일",
  "유독 부부관계 좋은 사람들의 신체적 공통점은 '이것'",
];

const authorList = [
  "명견실버",
  "타이슨퓨리",
  "조지포먼",
  "리얼푸드",
  "마음건강 길",
  "트럼프바보",
  "스탈린",
  "머니그라운드",
  "한국일보",
  "리얼푸드",
  "조선일보",
  "책썰미",
  "리얼푸드",
  "PHM ZINE",
  "예스24 채널예스",
  "세계일보",
  "서울신문",
  "리얼푸드",
  "머니그라운드",
  "애니멀프레스",
  "아시아투데이",
  "조선일보",
  "북적북적",
  "머니그라운드",
  "머니그라운드",
  "마음건강 길",
  "마음건강 길",
  "마음건강 길",
  "살구뉴스",
  "리얼푸드",
  "중앙일보",
  "경향신문",
  "리얼푸드",
  "머니그라운드",
  "조선일보",
  "혼족의제왕",
  "리얼푸드",
  "머니그라운드",
  "오마이뉴스",
  "전원속의 내집",
  "리얼푸드",
  "머니그라운드",
  "책식주의",
  "예스24 채널예스",
  "머니그라운드",
  "리얼푸드",
  "머니그라운드",
  "조선일보",
  "머니그라운드",
  "머니그라운드",
  "전성기",
  "머니그라운드",
  "마음건강 길",
  "머니그라운드",
  "리얼푸드",
  "동아일보",
  "혼족의제왕",
  "리얼푸드",
  "살구뉴스",
  "머그타임즈",
  "머니그라운드",
  "책썰미",
  "머니그라운드",
  "애니멀프레스",
  "아시아투데이",
  "머니그라운드",
  "머니그라운드",
  "머니그라운드",
  "메이웨더",
  "동아일보",
  "파퀴아오",
  "명견실버",
];

const data: Item[] = ImgList.map((item, idx):Item => ({
  postid: idx,
  imgUrl: item,
  title: titleList[idx],
  author: authorList[idx],
}));

export default data;
