<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref="modal"
      data-bs-backdrop="static"
    >
      <Form v-slot="{ errors, validate, resetForm }">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>{{ status }}產品</span>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="resetForm"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-8">
                  <!-- title -->
                  <div class="mb-3">
                    <label for="title" class="form-label fw-bold">標題*</label>
                    <Field
                      id="title"
                      name="標題"
                      type="text"
                      class="form-control"
                      placeholder="請輸入標題"
                      rules="required"
                      :class="{ 'is-invalid': errors['標題'] }"
                      v-model="tempProduct.title"
                    />
                    <ErrorMessage name="標題" class="invalid-feedback" />
                  </div>
                  <div class="row gx-2">
                    <!-- category -->
                    <div class="mb-3 col">
                      <label for="category" class="form-labe fw-bold"
                        >分類*</label
                      >
                      <Field
                        id="category"
                        name="分類"
                        class="form-control"
                        v-model="tempProduct.category"
                        as="select"
                        :class="{ 'is-invalid': errors['分類'] }"
                        rules="required"
                      >
                        <option disabled value="">請選擇分類</option>
                        <option
                          v-for="item in categoryOptionList"
                          :key="item"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </Field>
                      <ErrorMessage name="分類" class="invalid-feedback" />
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
                  <!-- tag -->
                  <div class="row gx-2">
                    <div class="mb-3 col">
                      <label for="tag" class="form-label">標籤</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tag"
                        placeholder="請輸入標籤"
                        v-model="tempProduct.tag"
                      />
                    </div>
                  </div>

                  <div class="row gx-2">
                    <!-- area -->
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
                    <!-- unit -->
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label fw-bold"
                        >單位*</label
                      >
                      <Field
                        id="unit"
                        name="單位"
                        type="text"
                        class="form-control"
                        placeholder="請輸入單位"
                        rules="required"
                        :class="{ 'is-invalid': errors['單位'] }"
                        v-model="tempProduct.unit"
                      />
                      <ErrorMessage name="單位" class="invalid-feedback" />
                    </div>
                  </div>
                  <!-- 價格 -->
                  <div class="row gx-2">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label fw-bold"
                        >原價*</label
                      >
                      <Field
                        id="origin_price"
                        name="原價"
                        type="number"
                        class="form-control"
                        placeholder="請輸入原價"
                        rules="required"
                        :class="{ 'is-invalid': errors['原價'] }"
                        v-model.number="tempProduct.origin_price"
                      />
                      <ErrorMessage name="原價" class="invalid-feedback" />
                    </div>

                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label fw-bold"
                        >售價*</label
                      >
                      <Field
                        id="price"
                        name="售價"
                        type="number"
                        class="form-control"
                        placeholder="請輸入售價"
                        rules="required"
                        :class="{ 'is-invalid': errors['售價'] }"
                        v-model.number="tempProduct.price"
                      />
                      <ErrorMessage name="售價" class="invalid-feedback" />
                    </div>
                  </div>
                  <!-- 日期 -->
                  <hr />
                  <div class="row gx-2">
                    <!-- 星期幾 -->
                    <div class="mb-3 col-12">
                      <div>可使用星期</div>
                      <section class="group">
                        <div
                          v-for="item in weekdays"
                          :key="item.id"
                          class="form-check form-check-inline"
                        >
                          <Field
                            class="form-check-input"
                            name="weekdays"
                            type="checkbox"
                            :id="item.id"
                            :value="item.id"
                            v-model="tempProduct.weekdays"
                            rules="required"
                            :class="{ 'is-invalid': errors['weekdays'] }"
                          />
                          <label class="form-check-label" :for="item.id">{{
                            item.title
                          }}</label>
                        </div>
                        <br />
                        <ErrorMessage class="text-danger" name="weekdays" />
                      </section>
                    </div>
                  </div>
                  <div class="mb-3 col-12">
                    <div>最早可預定日</div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        name="start"
                        type="radio"
                        id="today"
                        v-model="startDate"
                        value="default"
                      />
                      <label class="form-check-label" for="today"> 今天 </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="StartDate"
                        name="start"
                        v-model="startDate"
                        value="true"
                        @click="setDefaultStart"
                      />
                      <label class="form-check-label" for="startDate">
                        自定
                      </label>
                    </div>
                  </div>
                  <div class="mb-3 col-md-6">
                    <v-date-picker
                      v-model="tempProduct.min_date"
                      :min-date="new Date()"
                    >
                      <template v-slot="{ inputValue, inputEvents }">
                        <input
                          class="form-control"
                          :value="inputValue"
                          v-on="inputEvents"
                          :disabled="startDate === 'default'"
                          id="min_date"
                        />
                      </template>
                    </v-date-picker>
                  </div>
                  <div class="mb-3 col-12">
                    <div>最晚可預定日</div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        name="end"
                        type="radio"
                        id="inAYear"
                        v-model="endDate"
                        value="default"
                      />
                      <label class="form-check-label" for="inAYear">
                        一年以內
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="endDate"
                        name="end"
                        v-model="endDate"
                        value="true"
                        @click="setDefaultEnd"
                      />
                      <label class="form-check-label" for="endDate">
                        自定
                      </label>
                    </div>
                    <div class="mb-3 col-md-6">
                      <v-date-picker
                        v-model="tempProduct.max_date"
                        :min-date="new Date()"
                      >
                        <template v-slot="{ inputValue, inputEvents }">
                          <input
                            class="form-control"
                            :value="inputValue"
                            v-on="inputEvents"
                            :disabled="endDate === 'default'"
                            id="max_date"
                          />
                        </template>
                      </v-date-picker>
                    </div>
                  </div>
                  <hr />
                  <!-- 簡短描述 -->
                  <div class="mb-3">
                    <label for="short_description" class="form-label"
                      >簡短行程描述(呈現在商品列表)</label
                    >
                    <textarea
                      type="text"
                      class="form-control"
                      id="short_description"
                      placeholder="請輸入簡短行程描述"
                      v-model="tempProduct.short_description"
                    ></textarea>
                  </div>
                  <!-- 詳細描述 -->
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
                  <!-- 內容 -->
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
                  <!-- 是否啟用 -->
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
                @click="resetForm"
              >
                取消
              </button>
              <button
                @click="
                  validate();
                  $emit('updateProduct', tempProduct);
                "
                type="button"
                class="btn btn-primary"
                :disabled="submitBtn"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import ModalMixin from "@/mixins/ModalMixin";
