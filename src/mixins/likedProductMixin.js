export default {
  inject: ["resMsg"],
  data: {
    likedStorage: JSON.parse(localStorage.getItem("likedProducts")) || []
  },
  methods: {
    addLiked (id) {
      // 是否存在於liked array
      const index = this.likedStorage.findIndex((el) => {
        return id === el
      })

      if (this.likedStorage.indexOf(id) < 0) {
        // 不存在則加入
        this.likedStorage.push(id)
        this.resMsg({ data: { success: true } }, "收藏")
      } else {
        // 存在則移除
        this.likedStorage.splice(index, 1)
        this.resMsg({ data: { success: true } }, "取消收藏")
      }
      localStorage.setItem("likedProducts", JSON.stringify(this.likedStorage)) // local storage只能存字串
    }
  },
  computed: {
    likedStatus () {
      // 綁定class設定樣式
      return function (id) {
        if (this.likedStorage.indexOf(id) > -1) {
          return "added"
        } else {
          return ""
        }
      }
    }
    // likedList() {
    //   return this.products.filter((item) => {
    //     return this.likedStorage.indexOf(item.id) > -1;
    //   });
    // },
  }
}
