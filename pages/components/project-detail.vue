<template>
  <div class="project_detail">
    <!-- // -->
    <div class="popup">
      <div class="popup_inner">
        <div class="top">
          <h2 v-html="projectInfo.title"></h2>
          <span class="close" @click="removeProPop"></span>
        </div>

        <h3>Info</h3>

        <ul class="info_list">
          <li class="list">
            <dl>
              <dt>- 개발 기간</dt>
              <dd>{{ projectInfo.date }}</dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>- 프로젝트 소개</dt>
              <dd v-html="projectInfo.info"></dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>- 개발언어 / 라이브러리</dt>
              <dd>{{ projectInfo.lang }}</dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>- 상세업무</dt>
              <dd>
                <ul>
                  <li v-for="list in projectInfo.work" :key="list">
                    {{ list }}
                  </li>
                </ul>
              </dd>
            </dl>
          </li>
          <li class="list" v-if="projectInfo.source">
            <dl>
              <dt>- 소스 링크</dt>
              <dd>
                <ul v-for="list in projectInfo.source" :key="list">
                  <li><a @click="list.includes('adl') ? openWindow(list) : null" target="_blank" :href="list">{{
                    list }}</a></li>
                </ul>
              </dd>
            </dl>
          </li>
          <li class="list" v-if="projectInfo.guitar !== ''">
            <dl>
              <dt>- 기타 사항</dt>
              <dd>
                <ul v-for="list in projectInfo.guitar" :key="list">
                  <li>{{ list }}</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>

        <!-- 웹 프레임 섹션 디자인 변경 -->
        <!-- <div class="link_wrap" v-if="projectInfo.link !== ''">
          <h3>View</h3>
          <a :href="projectInfo.link" target="_blank" :class="projectInfo.class" v-if="projectInfo.link !== ''">링크
            <span>→</span></a>
        </div>

        <div class="frame_wrap" v-if="projectInfo.link !== ''">
          <iframe :src="projectInfo.link" frameborder="0"></iframe>
          <div :class="projectInfo.class"></div>
        </div> -->
        <!-- // 웹 프레임 섹션 디자인 변경 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projectInfo() {
      return this.$store.state.projectInfo;
    }
  },
  created() {
    this.$nuxt.$on("projectClick", index => { });
  },
  methods: {
    removeProPop() {
      this.$nuxt.$emit("removeProPop", "removeProPop");
    },
    openWindow(param) {
      window.open(param, '', 'width=375, height=812');
    }
  }
};
</script>
