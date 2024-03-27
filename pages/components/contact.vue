<template>
  <section class="sub-section contact">
    <div class="loading__wrap" ref="loadingWrap">
      <div class="loading__bg"></div>
      <lottie-vue-player :theme="options.theme" :player-size="options.playerSize" :player-controls="true"
        style="width: 100%; height:400px">
      </lottie-vue-player>
    </div>
    <div class="section-title">
      <h3>CONTACT</h3>
    </div>
    <form method="post">
      <div class="contact-wrap">
        <div class="left">
          <ul>
            <li>
              <label for="name">이름</label>
              <input ref="value1" placeholder="연락하시는분의 성함을 입력해주세요" type="text" class="name" name="user_name" />
            </li>
            <li>
              <label for="email">이메일</label>
              <input ref="value2" placeholder="연락 받으실 이메일을 입력해주세요" type="email" calss="email" name="user_email" />
            </li>
            <li>
              <label for="phone">휴대폰 번호</label>
              <input ref="value3" placeholder="- 없이 숫자를 붙혀서 입력해주세요" type="phone" calss="phone" name="user_phone" />
            </li>
            <li>
              <label for="text">메세지</label>
              <textarea ref="value4" name="message"></textarea>
            </li>
          </ul>
        </div>
        <div class="right">
          <dl>
            <dt>휴대폰 번호 :&nbsp;</dt>
            <dd>&nbsp;010-5838-5146</dd>
          </dl>
          <dl>
            <dt>이메일 :&nbsp;</dt>
            <dd>&nbsp;wlghks0618@kakao.com</dd>
          </dl>
          <dl>
            <dt>주소 :&nbsp;</dt>
            <dd>&nbsp;경기도 용인시 기흥구</dd>
          </dl>
        </div>
      </div>
      <button class="submit-btn" @click="sendEmail()">전송</button>
      <!-- <input type="submit" class="submit-btn" value="" /> -->
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      options: {
        minimizable: false,
        playerSize: "standard",
        backgroundColor: "#fff",
        backgroundStyle: "color",
        theme: {
          controlsView: "standard",
          active: "light",
          light: {
            color: "#3D4852",
            backgroundColor: "#fff",
            opacity: "0.7"
          },
          dark: {
            color: "#fff",
            backgroundColor: "#202020",
            opacity: "0.7"
          }
        }
      }
    };
  },
  methods: {
    sendEmail(e) {
      if (
        this.$refs.value1.value === "" ||
        this.$refs.value2.value === "" ||
        this.$refs.value3.value === "" ||
        this.$refs.value4.value === ""
      ) {
        alert("공백을 채워주세요!");
      } else {
        const userId = this.$refs.value1.value
        const email = this.$refs.value2.value
        const phone = this.$refs.value3.value
        const message = this.$refs.value4.value
        const userEmail = "wlghks0618@kakao.com"
        if (/^01([0|1|6|7|8|9]?)\d{3,4}\d{4}$/.test(phone)) {
          this.$refs.loadingWrap.classList.add("on")
          const param = {
            phone: phone,
            userId: 'wlghks0618',
            ptId: "ptid02",
            pw: 'WlGhks010!@#',
            from: email,
            to: userEmail,
            subject: `이직문의`,
            title: "안녕하세요 이직 문의드립니다.",
            body: `
        <div style="margin: 16px 0 0 0; padding: 12px 12px 60px 12px;box-sizing: border-box;">
          <div style="padding: 34px; box-sizing: border-box;background: #fff;border-radius: 12px;box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);">
            <h1 style="margin: 0;padding: 0; color: #414141;">'${userId}'님의 사이트로부터 문의 메일이 도착했습니다.</h1>
            <p style="color: #999; margin: 8px 0 34px 0; padding: 0;">메일 내용은 아래와 같습니다.</p>
            <ul style="list-style: none;margin: 0 0 38px 0;padding: 0 0 18px 0; border-bottom: 1px solid rgb(231, 231, 231);">
              <li style="margin-bottom: 12px;">
                <dl style="display: flex;align-items: flex-start;">
                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</dt>
                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7">[이직문의] '${userId}'님으로부터 이직 문의가 들어왔습니다.</dd>
                </dl>  
              </li>
              <li style="margin-bottom: 12px;">
                <dl style="display: flex;align-items: flex-start;">
                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">이메일&nbsp;&nbsp;:&nbsp;&nbsp;</dt>
                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7;">${email}</dd>
                </dl>  
              </li>
              <li>
                <dl style="display: flex;align-items: flex-start;">
                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">연락처&nbsp;&nbsp;:&nbsp;&nbsp;</dt>
                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7;">${phone}</dd>
                </dl>  
              </li>
            </ul>
            <p style="margin-top:30px;">${message}</p>
          </div>
        </div>
        `,
          };
          try {
            fetch('https://kimjihodo.synology.me:3001/email/send', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(param),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error('API 호출에 실패하였습니다.');
                }
              })
              .then((data) => {
                alert('메일 전송되었습니다!');
                this.$refs.value1.value = ""
                this.$refs.value2.value = ""
                this.$refs.value3.value = ""
                this.$refs.value4.value = ""
              })
              .catch((error) => {
                console.log(error);
                alert('메일 전송이 실패했습니다.');
              });
          } catch (error) {
            console.log(error);
            alert('메일 전송이 실패했습니다.');
          } finally {
            this.$refs.loadingWrap.classList.remove("on");
          }
        } else {
          alert("휴대폰 번호를 확인해주세요!");
        }
      }
    }
  }
};
</script>
