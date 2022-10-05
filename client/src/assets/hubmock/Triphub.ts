import { PostItem } from "custom-type";

export interface Item extends PostItem {
  postId: number;
}

const tripImgList = [
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/10/05/00/112ce1e87b9e46869c67ad505e2f9209_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/14/253451d176b04f02b38eb799b66089ef.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/14/29f4a876e3d34cc999ca0bfbe349bb99_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/10/04/15/73b7ef8475274d25a9b0c93ffb75a48c_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/13/e2c32d7c087e4aa2b0e6d6d82c3e9d90.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/3fbd845982ff488ab94917485d62b631.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/7a720fe90483489d96b956de6f9b106d.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/10/01/12/93eb42d5f5bc4e8eaf86865b294063af_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/10/01/12/9c5c6680cbb64efc8db0cb60a80779c4_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/09/7914ddf2059a45d19201eafacbd035e4.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/30/21/25f28c8cfcbc490484048b8c2bb4c8d2_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/30/21/456ee49cb66349bcb37092f895ccfbef_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/26/10/72867984c7f24b1a8cb4a01ddca687dd.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/29/17/bcca662534704444b40c2a585a16061c_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/29/10/8563a641d8c74882a83e312c95313720_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/26/10/8d72b81d4d0e4fe097ed097854b39729.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/12/75db96520d444629b6a3e986231e6bff_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/28/12/7750fc316a2b498a893c0e9648b1dbae_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/21/09/294eeb924dbf43008e462469fa9556d3.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/21/15/6cd21b99844f494096f3eb788f76246a.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/18/28678f70773941eebe96aceb0657a1bc_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/27/17/88ddaf81563a4f95b89ba032ade1209a_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/21/09/ed7e6c5cb19e48b0836232701f7807bf_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/26/15/cc35694c70f34211b4e108558d9587aa_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/20/10/43ebc1b219b64f35bf74652bbdcd41cc.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/21/08/4c85b5e221ec452e8b1bf0ecce141d95.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/20/10/d6450ac4cab04d6599ac1da21a13405b_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/23/15/f9f228fce4c144dcad3718c626abea65_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/08/ba236e3084544e8ea0a106ebbf01f12a_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/08/65186e45107244e88331067101fbfb79.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/22/16/945937aed38343d79b81ba82d65de850_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/22/13/2e5f4a1a006f4a5e9aff82c264faa81c_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/01/10/2a4af04769a444479be9c6f185a5dd10_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/09/9e6238f4e7ac4f52a00c01c961b17cfc.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/10/52d58c7d32b34d7f9d2deb8c271c5335.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/15/aa7cf73e5c5e4e6387e268da708a8c94.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/16/a63ba7cc1865404c9513a594f1b7f55c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/20/16/607ef24c1b774f3cbeb0980504f50e7b_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/13/f1d5341bf71c4cc1a31368f189fc6d2f_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/15/29b02086adaa426f8a41bd67c74c8ff7.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/19/09f7b912a11540e3a01934d7975a4a5a_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/19/17/f8045dfe14d0492790a551c9ffd4dbec_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/10/9b6ac3add40f4b2199bcd85b337c9856.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/09/8260e6c9e16d4f00bed80489cdb050a2_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/12/11/c6788f5090134f10a1a090ad5d8b7edf_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/18/f1e88a48d6de4894b055bd525c38330f_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/16/13/c48d3d97e53940e6befeb7e99a0fcb5d_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/09/39ea568cd2c244e18e9bdc0b01189010.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/09/6f3fce2eb231468e99d51faddb04d9b6.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/15/13/ce380553c6f24772b38917b8d7d2ff69_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/02/10/36053a563a784688a0dcc2898f92a32b_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/10/98cc22d38d414992b75e022c4676c0f3.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/14/12/25e63a9f979a444b8fbeea66a2fccdad_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/07/11/706273bfbfe04d53abac67e53d0530c4.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/13/14/6dd88974914c4bad933e5bbe99a47193_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/14/a1ff82bb8c194649ad1a094553a29a39_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/06/15/35557c4f352a4ffea9975b449ada05eb.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/11/09/a09d4f34be4542fa9b9da1ffd2a9521b_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/10/8daf2ccaa9b24b01bd4bdb09764c869c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/10/44307ea545c74a01b5ce062ae20bb2eb_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/09/13/c9009201e55a4b2ca65ee80b5d235108_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/05/18/26af9a94041a4f5db87453b7004e7f04_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/08/12/689b451238274012bb05cb34a3fcf652_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/01/11/4b34cf4f831c4a329cd34484e838f530.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/06/17/f3516b383e814e3685e706614b657eb5.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/01/10/231488c46df74adab2928d66f460acd1.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/06/22/1e96a93c6bea4da583f9c4269f06ed81_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/10/e6b915e025a8435dbf50c689cb112cdb_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/11/7654438c450f48f88d36e5d6b5909764_640x480c.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/09/05/18/e56adad4c7f6492e88892c08dcad7989_640x480c.png",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/31/16/d909172fe5cf452a84b47eb2168a62d0.jpg",
  "https://thumb.zumst.com/320x200/https://static.hubzum.zumst.com/hubzum/2022/08/29/13/1949b0df12b042a094e49268495ff771_640x480c.jpg",
];

