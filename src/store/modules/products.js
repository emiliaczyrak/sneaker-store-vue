export default {
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Nike Air Jordan I",
          color_way: "University Blue",
          description:
            "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
          price: 959.99,
          image:
            "https://cdn.shopify.com/s/files/1/2999/5106/products/True-to-Sole-Air-Jordan-1-Retro-High-University-Blue-01_3df76d08-2391-4241-9fad-59581aff8423_600x.png?v=1627117603",
        },
        {
          id: 2,
          name: "Nike Dunk",
          color_way: "Panda",
          description:
            "The classic Nike Dunk Low sneakers have become increasingly popular again recently. The Nike Dunk Low Panda is a sneaker with a very nice overall impression. The upper of this low-top sneaker is dominated by white and black. It goes well with practically any outfit..",
          price: 429.99,
          image:
            "https://onsetshoes.com/wp-content/uploads/2021/02/wethenew-sneakers-france-nike-dunk-low-white-black-release-date-dd1503-101-1_1200x0.png",
        },
        {
          id: 3,
          name: "New Balance 550",
          color_way: "Navy Blue",
          description:
            "New Balance, the Boston-based brand was founded in 1906, making them one of the oldest sneaker brands with over a century of history. In the last decade, New Balance has enjoyed it's renaissance, fuelled by the collaborations it has launched, with models designed by the likes of Bodega, JJJJound and Kith.",
          price: 529.99,
          image:
            "https://onsetshoes.com/wp-content/uploads/2021/09/new-balance-550-white-navy-1-1000.png",
        },
        {
          id: 4,
          name: "New Balance 990",
          color_way: "Grey",
          description:
            "New Balance, the Boston-based brand was founded in 1906, making them one of the oldest sneaker brands with over a century of history. In the last decade, New Balance has enjoyed it's renaissance, fuelled by the collaborations it has launched, with models designed by the likes of Bodega, JJJJound and Kith.",
          price: 319.99,
          image:
            "https://cdn.shopify.com/s/files/1/2358/2817/products/990v5-grey-934018.png?v=1638812255",
        },
        {
          id: 5,
          name: "Nike Air Jordan I",
          color_way: "Mocha",
          description:
            "The first Air Jordan 1 colorway was introduced in 1984 and the success of the silhouette is unbroken. Countless colorways and collaborations have been released since then, many of them have become true icons. AJ1s are undoubtedly one of the most popular sneakers for sneakerheads today.",
          price: 949.99,
          image:
            "https://cdn.shopify.com/s/files/1/2999/5106/products/555088-105_1_1024x.png?v=1606247460",
        },
        {
          id: 6,
          name: "Nike Dunk",
          color_way: "Kentucky",
          description:
            "The classic Nike Dunk Low sneakers have become increasingly popular again recently. The Nike Dunk Low Kentucky is a sneaker with a very nice overall impression. The upper of this low-top sneaker is dominated by white and dark blue. It goes well with practically any outfit.",
          price: 429.99,
          image:
            "https://hypescrape.com/wp-content/uploads/2021/03/Wethenew-Snekaers-France-Nike-Dunk-Low-SP-Kentucky-1_2000x_6c1602d3-e7a6-4700-8bad-43be5cd1cb7c.png",
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
