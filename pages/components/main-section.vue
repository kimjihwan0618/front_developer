<template>
  <section class="main-section">
    <img src="@/assets/images/main-section/circle.svg" alt="" />
    <img src="@/assets/images/main-section/circle2.svg" alt="" />
    <img src="@/assets/images/main-section/circle.svg" alt="" />
    <img src="@/assets/images/main-section/circle2.svg" alt="" />
    <img src="@/assets/images/main-section/circle.svg" alt="" />
    <img src="@/assets/images/main-section/people1.png" alt="" />
    <img src="@/assets/images/main-section/people2.png" alt="" />
    <img src="@/assets/images/main-section/people3.png" alt="" />
    <img src="@/assets/images/main-section/people4.png" alt="" />
    <div class="txt-box">
      <div class="txt-box-inner">
        <p>안녕하세요!</p>
        <p>
          <span class="list__wrap">
            <span class="inner" ref="textList">
              <span class="item current">배움을 즐기는</span>
              <span class="item next">팀원과 소통하는</span>
              <span class="item">끊임없이 도전하는</span>
              <span class="item">스스로 문제를 찾는</span>
              <span class="item prev">UI/UX에 흥미가 많은</span>
            </span> </span
          >&nbsp;개발자
        </p>
        <p>김지환입니다.</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    start2() {
      //.prev 클래스 삭제
      document.querySelector(".list__wrap .prev").classList.remove("prev");

      //.current -> .prev
      let current = document.querySelector(".list__wrap .current");
      current.classList.remove("current");
      current.classList.add("prev");

      //.next -> .current
      let next = document.querySelector(".list__wrap .next");
      //다음 목록 요소가 널인지 체크
      if (next.nextElementSibling == null) {
        document
          .querySelector(".list__wrap .inner span:first-child")
          .classList.add("next");
      } else {
        //목록 처음 요소를 다음 요소로 선택
        next.nextElementSibling.classList.add("next");
      }
      next.classList.remove("next");
      next.classList.add("current");
    },
    start1() {
      setInterval(this.start2, 1250);
    }
  },
  mounted() {
    this.start1();
  }
};
</script>
