module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard", "prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // semi: ["error", "always"], // 結尾要加分號
    // quotes: ["error", "double"], // 字串雙引號
    camelcase: [0, { properties: "always" }],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  plugins: ["prettier"],
};
