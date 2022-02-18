<template>
  <div class="checkout-wrapper">
    <div class="checkout">
      <div class="checkout__items">
        <div v-if="isCartEmpty" class="checkout__no-items">
          <p class="checkout__empty-text">Cart is empty :(</p>
          <router-link to="/products">Go back to shop</router-link>
        </div>
        <base-card>
          <preview-list></preview-list>
        </base-card>
      </div>
      <div class="checkout__sum-up">
        <base-card>
          <checkoutform> </checkoutform>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewList from "../components/PreviewList.vue";
import Checkoutform from "../components/CheckoutForm.vue";
export default {
  components: {
    PreviewList,
    Checkoutform,
  },
  computed: {
    isCartEmpty() {
      return this.$store.getters.getProductsCart.length === 0 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-wrapper {
  background-color: #f4f4f4;
  min-height: 95vh;
  // padding: 20px 0px;
}
.checkout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 50px;
  &__items {
    flex-basis: 50vw;
    min-width: 360px;
    margin-bottom: 50px;
    max-width: 800px;
  }
  &__sum-up {
    min-width: 360px;
    flex-basis: 30vw;
    margin-bottom: 40px;
    max-width:600px
  }
  &__no-items {
    text-align: center;
  }
  &__empty-text {
    font-size: 1.2rem;
    padding: 30px;
  }
  a {
    text-decoration: none;
    padding: 10px;
    font-size: 0.9rem;
    color: #60b7f5;
    transition: 0.3s;
    &:hover {
      color: #2b9ff1;
    }
  }
}
</style>
