<template>
  <section class="sub-section left">
    <div class="section-title">
      <h3>SKILL</h3>
    </div>
    <div class="section-sub-title">
      <h4>About Skill</h4>
      <div class="about-skill-box">
        <div class="left">
          <dl
            class="top"
            v-for="bigImg in aboutSkill"
            :key="bigImg.bigImg"
            ref="bigImg"
          >
            <dt class="big-img">
              <img :src="bigImg.bigImg" alt="" />
            </dt>
            <dd class="text">
              <dl>
                <dt>{{ bigImg.title }}</dt>
                <dd>{{ bigImg.text }}</dd>
              </dl>
            </dd>
          </dl>
          <div class="bottom">
            <span
              v-for="(smallImg, index) in aboutSkill"
              :key="smallImg.smallImg"
              @click="smallImgClick(index)"
              ref="smallImg"
            >
              <img :src="smallImg.smallImg" alt="" />
            </span>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/images/skill/bg.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clickIndex: 0,
      aboutSkill: [
        {
          title: "HTML",
          bigImg: require("@/assets/images/skill/big-html.svg"),
          smallImg: require("@/assets/images/skill/html.png"),
          text: "기본적인 코딩표준을 준수한 HTML을 작성할수 있습니다."
        },
        {
          title: "CSS",
          bigImg: require("@/assets/images/skill/big-css.svg"),
          smallImg: require("@/assets/images/skill/css.png"),
          text:
            "반응형에 대한 이해와 유지보수를 고려한 css를 작성할 수 있습니다."
        },
        {
          title: "Jquery",
          bigImg: require("@/assets/images/skill/big-jquery.svg"),
          smallImg: require("@/assets/images/skill/jquery.png"),
          text:
            "다양한 플러그인과, 제이쿼리를 활용해 기본적인 Javascript 코드를 작성할 수 있습니다."
        },
        {
          title: "JavaScript",
          bigImg: require("@/assets/images/skill/big-script.svg"),
          smallImg: require("@/assets/images/skill/script.png"),
          text: "순수 자바스크립트 만으로, 간단한 로직 구현이 가능합니다."
        },
        {
          title: "Sass",
          bigImg: require("@/assets/images/skill/big-sass.svg"),
          smallImg: require("@/assets/images/skill/sass.png"),
          text: "변수를 활용해 중첩된 코드를 단축할 수 있습니다."
        },
        {
          title: "Vue",
          bigImg: require("@/assets/images/skill/big-vue.svg"),
          smallImg: require("@/assets/images/skill/vue.png"),
          text: "최신버전(Vue 3)를 통한 프런트엔드 개발이 가능합니다."
        },
        {
          title: "Nuxt",
          bigImg: require("@/assets/images/skill/big-nuxt.svg"),
          smallImg: require("@/assets/images/skill/nuxt.png"),
          text: "Nuxt.js를 사용한 프런트엔드 개발이 가능합니다."
        },
        {
          title: "Git",
          bigImg: require("@/assets/images/skill/big-git.svg"),
          smallImg: require("@/assets/images/skill/git.png"),
          text:
            "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, pull-request)"
        },
        {
          title: "Xd",
          bigImg: require("@/assets/images/skill/big-xd.svg"),
          smallImg: require("@/assets/images/skill/xd.png"),
          text: "xd를 통해 간단한 아이콘, 페이지 디자인이 가능합니다."
        },
        {
          title: "Spring",
          bigImg: require("@/assets/images/skill/big-spring.svg"),
          smallImg: require("@/assets/images/skill/spring.png"),
          text:
            "spring boot 프로젝트에서 tymeleaf를 통한 프런트 개발이 가능합니다."
        }
      ]
    };
  },
  methods: {
    smallImgClick(index) {
      this.$refs.smallImg[this.clickIndex].classList.remove("on");
      this.$refs.smallImg[index].classList.add("on");
      this.$refs.bigImg[this.clickIndex].classList.remove("on");
      this.$refs.bigImg[index].classList.add("on");
      this.clickIndex = index;
    }
  },
  mounted() {
    this.$refs.smallImg[0].classList.add("on");
    this.$refs.bigImg[0].classList.add("on");
  }
};
</script>
