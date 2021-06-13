<template>
  <div class="project_detail">
    <!-- // -->
    <div class="popup">
      <div class="popup_inner">
        <div class="top">
          <h2>{{ projectInfo.title }}</h2>
          <span class="close" @click="removeProPop"></span>
        </div>

        <h3>Info</h3>

        <ul class="info_list">
          <li class="list">
            <dl>
              <dt>개발 기간</dt>
              <dd>{{ projectInfo.date }}</dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>소개</dt>
              <dd>{{ projectInfo.info }}</dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>개발 언어</dt>
              <dd>{{ projectInfo.lang }}</dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>담당업무</dt>
              <dd>
                <ul>
                  <li v-for="list in projectInfo.work" :key="list">
                    {{ list }}
                  </li>
                </ul>
              </dd>
            </dl>
          </li>
          <li class="list">
            <dl>
              <dt>기타 사항</dt>
              <dd>{{ projectInfo.guitar }}</dd>
            </dl>
          </li>
        </ul>

        <div class="link_wrap">
          <h3>View</h3>
          <a :href="projectInfo.link" target="_blank" :class="projectInfo.class"
            >링크 <span>→</span></a
          >
        </div>

        <div class="frame_wrap">
          <iframe :src="projectInfo.link" frameborder="0"></iframe>
          <div :class="projectInfo.class"></div>
        </div>
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
    this.$nuxt.$on("projectClick", index => {});
  },
  methods: {
    removeProPop() {
      this.$nuxt.$emit("removeProPop", "removeProPop");
    }
  }
};
</script>