const tripTitleList = [
  "공항철도 직통열차 AREX :: 서울역-인천공항 직통열차 탑승 방법부터 할인 정보까지",
  "노을 맛집, BTS 성지… ‘완전한 고을’의 가을길 완주! [ESC]",
  "애견동반가능! 가까운 가평에서 즐기는 반려견 동반 글램핑, '하늘숲글램핑'",
  "부산 가볼만한곳 :: 남포동으로 떠나는 아날로그 시간 여행",
  "교동도의 새로운 이유, 강화 화개산 모노레일",
  "귀때기청봉 찍고 대청봉…바다·계곡·능선 절경 한눈에",
  "여기가 방콕? 5미터 담벼락에 ‘낙서’ 했더니… 전 세계 여행자가 몰려왔다",
  "10월 국내 여행지 추천 :: 필름 카메라 찍기 좋은 나들이 명소 4",
  "10월 해외여행지 추천 :: 다시 돌아온 여행의 중심, 일본의 모든 것",
  "전라도 여행지 강진 가우도 청자다리",
  "서울 가볼만한곳 :: 서울에서 미국을 여행하는 법",
  "울진 여행지 추천 :: 울진, 때묻지 않은 순수함을 찾아 떠나는 여행",
  "인천 여행, 당일치기 해안 트레킹 코스 추천",
  "대전 놀거리 :: 가장 높은 곳에서 만나는 갤러리, 디 아트 스페이스 193",
  "강원도 여행지 추천 :: 강원도의 숨겨진 보물, 평창으로 떠나요",
  "운무 넘나드는 원시림…근심은 잠시 내려놓으시게",
  "그랜드 하얏트 서울 :: 완연한 가을 하늘 아래에서 즐기는 여유로운 호캉스",
  "그래비티 서울 판교 :: 감각적인 호캉스로 완성하는 하루",
  "지뢰꽃길 따라 오르니 광활한 평야가, 아찔한 잔도 따라가니 1억년 전 풍광이…",
  "여전히 아름다운지, 보홀",
  "제주 가볼만한곳 :: 주황빛 하늘 아래에서 느끼는 제주 노을 명소 총정리",
  "멜버른 마켓 추천 :: 맛있는 멜버른 여행을 위한 퀸 빅토리아 마켓",
  "개별 시설을 갖춘 애견동반 글램핑장 '서울 근교 글램핑 Best3'",
  "베트남 가족여행 코스 :: 푸꾸옥 빈원더스 총정리! 아쿠아리움, 워터파크, 놀이공원이 한 곳에?",
  "'사선녀'가 탄성 내지른 곳, 옥천에 있습니다",
  "서울 근교 나들이, 실내에서 즐기는 식물원 카페 BEST 5",
  "천사섬 신안여행 끝없이 펼쳐지는 인피니티 목교",
  "뉴욕 여행 기초 정보 :: 꺼트리고 싶지 않은 낭만, 뉴욕",
  "태백까지 줄곧 내리막 퇴근길처럼 설레는 길",
  "이름만 군자, 괴산의 악산…일망무제 '조망 잭팟' 와~",
  "해운대 블루라인파크 할인 :: 스카이캡슐을 타고 천천히 감상하는 부산 바다",
  "베트남 푸꾸옥 자유여행 :: 대자연이 살아 숨 쉬는 빈펄 사파리, 편하고 재밌게 여행하기",
  "9월 국내 여행지 추천 :: 가을이 내리고 꽃이 흐르는 여행",
  "해발 고도 무려 1458m… 아찔한 발왕산 스카이워크에 즐기는 추석연휴",
  "치유의 숲에서 쉬어가는 경남 웰니스 여행",
  "시간의 흐름 속에 정갈하게 정리한 아름다움이 돋보이는 쉼표",
  "축제 없어도 메밀꽃 물결친다…이 가을, 봉평을 즐기는 법",
  "﻿국내 가을여행지 추천 :: 산으로 바다로 떠나요! 전국 케이블카 완전정복",
  "수굿한 제주의  오름을 두르다, 삼달오름",
  "카름스테이, 제주의 마을 속으로",
  "베트남 푸꾸옥 신상 리조트 추천 :: 세일링클럽 시그니처 리조트 & 풀만 리조트 & 안도친 리조트",
  "용산 놀거리 :: 베트남 식당부터 카페까지, 취향 가득한 용산 공간 3",
  "하늘 아래 맞닿은 거대 습지…4500살 '용늪' 속으로",
  "신축 한옥 독채 펜션 곡성 '수수가옥'",
  "인천 섬여행 :: 한국의 갈라파고스, 굴업도 가는 법부터 가볼만한곳까지",
  "대구 가을 여행 :: 남평 문씨 본리 세거지, 한옥의 미를 찾아 떠나는 산책",
  "에버랜드 할로윈 :: 에디터가 직접 다녀온 에버랜드 할로윈의 모든 것 (+특가 이벤트)",
  "추억 되새긴 아들 기적…부친이 판 땅 되사 '해남 명소' 일궜다",
  "푸르른 솔숲! 보랏빛 손님이 찾아왔네",
  "태국 칸차나부리 여행 :: 에메랄드빛 폭포가 쏟아지는 에라완 국립공원의 모든 것",
  "9월 해외여행지 추천 :: 늦캉스 가기 좋은 해외여행지 모음",
  "평창 육백마지기 하얀 날개 바람 따라 서둘러 가을 오다",
  "롯데리조트 :: 속초, 부여, 제주에서 즐기는 안락한 리조트 여행",
  "독야청청 홀로 섬, 어청도를 찾아서",
  "베트남 푸꾸옥 여행 필수 코스 :: 푸꾸옥 그랜드월드 야시장 & 즈엉동 야시장",
  "DMZ 평화의 길 방문 신청하세요 금강산을 볼 수 있는 코스 개방!",
  "우람한 포대능선, 꼭대기엔 바위제국…엄홍길 집터도",
  "푸꾸옥 바다 명소 BEST 3 :: 츄온츄온 카페, 사오비치, 호국사",
  "‘새 무릉도원’ 신도마을 도구리알의 신비한 제주 저녁노을 [최현태 기자의 여행홀릭]",
  "경남 고성 애견동반 독채펜션 에세이 더 레지던스",
  "부산 가을 여행 :: 색다른 매력이 살아 숨 쉬는 부산 영도 여행",
  "군산 여행지 추천 :: 가을에 유랑하기 좋은 도시, 군산",
  "베트남 혼똔섬 여행 :: 혼똔섬 케이블카부터 다채로운 네이처파크까지",
  "육조 마당부터 하이커 그라운드까지! 역사, 문화, 핫플 품은 광화문 광장 산책",
  "TURKS ON THE ROAD 길 위에서 만난 튀르키예 사람들",
  "월간산이 추천하는 9월에 갈 만한 산 BEST 4",
  "방콕 근교 여행 :: 역사가 살아 숨 쉬는 칸차나부리, 죽음의 철도부터 콰이강의 다리까지",
  "절벽에 새겨진 고대 원주민들의 과거, 아나사지",
  "﻿제주도에서 한라산 등산하기 vs 금오름 산책하기",
  "베트남 쇼핑리스트 :: 푸꾸옥 여행, 어디서 무엇을 사야 할까?",
  "9월 당신에게 '한강'을 추천하는 이유",
  "노천탕 있는 애견동반 한옥 독채, 경상도 청도 스테이더담",
];

