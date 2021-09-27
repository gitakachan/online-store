<template>
  <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentP === 1 }">
          <a
            @click.prevent="prevP"
            class="page-link"
            :class="[currentP === 1 ? 'text-secondary bg-light' : 'text-dark']"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="item in page.total_pages"
          :class="{ active: item === page.current_page }"
          :key="item"
          class="page-item"
        >
          <a
            @click.prevent="$emit('updatePage', item)"
            class="page-link text-dark num"
            href="#"
          >
            {{ item }}
          </a>
        </li>

        <li
          class="page-item"
          :class="{ disabled: currentP >= page.total_pages }"
        >
          <a
            @click.prevent="nextP"
            class="page-link"
            :class="[
              currentP >= page.total_pages
                ? 'text-secondary bg-light'
                : 'text-dark',
            ]"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    page: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      currentP: 1,
    };
  },
  watch: {
    page() {
      //每次傳入新的props時，更新this.currentP
      this.currentP = this.page.current_page;
    },
  },
  methods: {
    nextP() {
      this.currentP++;
      this.$emit("updatePage", this.currentP);
    },
    prevP() {
      this.currentP--;
      this.$emit("updatePage", this.currentP);
    },
  },
};
</script>
<style lang="scss" scoped>
.page-link {
  &:focus {
    box-shadow: none;
  }
}
</style>
