export default {
  methods: {
    setImgRef(el) {
      this.imgRefs.push(el);
      this.resetImgSize();
    },
    resetImgSize() {
      for (let i = 0; i < this.imgRefs.length; i++) {
        if (
          this.imgRefs[i] !== null &&
          this.imgRefs[i].offsetHeight !== this.imgRefs[i].offsetWidth
        ) {
          this.imgRefs[i].style.height = this.imgRefs[i].offsetWidth + "px";
        }
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      //全部頁面渲染完成後執行
      window.addEventListener("resize", this.resetImgSize);
    });
  },
  beforeUpdate() {
    this.imgRefs = [];
  },
  destroyed() {
    window.removeEventListener("resize", this.resetImgSize);
  },
};