import { reverseWeekdayNumber } from "@/methods/weekday.js";

export default {
  name: "ProductModal",
  mixins: [ModalMixin],
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    status: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tempProduct: {
        imagesUrl: [], // 讓input的:disabled可以有讀取依據
      },
      categoryOptionList: [
        "交通",
        "餐飲",
        "一日遊、多日遊",
        "門票",
        "戶外活動",
        "特殊體驗",
      ],
      weekdays: [
        { id: 1, title: "一" },
        { id: 2, title: "二" },
        { id: 3, title: "三" },
        { id: 4, title: "四" },
        { id: 5, title: "五" },
        { id: 6, title: "六" },
        { id: 7, title: "日" },
      ],
      startDate: "default",
      endDate: "default",
    };
  },
  computed: {
    submitBtn() {
      // 必填項目若未填寫則無法送出建立產品請求
      const {
        title,
        category,
        unit,
        price,
        origin_price,
        weekdays, // type:Array
      } = this.tempProduct;
      const arr = [title, category, unit, price, origin_price, weekdays];
      const num = arr.findIndex((item) => !item || item.length === 0);
      if (num < 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    // 上傳圖片
    uploadFile() {
      if (
        this.$refs.fileInput.files.length + this.tempProduct.imagesUrl.length >
        5
      ) {
        alert("最多只能選擇五張圖片");
      } else {
        this.$refs.fileInput.files.forEach((element) => {
          const uploadedFile = element; // 取得檔案
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
      const input = e.target.value;
      this.tempProduct.imagesUrl.push(input);
      e.target.value = "";
    },
    removeImage(item) {
      const index = this.tempProduct.imagesUrl.indexOf(item);
      this.tempProduct.imagesUrl.splice(index, 1);
    },
    reverseWeekdayNumber,
    setDefaultStart() {
      this.tempProduct.min_date = new Date();
    },
    setDefaultEnd() {
      this.tempProduct.max_date = new Date();
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
      if (!this.tempProduct.weekdays) {
        this.tempProduct.weekdays = [1, 2, 3, 4, 5, 6, 7]; // 預設全選
      }
      if (this.tempProduct.min_date) {
        this.startDate = true;
      } else {
        this.startDate = "default";
      }
      if (this.tempProduct.max_date) {
        this.endDate = true;
      } else {
        this.endDate = "default";
      }
    },
    "tempProduct.weekdays"() {
      // 找出not avilable 的日子
      this.tempProduct.notAvalibleWeekday = this.reverseWeekdayNumber(
        this.tempProduct.weekdays
      );
    },
    startDate() {
      if (this.startDate === "default") {
        this.tempProduct.min_date = null;
      }
    },
    endDate() {
      if (this.endDate === "default") {
        this.tempProduct.max_date = null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
textarea {
  min-height: 100px;
}
</style>
