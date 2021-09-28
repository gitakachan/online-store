<template>
  <div class="container py-5">
    <h1 class="text-center bg-light py-5 mb-3 mb-md-6 shadow">
      越南新手旅遊攻略
    </h1>

    <div class="row" data-spy="scroll" data-target=".navbar" data-offset="50">
      <!-- laptopNav -->
      <div class="col-md-3 mb-4 d-none d-md-block">
        <div class="h-100 pt-0">
          <nav
            ref="introNav"
            id="introNav"
            class="navbar introNav navbar-light pt-md-6 bg-light flex-column align-items-stretch p-3"
          >
            <a @click.prevent class="navbar-brand" href="#">快速導覽</a>
            <nav class="nav nav-pills flex-column">
              <a
                @click.prevent="returnTop(this.$refs.one)"
                class="nav-link text-warning"
                href="#item-1"
                >越南簡介</a
              >
              <a
                @click.prevent="returnTop(this.$refs.two)"
                class="nav-link text-warning"
                href="#item-2"
                >環境氣候</a
              >
              <a
                @click.prevent="returnTop(this.$refs.three)"
                class="nav-link text-warning"
                href="#item-3"
                >交通方式</a
              >
              <a
                @click.prevent="returnTop(this.$refs.four)"
                class="nav-link text-warning"
                href="#item-4"
                >飲食特色</a
              >
              <a
                @click.prevent="returnTop(this.$refs.five)"
                class="nav-link text-warning"
                href="#item-5"
                >當地特產</a
              >
            </nav>
          </nav>
        </div>
      </div>

      <div class="col-md-9">
        <!-- mobileNav -->
        <nav
          ref="introNavMobile"
          class="navbar introNavMobile navbar-light bg-light flex-column align-items-stretch px-2 d-md-none"
        >
          <nav class="nav nav-pills">
            <ul class="nav nav-pills align-items-center">
              <li class="nav-item">
                <a
                  @click.prevent="returnTop(this.$refs.one)"
                  class="nav-link text-warning"
                  href="#item-1"
                  ><span class="d-none d-md-block">越南</span>簡介</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="returnTop(this.$refs.two)"
                  class="nav-link text-warning"
                  href="#item-2"
                  >環境<span class="d-none d-md-block">氣候</span></a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="returnTop(this.$refs.three)"
                  class="nav-link text-warning"
                  href="#item-3"
                  >交通<span class="d-none d-md-block">方式</span></a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="returnTop(this.$refs.four)"
                  class="nav-link text-warning"
                  href="#item-4"
                  >飲食<span class="d-none d-md-block">特色</span></a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="returnTop(this.$refs.five)"
                  class="nav-link text-warning"
                  href="#item-5"
                  ><span class="d-none d-md-block">當地</span>特產</a
                >
              </li>
            </ul>
          </nav>
        </nav>

        <!-- content -->
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-offset="0"
          tabindex="0"
          class="bg-primary px-4"
        >
          <!-- basic -->
          <div class="pb-3">
            <h2 ref="one" class="pt-8 pt-md-6" id="item-1">越南簡介</h2>
            <div>
              <h3>基本資料</h3>
              <ul>
                <li>簽證：台灣護照入境需簽證，可提前申辦也可落地簽。</li>
                <li>電壓：220V</li>
                <li>時區：台灣與越南之間的時差為1小時。 台灣超前越南1小時。</li>
                <li>
                  匯率：1台幣約可換820越南盾； 1美元約可換22800 越南盾 (2020/
                  09/ 25 更新)。
                </li>
              </ul>
              <p>
                越南位於東南亞中南半島東部沿海，為一社會主義國家。
                除本身民族文化以外，其歷史背景使越南多元融合了中國及法國風情；也因政治因素，共產色彩也是旅客到越南時可以關注的面向。
              </p>

              <h4>推薦景點</h4>
              <ul class="list-unstyled">
                <li>＊ 西貢聖母大教堂：胡志明市標誌性地標</li>
                <li>＊ 戰爭博物館：深度了解越戰歷史</li>
                <li>＊ 會安古城：好逛好拍的古城舊址</li>
              </ul>
            </div>
          </div>
          <!-- nature -->
          <div>
            <h2 ref="two" class="pt-8 pt-md-6" id="item-2">環境氣候</h2>
            <div>
              <p>
                越南國土狹長呈南北縱向，北部除了紅河三角洲以外多為高山，中有安南山脈綿延往下銜接，南部則有富饒的湄公河三角洲，海岸更有數千座大大小小的島嶼座落；除此之外，特殊的石灰岩喀斯特地形，在北部及中部構成壯觀的溶洞和石林等景觀。
              </p>
              <p>
                雖然越南為熱帶氣候國家，但因其豐富的地形，旅客可以在此感受到高山、海洋、炎熱、涼爽等多重體驗，若您在冬天來訪，當南部胡志明市仍值高溫三十五度時，同時北部山區的沙壩卻可能正在飄雪！
              </p>
              <h4>推薦景點</h4>
              <ul class="list-unstyled">
                <li>＊ 下龍灣：越南經典必訪</li>
                <li>＊ 美奈沙丘：讓人感動難忘的日出</li>
                <li>＊ 大叻：高原避暑法式山城</li>
                <li>＊ 沙壩：冬寒夏涼各有風情</li>
              </ul>
            </div>
          </div>
          <!-- transportation -->
          <div class="py-3">
            <h2 ref="three" class="pt-8 pt-md-6" id="item-3">交通方式</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dicta eos? Fugiat, magni. Atque, excepturi sequi pariatur dolorum
              quos reiciendis.
            </p>
          </div>
          <!-- food -->
          <div class="py-3">
            <h2 ref="four" class="pt-8 pt-md-6" id="item-4">飲食特色</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dicta eos? Fugiat, magni. Atque, excepturi sequi pariatur dolorum
              quos reiciendis.
            </p>
          </div>
          <!--specialty& souvenior -->
          <div class="py-3">
            <h2 ref="five" class="pt-8 pt-md-6" id="item-5">當地特產</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              dicta eos? Fugiat, magni. Atque, excepturi sequi pariatur dolorum
              quos reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScrollSpy from "bootstrap/js/dist/scrollspy.js";
import returnTopMixin from "@/mixins/returnTopMixin.js";

export default {
  name: "VnIntro",
  mixins: [returnTopMixin],
  data() {
    return {
      scrollspy: {},
      scrollspyMobile: {},
    };
  },
  mounted() {
    this.scrollSpy = new ScrollSpy(document.body, {
      target: this.$refs.introNav,
    });
    this.scrollSpyMobile = new ScrollSpy(document.body, {
      target: this.$refs.introNavMobile,
    });
  },
};
</script>
<style lang="scss" scoped>
.container {
  .introNav {
    position: sticky;
    top: 90px;
  }
  .introNavMobile {
    position: sticky;
    top: 50px;
  }
}
</style>
