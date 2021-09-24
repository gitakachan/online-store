<template>
  <div class="container">
    <div class="about-us-container position-relative">
      <h1 id="about-us">/ 關於我們 /</h1>
      <p class="bg-text text-white eng">About Us</p>

      <div class="text bg-primary lh-lg">
        <p>
          VNext
          成立於2017年，由一群熱愛越南旅遊文化的台灣人組成，為專辦越南旅遊的旅行社。致力於推廣越南旅遊、景點開發及台越文化交流。
        </p>
      </div>
    </div>
    <div class="office-container position-relative">
      <h1 id="office">/ 辦公室 /</h1>
      <p class="bg-text text-white eng">Office</p>

      <div class="text bg-primary lh-lg">
        <p>
          VNext
          總部位於台北，目前在越南胡志明市、河內、峴港皆有駐點辦公室，並且分派台灣員工駐點服務。
        </p>
        <br />
        <p>
          我們除了提供線上行程及票券預定，在各辦公室也提供旅遊諮詢、代訂旅館、車票、船票、包車、租借機車和腳踏車等服務。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.about-us-container,
.office-container {
  h1 {
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
  .text {
    margin: 30px auto 60px;
    box-shadow: 0 0 20px #ccc;
    padding: 20px 20px 20px 150px;
  }
}

@media (max-width: 375px) {
  .about-us-container .text,
  .office-container .text {
    padding-left: 20px;
  }
}
</style>
