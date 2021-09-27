<template>
  <div class="bg-light">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="name d-flex flex-row align-items-center mb-4">
            <div class="icon">
              <img class="img-fluid" src="@/assets/imgs/icon.png" alt="" />
            </div>
            <h4 class="title eng p-3 fw-lighter">
              VNEXT 專辦越南旅遊
            </h4>
          </div>
        </div>
        <div class="col-md-6">
          <div class="base">
            <h5 class="mb-3 fw-light">服務據點</h5>
            <ul class="eng list-unstyled fw-light">
              <li>台北 - TAIPEI</li>
              <li>河內 - HANOI</li>
              <li>峴港 - DA NANG</li>
              <li>胡志明市 - HO CHI MINH CITY</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="follow mb-3">
            <h5 class="mb-3 fw-light">追蹤我們</h5>
            <a href="#" target="_blank" class="m-3"
              ><i class="bi bi-twitter text-info"></i
            ></a>
            <a href="#" target="_blank" class="m-3"
              ><i class="bi bi-facebook fb"></i
            ></a>
            <a href="#" target="_blank" class="m-3"
              ><i class="bi bi-instagram ig"></i
            ></a>
          </div>
        </div>
        <div class="col-12 fw-light">
          <p class="my-2">
            &copy; 本網站為學習與練習用途
            <a
              href="https://www.linkedin.com/in/chenichen"
              target="_blank"
              class="m-1"
              ><i class="bi bi-linkedin fb"></i
            ></a>
            <a
              href="https://github.com/gitakachan/online-store"
              target="_blank"
              class="m-1"
              ><i class="bi bi-github text-dark"></i
            ></a>
          </p>
          <p>
            影片素材：Stock footage provided by Videvo, downloaded from
            <a href="https://www.videvo.net" target="_blank" class="text-info"
              >www.videvo.net</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.container {
  .icon img {
    width: 50px;
  }
  h4.title {
    letter-spacing: 8px;
  }
  ul {
    li {
      letter-spacing: 3px;
    }
  }
}
</style>
