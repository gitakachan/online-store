<template>
  <div class="w-100">
    <div class="d-flex">
      <label class="form-label" for="date">出發日：</label>
      <div class="text-danger" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
    <div class="input-group input-group-sm">
      <v-date-picker
        v-model="tempDate"
        :masks="masks"
        :min-date="min_date"
        :max-date="max_date"
        :disabled-dates="{ weekdays: notAvalibleWeekday }"
      >
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
      <button
        type="button"
        class="btn btn-secondary rounded-end  shadow-none"
        :disabled="!tempDate"
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
  props: {
    notAvalible: {
      type: Array,
    },
    startDate: {
      default: new Date(),
    },
  },
  inject: ["getReaciveMinDate", "getReaciveMaxDate"],
  data() {
    return {
      tempDate: null,
      masks: {
        input: "YYYY-MM-DD",
      },
      notAvalibleWeekday: [],
    };
  },
  computed: {
    errorMessage() {
      if (!this.tempDate) return "日期為必填";
      return "";
    },
    min_date() {
      return this.getReaciveMinDate();
    },
    max_date() {
      return this.getReaciveMaxDate();
    },
  },
  watch: {
    tempDate() {
      this.$emit("selectDate", this.tempDate);
    },
    notAvalible() {
      this.notAvalible.forEach((el) => {
        if (el === 7) {
          el = 1;
        } else {
          el++;
        }
        this.notAvalibleWeekday.push(el);
      });
    },
    startDate() {
      this.tempDate = this.startDate;
      let day = this.startDate.getDay();

      if (this.notAvalible.indexOf(day) === -1) {
        console.log("起始日為可使用的");
      } else {
        console.log("起始日卡到不可使用的weekday");
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
