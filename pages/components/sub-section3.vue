<template>
  <section class="sub-section left">
    <div class="section-title">
      <h3>SKILL</h3>
    </div>
    <div class="section-sub-title">
      <h4>About Skill</h4>
      <div class="about-skill-box">
        <div class="left">
          <dl class="top" v-for="bigImg in aboutSkill" v-bind:class="{ 'on': bigImg.title === activeSkill }"
            :key="bigImg.bigImg" ref="bigImg">
            <dt class="big-img">
              <img :src="bigImg.bigImg" alt="" />
            </dt>
            <dd class="text">
              <dl>
                <dt>{{ bigImg.title }}</dt>
                <!-- <dd>{{ bigImg.text }}</dd> -->
              </dl>
            </dd>
          </dl>
          <!-- <p class="percent__txt"><span ref="percentTxt">90</span>&nbsp;%</p>
          <div class="percentbar">
            <div ref="percentbar"></div>
          </div> -->
          <div class="bottom">
            <span v-for="(smallImg, index) in aboutSkill" v-if="smallImg.category === activeTitle"
              v-bind:class="{ 'on': smallImg.title === activeSkill }" :key="smallImg.smallImg"
              @click="smallImgClick(smallImg.title)" ref="smallImg">
              <img :src="smallImg.smallImg" alt="" />
            </span>
          </div>
        </div>
        <div class="right">
          <div v-for="title in skillTitle" :key="title" v-bind:class="{ 'on': title === activeTitle }"
            @click="titleClick(title)">
            {{ title }}
          </div>
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
      skillTitle: ['Front-End', 'Back-End', 'Etc'],
      activeTitle: "Front-End",
      activeSkill: "HTML",
      aboutSkill: [
        {
          category: "Front-End",
          title: "HTML",
          bigImg: require("@/assets/images/skill/big-html.svg"),
          smallImg: require("@/assets/images/skill/html.png"),
          // text: "코딩표준을 준수한 HTML을 작성할수 있습니다.",
          percent: 90
        },
        {
          category: "Front-End",
          title: "CSS",
          bigImg: require("@/assets/images/skill/big-css.svg"),
          smallImg: require("@/assets/images/skill/css.png"),
          // text:          "반응형에 대한 이해와 유지보수를 고려한 css를 작성할 수 있습니다.",
          percent: 90
        },
        {
          category: "Front-End",
          title: "JavaScript",
          bigImg: require("@/assets/images/skill/big-script.svg"),
          smallImg: require("@/assets/images/skill/script.png"),
          // text: "순수 자바스크립트 만으로, 로직 구현이 가능합니다.",
          percent: 70
        },
        {
          category: "Front-End",
          title: "Jquery",
          bigImg: require("@/assets/images/skill/big-jquery.svg"),
          smallImg: require("@/assets/images/skill/jquery.png"),
          // text:          "다양한 플러그인과, 제이쿼리를 활용해 Javascript 코드를 작성할 수 있습니다.",
          percent: 80
        },
        {
          category: "Front-End",
          title: "React",
          bigImg: require("@/assets/images/skill/big-react.svg"),
          smallImg: require("@/assets/images/skill/react.png"),
          // text: "React.js를 통한 프런트엔드 개발이 가능합니다.",
          percent: 70
        },
        {
          category: "Front-End",
          title: "Redux",
          bigImg: require("@/assets/images/skill/big-redux.svg"),
          smallImg: require("@/assets/images/skill/redux.png"),
          // text: "Redux를 통한 프런트엔드 개발이 가능합니다.",
          percent: 70
        },
        {
          category: "Front-End",
          title: "Vue",
          bigImg: require("@/assets/images/skill/big-vue.svg"),
          smallImg: require("@/assets/images/skill/vue.png"),
          // text: "Vue.js를 통한 프런트엔드 개발이 가능합니다.",
          percent: 80
        },
        {
          category: "Front-End",
          title: "Vuex",
          bigImg: require("@/assets/images/skill/vuex.png"),
          smallImg: require("@/assets/images/skill/vuex.png"),
          // text: "Vue.js를 통한 프런트엔드 개발이 가능합니다.",
          percent: 80
        },
        {
          category: "Front-End",
          title: "JSP",
          bigImg: require("@/assets/images/skill/jsp.png"),
          smallImg: require("@/assets/images/skill/jsp.png"),
          // text: "Vue.js를 통한 프런트엔드 개발이 가능합니다.",
          percent: 80
        },
        {
          category: "Front-End",
          title: "Figma",
          bigImg: require("@/assets/images/skill/figma.png"),
          smallImg: require("@/assets/images/skill/figma.png"),
          // text: "코딩표준을 준수한 HTML을 작성할수 있습니다.",
          percent: 90
        },
        {
          category: "Front-End",
          title: "Xd",
          bigImg: require("@/assets/images/skill/big-xd.svg"),
          smallImg: require("@/assets/images/skill/xd.png"),
          // text: "xd를 통해 간단한 아이콘, 페이지 UI 디자인이 가능합니다.",
          percent: 70
        },
        {
          category: "Back-End",
          title: "Spring Boot",
          bigImg: require("@/assets/images/skill/big-spring.svg"),
          smallImg: require("@/assets/images/skill/spring.png"),
          // text: "Spring Boot 프레임워크를 사용한 웹개발이 가능합니다.",
          percent: 70
        },
        {
          category: "Back-End",
          title: "Java",
          bigImg: require("@/assets/images/skill/big-java.svg"),
          smallImg: require("@/assets/images/skill/java.png"),
          // text:          "Spring Boot 프레임워크를 사용한 경험으로 Java 개발이 가능합니다",
          percent: 70
        },
        {
          category: "Back-End",
          title: "Django",
          bigImg: require("@/assets/images/skill/big-django.svg"),
          smallImg: require("@/assets/images/skill/django.png"),
          // text: "Django 프레임워크를 사용한 웹개발이 가능합니다.",
          percent: 60
        },
        {
          category: "Back-End",
          title: "Python",
          bigImg: require("@/assets/images/skill/big-python.svg"),
          smallImg: require("@/assets/images/skill/python.png"),
          // text: "Django 프레임워크를 사용한 경험으로 Python 개발이 가능합니다",
          percent: 60
        },
        {
          category: "Back-End",
          title: "MS-SQL",
          bigImg: require("@/assets/images/skill/mssql.png"),
          smallImg: require("@/assets/images/skill/mssql.png"),
          // text: "Django 프레임워크를 사용한 경험으로 Python 개발이 가능합니다",
          percent: 60
        },
        {
          category: "Back-End",
          title: "MariaDB",
          bigImg: require("@/assets/images/skill/maria.jpg"),
          smallImg: require("@/assets/images/skill/maria.jpg"),
          // text: "MariaDB를 사용한 웹 개발이 가능합니다",
          percent: 50
        },
        {
          category: "Back-End",
          title: "MongoDB",
          bigImg: require("@/assets/images/skill/mongo.png"),
          smallImg: require("@/assets/images/skill/mongo.png"),
          // text: "MariaDB를 사용한 웹 개발이 가능합니다",
          percent: 50
        },
        {
          category: "Back-End",
          title: "NodeJS",
          bigImg: require("@/assets/images/skill/nodejs.png"),
          smallImg: require("@/assets/images/skill/nodejs.png"),
          // text: "MariaDB를 사용한 웹 개발이 가능합니다",
          percent: 50
        },
        {
          category: "Back-End",
          title: "Structs",
          bigImg: require("@/assets/images/skill/structs.png"),
          smallImg: require("@/assets/images/skill/structs.png"),
          // text: "MariaDB를 사용한 웹 개발이 가능합니다",
          percent: 50
        },
        {
          category: "Etc",
          title: "Git",
          bigImg: require("@/assets/images/skill/big-git.svg"),
          smallImg: require("@/assets/images/skill/git.png"),
          // text:          "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60
        },
        {
          category: "Etc",
          title: "SVN",
          bigImg: require("@/assets/images/skill/svn.png"),
          smallImg: require("@/assets/images/skill/svn.png"),
          // text:          "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60
        },
        {
          category: "Etc",
          title: "Docker",
          bigImg: require("@/assets/images/skill/docker.png"),
          smallImg: require("@/assets/images/skill/docker.png"),
          // text:          "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60
        },
        {
          category: "Etc",
          title: "Linux",
          bigImg: require("@/assets/images/skill/linux.png"),
          smallImg: require("@/assets/images/skill/linux.png"),
          // text:          "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60
        },
        {
          category: "Etc",
          title: "Nginx",
          bigImg: require("@/assets/images/skill/nginx.png"),
          smallImg: require("@/assets/images/skill/nginx.png"),
          // text:          "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60
        },
        {
          category: "Etc",
          title: "Apache Tomcat",
          bigImg: require("@/assets/images/skill/apache.png"),
          smallImg: require("@/assets/images/skill/apache.png"),
          // text:          "git을 통한 프로젝트 관리가 가능합니다.(pull, commit, push, merge, pull-request)",
          percent: 60
        },
      ]
    };
  },
  methods: {
    titleClick(param) {
      this.activeTitle = param
      switch (param) {
        case "Front-End":
          this.activeSkill = "HTML";
          break;
        case "Back-End":
          this.activeSkill = "Spring Boot";
          break;
        case "Etc":
          this.activeSkill = "Git";
          break;
      }
    },
    smallImgClick(param) {
      this.activeSkill = param
    }
  },
  mounted() {
    this.$refs.smallImg[0].classList.add("on");
    this.$refs.bigImg[0].classList.add("on");
  }
};
</script>
