<template>
  <div>
    <div class="container">
      <main>
        <MainSection ref="section1" />
        <SubSection1 ref="section2" />
        <SubSection2 ref="section3" />
        <SubSection3 ref="section4" />
        <Project v-on:project="project" ref="section5" />
        <Contact ref="section6" />
      </main>
    </div>
    <ProjectDetail ref="ProjectPopDiv" />
  </div>
</template>

<script>
import MainSection from "./components/main-section";
import SubSection1 from "./components/sub-section1";
import SubSection2 from "./components/sub-section2";
import SubSection3 from "./components/sub-section3";
import Project from "./components/project";
import ProjectDetail from "./components/project-detail";
import Contact from "./components/contact";

export default {
  components: {
    MainSection,
    SubSection1,
    SubSection2,
    SubSection3,
    Project,
    ProjectDetail,
    Contact
  },
  data() {
    return {
      projectArray: [],
      sectionArray: [],
      navLink: [
        "?section=home",
        "?section=aboutme",
        "?section=career",
        "?section=skill",
        "?section=project",
        "?section=contact"
      ],
      scrollY: 0
    };
  },
  created() {
    this.$nuxt.$on("clickNav", index => {
      this.setSectionSize();

      window.scrollTo({
        top: this.sectionArray[index].offsetTop - 120
      });
    });
  },
  methods: {
    setSectionSize() {
      this.sectionArray = [
        this.$refs.section1.$el,
        this.$refs.section2.$el,
        this.$refs.section3.$el,
        this.$refs.section4.$el,
        this.$refs.section5.$el,
        this.$refs.section6.$el
      ];
    },
    mainScroll() {
      this.projectArray.map(projectEl => {
        if (projectEl.offsetTop - 500 < window.scrollY) {
          projectEl.classList.add("on");
        } else {
          projectEl.classList.remove("on");
        }
      });
      for (let i = 0; i < this.sectionArray.length; i++) {
        if (this.sectionArray[i].offsetTop - 120 < window.scrollY) {
          if (this.scrollY < i) {
            this.scrollY = i;
            console.log("내려갈때 인덱스증가 >>" + i);
            this.$nuxt.$router.push(this.navLink[i]);
          }
        } else {
          if (window.scrollY === 0) {
            this.scrollY = 0;
            this.$nuxt.$router.push(this.navLink[0]);
          }
          if (this.scrollY > i) {
            this.scrollY = i;
            console.log("올라갈때 인덱스감소 >>" + i);
            this.$nuxt.$router.push(this.navLink[i]);
          }
        }
      }
    },
    project(e) {
      this.projectArray = e;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.mainScroll);
    window.addEventListener("resize", this.setSectionSize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.mainScroll);
  },
  mounted() {
    this.setSectionSize();
  }
};
</script>
