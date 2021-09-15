<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label fw-bold">標題*</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title"
                  />
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col">
                    <label for="category" class="form-label fw-bold"
                      >分類*</label
                    >

                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="tempProduct.category"
                    >
                      <option value="" disabled>選擇分類</option>
                      <option
                        v-for="item in categoryOptionList"
                        :key="item"
                        :value="item"
                        >{{ item }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col">
                    <label for="location" class="form-label">地點</label>
                    <input
                      type="text"
                      class="form-control"
                      id="location"
                      placeholder="請輸入地點"
                      v-model="tempProduct.location"
                    />
                  </div>
                </div>
                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="area" class="form-label">區域</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      v-model="tempProduct.area"
                    >
                      <option value="" disabled>選擇地點</option>
                      <option value="北越">北越</option>
                      <option value="中越">中越</option>
                      <option value="南越">南越</option>
                      <option value="離島">離島</option>
                    </select>
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label fw-bold">單位*</label>
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                  </div>
                </div>

                <div class="row gx-2">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label fw-bold"
                      >原價*</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label fw-bold">售價*</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="description" class="form-label"
                    >簡短行程描述(呈現在商品列表)</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入簡短行程描述"
                    v-model="tempProduct.short_description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label"
                    >詳細行程描述</label
                  >
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入行程描述"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">行程內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <hr class="d-sm-none" />
                <!-- 多圖 -->
                <div>
                  <h6>最多可選五張圖片</h6>
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="image"
                      placeholder="請輸入圖片連結"
                      @change="addUrl($event)"
                      :disabled="tempProduct.imagesUrl.length >= 5"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="customFile" class="form-label"
                      >或 上傳圖片
                      <i class="fas fa-spinner fa-spin"></i>
                    </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      @change="uploadFile"
                      ref="fileInput"
                      multiple
                      :disabled="tempProduct.imagesUrl.length >= 5"
                    />
                  </div>
                  <div
                    v-for="(item, index) in tempProduct.imagesUrl"
                    :key="item"
                    class="mb-3 input-group"
                  >
                    <input
                      type="url"
                      class="form-control form-control"
                      placeholder="請輸入連結"
                      @change="addUrl($event)"
                      v-model="tempProduct.imagesUrl[index]"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="removeImage(item)"
                    >
                      移除
                    </button>
                  </div>
                </div>
                <!-- 預覽圖片 -->
                <img
                  v-for="item in tempProduct.imagesUrl"
                  :key="item"
                  :src="item"
                  class="img-fluid mb-3"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              @click="$emit('updateProduct', tempProduct)"
              type="button"
              class="btn btn-primary"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalMixin from "@/mixins/ModalMixin";
export default {
  name: "ProductModal",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      modal: {},
      tempProduct: {
        // title: "",
        // category: "",
        // origin_price: 0,
        // price: 0,
        // unit: "", //ex. 個
        // description: "",
        // content: "",
        // is_enabled: 1, //1為是
        // imageUrl: "",
        imagesUrl: [], //讓input的:disabled可以有讀取依據
      },
      categoryOptionList: [
        "交通",
        "餐飲",
        "一日遊、多日遊",
        "門票",
        "戶外活動",
        "特殊體驗",
      ],
    };
  },
  methods: {
    //上傳圖片
    uploadFile() {
      if (
        this.$refs.fileInput.files.length + this.tempProduct.imagesUrl.length >=
        5
      ) {
        alert("最多只能選擇五張圖片");
      } else {
        this.$refs.fileInput.files.forEach((element) => {
          const uploadedFile = element; //取得檔案
          const formData = new FormData();
          formData.append("file-to-upload", uploadedFile);
          const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
          this.axios.post(api, formData).then((response) => {
            if (response.data.success) {
              this.tempProduct.imagesUrl.push(response.data.imageUrl);
            }
          });
        });
      }
    },
    addUrl(e) {
      let input = e.target.value;
      this.tempProduct.imagesUrl.push(input);
      e.target.value = "";
    },
    removeImage(item) {
      let index = this.tempProduct.imagesUrl.indexOf(item);
      this.tempProduct.imagesUrl.splice(index, 1);
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product; //每次傳新的prop的product進來後，就將要撰寫資料的tempProduct指向空的prop的product
      if (!this.tempProduct.imagesUrl) {
        //新產品先初始化，以免填圖片時imagesUrl為undefined；舊產品則是避免之前沒有填過圖片，imagesUrl會為undefined
        this.tempProduct.imagesUrl = [];
      }
    },
  },
  mixins: [ModalMixin],
};
</script>
<style lang="scss" scoped>
textarea {
  min-height: 100px;
}
</style>
