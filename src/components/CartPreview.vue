<template>
  <base-card class="cart-preview-card">
    <p class="cart-preview__empty" v-if="isCartEmpty">no items</p>
    <div class="cart-preview">
      <div class="cart-preview__content">
        <div class="cart-preview__close">
          <button class="cart-preview__close-btn" @click="closeCartPreview">
            <img
              class="cart-preview__close-img"
              src="../assets/cross.svg"
              alt="close"
            />
          </button>
        </div>
        <div class="cart-preview__products">
          <preview-list transits="preview"></preview-list>
        </div>
      </div>
      <div class="cart-preview-checkout">
        <div class="cart-preview__total-price">
          <div class="cart-preview__total-text">Total:</div>
          <div class="cart-preview__price">${{ amount }}</div>
        </div>
        <div v-if="!isCartEmpty" class="cart-preview__checkout-btn">
          <router-link to="/checkout">
            <base-button @click="closeCartPreview">Checkout</base-button>
          </router-link>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
import PreviewList from "./PreviewList.vue";
export default {
  components: {
    PreviewList,
  },
  emits: ["toggle-preview"],
  computed: {
    amount() {
      return this.$store.getters.getAmount;
    },
    isCartEmpty() {
      return this.$store.getters.getProductsCart.length === 0;
    },
  },
  methods: {
    closeCartPreview() {
      this.$emit("toggle-preview", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-preview-card {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  // height: 100vh;
  width: 25vw;
  background-color: white;
  overflow: scroll;
  z-index: 100;
  font-size: 10px;
}
.cart-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
  &__close-btn {
    border: none;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
  }
  &__empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    font-weight: 300;
  }
  &__content {
    flex-grow: 1;
  }
  &__close-img {
    width: 25px;
  }
  &__total-price {
    display: flex;
    padding: 15px;
  }
  &__total-text {
    flex-grow: 1;
    font-size: 1.5em;
  }
  &__price {
    font-weight: 600;
    font-size: 1.5em;
  }
  &__checkout-btn {
    text-align: center;
    padding: 20px;
  }
}
@media (max-width: 1024px) {
  .cart-preview-card {
    width: 35vw;
    font-size: 9px;
  }
}
@media (max-width: 768px) {
  .cart-preview-card {
    width: 78vw;
    font-size: 9px;
  }
}
</style>
