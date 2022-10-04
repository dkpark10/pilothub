import { PostItem } from "custom-type";

export interface RankPostItem extends PostItem {
  rank: number;
}

const imgs = [
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/19/94560e3452cb4007aac2ccec84562cc6.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/03/18/7dbc915a86bd4e9e9f045b1416b4cb7b_640x480c.png",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/04/00/12a59dc5e10c422f8756260e95497e8e.webp",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/03/18/f1a82cd85b1045b8bd98466d60ac33b3.webp",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/ff93925ef1564cdb8ee3343cf92797df.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/16/6278c3042ac34b44b7cd80e0ac02e4d1.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/19/058a6d3e39364b97a930ef42ccf2b425_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/04/09/97300f957ba34b5484bf1487d00182cc.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/04/09/a32bc1c7e64c49eaba92b12b64289ecd_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/15/dbf7c307076e43ed9ccb4c51894fddcf.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/28/13/e2c32d7c087e4aa2b0e6d6d82c3e9d90.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/27/10/d7d7a3c3ac1748fba3e9b6fc2c5e4ee6.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/29/16/2ef0fd58cd48424b94648dd1a07a35f6.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/10/5e3d6cc25a6a460782f367bebf6d75aa_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/10/11471cefcaef4738a145f8e2ef3fd16e.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/19/a2189c47a13c457e86e09610c1aa5ad4_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/3fbd845982ff488ab94917485d62b631.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/03/09/474ac79f480c4b81afdeffd90be9da13.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/267d134ad78c498bba696befa9c55107.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/03/09/97b5207e85bd49ff9263c61b9935f2ea.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/29/16/6e7ba742990c4175b5ca4b48f3deadc6.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/15/b4847a9733994796b4f4826564982ea1_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/19/afd1a85e45c747a78d45725a59835f35_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/7a720fe90483489d96b956de6f9b106d.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/5449f009506b462bbc2e84ce54f497f1.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/01/12/93eb42d5f5bc4e8eaf86865b294063af_640x480c.png",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/30/15/7ccc0d66928b49bb8195aefa50f80cc9_640x480c.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/09/22/11/414910be83ad4b1cb92e14aa89f6b114.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/02/09/dc01e8da19864220bfe103c39b813432.jpg",
  "https://thumb.zumst.com/620x260/https://static.hubzum.zumst.com/hubzum/2022/10/03/18/af5e5cdd0d724a16b1f486fb85251215_640x480c.jpg",
];

const titles = [
  "17세에 대학 간 ‘과학 천재’가 화물차 모는 이유",
  "새 드라마 촬영 중인 수지, 길거리에서 포착된 모습에 난리난 이유",
  "모두가 쳐다봤다…’분당 이나영’으로 불리던 여배우의 최근자 미모 수준",
  "‘제2의 우영우’로 불리는 차기작 위해 연기대상 배우가 내린 결단",
  "기아 쏘렌토 PHEV, 미국 가격은 7천만 원부터 시작",
  "영웅이 배신자로, 축구 스타 루이스 피구에게 무슨 일이...",
  "평생 맞고 살던 유기견의 최후",
  "싸우고 하는 XX가 진짜 좋아 l #마녀의밤 EP.01",
  "‘일본산 벗어나자’ 우리나라 단감의 경쟁력",
  "[굿바이★'현재는 아름다워']주말드라마, 막장 딜레마에 빠지다",
  "교동도의 새로운 이유, 강화 화개산 모노레일",
  "내 꿈은 농구스타! 스크린이 아닌 코트에서 만날 뻔했던 배우들",
  "김정현, '가스라이팅 논란' 후 복귀작 '꼭두의 계절'...김정현의 계절 만들까",
  "맛도 좋고 노화주범 ‘좀비세포’도 죽인다!",
  "Find Dining | 엄선한 가을 보양식",
  "지중해·오키나와 사람, 왜 오래살지 ?",
  "귀때기청봉 찍고 대청봉…바다·계곡·능선 절경 한눈에",
  "일당준다니 ??? 와 ㅆㄹㄱ",
  "가성비 '끝판왕' 폭스바겐 첫 순수 전기 SUV ID.4…주행력·적재공간 '눈길'",
  "귀한분 모셨습니다",
  "랜선 여행, 상상 안됐다 줄리안→타일러 전한 톡파원 비하인드",
  "당신의 선수는 안녕하십니까 ? ①",
  "몸을 움직이는 노후를 위한 밝고 편안한 전원주택 '뜰'",
  "여기가 방콕 ? 5미터 담벼락에 ‘낙서’ 했더니… 전 세계 여행자가 몰려왔다",
  "브랜드 활동에 기반이 될 든든한 파트너 – 쌍용자동차 토레스 T7 4WD",
  "10월 국내 여행지 추천:: 필름 카메라 찍기 좋은 나들이 명소 4",
  "따끈한 암태도 리지 한 판 어때요 ?",
  "남편은 12년째 쉬고 있지만.. 결혼, 출산 이후 활동 중단한 여배우가 전한 깜짝 소식",
  "고말숙 전남친 레전드",
  "‘김치 싸대기’ 맞고 대박났던 배우가 8년 만에 공개한 당시 상황",
];

const authors = [
  "머니그라운드",
  "한국일보",
  "머니그라운드",
  "머니그라운드",
  "머니그라운드",
  "모빌리티그라운드",
  "한국일보",
  "애니멀프레스",
  "딩고",
  "리얼푸드",
  "한국일보",
  "트래비 매거진",
  "리코드M",
  "OSEN",
  "마음건강 길",
  "시티라이프",
  "마음건강 길",
  "뉴스1",
  "딩고",
  "아시아투데이",
  "딩고",
  "뉴스1",
  "루키더바스켓",
  "나무신문",
  "조선일보",
  "한국일보",
  "KKday",
  "월간산",
  "머그타임즈",
  "딩고",
];

const items: RankPostItem[] = imgs.map(
  (img, idx): RankPostItem => ({
    rank: idx + 1,
    imgUrl: img,
    title: titles[idx],
    author: authors[idx],
  })
);

export default items;
