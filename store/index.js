import Vue from "vue";
import Vuex from "vuex";
// import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

Vue.use(Vuex);
// Vue.use(LottieVuePlayer);

const store = () => {
  return new Vuex.Store({
    state: {
      projectInfo: Object
    },
    mutations: {
      THIS_PROJECT(state, index) {
        if (index === 7) {
          state.projectInfo = {
            title: "웹 퍼블리싱 & 프론트엔드 개발 <br /> 기초 교육수료",
            date: "2020.01 ~ 2020.07",
            info: "웹 퍼블리싱, UI/UX 디자인, 프론트엔드 개발 기초에 관한 교육 과정 수료",
            lang: "Html, Css, Js, Jquery, Vue, 포토샵, 일러스트레이터, XD",
            work: [
              "수강 내용",
              "- 디자인툴을 이용한 웹 UI/UX 디자인(XD, 포토샵, 일러스트레이터)",
              "- Vue.js 를 사용한 클론코딩 SPA 구조 설명",
              "- 기본 html, css, js 클론코딩",
            ],
            guitar: ["PC크기에 맞게 제작된 포트폴리오입니다."],
            source: ["https://kimjihwan0618.github.io/pub_project/Web/portfolio"],
            link: "https://kimjihwan0618.github.io/pub_project/Web/portfolio",
            class: "pc"
          };
        } else if (index === 6) {
          state.projectInfo = {
            title: "SHIFT",
            date: "2020.07 ~ 2020.10",
            info: "(주)제제컴즈 웹디자이너 재직",
            lang: "Html, Css, Xd, 포토샵, 일러스트레이터",
            work: [
              "- (주)제제컴즈 홈페이지 관리",
              "- 'SHIFT'앱 UI/UX 디자인",
              "- 카드뉴스 & 페이지 템플릿 제작"
            ],
            guitar: "",
            link: "http://www.jejecomms.com/",
            class: "none"
          };
        } else if (index === 5) {
          state.projectInfo = {
            title: "동전환전소",
            date: "2020.11 ~ 2021.01",
            info: "외국동전 & 지폐를 온라인으로 환전 신청 후, <br /> 가까운지점에서 환전된 돈을 찾아갈수 있는 서비스",
            lang: "Js, Jquery, Ajax, Spring Boot",
            work: [
              "프론트엔드 업무 담당",
              "1. Spring boot Thymeleaf, Jquery 사용한 페이지 구현",
              "2. 백엔드 API 연동(ajax)",
              "3. 웹 모바일(하이브리드앱) UI 최적화"
            ],
            guitar: "",
            link:
              "https://kimjihwan0618.github.io/pub_project/App/changepoint/splash",
            class: "none"
          };
        } else if (index === 4) {
          state.projectInfo = {
            title: "h.STORE",
            date: "2021.01 ~ 2021.04",
            info: "h.POS 소프트웨어를 통해 발생되는 데이터를 모니터링 할수있는 하이브리드앱",
            lang: "Js, Jquery, Ajax, Spring Boot",
            work: [
              "프론트엔드 업무 담당",
              "1. Spring boot Thymeleaf, Jquery 사용한 페이지 구현",
              "2. 백엔드 API 연동(ajax)",
              "3. 웹 모바일(하이브리드앱) UI 최적화"
            ],
            guitar: "",
            link:
              "https://kimjihwan0618.github.io/pub_project/App/h.STORE/login",
            class: "none"
          };
        }
        // else if (index === 4) {
        //   state.projectInfo = {
        //     title: "ONIONEV BATTERY CMS",
        //     date: "2021.03 ~ 2021.04",
        //     info: "웹디자인 & 퍼블리싱 일부 프론트엔드 기능 지원",
        //     lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
        //     work: ["퍼블리싱(100%)", "디자인(100%)"],
        //     guitar: ["1. 모바일을 제외한 태블릿까지 지원되는 사이즈입니다.", "2. 화면 View를 위해 더미데이터 사용"],
        //     link:
        //       "https://kimjihwan0618.github.io/pub_project/Web/onionev/dashboard",
        //     class: "pc"
        //   };
        // }
        // else if (index === 4) {
        //   state.projectInfo = {
        //     title: "h.WAVE",
        //     date: "2021.04 ~ 2021.06",
        //     info: "웹디자인 & Vue를 사용한 퍼블리싱 및 프런트엔드 기능 구현",
        //     lang: "Html, Css, Javascirpt, Vue",
        //     work: [
        //       "디자인(100%)",
        //       "퍼블리싱(100%)",
        //       "프론트엔드(30%)"
        //     ],
        //     guitar: ["Vue3와 Nuxt를 사용한 환경에 제작"],
        //     link: "https://www.hingomwave.com/",
        //     class: "none"
        //   };
        // } 
        else if (index === 3) {
          state.projectInfo = {
            title: "웹디자인 & 퍼블리싱 프로젝트",
            date: "2021.03 ~ 2021.08",
            info: "재직회사 홈페이지 UI디자인 & 퍼블리싱 제작",
            lang: "Html, Css, Javascirpt, Swiper.js, Naver Map API",
            work: [
              "1. 홈페이지 UI 디자인",
              "2. 웹 퍼블리싱",
            ],
            guitar: "",
            source: ["http://msi-emb.com", "https://www.hingomwave.com"],
            link: "http://msi-emb.com/",
            class: "none"
          };
        } else if (index === 2) {
          state.projectInfo = {
            title: "D-Cure Project",
            date: "2022.01 ~ 2022.08",
            info: "환자 앱(MIND STRONG, A-STOP) 상태를 진단 후,<br /> 디지털 치료제를 처방/관리하는 사용자(담당의) 페이지",
            lang: "Js, Vue, Vuex, Axios, Chartjs, AWS-SDK",
            work: [
              "프론트엔드 업무 담당",
              "1. Vue 사용해 UI 페이지 구현",
              "2. 백엔드 API 연동(axios, aws-sdk)",
              "3. 유저페이지 데이터 상태관리(vuex)",
              "4. 치료제 컨텐츠 페이지 개발"
            ],
            source: ["https://github.com/kimJiHwan0618/ubcure"],
            guitar: "",
            link: "https://kimjihwan0618.github.io/ubcure/",
            class: "pc"
          };
        }
        else if (index === 1) {
          state.projectInfo = {
            title: "AI-Tools",
            date: "2022.05 ~ 2022.12",
            info: "공정데이터 분석, 모니터링 시스템",
            lang: "SpringBoot, Java, Js, Jquery, Ajax, Python, Django, MariaDB, RabbitMQ, KendoUI, Highchart",
            work: [
              '1. SpringBoot 소스 Django 마이그레이션(쿼리속도개선)',
              '2. 백엔드 API 개발',
              '3. k-means 알고리즘을 사용한 데이터 분석로직 개발',
              "4. UI 화면개발(KendoUI)"
            ],
            guitar: "",
            link: "",
            class: "pc"
          };
        }
        else if (index === 0) {
          state.projectInfo = {
            title: "BSS-SERVER",
            date: "2022.12 ~ 2023.04",
            info: "전기배터리 충전소를 원격으로 관제/제어 가능한 관리자 페이지",
            lang: "Js, React, Redux, Axios, JWT, MetrialUI(MUI)",
            work: [
              "프론트엔드 업무 담당",
              "1. React 사용해 UI 페이지 구현(MetrialUI)",
              "2. 백엔드 API 연동(axios)",
              "3. 유저페이지 데이터 상태관리(Redux)"
            ],
            source: ["https://github.com/kimJiHwan0618/bss_server"],
            guitar: "",
            link: "https://kimjihwan0618.github.io/bss_server/dashboard",
            class: "none"
          };
        }
      }
    },
    actions: {},
    getters: {}
  });
};

export default store;
