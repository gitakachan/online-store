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
      default: [], //避免每天都可出發時，notAvalible為null
    },
    min_date: {
      default: new Date(),
    },
    max_date: {
      default: new Date().setFullYear(new Date().getFullYear() + 1),
    },
  },
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
    min_date() {
      this.tempDate = this.min_date;

      //要確認是否會卡到不可使用的weekday 若卡到就延後一天 直到是可用的weekday
      for (let i = 0; i < this.notAvalible.length; i++) {
        let day = this.tempDate.getDay();
        if (day == this.notAvalible[i]) {
          this.tempDate = new Date(
            this.tempDate.setDate(this.tempDate.getDate() + 1)
          );
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
