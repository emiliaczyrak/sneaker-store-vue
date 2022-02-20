<template>
  <li class="product-item">
    <div class="product-item__content">
      <router-link :to="'/products/' + id">
        <div
          :class="[
            'product-item__image',
            { 'product-item__image--visible': isCreated },
          ]"
        >
          <img class="product-item__photo" :src="image" :alt="name" />
        </div>
      </router-link>
      <div class="product-item__name">{{ name }}</div>
      <div class="product-item__cw">{{ color_way }}</div>
      <div class="product-item__bottom-wrapper">
        <div class="product-item__bag">
          <button class="product-item__btn" @click="addToCart()">
            <img
              class="product-item__icon"
              src="../assets/shopping-bag.svg"
              alt="cart"
            />
          </button>
        </div>
        <div class="product-item__price">${{ price }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    color_way: String,
    desc: String,
    price: Number,
    image: String,
  },
  data() {
    return {
      isCreated: false,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.isCreated = true;
    });
  },
};
</script>

<style lang="scss" scoped>
a {
  color: black;
  text-decoration: none;
}
.product-item {
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
  margin-top: 30px;
  font-size: 10px;
  &__photo {
    width: 380px;
  }

  &__name {
    font-size: 2.2em;
    font-weight: 300;
  }
  &__content {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
  &__cw {
    font-weight: 700;
    font-size: 1.7em;
  }
  &:hover {
    border-color: #cacaca;
  }
  &__icon {
    width: 25px;
    transition: 0.2s;
    &:hover {
      transform: scale(110%);
    }
  }
  &__price {
    font-weight: 700;
    font-size: 1.8em;
  }
  &__bottom-wrapper {
    display: flex;
    margin: 70px 0 20px 0;
  }
  &__bag {
    flex-grow: 1;
  }
  &__btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  &__image {
    transform: translateY(50px);
    transition: 0.6s;
    opacity: 0;
    &--visible {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
@media (max-width: 1280px) {
  .product-item {
    font-size: 9px;
    &__photo {
      width: 340px;
    }
  }
}
@media (max-width: 768px) {
  .product-item {
    font-size: 9px;
    &__photo {
      width: 350px;
    }
  }
}
</style>
