export default {
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async loadProducts(context) {
      const response = await fetch(
        "https://snkrs-shop-default-rtdb.firebaseio.com/products.json"
      );
      const responseData = await response.json();
      const prods = [];
      if (!response.ok) {
        const err = new Error(responseData.message || "Error");
        throw err;
      }
      for (let key in responseData) {
        prods.push({
          id: key * 1,
          name: responseData[key].name,
          color_way: responseData[key].color_way,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      context.commit("setProducts", prods);
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
