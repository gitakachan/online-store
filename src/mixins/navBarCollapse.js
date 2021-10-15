export default {
  methods: {
    collapse () {
      if (window.innerWidth < 768) {
        this.$refs.collapseBtn.click()
      }
    }
  }
}
