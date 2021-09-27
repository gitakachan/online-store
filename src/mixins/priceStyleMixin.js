export default {
  methods: {
    priceStyle(price,unit) {
      return `<span class="eng">NT$ ${price.toLocaleString()} / </span>${
        unit
      }`;
    },
  },
};
