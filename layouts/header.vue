<template>
  <header ref="headerDiv">
    <div class="header-inner">
      <!-- <h1 class="logo" @click="scrollTop">
        JiHwan
      </h1> -->
      <ul class="gnb">
        <li v-for="(navTitle, index) in menuTitle" :key="navTitle.name" ref="navTitle" @click="clickNav(index)">
          <nuxt-link ref="navLink" :to="navTitle.link">{{
          navTitle.name
        }}</nuxt-link>
        </li>
      </ul>
      <ul class="sns-wrap">
        <li>
          <a href="https://open.kakao.com/o/sXq8kb0f" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.362 35.362">
              <g id="그룹_3" data-name="그룹 3" transform="translate(-1602 -43)">
                <path class="kakaocolor" id="패스_1" data-name="패스 1"
                  d="M35.362,32.6A2.763,2.763,0,0,1,32.6,35.362H2.763A2.763,2.763,0,0,1,0,32.6V2.763A2.763,2.763,0,0,1,2.763,0H32.6a2.763,2.763,0,0,1,2.763,2.763Z"
                  transform="translate(1602 43)" fill="#cacaca" />
                <path id="패스_2" data-name="패스 2"
                  d="M38.366,36C30.432,36,24,41.071,24,47.327c0,4.044,2.689,7.593,6.734,9.6-.22.759-1.414,4.882-1.462,5.206,0,0-.029.243.129.336a.433.433,0,0,0,.343.021c.452-.063,5.241-3.427,6.07-4.011a18.2,18.2,0,0,0,2.552.178c7.934,0,14.366-5.071,14.366-11.327S46.3,36,38.366,36Z"
                  transform="translate(1581.315 11.973)" />
                <path class="kakaocolor" id="패스_3" data-name="패스 3"
                  d="M52.185,100.838a.812.812,0,0,1-.829-.791V95.123H50.063a.812.812,0,1,1,0-1.623h4.244a.812.812,0,1,1,0,1.623H53.014v4.924A.812.812,0,0,1,52.185,100.838Zm7.267-.011a.68.68,0,0,1-.69-.366l-.41-1.074H55.825l-.411,1.075a.679.679,0,0,1-.689.365,1.264,1.264,0,0,1-.527-.114c-.228-.105-.448-.4-.2-1.177l1.982-5.218a1.155,1.155,0,0,1,2.209,0l1.982,5.216c.252.783.033,1.073-.2,1.179a1.267,1.267,0,0,1-.527.114Zm-1.536-2.909-.828-2.352-.828,2.352Zm3.592,2.8a.778.778,0,0,1-.794-.76V94.329a.846.846,0,0,1,1.692,0V99.2h1.761a.76.76,0,1,1,0,1.519Zm4.6.11a.83.83,0,0,1-.829-.829v-5.67a.829.829,0,0,1,1.658,0V96.11L69.255,93.8a.644.644,0,0,1,.46-.184.839.839,0,0,1,.814.77.646.646,0,0,1-.183.5l-1.889,1.888,2.04,2.7a.829.829,0,0,1-1.323,1L67.23,97.9l-.288.288V100a.83.83,0,0,1-.829.829Z"
                  transform="translate(1559.553 -37.585)" fill="#cacaca" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/kimJiHwan0618" target="_blank">
            <svg id="github-icon-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.257 35.362">
              <path class="githubcolor" id="패스_4" data-name="패스 4"
                d="M18.128,0A18.13,18.13,0,0,0,12.4,35.331c.906.168,1.239-.393,1.239-.872,0-.432-.017-1.86-.025-3.375C8.568,32.18,7.5,28.944,7.5,28.944a4.8,4.8,0,0,0-2.013-2.652c-1.645-1.125.124-1.1.124-1.1a3.811,3.811,0,0,1,2.779,1.868,3.859,3.859,0,0,0,5.275,1.507,3.86,3.86,0,0,1,1.151-2.424c-4.026-.459-8.259-2.013-8.259-8.959a7.016,7.016,0,0,1,1.868-4.866,6.514,6.514,0,0,1,.176-4.8s1.522-.487,4.987,1.858a17.2,17.2,0,0,1,9.079,0c3.46-2.346,4.98-1.858,4.98-1.858a6.506,6.506,0,0,1,.178,4.8,7,7,0,0,1,1.866,4.866c0,6.963-4.241,8.5-8.278,8.945a4.334,4.334,0,0,1,1.23,3.357c0,2.426-.021,4.378-.021,4.975,0,.482.326,1.048,1.245.87A18.131,18.131,0,0,0,18.128,0"
                transform="translate(0 0)" fill="#888" />
              <path id="패스_5" data-name="패스 5"
                d="M44.825,179.779c-.04.09-.182.117-.311.055s-.205-.182-.163-.272.181-.119.312-.056.207.183.161.273m.892.8c-.086.08-.255.043-.37-.084a.277.277,0,0,1-.053-.377c.089-.08.253-.043.372.084s.142.3.051.377m.612,1.018c-.111.077-.293,0-.405-.156s-.111-.354,0-.432.291-.008.405.152.111.357,0,.436m1.035,1.179c-.1.109-.311.08-.466-.069a.349.349,0,0,1-.1-.463c.1-.11.313-.079.469.069s.205.355.1.463m1.337.4c-.044.142-.248.206-.453.146s-.339-.228-.3-.372.247-.21.454-.146.339.227.3.371m1.522.169c.005.15-.169.274-.385.276s-.392-.116-.394-.263.17-.274.387-.277.392.116.392.264m1.495-.057c.026.146-.124.3-.338.336s-.405-.052-.432-.2.127-.3.337-.338.406.05.434.2"
                transform="translate(-38.036 -153.955)" fill="#161614" />
            </svg>
          </a>
        </li>
      </ul>
      <div id="nav-icon1" @click="menuIcon" ref="menuIcon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuTitle: [
        { name: "HOME", link: "?section=home" },
        { name: "ABOUT ME", link: "?section=aboutme" },
        // { name: "CAREER", link: "?section=career" },
        { name: "SKILL", link: "?section=skill" },
        { name: "PROJECT", link: "?section=project" },
        { name: "CONTACT", link: "?section=contact" }
      ]
    };
  },
  methods: {
    menuIcon() {
      this.$emit("mobileMenuClick");
    },
    clickNav(index) {
      this.$nuxt.$emit("clickNav", index);
    },
    scrollTop() {
      window.scrollTo({ top: 0 });
    }
  },
  created() {
    this.$nuxt.$on("navChange", index => {
      this.$refs.navLink.map(navArr => {
        navArr.$el.classList.remove("nuxt-link-exact-active");
      });
      this.$refs.navLink[index].$el.classList.add("nuxt-link-exact-active");
    });
  }
  // mounted() {
  //   this.$emit("navActive", this.$refs.navTitle);
  // }
};
</script>
