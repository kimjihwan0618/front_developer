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
          <p class="percent__txt"><span ref="percentTxt">90</span>&nbsp;%</p>
          <div class="percentbar">
            <div ref="percentbar"></div>
          </div>
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
          text: "기본적인 코딩표준을 준수한 HTML을 작성할수 있습니다.",
          percent: 90,
        },
        {
          title: "CSS",
          bigImg: require("@/assets/images/skill/big-css.svg"),
          smallImg: require("@/assets/images/skill/css.png"),
          text: "반응형에 대한 이해와 유지보수를 고려한 css를 작성할 수 있습니다.",
          percent: 90,
        },
        {
          title: "Jquery",
          bigImg: require("@/assets/images/skill/big-jquery.svg"),
          smallImg: require("@/assets/images/skill/jquery.png"),
          text: "다양한 플러그인과, 제이쿼리를 활용해 기본적인 Javascript 코드를 작성할 수 있습니다.",
          percent: 80,
        },
        {
          title: "JavaScript",
          bigImg: require("@/assets/images/skill/big-script.svg"),
          smallImg: require("@/assets/images/skill/script.png"),
          text: "순수 자바스크립트 만으로, 로직 구현이 가능합니다.",
          percent: 70,
        },
        {
          title: "Sass",
          bigImg: require("@/assets/images/skill/big-sass.svg"),
          smallImg: require("@/assets/images/skill/sass.png"),
          text: "변수를 활용해 중첩된 css 코드를 단축할 수 있습니다.",
          percent: 50,
        },
        {
          title: "Vue",
          bigImg: require("@/assets/images/skill/big-vue.svg"),
          smallImg: require("@/assets/images/skill/vue.png"),
          text: "Vue.js를 통한 프런트엔드 개발이 가능합니다.",
          percent: 70,
        },
        {
          title: "React",
          bigImg: require("@/assets/images/skill/big-react.svg"),
          smallImg: require("@/assets/images/skill/react.png"),
          text: "React.js를 통한 프런트엔드 개발이 가능합니다.",
          percent: 50,
        },
        {
          title: "Nuxt",
          bigImg: require("@/assets/images/skill/big-nuxt.svg"),
          smallImg: require("@/assets/images/skill/nuxt.png"),
          text: "Nuxt.js를 사용한 프런트엔드 개발이 가능합니다.",
          percent: 40,
        },
        {
          title: "Git",
          bigImg: require("@/assets/images/skill/big-git.svg"),
          smallImg: require("@/assets/images/skill/git.png"),
          text: "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60,
        },
        {
          title: "Xd",
          bigImg: require("@/assets/images/skill/big-xd.svg"),
          smallImg: require("@/assets/images/skill/xd.png"),
          text: "xd를 통해 간단한 아이콘, 페이지 UI 디자인이 가능합니다.",
          percent: 70,
        },
        {
          title: "Spring Boot",
          bigImg: require("@/assets/images/skill/big-spring.svg"),
          smallImg: require("@/assets/images/skill/spring.png"),
          text: "Spring Boot 프레임워크를 사용한 웹개발이 가능합니다.",
          percent: 70,
        },
        {
          title: "Java",
          bigImg: require("@/assets/images/skill/big-java.svg"),
          smallImg: require("@/assets/images/skill/java.png"),
          text: "Spring Boot 프레임워크를 사용한 경험으로 기본적인 Java 개발이 가능합니다",
          percent: 70,
        },
        {
          title: "Django",
          bigImg: require("@/assets/images/skill/big-django.svg"),
          smallImg: require("@/assets/images/skill/django.png"),
          text: "Django 프레임워크를 사용한 웹개발이 가능합니다.",
          percent: 60,
        },
        {
          title: "Python",
          bigImg: require("@/assets/images/skill/big-python.svg"),
          smallImg: require("@/assets/images/skill/python.png"),
          text: "Django 프레임워크를 사용한 경험으로 기본적인 Python 개발이 가능합니다",
          percent: 60,
        },
        {
          title: "Mysql",
          bigImg: require("@/assets/images/skill/big-sql.svg"),
          smallImg: require("@/assets/images/skill/sql.png"),
          text: "기본적인 Sql 사용법과 MariaDB를 사용한 웹 개발경험이 있습니다",
          percent: 50,
        },
      ],
    };
  },
  methods: {
    smallImgClick(index) {
      this.$refs.smallImg[this.clickIndex].classList.remove("on");
      this.$refs.smallImg[index].classList.add("on");
      this.$refs.bigImg[this.clickIndex].classList.remove("on");
      this.$refs.bigImg[index].classList.add("on");

      this.$refs.percentTxt.textContent = this.aboutSkill[index].percent;

      this.$refs.percentbar.style.width =
        String(this.aboutSkill[index].percent) + "%";
      this.clickIndex = index;
    },
  },
  mounted() {
    this.$refs.smallImg[0].classList.add("on");
    this.$refs.bigImg[0].classList.add("on");
  },
};
</script>
