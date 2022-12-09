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
              <span class="item">배움을 즐기는</span>
              <span class="item">팀원과 소통하는</span>
              <span class="item">끊임없이 도전하는</span>
              <span class="item">스스로 문제를 찾는</span>
              <span class="item">UI/UX에 흥미가 많은</span>
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
  data() {
    return {
      my: [
        "배움을 즐기는",
        "팀원과 소통하는",
        "끊임없이 도전하는",
        "스스로 문제를 찾는",
        "UI/UX에 흥미가 많은",
      ],
    };
  },
  methods: {
    test() {
      // console.log(this.$refs.textList.childNodes[0].textContent);
      // let item = document.createElement("span");
      // item.textContent = this.$refs.textList.childNodes[0].textContent;
      // this.$refs.textList.childNodes[0].remove();
      // this.$refs.textList.appendChild(item);
    },
    changeTxt() {
      let start = this.test;
      this.$refs.textList.childNodes[0].style.transform = "translateY(-81px)";
      this.$refs.textList.childNodes[2].style.transform = "translateY(-81px)";
      let item = document.createElement("span");
      item.textContent = this.$refs.textList.childNodes[0].textContent;
      this.$refs.textList.childNodes[0].remove();
      this.$refs.textList.appendChild(item);
      // setTimeout(function () {
      //   start();
      //   // this.$refs.textList.childNodes[0].remove()
      // }, 00);
    },
  },
  mounted() {
    setInterval(this.changeTxt, 2000);
  },
};
</script>
