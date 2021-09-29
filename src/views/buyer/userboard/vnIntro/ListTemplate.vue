<template>
  <div>
    <slot name="header"></slot>
    <ul :style="{ 'list-style-type': listStyle }">
      <li v-for="(item, index) in listItem" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ListTemplate",
  props: {
    listItem: {
      type: Array,
      default: [],
    },
    listStyle: {
      type: String,
      default: "'＊ '",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
li {
  transition: background-color, 0.2s ease-in;
  &:hover {
    background-color: rgb(246, 252, 183);
  }
}
</style>
