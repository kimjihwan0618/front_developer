(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{336:function(e,t,n){"use strict";n.r(t);var l=n(10),r=(n(62),n(111),n(23),n(28),{data:function(){return{options:{minimizable:!1,playerSize:"standard",backgroundColor:"#fff",backgroundStyle:"color",theme:{controlsView:"standard",active:"light",light:{color:"#3D4852",backgroundColor:"#fff",opacity:"0.7"},dark:{color:"#fff",backgroundColor:"#202020",opacity:"0.7"}}}}},methods:{sendEmail:function(e){var t=this,n=function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,r,o,param,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.$refs.value1.value&&""!==t.$refs.value2.value&&""!==t.$refs.value3.value&&""!==t.$refs.value4.value){e.next=4;break}alert("공백을 채워주세요!"),e.next=37;break;case 4:if(n=t.$refs.value1.value,l=t.$refs.value2.value,r=t.$refs.value3.value,o=t.$refs.value4.value,"wlghks0618@kakao.com",!/^01([0|1|6|7|8|9]?)\d{3,4}\d{4}$/.test(r)){e.next=36;break}return t.$refs.loadingWrap.classList.add("on"),e.prev=11,param={phone:r,userId:"wlghks0618",ptId:"ptid02",pw:"WlGhks010!@#",from:l,to:"wlghks0618@kakao.com",subject:"이직문의",title:"안녕하세요 이직 문의드립니다.",content:o,html:'\n                <div style="margin: 16px 0 0 0; padding: 12px 12px 60px 12px;box-sizing: border-box;">\n                  <div style="padding: 34px; box-sizing: border-box;background: #fff;border-radius: 12px;box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);">\n                    <h1 style="margin: 0;padding: 0; color: #414141;">\''.concat(n,'\'님의 사이트로부터 문의 메일이 도착했습니다.</h1>\n                    <p style="color: #999; margin: 8px 0 34px 0; padding: 0;">메일 내용은 아래와 같습니다.</p>\n                    <ul style="list-style: none;margin: 0 0 38px 0;padding: 0 0 18px 0; border-bottom: 1px solid rgb(231, 231, 231);">\n                      <li style="margin-bottom: 12px;">\n                        <dl style="display: flex;align-items: flex-start;">\n                          <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</dt>\n                          <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7">[이직문의] \'').concat(n,'\'님으로부터 이직 문의가 들어왔습니다.</dd>\n                </dl>  \n              </li>\n              <li style="margin-bottom: 12px;">\n                <dl style="display: flex;align-items: flex-start;">\n                  <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">이메일&nbsp;&nbsp;:&nbsp;&nbsp;</dt>\n                  <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7;">').concat(l,'</dd>\n                  </dl>  \n                  </li>\n                  <li>\n                    <dl style="display: flex;align-items: flex-start;">\n                      <dt style="min-width: 60px;opacity: .6; white-space: nowrap;">연락처&nbsp;&nbsp;:&nbsp;&nbsp;</dt>\n                      <dd style="margin: 0;padding: 0; font-weight: 600; opacity: .7;">').concat(r,'</dd>\n                      </dl>  \n                      </li>\n                      </ul>\n            <p style="margin-top:30px;">').concat(o,"</p>\n          </div>\n          </div>\n          ")},e.next=15,fetch("https://kimjihodo.synology.me:3001/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(param)});case 15:if(200!==(d=e.sent).status){e.next=24;break}t.$refs.value1.value="",t.$refs.value2.value="",t.$refs.value3.value="",t.$refs.value4.value="",alert("메일 전송되었습니다!"),e.next=25;break;case 24:throw new Error("".concat(d.status," 오류 발생"));case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(11),console.log(e.t0),alert("메일 전송이 실패했습니다.");case 31:return e.prev=31,t.$refs.loadingWrap.classList.remove("on"),e.finish(31);case 34:e.next=37;break;case 36:alert("휴대폰 번호를 확인해주세요!");case 37:case"end":return e.stop()}}),e,null,[[11,27,31,34]])})));return function(){return e.apply(this,arguments)}}();n()}}}),o=r,d=n(22),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sub-section contact"},[t("div",{ref:"loadingWrap",staticClass:"loading__wrap"},[t("div",{staticClass:"loading__bg"}),e._v(" "),t("lottie-vue-player",{staticStyle:{width:"100%",height:"400px"},attrs:{theme:e.options.theme,"player-size":e.options.playerSize,"player-controls":!0}})],1),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"contact-wrap"},[t("div",{staticClass:"left"},[t("ul",[t("li",[t("label",{attrs:{for:"name"}},[e._v("이름")]),e._v(" "),t("input",{ref:"value1",staticClass:"name",attrs:{placeholder:"연락하시는분의 성함을 입력해주세요",type:"text",name:"user_name"}})]),e._v(" "),t("li",[t("label",{attrs:{for:"email"}},[e._v("이메일")]),e._v(" "),t("input",{ref:"value2",attrs:{placeholder:"연락 받으실 이메일을 입력해주세요",type:"email",calss:"email",name:"user_email"}})]),e._v(" "),t("li",[t("label",{attrs:{for:"phone"}},[e._v("휴대폰 번호")]),e._v(" "),t("input",{ref:"value3",attrs:{placeholder:"- 없이 숫자를 붙혀서 입력해주세요",type:"phone",calss:"phone",name:"user_phone"}})]),e._v(" "),t("li",[t("label",{attrs:{for:"text"}},[e._v("메세지")]),e._v(" "),t("textarea",{ref:"value4",attrs:{name:"message"}})])])]),e._v(" "),e._m(1)]),e._v(" "),t("button",{staticClass:"submit-btn",on:{click:function(t){return e.sendEmail()}}},[e._v("전송")])])}),[function(){var e=this._self._c;return e("div",{staticClass:"section-title"},[e("h3",[this._v("CONTACT")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"right"},[t("dl",[t("dt",[e._v("휴대폰 번호 : ")]),e._v(" "),t("dd",[e._v(" 010-5838-5146")])]),e._v(" "),t("dl",[t("dt",[e._v("이메일 : ")]),e._v(" "),t("dd",[e._v(" wlghks0618@kakao.com")])]),e._v(" "),t("dl",[t("dt",[e._v("주소 : ")]),e._v(" "),t("dd",[e._v(" 경기도 용인시 기흥구")])])])}],!1,null,null,null);t.default=component.exports}}]);