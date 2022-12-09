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
          title: "컴퓨터학원 포트폴리오",
          text: "웹, 앱, UI/UX디자인, 퍼블리싱 교육과정에서 배운 전체내용을 바탕으로 포트폴리오 제작",
          tag: [
            "#Web Standard",
            "#Responsive",
            "#UI/UX Design",
            "#Web Renewal Design",
          ],
        },
        {
          img: require("@/assets/images/project/project2.png"),
          title: "웹 & 앱 UI/UX 디자인",
          text: "(주)제제컴즈의 주 사업인 모바일명함 SHIFT를 UI/UX 디자인 및 자사 홈페이지 관리",
          tag: ["#UI/UX Design", "#SNS배너 다자인", "#웹 디자이너"],
        },
        // { img : require('@/assets/images/project/project3.png'), title : "찐 디자인", text : '(주)제제컴즈의 당시 프로젝트 추진중이였던 배달앱 UI/UX 디자인', tag : ['#UI/UX Design', '#App Design', '#UI/UX Design', '#웹 디자이너']},
        {
          img: require("@/assets/images/project/project4.png"),
          title: "동전환전소",
          text: "하이브리드앱 퍼블리싱, Spring Boot 기능을 사용 일부 프론트엔드 기능 지원",
          tag: [
            "#하이브리드 앱",
            "#Front-end",
            "#Publishing",
            "#Spring Boot",
            "#환전앱",
            "#Swiper",
          ],
        },
        {
          img: require("@/assets/images/project/project5.png"),
          title: "h.STORE",
          text: "하이브리드앱 퍼블리싱, Spring Boot 기능을 사용하여, 일부 프론트엔드 기능 지원",
          tag: [
            "#하이브리드 앱",
            "#Front-end",
            "#Publishing",
            "#Spring Boot",
            "#매출조회앱",
            "#Canlander",
          ],
        },
        {
          img: require("@/assets/images/project/project6.png"),
          title: "ONIONEV BATTERY CMS",
          text: "전기오토바이 바떼리 충전 대시보드(관리자페이지) 프로젝트 퍼블리싱, 디자인",
          tag: ["#Wep Design", "#Publishing", "#Dashboard"],
        },
        {
          img: require("@/assets/images/project/project7.png"),
          title: "h.WAVE",
          text: "웹디자인과 Vue 3 를 사용한 웹앱 퍼블리싱 및 프런트엔드 기능 구현",
          tag: [
            "#Vue.js",
            "#Nuxt.js",
            "#웹디자인",
            "#Publishing",
            "#Front-End",
            "#반응형",
          ],
        },
        {
          img: require("@/assets/images/project/project7.png"),
          title: "MSI",
          text: "웹디자인과 앱 반응형 퍼블리싱",
          tag: ["#반응형", "#웹디자인", "#Publishing", "#Swiper"],
        },
        {
          img: require("@/assets/images/project/project7.png"),
          title: "UBI-PLUS 디지털 치료제",
          text: "웹디자인, 웹앱 반응형 퍼블리싱 및 프런트엔드 기능 구현",
          tag: [
            "#웹디자인",
            "#Publishing",
            "#Front-End",
            "#Grid.js",
            "#Chart.js",
            "#Drag & Drop",
          ],
        },
      ],
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
    },
  },
};
</script>
