<template>
  <div class="checkout-info">
    <div class="checkout-info__header">
      <div class="checkout-info__total">
        <div class="checkout-info__total-text">Total:</div>
        <div class="checkout-info__total-price">${{ totalAmount }}</div>
      </div>
      <div class="checkout-info__quantity">
        <div class="checkout-info__qty-text">Quantity:</div>
        <div class="checkout-info__total-qty">
          {{ quantity }}
        </div>
      </div>
      <hr class="checkout-info__hr" />
    </div>
    <div class="checkout-info__details">
      <div class="checkout-info__text">
        <h3>Shipment Address</h3>
      </div>
      <form class="checkout-info__form" action="">
        <div class="checkout-info__form-group">
          <input
            class="checkout-info__input"
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div class="checkout-info__form-group">
          <input
            class="checkout-info__input"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div class="checkout-info__form-group">
          <input
            class="checkout-info__input"
            type="text"
            placeholder="Address"
          />
        </div>
      </form>
    </div>
    <div class="checkout-info__btn">
      <base-button>Order</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "./UI/BaseButton.vue";
export default {
  components: { BaseButton },
  computed: {
    totalAmount() {
      return this.$store.getters.getAmount;
    },
    quantity() {
      return this.$store.getters.getQuantity;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-info {
  display: flex;
  flex-direction: column;
  height: 70vh;
  padding: 25px;
  &__total,
  &__quantity {
    display: flex;
    padding: 6px;
  }
  &__total-text,
  &__qty-text {
    flex-grow: 1;
    font-weight: 600;
  }

  &__total-price,
  &__total-qty {
    font-weight: 300;
  }
  &__hr {
    border: 0.5px solid #e5e5e5;
  }
  &__form-group {
    text-align: center;
    margin-bottom: 15px;
  }
  &__input {
    border: none;
    width: 90%;
    padding: 10px 15px;
    border-radius: 3px;
    background-color: transparent;
    border-bottom: 1px solid #e5e5e5;
    margin: 0 auto;
    outline: none;
    &:focus {
      border-bottom: 2px solid #b8b8b8;
    }
  }
  &__text {
    text-align: center;
    padding: 30px 0px;
  }
  &__details {
    flex-grow: 1;
  }
  &__btn {
    text-align: center;
  }
}
</style>
