<template>
  <nav class="nav">
    <div class="nav__logo">
      <router-link to="/products" @click="$emit('toggle-preview', false)">
        <p class="nav__text">snkrs.</p>
      </router-link>
    </div>
    <div class="nav__icon">
      <button class="nav__btn" @click="$emit('toggle-preview', true)">
        <img class="nav__image" src="../assets/shopping-bag.svg" alt="cart" />
      </button>
      <p v-if="quantity" class="nav__qty">{{ quantity }}</p>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["toggle-preview"],
  data() {
    return {
      isCartPreviewVisible: false,
    };
  },
  computed: {
    quantity() {
      return this.$store.getters.getQuantity;
    },
    currentRoute() {
      return this.$route.params == "checkout" ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px;

  &__logo {
    flex-grow: 1;
  }
  &__text {
    text-transform: uppercase;
    letter-spacing: -4px;
    font-weight: 700;
    font-size: 2.2rem;
  }
  &__image {
    width: 30px;
    height: 30px;
    transition: 0.2s;
    &:hover {
      transform: scale(110%);
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    position: relative;
  }
  &__qty {
    font-size: 0.7rem;
    // margin-left: 5px;
    // padding: 5px;
    position: absolute;
    top: 15%;
    left: -15%;
    background-color: rgb(231, 61, 61);
    width: 17px;
    height: 17px;
    text-align: center;
    border-radius: 50%;
    color: white;
  }
  &__btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
}
</style>
