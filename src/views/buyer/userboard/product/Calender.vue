<template>
  <div class="w-100">
    <div class="d-flex">
      <label class="form-label" for="date">出發日：</label>
      <div class="text-danger" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
    <div class="input-group input-group-sm">
      <v-date-picker v-model="tempDate" :masks="masks" :min-date="new Date()">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            id="date"
            class="bg-white py-2 px-3 border rounded-start"
            :class="{ 'border-danger': errorMessage }"
            :value="inputValue"
            v-on="inputEvents"
            placeholder="請選擇出發日期"
          />
        </template>
      </v-date-picker>
      <!-- <v-date-picker v-model="tempDate" :masks="masks" :min-date="new Date()">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            id="date"
            class="bg-white py-2 px-3 border rounded-start"
            :class="{ 'border-danger': errorMessage }"
            :value="inputValue"
            v-on="inputEvents"
            placeholder="請選擇出發日期"
          />
        </template>
      </v-date-picker> -->
      <button
        type="button"
        class="btn btn-secondary rounded-end  shadow-none"
        :disabled="!date"
        @click="tempDate = null"
      >
        清除
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calender",
  inject: ["date"],
  data() {
    return {
      tempDate: null,
      masks: {
        input: "YYYY-MM-DD",
      },
    };
  },
  computed: {
    errorMessage() {
      if (!this.tempDate) return "日期為必填";
      return "";
    },
  },
  watch: {
    tempDate() {
      this.$emit("selectDate", this.tempDate);
    },
  },
  mounted() {
    this.tempDate = this.date;
  },
};
</script>
<style lang="scss" scoped></style>
