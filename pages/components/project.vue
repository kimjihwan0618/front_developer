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
          img: require("@/assets/images/project/project11.jpg"),
          title: "BSS-SERVER",
          text: "전기배터리 충전소 원격관리 시스템",
        },
        {
          img: require("@/assets/images/project/project10.jpg"),
          title: "AI-Tools",
          text: "실시간 공정데이터 분석, 모니터링 시스템",
        },
        {
          img: require("@/assets/images/project/project9.png"),
          title: "D-Cure Project",
          text: "디지털 치료제 진단/처방 시스템",
        },
        {
          img: require("@/assets/images/project/project8.png"),
          title: "웹디자인 & 퍼블리싱 프로젝트",
          text: "재직 회사 홈페이지 제작",
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
        },
        {
          img: require("@/assets/images/project/project4.png"),
          title: "동전환전소",
          text: "외국 동전 & 지폐를 환전신청하는 온라인 서비스",
        },
        {
          img: require("@/assets/images/project/project2.png"),
          title: "SHFIT",
          text:
            "모바일 명함을 이용한 대면/비대면 인맥관리 서비스",
        },
        {
          img: require("@/assets/images/project/project1.png"),
          title: "웹 퍼블리싱 & 프론트엔드 개발 기초 교육수료",
          text:
            "교육에서 배운 내용을 바탕으로 최종 포트폴리오 제작",
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
