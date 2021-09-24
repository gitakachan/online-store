<template>
  <div class="d-flex">
    <!-- 區域 -->
    <div class="dropdown me-3">
      <button
        class="btn btn-primary dropdown-toggle rounded-0 shadow-none"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ selectArea }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li v-for="item in areas" :key="item.id">
          <button
            type="button"
            @click="setArea(item.title)"
            class="dropdown-item"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
    <!-- 分類 -->
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle rounded-0 shadow-none"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ selectCategory }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <li v-for="item in categories" :key="item.id">
          <button
            type="button"
            @click="setCategory(item.title)"
            class="dropdown-item"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import dropdownSideBarMixin from "@/mixins/dropdownSideBarMixin.js";
export default {
  name: "DropDown",
  mixins: [dropdownSideBarMixin],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.selected {
  transition: 0.4s ease;
}
</style>
