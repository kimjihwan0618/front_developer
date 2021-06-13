<template>
  <section class="sub-section right">
    <div class="section-title">
      <h3>CAREER</h3>
    </div>
    <div class="section-sub-title">
      <h4>About Career</h4>
      <p class="today-date-txt">
        <span class="today">{{ nowText }}</span>
        <span class="total-career">경력 {{ diffText }}개월</span>
      </p>
    </div>
    <div class="about-box">
      <ul>
        <li>
          <p>
            <img src="@/assets/images/career/logo1.png" alt="" />
          </p>
          <a href="#">
            <span class="name">강남이젠컴퓨터학원</span>
            <span class="date">2020.02 ~ 2020.07</span>
            <div class="bottom">
              <span class="text">Web, App 디자인 및 퍼블리싱 과정 수료.</span>
            </div>
          </a>
        </li>
        <li>
          <p>
            <img src="@/assets/images/career/logo3.png" alt="" />
          </p>
          <a href="#">
            <span class="name">(주)제제컴즈</span>
            <span class="date">2020.07 ~ 2020.10</span>
            <div class="bottom">
              <span class="job">웹 디자이너</span>
              <span class="text"
                >자사 솔루션 및 홈페이지 유지보수. 템플릿 제작, App UI, SNS배너
                디자인</span
              >
            </div>
          </a>
        </li>
        <li>
          <p>
            <img src="@/assets/images/career/logo2.png" alt="" />
          </p>
          <a href="#">
            <span class="name">(주)흰곰</span>
            <span class="date">2020.11 ~</span>
            <div class="bottom">
              <span class="job">웹 퍼블리셔</span>
              <span class="text"
                >자사 솔루션 디자인 및 서비스 개발. 외부 SI 프로젝트시 퍼블리싱,
                디자인 업무지원.</span
              >
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      firstCareer: new Date(2020, 6, 1),
      diffText: Number,
      nowText: String
    };
  },
  mounted() {
    let nowYear = this.date.getFullYear();
    let nowMonth = this.date.getMonth() + 1;
    let nowDate = this.date.getDate();
    this.nowText = nowYear + "년 " + nowMonth + "월 " + nowDate + "일 기준";

    let diff = this.date - this.firstCareer;
    let currDay = 24 * 60 * 60 * 1000; //시 * 분 * 초 * 밀리세컨
    let currMonth = currDay * 30; // 월 만듬
    this.diffText = parseInt(diff / currMonth);
  }
};
</script>
