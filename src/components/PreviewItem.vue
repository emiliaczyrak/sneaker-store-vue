<template>
  <li class="preview-item-li">
    <div class="preview-item">
      <div class="preview-item__shoe-photo">
        <img class="preview-item__img" :src="image" :alt="name" />
      </div>
      <div class="preview-item__info">
        <div class="preview-item__name">
          <div class="preview-item__brand">{{ name }}</div>
          <div class="preview-item__cw">{{ cw }}</div>
          <div class="preview-item__quantity">
            Quantity:
            <button class="preview-item__btn" @click="addQty">+</button>
            {{ qty }}
            <button class="preview-item__btn" @click="reduceQty">-</button>
          </div>
        </div>
        <div class="preview-item__aside">
          <div class="preview-item__delete">
            <button class="preview-item__delete-btn" @click="deleteItem">
              <img
                class="preview-item__delete-img"
                src="../assets/trash-icon.svg"
                alt="delete"
              />
            </button>
          </div>
          <div class="preview-item__price">${{ price }}</div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    cw: String,
    price: Number,
    image: String,
    qty: Number,
  },
  data() {
    return {
      isCreated: false,
    };
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteFromCart", { id: this.id });
    },
    addQty() {
      this.$store.dispatch("addQuantity", { id: this.id });
    },
    reduceQty() {
      this.$store.dispatch("reduceQuantity", { id: this.id });
    },
  },
};
</script>

<style lang="scss" scoped>
.preview-item-li {
  padding: 10px;
  font-size: 10px;
}
.preview-item {
  display: flex;

  &__img {
    width: 150px;
  }
  &__info {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }
  &__delete-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  &__delete-img {
    width: 20px;
  }
  &__brand {
    font-size: 1.5em;
    font-weight: 300;
  }
  &__cw {
    font-weight: 600;
    font-size: 1.4em;
  }
  &__quantity {
    font-size: 1.3em;
    font-weight: 300;
  }
  &__aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__delete {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  &__price {
    font-weight: 700;
    font-size: 1.45em;
  }
  &__btn {
    background-color: transparent;
    border: none;
    width: 10px;
    height: 10px;
    background-color: #8ed0ff;
    border-radius: 50%;
    color: white;
    font-size: 0.5rem;
    text-align: center;
    transition: 0.2s;
    margin: 1px;
    &:hover {
      background-color: #60b7f5;
    }
  }
}
@media (max-width: 1280px) {
  .preview-item-li {
    padding: 10px;
    font-size: 9px;
  }
}
@media (max-width: 768px) {
  .preview-item-li {
    padding: 10px;
    font-size: 8px;
  }
  @media (max-width: 375px) {
    .preview-item-li {
      padding: 7px;
      font-size: 8px;
      &__img {
        width: 120px;
      }
    }
  }
}
</style>
