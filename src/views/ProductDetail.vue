<template>
  <div class="details">
    <div class="details__header">
      <div
        :class="[
          'details__prod-info',
          { 'details__prod-info--visible': isCreated },
        ]"
      >
        <div class="details__name-brand">{{ selectedProd[0].name }}</div>
        <div class="details__cw">{{ selectedProd[0].color_way }}</div>
        <div class="details__price">${{ selectedProd[0].price }}</div>
      </div>
      <div
        :class="[
          'details__add-to-cart',
          { 'details__add-to-cart--visible': isCreated },
        ]"
      >
        <div class="details__blue-btn" @click="addToCart">
          <button class="details__btn-plus">+</button>
        </div>
        <div class="details__text-add">Add to bag</div>
      </div>
    </div>
    <div :class="['details__shoe', { 'details__shoe--visible': isCreated }]">
      <img
        class="details__img"
        :src="selectedProd[0].image"
        :alt="selectedProd[0].name"
      />
    </div>
    <div class="details__description">
      <div class="details__desc-text">
        {{ selectedProd[0].description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProd: [],
      isCreated: false,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.selectedProd[0].id,
        name: this.selectedProd[0].name,
        cw: this.selectedProd[0].color_way,
        price: this.selectedProd[0].price,
        image: this.selectedProd[0].image,
      });
    },
  },
  created() {
    const prodId = this.$route.params.prodId;
    const prods = this.$store.getters.getProducts;
    const selectedProduct = prods.find((prod) => prod.id == prodId);
    this.selectedProd.push(selectedProduct);
    setTimeout(() => {
      this.isCreated = true;
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.details {
  width: 70vw;
  max-width: 1500px;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10px;
  &__header {
    display: flex;
    flex-wrap: wrap;
  }
  &__name-brand {
    font-size: 2.9em;
    font-weight: 700;
  }
  &__cw {
    font-size: 2em;
    font-weight: 300;
  }
  &__price {
    font-size: 1.7em;
    font-weight: 600;
    color: #8ed0ff;
  }
  &__prod-info {
    flex-grow: 7;
    transition: 0.6s;
    transform: translateX(-100vw);
    &--visible {
      transform: translateX(0);
    }
  }
  &__btn-plus {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #8ed0ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.7em;
    box-shadow: 5px 5px 20px -1px rgba(193, 220, 240, 1);
    transition: 0.2s;
    border: none;
    cursor: pointer;
    &:hover {
      transform: scale(110%);
    }
  }
  &__blue-btn {
    display: flex;
    align-items: center;
  }
  &__add-to-cart {
    display: flex;
    flex-grow: 1.5;
    justify-content: space-around;
    transform: translateX(100vw);
    transition: 0.3s;
    &--visible {
      transform: translateX(0);
    }
  }
  &__text-add {
    display: flex;
    align-items: center;
    font-size: 1.4em;
  }
  &__shoe {
    text-align: center;
    transform: translateX(-100vw);
    transition: 0.8s;
    &--visible {
      transform: translateX(0);
    }
  }

  &__img {
    width: 600px;
  }
  &__desc-text {
    margin-left: 35%;
    font-size: 1.3em;
    color: rgb(139, 138, 138);
    font-weight: 300;
    line-height: 30px;
  }
}
@media (max-width: 768px) {
  .details {
    width: 80vw;
    font-size: 9px;
    margin: 60px auto 0 auto;
    &__text-add {
      display: none;
    }
    &__img {
      width: 320px;
    }
    &__desc-text {
      margin-left: 5%;
      line-height: 25px;
    }
    &__btn-plus {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
