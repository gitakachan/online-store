<template>
  <div class="container">
    <section class="about-us-container position-relative">
      <h1 id="about-us">/ 關於我們 /</h1>
      <p class="bg-text text-white eng">About Us</p>

      <div class="content gray-box-shadow bg-primary lh-lg">
        <p class="mb-3 eng">
          VNext 成立於 2017
          年，由一群熱愛越南旅遊文化的台灣人組成，為專辦越南旅遊的旅行社。
          <br />
          致力於推廣越南旅遊、景點開發及台越文化交流。
        </p>
        <images :imgs="memberImgs"></images>
      </div>
    </section>
    <!-- service -->
    <section class="service-container position-relative">
      <h2 id="service">/ 業務及服務 /</h2>
      <p class="bg-text text-white eng">Service</p>

      <div class="content gray-box-shadow  bg-primary lh-lg">
        <p class="eng">
          VNext
          總部位於台北，目前在越南胡志明市、河內、峴港皆有駐點辦公室，並且分派台灣員工駐點服務。
        </p>
        <br />
        <p>
          除了提供線上行程及票券預定，VNext
          在各辦公室也提供旅遊諮詢、簽證代辦、旅館代訂、導覽、車票、船票、機票、包車、租借機車和腳踏車等相關服務，幫助您更深入探索越南的這片土地，歡迎聯絡我們！
        </p>
        <br />
        <images :imgs="serviceImgs"></images>
        <ul class="list-unstyled mt-3">
          <li v-for="item in office" :key="item.ref">
            <a
              @click.prevent="returnTop(this.$refs[item.ref])"
              href="#"
              class="text-success"
              ><i class="bi bi-arrow-up-right"></i> {{ item.location }}辦公室</a
            >
          </li>
        </ul>
      </div>
    </section>
    <!-- contact -->
    <section class="about-us-container position-relative">
      <h2>/ 聯絡我們 /</h2>
      <p class="bg-text text-white eng">Contact</p>
      <div class="content eng gray-box-shadow map bg-primary lh-lg">
        <div class="container">
          <div>
            <div v-for="item in office" :key="item.ref" class="row">
              <div class="col-md-6 mb-3">
                <div
                  class="text d-flex flex-column justify-content-center h-100"
                >
                  <h3 :ref="item.ref">{{ item.location }}辦公室</h3>
                  <p>電話：{{ item.tel }}</p>
                  <p>Email：{{ item.Email }}</p>
                  <p>地址：{{ item.address }}</p>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="map">
                  <iframe
                    class="w-100"
                    :src="item.map"
                    width="400"
                    height="300"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <hr class="text-white border border-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Images from "./Images.vue";
export default {
  components: { Images },
  name: "Cart",
  data() {
    return {
      memberImgs: [
        "https://images.unsplash.com/photo-1551854591-e778089e0b8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80",
        "https://images.unsplash.com/photo-1579389082289-3d6922d506c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1534471770828-9bde524ee634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      ],
      serviceImgs: [
        "https://images.unsplash.com/photo-1587813369290-091c9d432daf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        "https://images.unsplash.com/photo-1577598204579-3be87a14bfb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1516289637866-1e298d7c6a54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      ],
      office: [
        {
          ref: "taipei",
          location: "台北",
          tel: "(02) 255-5871",
          Email: "vnext_taipei@mail.net",
          address: "台北市大安區新生南路一段83號 宜津大樓 9F",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1507.1994976330266!2d121.53307620390167!3d25.04144283366844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97c590d2ea7%3A0x13e0b5027bccc792!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5paw55Sf5Y2X6Lev5LiA5q61ODPomZ_lrpzmtKXlpKfmqJM!5e0!3m2!1szh-TW!2stw!4v1632472173078!5m2!1szh-TW!2stw",
        },
        {
          ref: "hanoi",
          location: "河內",
          tel: "(84-04) 826-1247",
          Email: "vnext_hanoi@mail.net",
          address: "146 Chương Dương Độ, Chuong Duong Do, 還劍郡 Hà Nội, 越南",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.061560257776!2d105.8585422502099!3d21.030222685928823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc27abf9b0f%3A0x57c48d8dfa970d96!2zMTQ2IENoxrDGoW5nIETGsMahbmcgxJDhu5ksIEhvw6BuIEtp4bq_bSwgSMOgIE7hu5lpLCDotorljZc!5e0!3m2!1szh-TW!2stw!4v1632471673409!5m2!1szh-TW!2stw",
        },
        {
          ref: "danang",
          location: "峴港",
          tel: "(84-511) 669-1297",
          Email: "vnext_danang@mail.net",
          address: "125 Nguyễn Văn Linh, Vĩnh Trung, Q. Thanh Khê, 峴港越南",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.105755195794!2d108.21056531456593!3d16.060000988886618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b5e8fc2767%3A0x355c74ec67255daa!2zMTI1IE5ndXnhu4VuIFbEg24gTGluaCwgVsSpbmggVHJ1bmcsIFEuIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMOi2iuWNlw!5e0!3m2!1szh-TW!2stw!4v1632471361535!5m2!1szh-TW!2stw",
        },
        {
          ref: "hcmc",
          location: "胡志明市",
          tel: "(84-8) 820-7533",
          Email: "vnext_hcmc@mail.net",
          address:
            "Nguyễn Phi Khanh, Tân Định, Quận 1, Thành phố Hồ Chí Minh, 越南",
          map:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2558185454773!2d106.69145685006222!3d10.791708492273424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cc839f1123%3A0x7421856513df9412!2zTmd1eeG7hW4gUGhpIEtoYW5oLCBUw6JuIMSQ4buLbmgsIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIOi2iuWNlw!5e0!3m2!1szh-TW!2stw!4v1632467261318!5m2!1szh-TW!2stw",
        },
      ],
    };
  },
  methods: {
    returnTop(ref) {
      ref.scrollIntoView(true);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding-bottom: 100px;
  overflow: hidden;
  section {
    h1,
    h2,
    h3 {
      padding-top: 70px;
    }

    p.bg-text {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 100px;
      z-index: -100;
      text-shadow: 3px 3px 2px #ddd; //文字外框
    }
    .content {
      margin: 30px auto 60px;
      padding: 20px 20px 20px 150px;
    }
  }
}

@media (max-width: 576px) {
  .container section {
    .content {
      padding-left: 20px;
    }
    p.bg-text {
      font-size: 80px;
    }
  }
}
</style>
