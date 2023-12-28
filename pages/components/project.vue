<template>
  <section class="sub-section project">
    <div class="section-title" ref="test">
      <h3>PROJECT</h3>
    </div>
    <div class="project-wrap">
      <div class="project-item" v-for="(project, index) in projectArr" :key="project.title" ref="projectSection">
        <div class="left">
          <span class="img">
            <img :src="project.img" alt="" />
          </span>
        </div>
        <div class="right">
          <h4>{{ project.title }}</h4>
          <p class="text">{{ project.text }}</p>
          <ul>
            <li>
              <dl>
                <dt>프로젝트 기간</dt>
                <dd>{{ project.date }}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>소개</dt>
                <dd v-html="project.info"></dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>개발언어 / 라이브러리</dt>
                <dd>{{ project.skill }}</dd>
              </dl>
            </li>
            <li v-if="project.db">
              <dl>
                <dt>데이터베이스</dt>
                <dd>{{ project.db }}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>상세 업무</dt>
                <dd v-html="project.detail"></dd>
              </dl>
            </li>
          </ul>
          <!-- <span @click="projectDetail(index)">자세히보기 →</span> -->
        </div>
      </div>
      <!-- //project-item -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projectArr: [
        {
          img: require("@/assets/images/project/project11.jpg"),
          title: "MyPoPol",
          text: "포트폴리오 사이트 관리자 페이지",
          date: "2023.05 ~",
          info: "유저가 사용중인 포트폴리오 페이지를 관리할수있는 시스템",
          skill: "Js, React, Redux, Axios, MetrialUI(MUI), nodejs",
          db: "Maria",
          detail: "1. 사용자 페이지 기획 & 구현<br />"
            + "2. 백엔드 API 개발<br />"
            + "3. DB 구조 설계<br />"
            + '4. 서버 배포 & 운영관리 (Synology Nas)'
        },
        {
          img: require("@/assets/images/project/project11.jpg"),
          title: "DrimJUMP",
          text: "실시간 이상감지 시스템(FDC)",
          date: "2023.04 ~",
          info: "장비의 센서데이터 감지 & 모니터링 & 룰설정 & 알람발생",
          skill: "Js, React, Redux, Axios, MetrialUI(MUI), .jsp, struts",
          db: "Maria, Mongo",
          detail: '제품고도화 <br />'
            + "1. jsp 코드  react 코드로 마이그레이션 <br />"
            + "2. API 구조 리팩토링 <br />"
            + "유지보수 <br />"
            + '1. 고객사 장비 신규 생성시 알람룰 로직 개발 <br />'
            + '2. 배포 환경 사이트 버그 or 이슈 발생시 이슈처리'
        },
        {
          img: require("@/assets/images/project/project11.jpg"),
          title: "BSS-SERVER",
          text: "전기배터리 충전소 원격관리 시스템",
          date: "2022.12 ~ 2023.04",
          info: "전기배터리 충전소를 원격으로 관제/제어 가능한 관리자 페이지",
          skill: "Js, React, Redux, Axios, JWT, MetrialUI(MUI)",
          detail: "프론트엔드 업무 담당 <br />"
            + "1. Vue 사용해 UI 페이지 구현 <br />"
            + "2. 백엔드 API 연동(axios, aws-sdk) <br />"
            + "3. 유저페이지 데이터 상태관리(vuex) <br />"
            + "4. 치료제 컨텐츠 페이지 개발",
        },
        {
          img: require("@/assets/images/project/project10.jpg"),
          title: "AI-Tools",
          text: "실시간 공정데이터 분석, 모니터링 시스템",
          date: "2022.05 ~ 2022.12",
          db: "Maria, MsSql",
          info: "공정데이터 분석, 모니터링 시스템",
          skill: "SpringBoot, Java, Js, Jquery, Ajax, Python, Django, MariaDB, RabbitMQ, KendoUI, Highchart",
          detail: '1. SpringBoot 코드 Django 코드로 마이그레이션(쿼리속도개선) <br />'
            + '2. 백엔드 API 개발 <br />'
            + '3. k-means 알고리즘(Python) 사용한 데이터 분석로직 개발 <br />'
            + "4. UI 화면개발(KendoUI)",
        },
        {
          img: require("@/assets/images/project/project9.png"),
          title: "D-Cure Project",
          text: "디지털 치료제 진단/처방 시스템",
          date: "2022.01 ~ 2022.08",
          info: "환자 앱(MIND STRONG, A-STOP) 상태를 진단 후,<br /> 디지털 치료제를 처방/관리하는 사용자(담당의) 페이지",
          skill: "Js, Vue, Vuex, Axios, Chartjs, AWS-SDK",
          detail: "프론트엔드 업무 담당 <br />"
            + "1. Vue 사용해 UI 페이지 구현 <br />"
            + "2. 백엔드 API 연동(axios, aws-sdk) <br />"
            + "3. 유저페이지 데이터 상태관리(vuex) <br />"
            + "4. 치료제 컨텐츠 페이지 개발"
        },
        {
          img: require("@/assets/images/project/project8.png"),
          title: "웹디자인 & 퍼블리싱 프로젝트",
          text: "재직 회사 홈페이지 제작",
          date: "2021.03 ~ 2021.08",
          info: "재직회사 홈페이지 UI디자인 & 퍼블리싱 제작",
          skill: "Html, Css, Javascirpt, Swiper.js, Naver Map API",
          detail: "1. 홈페이지 UI 디자인 <br />"
            + "2. 웹 퍼블리싱"
        },
        // {
        //   img: require("@/assets/images/project/project7.png"),
        //   title: "h.WAVE",
        //   text: "(주)흰곰 회사 홈페이지 제작",
        // },
        // {
        //   img: require("@/assets/images/project/project6.png"),
        //   title: "ONIONEV BATTERY CMS",
        //   text: "전기오토바이 충전소를 상태관리하는 관리자페이지",
        // },
        {
          img: require("@/assets/images/project/project5.png"),
          title: "h.STORE",
          text: "h.POS 데이터 모니터링 앱",
          date: "2021.01 ~ 2021.04",
          info: "h.POS 소프트웨어를 통해 발생되는 데이터를 모니터링 할수있는 하이브리드앱",
          skill: "Js, Jquery, Ajax, Spring Boot",
          detail: "프론트엔드 업무 담당 <br />"
            + "1. Spring boot Thymeleaf, Jquery 사용한 페이지 구현 <br />"
            + "2. 백엔드 API 연동(ajax) <br />"
            + "3. 웹 모바일(하이브리드앱) UI 최적화"
        },
        {
          img: require("@/assets/images/project/project4.png"),
          title: "동전환전소",
          text: "외국 동전 & 지폐를 환전신청하는 온라인 서비스",
          date: "2020.11 ~ 2021.01",
          db: "MySql",
          info: "외국동전 & 지폐를 온라인으로 환전 신청 후, <br /> 가까운지점에서 환전된 돈을 찾아갈수 있는 서비스",
          skill: "Js, Jquery, Ajax, Spring Boot",
          detail: "프론트엔드 업무 담당 <br />"
            + "1. Spring boot Thymeleaf, Jquery 사용한 페이지 구현 <br />"
            + "2. 백엔드 API 연동(ajax) <br />"
            + "3. 웹 모바일(하이브리드앱) UI 최적화"
        },
        {
          img: require("@/assets/images/project/project2.png"),
          title: "SHFIT",
          text: "모바일 명함을 이용한 대면/비대면 인맥관리 서비스",
          date: "2020.07 ~ 2020.10",
          info: "(주)제제컴즈 웹디자이너 재직",
          skill: "Html, Css, Xd, 포토샵, 일러스트레이터",
          detail: "- (주)제제컴즈 홈페이지 관리 <br />"
            + "- 'SHIFT'앱 UI/UX 디자인 <br />"
            + "- 카드뉴스 & 페이지 템플릿 제작",
        },
        {
          img: require("@/assets/images/project/project1.png"),
          title: "웹 퍼블리싱 & 프론트엔드 개발 기초 교육수료",
          text: "교육에서 배운 내용을 바탕으로 최종 포트폴리오 제작",
          date: "2020.01 ~ 2020.07",
          info: "웹 퍼블리싱, UI/UX 디자인, 프론트엔드 개발 기초에 관한 교육 과정 수료",
          skill: "Html, Css, Js, Jquery, Vue, 포토샵, 일러스트레이터, XD",
          detail:
            "수강 내용<br />"
            + "- 디자인툴을 이용한 웹 UI/UX 디자인(XD, 포토샵, 일러스트레이터) <br />"
            + "- Vue.js 를 사용한 클론코딩 SPA 구조 <br />"
            + "- 기본 html, css, js 클론코딩"
        }
        // { img : require('@/assets/images/project/project3.png'), title : "찐 디자인", text : '(주)제제컴즈의 당시 프로젝트 추진중이였던 배달앱 UI/UX 디자인', tag : ['#UI/UX Design', '#App Design', '#UI/UX Design', '#웹 디자이너']},
      ]
    };
  },
  mounted() {
    this.$emit("project", this.$refs.projectSection);
  },
  methods: {
    projectDetail(index) {
      this.$emit("scrollDefault", "scrollDefault");
      this.$nuxt.$emit("projectClick", index);
      this.$store.commit("THIS_PROJECT", index);
    }
  }
};
</script>
