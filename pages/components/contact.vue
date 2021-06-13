<template>
  <section class="sub-section contact">
    <div class="section-title">
      <h3>CONTACT</h3>
    </div>
    <form method="post" @submit.prevent="sendEmail">
      <div class="contact-wrap">
        <div class="left">
          <ul>
            <li>
              <label for="name">이름</label>
              <input type="text" class="name" name="user_name" />
            </li>
            <li>
              <label for="email">이메일</label>
              <input type="email" calss="email" name="user_email" />
            </li>
            <li>
              <label for="text">메세지 입력</label>
              <textarea name="message"></textarea>
            </li>
          </ul>
        </div>
        <div class="right">
          <dl>
            <dt>Phone :&nbsp;</dt>
            <dd>&nbsp;010 5838 5146</dd>
          </dl>
          <dl>
            <dt>E-mail :&nbsp;</dt>
            <dd>&nbsp;wlghks0618@kakaocom</dd>
          </dl>
          <dl>
            <dt>Adress :&nbsp;</dt>
            <dd>&nbsp;화성시 반월동</dd>
          </dl>
        </div>
      </div>
      <input type="submit" class="submit-btn" value="전송" />
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail: e => {
      if (
        e.path[0][0].value === "" ||
        e.path[0][1].value === "" ||
        e.path[0][2].value === ""
      ) {
        alert("공백을 채워주세요!");
      } else {
        emailjs
          .sendForm(
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
    }
  }
};
</script>
