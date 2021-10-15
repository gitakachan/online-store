<template>
  <div>
    <!-- 區域 -->
    <div class="card rounded-0 me-5 mb-4">
      <ul class="area-side-bar list-group list-group-flush rounded-0">
        <li
          v-for="item in areas"
          :key="item.id"
          class="list-group-item"
          @click="setArea(item.title)"
          :class="[
            selectArea === item.title ? 'bg-primary selected' : 'unselected',
          ]"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <!-- 分類 -->
    <div class="card rounded-0 me-5">
      <ul class="category-side-bar list-group list-group-flush rounded-0">
        <li
          v-for="item in categories"
          :key="item.id"
          class="list-group-item"
          @click="setCategory(item.title)"
          :class="[
            selectCategory === item.title
              ? 'bg-primary selected'
              : 'unselected',
          ]"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import dropdownSideBarMixin from "@/mixins/dropdownSideBarMixin.js"
export default {
  name: "SideBar",
  mixins: [dropdownSideBarMixin],
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.selected {
  transition: 0.4s ease;
}
</style>
