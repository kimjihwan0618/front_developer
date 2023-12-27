<template>
  <section class="sub-section left">
    <div class="section-title">
      <h3>ABOUT ME</h3>
    </div>
    <div class="section-sub-title">
      <h4>About Me</h4>
      <ul>
        <li v-for="imgList in aboutMe" :key="imgList.img" ref="circleIndex"></li>
        <span ref="circleMove"></span>
      </ul>
    </div>
    <div class="about-me-box about-box">
      <div class="left">
        <img v-for="imgList in aboutMe" :key="imgList.img" :src="imgList.img" ref="aboutImg" alt="" />
      </div>
      <div class="right">
        <div class="slide-list">
          <h5 class="title">
            <span class="text" ref="aboutMeTitle">{{
              aboutMe[aboutMeIndex].title
            }}</span>
            <span class="num" ref="aboutMeNum">{{
              aboutMe[aboutMeIndex].number
            }}</span>
          </h5>
          <p class="txt" ref="aboutMeTxt" v-html="aboutMe[aboutMeIndex].text"></p>
        </div>
        <div class="slide-btn">
          <span class="arrow-left" @click="arrowLeft">
            <svg id="그룹_264" data-name="그룹 264" xmlns="http://www.w3.org/2000/svg" width="43" height="43"
              viewBox="0 0 43 43">
              <g id="타원_129" data-name="타원 129" transform="translate(0)" fill="#fff" stroke="#E4E8EE" stroke-width="1">
                <circle cx="21.5" cy="21.5" r="21.5" stroke="none" />
                <circle cx="21.5" cy="21.5" r="21" fill="none" />
              </g>
              <path id="합치기_23" data-name="합치기 23"
                d="M8.1,18.68.83,11.4A1.622,1.622,0,0,1,.4,10.649a1.63,1.63,0,0,1,.464-2.51,1.629,1.629,0,0,1,.287-.387L8.426.477a1.629,1.629,0,0,1,2.3,2.3L5.563,7.949H21.491a1.629,1.629,0,0,1,0,3.258H5.24l5.168,5.169a1.629,1.629,0,1,1-2.3,2.3Z"
                transform="translate(9.912 11.746)" fill="#E4E8EE" />
            </svg>
          </span>
          <span class="arrow-right" @click="arrowRight">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
              <g id="그룹_265" data-name="그룹 265" transform="translate(43 42.963) rotate(180)">
                <g id="타원_129" data-name="타원 129" transform="translate(0 -0.037)" fill="#fff" stroke="#E4E8EE"
                  stroke-width="1">
                  <circle cx="21.5" cy="21.5" r="21.5" stroke="none" />
                  <circle cx="21.5" cy="21.5" r="21" fill="none" />
                </g>
                <path id="합치기_23" data-name="합치기 23"
                  d="M8.1,18.68.83,11.4A1.622,1.622,0,0,1,.4,10.649a1.63,1.63,0,0,1,.464-2.51,1.629,1.629,0,0,1,.287-.387L8.426.477a1.629,1.629,0,0,1,2.3,2.3L5.563,7.949H21.491a1.629,1.629,0,0,1,0,3.258H5.24l5.168,5.169a1.629,1.629,0,1,1-2.3,2.3Z"
                  transform="translate(9.764 12.111)" fill="#E4E8EE" />
              </g>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: [
        {
          title: "UI Developer",
          number: "01",
          text: "- 프론트엔드 업무 경험으로 백엔드 개발시, 프론트 개발자와의 소통에 용이 <br /> "
            + "- UI 디자인 -> 페이지 구현 업무 프로세스 경험 多 <br />"
            + "- UI 라이브러리 경험(HighChart, MetrialUI, KendoUI, ChartJs, etc)",
          img: require("@/assets/images/about/me1.png")
        },
        {
          title: "Back-End Developer",
          number: "02",
          text:
            "- 백엔드 프레임워크 개발경험(Django, SpringBoot, Struts) <br />"
            + "- 주 업무(REST API 개발, 마이그레이션, 운영 서버 관리 & 유지보수)<br />"
            + "- VM & Docker를 통한 테스트 & 배포환경 구축",
          img: require("@/assets/images/about/me2.png")
        },
        {
          title: "My Character",
          number: "03",
          text:
            "- 모르는 부분에 대해서는 서슴없이 동료, 선배들에게 질문해서 업무에 적용할수있도록 합니다. <br />"
            + "- 새로 알게된 지식을 업무에 적용 & 개선하는 과정에서 성취감을 느낍니다.",
          img: require("@/assets/images/about/me3.jpg")
        }
      ],
      aboutMeIndex: 0
    };
  },
  methods: {
    arrowLeft() {
      if (this.aboutMeIndex == 0) {
        this.aboutMeIndex = this.aboutMe.length;
      }
      this.aboutMeIndex--;
      this.aboutMeSwipe();
    },
    arrowRight() {
      if (this.aboutMeIndex == this.aboutMe.length - 1) {
        this.aboutMeIndex = -1;
      }
      this.aboutMeIndex++;
      this.aboutMeSwipe();
    },
    aboutMeSwipe() {
      for (let remove = 0; remove < this.aboutMe.length; remove++) {
        this.$refs.aboutImg[remove].classList.remove("on");
      }

      this.$refs.aboutImg[this.aboutMeIndex].classList.add("on");
      this.$refs.circleMove.style.left = this.aboutMeIndex * 2 * 10 + "px";
    }
  },
  mounted() {
    this.$refs.aboutImg[this.aboutMeIndex].classList.add("on");
  }
};
</script>
