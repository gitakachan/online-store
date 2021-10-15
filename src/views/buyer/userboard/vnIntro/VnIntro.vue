<template>
  <div class="container py-5">
    <img
      class="img-fluid pb-1 pb-md-5"
      src="@/assets/imgs/introBg.png"
      alt="越南新手旅遊攻略"
    />
    <!-- 圖片有標題但還是有隱藏的h1 -->
    <h1 class="text-center position-absolute" style="color:transparent">
      越南新手旅遊攻略
    </h1>

    <div class="row" data-spy="scroll" data-target=".navbar" data-offset="50">
      <!-- laptopNav -->
      <div class="col-md-3 mb-4 d-none d-md-block">
        <div class="h-100 pt-0">
          <nav
            ref="introNav"
            id="introNav"
            class="navbar introNav navbar-light py-md-6 bg-light flex-column align-items-stretch p-3 position-sticky"
          >
            <a @click.prevent class="navbar-brand" href="#">快速導覽</a>
            <nav class="nav nav-pills flex-column">
              <a
                v-for="item in nav"
                :key="item.ref"
                @click.prevent="returnTop(this.$refs[item.ref])"
                class="nav-link text-dark rounded-0 text-center"
                :href="`#${item.ref}`"
                >{{ item.laptop }}</a
              >
            </nav>
          </nav>
        </div>
      </div>

      <div class="col-md-9">
        <!-- mobileNav -->
        <nav
          ref="introNavMobile"
          class="navbar introNavMobile navbar-light p-0 bg-white d-flex align-items-stretch d-md-none position-sticky"
        >
          <nav class="nav w-100">
            <ul class="nav nav-pills w-100 d-flex">
              <li
                v-for="item in nav"
                :key="item.ref"
                class="nav-item flex-grow-1"
              >
                <a
                  v-html="item.mobile"
                  @click.prevent="returnTop(this.$refs[item.ref])"
                  class="nav-link text-dark text-center rounded-0"
                  :href="`#${item.ref}`"
                ></a>
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
          class="content bg-primary px-4 eng"
        >
          <!-- intro -->
          <div class="border-bottom border-white border-2">
            <h2
              v-html="nav.intro.mobile"
              ref="intro"
              class="pt-8 pt-md-6"
              id="intro"
            ></h2>
            <div>
              <p>{{ nav.intro.paragraph }}</p>
              <list-template
                :listItem="nav.intro.basicInfo.listItem"
                :listStyle="nav.intro.basicInfo.listStyle"
              ></list-template>
            </div>
          </div>
          <!-- nature -->
          <div class="border-bottom border-white border-2">
            <h2
              v-html="nav.nature.mobile"
              ref="nature"
              class="pt-8 pt-md-6"
              id="nature"
            ></h2>
            <div>
              <p v-for="(item, index) in nav.nature.paragraphs" :key="index">
                {{ item }}
              </p>
              <list-template :listItem="nav.nature.sightSeeing.listItem">
                <template v-slot:header>
                  <h4>{{ nav.nature.sightSeeing.title }}</h4>
                </template>
              </list-template>
            </div>
          </div>
          <!-- transportation -->
          <div class="border-bottom border-white border-2">
            <h2
              v-html="nav.transportation.mobile"
              ref="transportation"
              class="pt-8 pt-md-6"
              id="transportation"
            ></h2>
            <p
              v-for="(item, index) in nav.transportation.paragraphs"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
          <!-- food -->
          <div class="border-bottom border-white border-2">
            <h2
              v-html="nav.food.mobile"
              ref="food"
              class="pt-8 pt-md-6"
              id="food"
            ></h2>
            <div>
              <p>{{ nav.food.paragraph }}</p>
              <list-template :listItem="nav.food.food.listItem">
                <template v-slot:header>
                  <h3>{{ nav.food.food.title }}</h3>
                </template>
              </list-template>

              <list-template :listItem="nav.food.food.stores.listItem">
                <template v-slot:header>
                  <h4>{{ nav.food.food.stores.title }}</h4>
                </template>
              </list-template>

              <list-template :listItem="nav.food.drinks.listItem">
                <template v-slot:header>
                  <h3>{{ nav.food.drinks.title }}</h3>
                </template>
              </list-template>

              <list-template :listItem="nav.food.drinks.stores.listItem">
                <template v-slot:header>
                  <h4>{{ nav.food.drinks.stores.title }}</h4>
                </template>
              </list-template>
            </div>
          </div>
          <!--specialty& souvenior -->
          <div class="pb-6">
            <h2
              v-html="nav.specialty.mobile"
              ref="specialty"
              class="pt-8 pt-md-6"
              id="specialty"
            ></h2>
            <p v-for="(item, index) in nav.specialty.paragraphs" :key="index">
              {{ item }}
            </p>
            <list-template :listItem="nav.specialty.specialty.listItem">
              <template v-slot:header>
                <h3>{{ nav.specialty.specialty.title }}</h3>
              </template>
            </list-template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScrollSpy from "bootstrap/js/dist/scrollspy.js"
