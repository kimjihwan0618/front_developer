<template>
  <section class="sub-section left">
    <div class="section-title">
      <h3>ABOUT ME</h3>
    </div>
    <div class="section-sub-title">
      <h4>About Me</h4>
      <ul>
        <li
          v-for="imgList in aboutMe"
          :key="imgList.img"
          ref="circleIndex"
        ></li>
        <span ref="circleMove"></span>
      </ul>
    </div>
    <div class="about-me-box about-box">
      <div class="left">
        <img
          v-for="imgList in aboutMe"
          :key="imgList.img"
          :src="imgList.img"
          ref="aboutImg"
          alt=""
        />
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
          <p class="txt" ref="aboutMeTxt">{{ aboutMe[aboutMeIndex].text }}</p>
        </div>
        <div class="slide-btn">
          <span class="arrow-left" @click="arrowLeft">
            <svg
              id="그룹_264"
              data-name="그룹 264"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <g
                id="타원_129"
                data-name="타원 129"
                transform="translate(0)"
                fill="#fff"
                stroke="#e3e4f8"
                stroke-width="1"
              >
                <circle cx="21.5" cy="21.5" r="21.5" stroke="none" />
                <circle cx="21.5" cy="21.5" r="21" fill="none" />
              </g>
              <path
                id="합치기_23"
                data-name="합치기 23"
                d="M8.1,18.68.83,11.4A1.622,1.622,0,0,1,.4,10.649a1.63,1.63,0,0,1,.464-2.51,1.629,1.629,0,0,1,.287-.387L8.426.477a1.629,1.629,0,0,1,2.3,2.3L5.563,7.949H21.491a1.629,1.629,0,0,1,0,3.258H5.24l5.168,5.169a1.629,1.629,0,1,1-2.3,2.3Z"
                transform="translate(9.912 11.746)"
                fill="#ced0ee"
              />
            </svg>
          </span>
          <span class="arrow-right" @click="arrowRight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <g
                id="그룹_265"
                data-name="그룹 265"
                transform="translate(43 42.963) rotate(180)"
              >
                <g
                  id="타원_129"
                  data-name="타원 129"
                  transform="translate(0 -0.037)"
                  fill="#fff"
                  stroke="#e3e4f8"
                  stroke-width="1"
                >
                  <circle cx="21.5" cy="21.5" r="21.5" stroke="none" />
                  <circle cx="21.5" cy="21.5" r="21" fill="none" />
                </g>
                <path
                  id="합치기_23"
                  data-name="합치기 23"
                  d="M8.1,18.68.83,11.4A1.622,1.622,0,0,1,.4,10.649a1.63,1.63,0,0,1,.464-2.51,1.629,1.629,0,0,1,.287-.387L8.426.477a1.629,1.629,0,0,1,2.3,2.3L5.563,7.949H21.491a1.629,1.629,0,0,1,0,3.258H5.24l5.168,5.169a1.629,1.629,0,1,1-2.3,2.3Z"
                  transform="translate(9.764 12.111)"
                  fill="#ced0ee"
                />
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
          title: "UI Development",
          number: "01",
          text:
            "웹 퍼블리싱(HTML, CSS, Jquery, JS)에 대한 이해도가 높습니다. 유지보수를 고려한 코드 작성, Jquery 플러그인 활용 경험으로, 효율적인 퍼블리싱을 할 수 있습니다.",
          img: require("@/assets/images/about/me1.png")
        },
        {
          title: "UI/UX Design",
          number: "02",
          text:
            "개발자로서 나아가기 위해 공부하지만, UI/UX 디자인에 흥미가많아서, 트렌디한 디자인을 찾으면 XD로 카피해보면서 디자인 공부를 하고 있습니다.",
          img: require("@/assets/images/about/me2.png")
        },
        {
          title: "My Character",
          number: "03",
          text:
            "다양하게 개발할수 있는 경험을 좋아합니다. 프로젝트들을 하면서, 해보지 않았던 기능을 구현하는데에 있어서 만족감을 느끼고, 다양하게 배우는 것을 좋아합니다.",
          img: require("@/assets/images/about/me3.png")
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