const tripAuthorList = [
  "KKday",
  "한겨레",
  "반려생활",
  "KKday",
  "트래비 매거진",
  "뉴스1",
  "조선일보",
  "KKday",
  "KKday",
  "스마트라이프",
  "KKday",
  "KKday",
  "대한민국 구석구석",
  "KKday",
  "KKday",
  "아시아경제",
  "KKday",
  "KKday",
  "조선일보",
  "트래비 매거진",
  "KKday",
  "KKday",
  "반려생활",
  "KKday",
  "오마이뉴스",
  "대한민국 구석구석",
  "스마트라이프",
  "KKday",
  "월간산",
  "뉴스1",
  "KKday",
  "KKday",
  "KKday",
  "세계일보",
  "대한민국 구석구석",
  "전원속의 내집",
  "중앙일보",
  "KKday",
  "SRT매거진",
  "트래비 매거진",
  "KKday",
  "KKday",
  "뉴스1",
  "반려생활",
  "KKday",
  "KKday",
  "KKday",
  "중앙일보",
  "아시아경제",
  "KKday",
  "KKday",
  "세계일보",
  "KKday",
  "트래비 매거진",
  "KKday",
  "도서출판 길벗",
  "뉴스1",
  "KKday",
  "세계일보",
  "반려생활",
  "KKday",
  "KKday",
  "KKday",
  "대한민국 구석구석",
  "트래비 매거진",
  "월간산",
  "KKday",
  "핸드메이커",
  "스마트라이프",
  "KKday",
  "트래비 매거진",
  "반려생활",
];

const tripMockData = tripImgList.map(
  (item, idx): Item => ({
    postId: idx,
    imgUrl: item,
    title: tripTitleList[idx],
    author: tripAuthorList[idx],
  })
);

export default tripMockData;