import returnTopMixin from "@/mixins/returnTopMixin.js"
import ListTemplate from "./ListTemplate.vue"

export default {
  components: { ListTemplate },
  name: "VnIntro",
  mixins: [returnTopMixin],
  data () {
    return {
      scrollspy: {},
      scrollspyMobile: {},
      nav: {
        intro: {
          ref: "intro",
          laptop: "越南簡介",
          mobile: "<span class='d-none d-md-inline-block'>越南</span>簡介",
          paragraph:
            "越南位於東南亞中南半島東部沿海，為一社會主義國家。除本身民族文化以外，其歷史背景使越南多元融合了中國及法國風情；也因政治因素，共產色彩也是旅客到越南時可以關注的面向。",
          basicInfo: {
            listStyle: "disc",
            listItem: [
              "簽證：台灣護照入境需簽證，可提前申辦也可落地簽。",
              "電壓：220V",
              "時區：UTC +7，台灣較越南快一小時。",
              "匯率：1台幣約可換820越南盾； 1美元約可換22800 越南盾 (2020/09/ 25 更新)。"
            ]
          }
        },
        nature: {
          ref: "nature",
          laptop: "環境氣候",
          mobile: "環境<span class='d-none d-md-inline-block'>氣候</span>",
          paragraphs: [
            "越南國土狹長呈南北縱向，北部除了紅河三角洲以外多為高山，中有安南山脈綿延往下銜接，南部則有富饒的湄公河三角洲，海岸更有數千座大大小小的島嶼座落；除此之外，特殊的石灰岩喀斯特地形，在北部及中部構成壯觀的溶洞和石林等景觀。",
            "雖然越南為熱帶氣候國家，但因其豐富的地形，旅客可以在此感受到高山、海洋、炎熱、涼爽等多重體驗，若您在冬天來訪，當南部胡志明市仍值高溫三十五度時，同時北部山區的沙壩卻可能正在飄雪！"
          ],
          sightSeeing: {
            listStyle: "'＊ '",
            title: "推薦景點",
            listItem: [
              "下龍灣：越南經典必訪",
              "美奈沙丘：讓人感動難忘的日出",
              "大叻：高原避暑法式山城",
              "沙壩：冬寒夏涼各有風情"
            ]
          }
        },
        transportation: {
          ref: "transportation",
          laptop: "交通方式",
          mobile: "交通<span class='d-none d-md-inline-block'>方式</span>",
          paragraphs: [
            "因鐵路相關設施稍嫌不足，推薦遊客使用飛機做長距離的南北移動。越捷航空及捷星航空皆有平價及舒適的航班來往北中南各大機場。",
            "城市與城市間的中距離移動則推薦長途巴士，越南的長途巴士大部分皆為半臥舖座椅，票價便宜，且搭乘體驗相當不錯。",
            "單一區域內的交通，雖可自行租借摩托車，但為了安全上的考量，我們推薦旅客搭乘Grab計程車或是包車遊覽，若不怕炎熱、想體驗更多當地生活，也可搭乘公車、Grab摩托車去探險。而較為鄉下、難以租車的地區，騎自行車或是走路散步漫遊也是不錯的選擇！"
          ]
        },
        food: {
          ref: "food",
          laptop: "飲食特色",
          mobile: "飲食<span class='d-none d-md-inline-block'>特色</span>",
          paragraph: "廢話不多說，直接分享珍藏口袋名單！",
          food: {
            listStyle: "'＊ '",
            title: "必吃",
            listItem: [
              "生牛肉河粉（Phở (Bò) Tai）：無法不好吃",
              "烤肉米線 （Bún chả）：歐巴馬也愛",
              "法國麵包（Bánh mì）：平民美食",
              "白玫瑰（Bánh bao bánh vạc）：名字美味道也美",
              "浮萍粿（Bánh bèo）：順化皇城小點",
              "越式煎餅（bánh xèo）：順化菜經典代表",
              "竹籤烤肉卷（Nem Lụi）：順化菜又一不可錯過的美味"
            ],
            stores: {
              listStyle: "'＊ '",
              title: "推薦店家",
              listItem: [
                "[河內] Bun Cha Hang Quat：當地人才知道的巷弄烤肉米線",
                "[河內] Bánh Mì 25：被評為河內最好吃的越式法國麵包",
                "[順化] Lạc Thiện Restaurant：皇城外必吃越式煎餅、浮萍粿",
                "[順化] Madam Thu：精緻順化菜餐廳、沒來會後悔",
                "[會安] White Rose Restaurant：手握白玫瑰配方的名店",
                "[胡志明] Propaganda：越南菜傳統與現代的精彩碰撞",
                "[胡志明] Bánh Mì Huỳnh Hoa：整間店只賣越南法國麵包"
              ]
            }
          },
          drinks: {
            listStyle: "'＊ '",
            title: "必喝飲料及甜點",
            listItem: [
              "冰滴咖啡：入門級體驗",
              "蛋咖啡：神秘的must-try",
              "越南啤酒：品牌眾多口味各異",
              "椰子冰沙：不吃椰子的人也愛上",
              "水蜜桃冰茶：清爽中帶甜的消暑好滋味",
              "現打果汁：熱帶國家的絕對優勢"
            ],
            stores: {
              listStyle: "'＊ '",
              title: "推薦店家",
              listItem: [
                "[全國連鎖] Cong Caphe：獨特軍風裝潢，必點椰子咖啡冰沙",
                "[全國連鎖] The Coffee House：力壓星巴克，必點水蜜桃冰茶",
                "[河內] Kem Tràng Tiền：60多年冰淇淋人氣專賣店，一支約15元台幣！",
                "[河內] KingRoti - Hàng Gai：每次經過都會買的現烤菠蘿麵包",
                "[大叻] An Cafe：露台咖啡廳，氣氛裝潢滿分",
                "[大叻] Kem bơ Thanh Thảo：俗擱大碗，推薦酪梨冰淇淋",
                "[美奈] Nirvana Beach Club：越晚越美麗的沙灘酒吧",
                "[胡志明] Five Boys Number One Smoothies：不加水的現打果汁",
                "[胡志明] The Cafe Apartment：老屋新生的咖啡公寓，多家特色小店聚集"
              ]
            }
          }
        },
        specialty: {
          ref: "specialty",
          laptop: "當地特產",
          mobile: "<span class='d-none d-md-inline-block'>當地</span>特產",
          paragraphs: [
            "說到越南特產不得不提腰果和咖啡，各類果乾、椰子糖、可可豆也相當具有代表性，若是喜歡河粉的話，也有不少調理包可以帶回台灣享用！",
            "若是在市場、夜市內購買的話，建議多多比價、議價，也提醒旅客，越南商品在台灣其實並不少見，若有需要購買的話，可以選擇在台灣較為少見的特產來做紀念噢！"
          ],
          specialty: {
            listStyle: "'＊ '",
            title: "經典伴手禮",
            listItem: [
              "Bà Tám Bình Dương 清炒腰果：平價又涮嘴不膩",
              "MAROU巧克力：《紐約時報》評為最棒巧克力",
              "TRUNG NGUYEN（中原咖啡 ）麝香貓咖啡豆：金黃色盒裝超霸氣"
            ]
          }
        }
      }
    }
  },
  mounted () {
    this.scrollSpy = new ScrollSpy(document.body, {
      target: this.$refs.introNav
    })
    this.scrollSpyMobile = new ScrollSpy(document.body, {
      target: this.$refs.introNavMobile
    })
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/scss/helpers/myVariables.scss";
.container {
  .introNav,
  .introNavMobile {
    a {
      &.active {
        background-color: $warning;
      }
    }
  }
  .introNav {
    top: 90px;
  }
  .introNavMobile {
    top: 55px;
  }

  .content {
    line-height: 2;
    h2 {
      padding-bottom: 10px;
    }
    p {
      padding-bottom: 20px;
    }
  }
}
</style>
