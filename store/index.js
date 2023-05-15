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
        if (index === 9) {
          state.projectInfo = {
            title: "웹/앱 퍼블리싱 & 프론트엔드 교육수료",
            date: "2020.01 ~ 2020.07",
            info: "웹&앱UI/UX디자인, 퍼블리싱 기초",
            lang: "Html, Css, Javascript, Vue",
            work: ["디자인(100%)", "퍼블리싱(100%)"],
            guitar: ["PC크기에 맞게 제작된 포트폴리오입니다."],
            link: "https://kimjihwan0618.github.io/pub_project/Web/portfolio",
            class: "pc"
          };
        } else if (index === 8) {
          state.projectInfo = {
            title: "SHIFT",
            date: "2020.07 ~ 2020.10",
            info: "'UI/UX 디자인 & 자사홈페이지 관리 & 배너, 카드뉴스 디자인",
            lang: "Html, Css, Design",
            work: [
              "(주)제제컴즈 홈페이지 관리",
              "'SHIFT'앱에 사용되는 명함 템플릿 디자인 및 퍼블리싱",
              "카드뉴스 & SNS 배너 디자인"
            ],
            guitar: ["웹 & 앱 디자이너로 재직."],
            link: "http://www.jejecomms.com/",
            class: "none"
          };
        } else if (index === 7) {
          state.projectInfo = {
            title: "동전환전소",
            date: "2020.11 ~ 2020.12",
            info: "앱 퍼블리싱 & Spring Boot 기능을 사용 일부 프론트엔드 기능 지원",
            lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
            work: [
              "퍼블리싱(100%)",
              "프론트엔드(30%)",
              "UI 라이브러리(Swiper.js)"
            ],
            guitar: ["1. PlayStore 출시", "2. 화면 View를 위해 더미데이터 사용", "3. 최초 배포된 디자인"],
            link:
              "https://kimjihwan0618.github.io/pub_project/App/changepoint/splash",
            class: "none"
          };
        } else if (index === 6) {
          state.projectInfo = {
            title: "h.STORE",
            date: "2021.01 ~ 2021.03",
            info: "앱디자인 및  퍼블리싱 & Spring Boot 기능을 사용 일부 프론트엔드 기능 지원",
            lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
            work: [
              "퍼블리싱(100%)",
              "디자인(100%)",
              "JS API 사용(Chart.js, datepicker.js)"
            ],
            guitar: ["1. PlayStore 출시", "2. 화면 View를 위해 더미데이터 사용"],
            link:
              "https://kimjihwan0618.github.io/pub_project/App/h.STORE/login",
            class: "none"
          };
        } else if (index === 5) {
          state.projectInfo = {
            title: "ONIONEV BATTERY CMS",
            date: "2021.03 ~ 2021.04",
            info: "웹디자인 & 퍼블리싱 일부 프론트엔드 기능 지원",
            lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
            work: ["퍼블리싱(100%)", "디자인(100%)"],
            guitar: ["1. 모바일을 제외한 태블릿까지 지원되는 사이즈입니다.", "2. 화면 View를 위해 더미데이터 사용"],
            link:
              "https://kimjihwan0618.github.io/pub_project/Web/onionev/dashboard",
            class: "pc"
          };
        } else if (index === 4) {
          state.projectInfo = {
            title: "h.WAVE",
            date: "2021.04 ~ 2021.06",
            info: "웹디자인 & Vue를 사용한 퍼블리싱 및 프런트엔드 기능 구현",
            lang: "Html, Css, Javascirpt, Vue",
            work: [
              "디자인(100%)",
              "퍼블리싱(100%)",
              "프론트엔드(30%)"
            ],
            guitar: ["Vue3와 Nuxt를 사용한 환경에 제작"],
            link: "https://www.hingomwave.com/",
            class: "none"
          };
        } else if (index === 3) {
          state.projectInfo = {
            title: "MSI",
            date: "2021.07 ~ 2021.08",
            info: "웹디자인과 & 퍼블리싱",
            lang: "Html, Css, Javascirpt",
            work: [
              "퍼블리싱(100%)",
              "디자인(100%)",
              "UI 라이브러리(Swiper.js)"
            ],
            guitar: "",
            link: "http://msi-emb.com/",
            class: "none"
          };
        } else if (index === 2) {
          state.projectInfo = {
            title: "UBI-PLUS 디지털 치료제",
            date: "2022.01 ~ 2022.08",
            info: "웹디자인 & 웹앱 반응형 퍼블리싱 및 프런트엔드 기능 구현",
            lang: "Html, Css, Javascript, Vue, Vuex, Npm",
            work: [
              "디자인(100%)",
              'Front-End(100%)',
              "UI 라이브러리(Chart.js, Grid.js, Canlandar.js ...)"
            ],
            guitar: ["1. 화면 View를 위해 더미데이터 사용"],
            link: "https://kimjihwan0618.github.io/ubcure/",
            class: "pc"
          };
        }
        else if (index === 1) {
          state.projectInfo = {
            title: "실시간 설비 데이터 모니터링/분석(FDC)",
            date: "2022.05 ~ 2022.12",
            info: "웹디자인, 퍼블리싱 & Front-End 및 Back-End 기능개발",
            lang: "Html, Css, Javascirpt, Python, Django, MySQL, RabbitMQ",
            work: [
              'Front-End(100%)',
              'Back-End(100%)',
              "UI 라이브러리(Kendo.js, Highcharts.js)"
            ],
            guitar: "",
            link: "",
            class: "pc"
          };
        }
        else if (index === 0) {
          state.projectInfo = {
            title: "BSS-SERVER",
            date: "2022.12 ~ ",
            info: "웹디자인, 웹앱 반응형 퍼블리싱 & 프런트엔드 기능 구현",
            lang: "Html, Css, Javascirpt, React, Redux, Npm",
            work: [
              '디자인(100%)',
              '퍼블리싱(100%)',
              'Front-End(80%)',
              "UI 라이브러리(gridjs, charts.js, calendar.js ...)"
            ],
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
