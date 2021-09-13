export default {
  watch: {
    imgRefs() {
      this.resetImgSize();
    },
  },
  methods: {
    setImgRef(el) {
      if (el !== null) {
        this.imgRefs.push(el);
      }
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
    window.addEventListener("resize", this.resetImgSize);
  },
  beforeUpdate() {
    this.imgRefs = [];
  },

  destroyed() {
    window.removeEventListener("resize", this.resetImgSize);
  },
};
