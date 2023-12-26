<template>
  <section class="main-section">
    <div class="txt-box">
      <div class="txt-box-inner">
        <div class="img__box">
          <img src="@/assets/images/main-section/profile.jpg" alt="프로필 사진" />
        </div>
        <div>
          <h3>KIM JI HWAN</h3>
          <h4>WEB DEVELOPER PORTFOLIO</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    start2() {
      //.prev 클래스 삭제
      // document.querySelector(".list__wrap .prev").classList.remove("prev");

      // //.current -> .prev
      // let current = document.querySelector(".list__wrap .current");
      // current.classList.remove("current");
      // current.classList.add("prev");

      // //.next -> .current
      // let next = document.querySelector(".list__wrap .next");
      // //다음 목록 요소가 널인지 체크
      // if (next.nextElementSibling == null) {
      //   document
      //     .querySelector(".list__wrap .inner span:first-child")
      //     .classList.add("next");
      // } else {
      //   //목록 처음 요소를 다음 요소로 선택
      //   next.nextElementSibling.classList.add("next");
      // }
      // next.classList.remove("next");
      // next.classList.add("current");
    },
    start1() {
      // setInterval(this.start2, 2000);
    }
  },
  mounted() {
    // this.start1();
  }
  // 
};
</script>
