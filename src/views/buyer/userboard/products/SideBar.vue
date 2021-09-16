<template>
  <div>
    <!-- 區域 -->
    <div class="card me-5 mb-4">
      <ul class="area-side-bar list-group list-group-flush">
        <li
          v-for="item in areas"
          :key="item.id"
          class="list-group-item"
          @click="setArea(item.title)"
          :class="{ selected: selectArea === item.title }"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <!-- 分類 -->
    <div class="card me-5">
      <ul class="category-side-bar list-group list-group-flush">
        <li
          v-for="item in categories"
          :key="item.id"
          class="list-group-item"
          @click="setCategory(item.title)"
          :class="{ selected: selectCategory === item.title }"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import dropdownSideBarMixin from "@/mixins/dropdownSideBarMixin.js";
export default {
  name: "SideBar",
  mixins: [dropdownSideBarMixin],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.selected {
  background-color: rgb(233, 136, 136);
  transition: 0.4s ease;
}
</style>
