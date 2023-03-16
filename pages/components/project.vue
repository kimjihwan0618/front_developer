<template>
  <section class="sub-section project">
    <div class="section-title" ref="test">
      <h3>PROJECT</h3>
    </div>
    <div class="project-wrap">
      <div
        class="project-item"
        v-for="(project, index) in projectArr"
        :key="project.title"
        ref="projectSection"
      >
        <div class="left">
          <span class="img" @click="projectDetail(index)">
            <img :src="project.img" alt="" />
          </span>
          <ul class="tab-list">
            <li v-for="taglist in project.tag" :key="taglist.tag">
              {{ taglist }}
            </li>
          </ul>
        </div>
        <div class="right">
          <h4>{{ project.title }}</h4>
          <p class="text">{{ project.text }}</p>
          <span @click="projectDetail(index)">자세히보기 →</span>
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
          img: require("@/assets/images/project/project1.png"),
          title: "웹/앱 퍼블리싱 & 프론트엔드 교육수료",
          text:
            "웹, 앱, UI/UX디자인, 퍼블리싱, 프론트엔드 교육과정에서 배운 전체내용을 바탕으로 포트폴리오 제작",
          tag: [
            "#Web Standard",
            "#Responsive",
            "#UI/UX Design",
            "#Web Renewal Design"
          ]
        },
        {
          img: require("@/assets/images/project/project2.png"),
          title: "SHFIT",
          text:
            "모바일 명함을 이용한 대면/비대면 글로벌인맥형성관리 통합플랫폼서비스",
          tag: ["#UI/UX Design", "#SNS배너 다자인", "#웹 디자이너"]
        },
        // { img : require('@/assets/images/project/project3.png'), title : "찐 디자인", text : '(주)제제컴즈의 당시 프로젝트 추진중이였던 배달앱 UI/UX 디자인', tag : ['#UI/UX Design', '#App Design', '#UI/UX Design', '#웹 디자이너']},
        {
          img: require("@/assets/images/project/project4.png"),
          title: "동전환전소",
          text: "외국 동전 지폐를 간편하게 환전할 수 있는 동전환전소 서비스",
          tag: [
            "#하이브리드 앱",
            "#Front-end",
            "#Publishing",
            "#Spring Boot",
            "#환전서비스",
            "#Swiper"
          ]
        },
        {
          img: require("@/assets/images/project/project5.png"),
          title: "h.STORE",
          text: "POS에 저장된 데이터를 볼수있는 대시보드앱",
          tag: [
            "#하이브리드 앱",
            "#Front-end",
            "#Publishing",
            "#Spring Boot",
            "#POS 데이터 조회"
          ]
        },
        {
          img: require("@/assets/images/project/project6.png"),
          title: "ONIONEV BATTERY CMS",
          text: "전기오토바이 충전소를 상태관리하는 관리자페이지",
          tag: ["#Web Design", "#Publishing", "#Dashboard"]
        },
        {
          img: require("@/assets/images/project/project7.png"),
          title: "h.WAVE",
          text: "(주)흰곰 회사 홈페이지 제작",
          tag: [
            "#Vue.js",
            "#Nuxt.js",
            "#웹디자인",
            "#Publishing",
            "#Front-End",
            "#반응형"
          ]
        },
        {
          img: require("@/assets/images/project/project8.png"),
          title: "MSI",
          text: "(주)엠에쓰아이 회사  홈페이지 제작",
          tag: ["#반응형", "#웹디자인", "#Publishing", "#Swiper"]
        },
        {
          img: require("@/assets/images/project/project9.png"),
          title: "UBI-PLUS 디지털 치료제",
          text: "디지털 치료제 환자(앱) 상태를 관리하는 관리자페이지 개발",
          tag: ["#웹디자인", "#퍼블리싱", "#Front-End", "Vue", "Vuex"]
        },
        {
          img: require("@/assets/images/project/project10.jpg"),
          title: "실시간 설비 데이터 모니터링/분석(FDC)",
          text: "실시간 설비 공정데이터 진단, 모니터링 화면 개발",
          tag: [
            "#Front-End",
            "#Back-End",
            "#Rabbitmq",
            "#Python",
            "#Django",
            "MariaDB"
          ]
        },
        {
          img: require("@/assets/images/project/project11.jpg"),
          title: "BSS-SERVER",
          text: "배터리 스테이션 원격 관리 시스템 프론트엔드 개발",
          tag: [
            "#React",
            "#Redux",
            "#웹디자인",
            "#Publishing",
            "#Front-End",
            "#반응형"
          ]
        }
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
