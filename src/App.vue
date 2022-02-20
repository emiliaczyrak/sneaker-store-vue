<template>
  <the-nav @toggle-preview="togglePreview"></the-nav>
  <transition name="preview">
    <cart-preview @toggle-preview="togglePreview" v-if="previewVisible">
    </cart-preview>
  </transition>
  <router-view> </router-view>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import CartPreview from "./components/CartPreview.vue";
export default {
  components: {
    TheNav,
    CartPreview,
  },
  data() {
    return {
      previewVisible: false,
    };
  },
  methods: {
    togglePreview(isV) {
      this.previewVisible = isV;
    },
  },
  created() {
    this.$store.dispatch("setCartFromLocalStorage");
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  max-width: 1500px;
  margin: 0 auto;
  min-height: 100vh;
}
.preview-enter-from,
.preview-leave-to {
  transform: translateX(120%);
}
.preview-enter-to,
.preview-leave-from {
  transform: translateX(0);
}
.preview-enter-active,
.preview-leave-active {
  transition: 0.4s;
}
</style>
