export default {
  state() {
    return {
      cart: { products: [], totalAmount: 0, totalQuantity: 0 },
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      let isAlready = false;
      state.cart.products.forEach((el, ind) => {
        if (el.id === payload.id) {
          state.cart.products[ind].qty++;
          isAlready = true;
        }
      });
      if (!isAlready) {
        payload.qty = 1;
        state.cart.products.push(payload);
      }
      state.cart.totalAmount += payload.price;
      state.cart.totalQuantity++;
    },
    deleteProductFromCart(status, payload) {
      const indToDel = status.cart.products.findIndex(
        (el) => el.id === payload.id
      );
      status.cart.products.splice(indToDel, 1);
      status.cart.totalAmount -= payload.price * payload.qty;
      status.cart.totalQuantity -= payload.qty;
    },
    addQty(status, payload) {
      const currEl = status.cart.products.find((el) => el.id === payload.id);
      currEl.qty++;
      status.cart.totalAmount += currEl.price;
      status.cart.totalQuantity++;
    },
    reduceQty(status, payload) {
      const currEl = status.cart.products.find((el) => el.id === payload.id);
      currEl.qty--;
      if (currEl.qty === 0) {
        const indToDel = status.cart.products.findIndex(
          (el) => el.id === payload.id
        );
        status.cart.products.splice(indToDel, 1);
      }
      status.cart.totalAmount -= currEl.price;
      status.cart.totalQuantity--;
    },
  },
  actions: {
    addToCart(context, payload) {
      const prods = context.rootGetters.getProducts;
      const toCart = prods.find((prod) => prod.id === payload.id);
      context.commit("addProductToCart", toCart);
    },
    deleteFromCart(context, payload) {
      const prods = context.getters.getProductsCart;
      const fromCart = prods.find((prod) => prod.id === payload.id);
      context.commit("deleteProductFromCart", fromCart);
    },
    addQuantity(context, payload) {
      context.commit("addQty", payload);
    },
    reduceQuantity(context, payload) {
      context.commit("reduceQty", payload);
    },
  },
  getters: {
    getQuantity(state) {
      return state.cart.totalQuantity;
    },
    getAmount(state) {
      return state.cart.totalAmount;
    },
    getProductsCart(state) {
      return state.cart.products;
    },
  },
};
