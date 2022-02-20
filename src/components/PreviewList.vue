<template>
  <ul class="cart-preview__list">
    <transition-group name="cart-element">
      <preview-item
        v-for="cardProd in cardProducts"
        :key="cardProd.name"
        :id="cardProd.id"
        :name="cardProd.name"
        :cw="cardProd.color_way"
        :price="cardProd.price"
        :image="cardProd.image"
        :qty="cardProd.qty"
      ></preview-item>
    </transition-group>
  </ul>
</template>

<script>
import PreviewItem from "./PreviewItem.vue";
export default {
  components: {
    PreviewItem,
  },
  computed: {
    cardProducts() {
      return this.$store.getters.getProductsCart;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-preview {
  &__list {
    list-style: none;
    max-height: 75vh;
    overflow: scroll;
  }
}
.cart-element {
  &-enter-from {
    transform: translateX(-100%);
  }
  &-enter-active {
    transition: 0.2s;
  }
  &-enter-to {
    transform: translateX(0);
  }
  &-leave-from {
    transform: translateX(0);
  }
  &-leave-active {
    transition: 0.2s;
  }
  &-leave-to {
    transform: translateX(100%);
  }
  &-move {
    transition: transform 0.5s;
  }
}
</style>
