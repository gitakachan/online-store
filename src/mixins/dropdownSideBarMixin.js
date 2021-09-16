export default {
  inject: ["emitter"],
  props: {
    selectArea: {
      required: true,
    },
    selectCategory: {
      required: true,
    },
  },
  data() {
    return {
      areas: [
        {
          id: "all",
          title: "所有區域",
        },
        {
          id: "north",
          title: "北越",
        },
        {
          id: "central",
          title: "南越",
        },
        {
          id: "south",
          title: "中越",
        },
        {
          id: "island",
          title: "離島",
        },
      ],
      categories: [
        {
          id: "all",
          title: "所有分類",
        },
        {
          id: "food",
          title: "餐飲",
        },
        {
          id: "transport",
          title: "交通",
        },
        {
          id: "tour",
          title: "一日遊、多日遊",
        },
        {
          id: "ticket",
          title: "門票",
        },
        {
          id: "outdoor",
          title: "戶外活動",
        },
        {
          id: "experience",
          title: "特殊體驗",
        },
      ],
    };
  },
  methods: {
    setArea(item) {
      this.$emit("setArea", item);
    },
    setCategory(item) {
      this.$emit("setCategory", item);
    },
  },
};
