<template>
  <div>
    <Header v-on:mobileMenuClick="mobileMenuClick" ref="headerDiv" />
    <MobileBar
      class="mobileMenutBar"
      ref="mobileMenutBar"
      v-on:mobileMenuClick="mobileMenuClick"
    />
    <div class="modal-bg" ref="modalBg" @click="clickModal"></div>

    <Nuxt class="main" ref="nuxtMain" />

    <Footer />
  </div>
</template>
<script>
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import MobileBar from "@/layouts/mobileBar";

export default {
  components: {
    Header,
    MobileBar,
    Footer
  },
  created() {
    this.$nuxt.$on("projectClick", () => {
      this.$refs.modalBg.classList.add("on");
      this.$refs.nuxtMain.$el.classList.add("on");
      this.$refs.modalBg.classList.add("project");
    });
    this.$nuxt.$on("removeProPop", () => {
      this.clickModal();
    });
  },
  methods: {
    mobileMenuClick() {
      this.$refs.headerDiv.$el.classList.toggle("on");
      this.$refs.mobileMenutBar.$el.classList.toggle("on");
      this.$refs.modalBg.classList.toggle("on");
    },
    clickModal() {
      this.$refs.mobileMenutBar.$el.classList.remove("on");
      this.$refs.modalBg.classList.remove("on");
      this.$refs.modalBg.classList.remove("project");
      this.$refs.nuxtMain.$el.classList.remove("on");
      this.$refs.headerDiv.$el.classList.remove("on");
    }
  }
};
</script>
