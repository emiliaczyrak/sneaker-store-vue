<template>
  <div class="products">
    <header class="products__header header">
      <div class="header__content">
        <p class="header__text">Fresh Sneakers</p>
        <p class="header__brand-name">SNKRS. 2022</p>
      </div>
    </header>
    <section class="products__content">
      <ul class="products__list">
        <product-item
          v-for="product in products"
          :key="product.id.toString()"
          :id="product.id"
          :name="product.name"
          :color_way="product.color_way"
          :desc="product.descriprion"
          :price="product.price"
          :image="product.image"
        ></product-item>
      </ul>
    </section>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      error: null,
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  created() {
    try {
      this.$store.dispatch("loadProducts");
    } catch (error) {
      this.error = error.message || "Something went wrong";
    }
    console.log("dane zaladowane");
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 90vw;
  max-width: 1500px;
  margin: 0 auto;
  &__text {
    font-size: 2rem;
    font-weight: bold;
  }
  &__brand-name {
    font-size: 1.2rem;
    letter-spacing: -2px;
    color: #5abaff;
    font-weight: 500;
  }
}
.products {
  width: 95vw;
  max-width: 1500px;
  margin: 40px auto;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
  }
}
</style>
