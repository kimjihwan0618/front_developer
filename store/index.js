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
            guitar: "웹&앱 디자이너로 재직.",
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
              "프론트엔드(30%)",
              "JS API 사용(Swiper.js)"
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
              "디자인(100%)",
              "JS API 사용(Chart.js, datepicker.js)"
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
              "디자인(100%)"
            ],
            guitar: "Vue3와 Nuxt를 사용한 환경에 제작",
            link: "https://www.hingomwave.com/",
            class: "none"
          };
        } else if (index === 6) {
          state.projectInfo = {
            title: "MSI",
            date: "2021.07 ~ 2021.08",
            info: "(주)엠에쓰아이 회사  홈페이지 제작",
            lang: "Html, Css, Javascirpt",
            work: [
              "퍼블리싱(100%)",
              "디자인(100%)",
              "JS API 사용(Swiper.js)"
            ],
            guitar: "",
            link: "http://msi-emb.com/",
            class: "none"
          };
        } else if (index === 7) {
          state.projectInfo = {
            title: "UBI-PLUS 디지털 치료제",
            date: "2022.01 ~ 2022.08",
            info: "디지털 치료제 관리자(의사) 페이지 제작",
            lang: "Html, Css, Javascript, Vue",
            work: [
              "퍼블리싱(100%)",
              "디자인(100%)",
              'Front-End(100%)',
              "JS API 사용(Chart.js, Grid.js, Canlandar.js)"
            ],
            guitar: "화면뷰를 위해 개발하였던 UI를 가져와 더미데이터로 표현하였습니다.",
            link: "https://kimajksldq.github.io/ubcure/",
            class: "pc"
          };
        }
        else if (index === 8) {
          state.projectInfo = {
            title: "실시간 설비 데이터 모니터링/분석(FDC)",
            date: "2022.05 ~ 2022.12",
            info: "실시간 이상감지 시스템 Front-End 및 Back-End 기능개발",
            lang: "Html, Css, Javascirpt, Python, MySQL, RabbitMQ",
            work: [
              'Front-End(100%)',
              'Back-End(100%)',
              "JS API 사용(Kendo.js, Highcharts.js)"
            ],
            guitar: "화면뷰를 위해 개발하였던 UI를 가져와 더미데이터로 표현하였습니다.",
            link: "",
            class: "pc"
          };
        }
      }
    },
    actions: {},
    getters: {}
  });
};

export default store;
