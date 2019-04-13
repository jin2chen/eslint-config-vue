module.exports = {
  plugins: ["prettier"],
  extends: [
    "standard",
    "plugin:vue/recommended",
    "prettier",
    "prettier/standard",
    "prettier/vue"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};
