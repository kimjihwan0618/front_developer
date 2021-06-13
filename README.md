# 포트폴리오

## vue + nuxt

사이트 바로가기 : https://kimjihwan0618.github.io/portfolio<br />

Vue와, Nuxt 프레임워크가 제공하는 구조로 FE 작업을 하였으며, 반복적인 코드중복과 변수활용을 위해 Sass로 작업하였습니다.

## 목차

- about me
- career 
- skill
- project
- contact

## 사용기술

### about me
- JS로 슬라이드(Carousel)를 구현했습니다.

<img src="https://kimjihwan0618.github.io/web/assets/video/about_vd2.gif" width="700">


Javascript

<pre><code>arrowLeft() {
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
}</pre></code>

Html

<pre><code>
</pre></code>


### carrer

- 첫 취업일로부터 JS Date 객체를 사용해 오늘까지의 날짜를 계산하였습니다.
<img src="https://kimjihwan0618.github.io/web/assets/video/carrer_vd.gif" width="700">

Javascript

<pre><code>data() {
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
</pre></code>

Html

<pre><code><span class="total-career">경력 {{ diffText }}개월</span></pre></code>

### contact
- javascript API email-js를사용하여 이메일을 받을수 있도록 기능을 구현하였습니다.
<img src="https://kimjihwan0618.github.io/web/assets/video/contact_vd.gif" width="700">

Javascript

<pre><code>sendEmail: e => {
    if (
      e.path[0][0].value === "" ||
      e.path[0][1].value === "" ||
      e.path[0][2].value === ""
    ) {
      alert("공백을 채워주세요!");
    } else {
    emailjs.sendForm(
      "service_wztk4bx",
      "template_2edfiap",
      e.target,
      "user_mrPFHtVDlQimcAtxWCbaK"
    )
    .then(
      result => {
        console.log("SUCCESS!", result.status, result.text);
        alert("전송이 완료되었습니다 감사합니다^-^");
      },
      error => {
        console.log("FAILED...", error);
        alert("전송에 실패하였습니다. 다시 시도해주세요!");
      }
    );
  }
}</pre></code>
