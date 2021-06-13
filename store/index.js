import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: {
      projectInfo: Object
    },
    mutations: {
      THIS_PROJECT(state, index) {
        if (index === 0) {
          state.projectInfo = {
            title: "컴퓨터학원 포트폴리오",
            date: "2020.06 ~ 2020.07",
            info: "웹&앱UI/UX디자인, 퍼블리싱 기초",
            lang: "Html, Css, Javascript, Vue",
            work: ["디자인(100%)", "퍼블리싱(100%)"],
            guitar: "PC크기에 맞게 제작된 포트폴리오입니다.",
            link: "https://kimjihwan0618.github.io/pub_project/Web/portfolio",
            class: "pc"
          };
        } else if (index === 1) {
          state.projectInfo = {
            title: "웹 & 앱 UI/UX 디자인",
            date: "2020.07 ~ 2020.10",
            info: "모바일명함 'SHIFT' UI/UX 디자인 및, 홈페이지 유지보수  ",
            lang: "Html, Css",
            work: [
              "(주)제제컴즈 홈페이지 관리",
              "'SHIFT'앱에 사용되는 템플릿 디자인 및 퍼블리싱",
              "카드뉴스 & SNS 배너 디자인"
            ],
            guitar: "웹&앱 디자이너로 재직.(디자인과 HTML, CSS까지 업무수행)",
            link: "http://www.jejecomms.com/",
            class: "none"
          };
        } else if (index === 2) {
          state.projectInfo = {
            title: "동전환전소",
            date: "2020.11 ~ 2020.12",
            info: "동전환전 서비스 '동전환전소' 퍼블리싱",
            lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
            work: [
              "퍼블리싱(100%)",
              "Spring Boot와 Javascript를 이용한 일부 프론트엔드 업무지원"
            ],
            guitar: "PlayStore 정식 출시",
            link:
              "https://kimjihwan0618.github.io/pub_project/App/changepoint/splash",
            class: "none"
          };
        } else if (index === 3) {
          state.projectInfo = {
            title: "h.STORE",
            date: "2021.01 ~ 2021.03",
            info: "POS에 저장된 데이터를 볼수있는 대시보드앱",
            lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
            work: [
              "퍼블리싱(100%)",
              "디자인(60%)",
              " javascript,juqery API 사용(Chart.js, datepicker)"
            ],
            guitar: "PlayStore 정식 출시",
            link:
              "https://kimjihwan0618.github.io/pub_project/App/h.STORE/login",
            class: "none"
          };
        } else if (index === 4) {
          state.projectInfo = {
            title: "ONIONEV BATTERY CMS",
            date: "2021.03 ~ 2021.04",
            info: "전기오토바이 충전소를 상태관리하는 관리자페이지",
            lang: "Html, Css, Jquery, Javascirpt, Spring Boot",
            work: ["퍼블리싱(100%)", "디자인(100%)"],
            guitar: "모바일을 제외한 태블릿까지 지원되는 사이즈입니다.",
            link:
              "https://kimjihwan0618.github.io/pub_project/Web/onionev/dashboard",
            class: "pc"
          };
        } else if (index === 5) {
          state.projectInfo = {
            title: "h.WAVE",
            date: "2021.04 ~ 2021.06",
            info: "(주)흰곰 회사 홈페이지 제작",
            lang: "Html, Css, Javascirpt, Vue",
            work: [
              "퍼블리싱(100%)",
              "디자인(100%)",
              " Vue를 사용한 프론트엔드 업무지원"
            ],
            guitar: "최신버전 Vue3와 Nuxt를 사용한 환경에 개발",
            link: "https://hingomwave.com/",
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
