<template>

  <main>

      <section>
        <div class="title_container">
          <h1 class="title_txt">CATALOG</h1>
        </div>
        <div ref="tri1" class="main_container">
          <div class="left_split">
            <h2 v-rellax="{ speed:2 }" class="main_title">手ぬぐいい</h2>
            <div ref="tri2" class="left_spacer">{{ msg }}</div>
            <span>{{ scrollY }}</span>
            <div v-observe-visibility="visibility1Changed" class="left_trigger">trigger</div>
            <div v-observe-visibility="visibility2Changed" class="left_trigger">trigger2</div>
          </div>
          <div class="right_sprit">
              <div class="right-sticky">
                <img class="right_img_container" :style="styleVariables" src="~@/static/tyedie.jpg"></img>
                <img class="right_img_container2" :style="styleVariables" src="~@/static/tyedie2.jpg"></img>
                <img class="right_img_container3" :style="styleVariables" src="~@/static/tyedie3.jpg"></img>
              </div>
          </div>

          <!-- <div class="detail_container">
            <div id="img_container">
              <img class="detail_img"></img>
              <img class="detail_img"></img>
              <img class="detail_img"></img>
              <img class="detail_img"></img>
              <img class="detail_img"></img>
              <img class="detail_img"></img>
              <img class="detail_img"></img>
              <img class="detail_img"></img>
            </div>
            <div id="word_container"><p class="paragraph">hooooooooooooooooooooooooooooooooo</p></div>
          </div> -->
        </div>
      </section>

      <section>
        <div ref="tri3" class="main_container_second">
          <div class="left_split">
            <h2 v-rellax="{ speed:2 }" class="main_title">スケートボード</h2>
            <div ref="tri4" class="left_spacer">{{ msg }}</div>
            <span>{{ scrollY }}</span>
            <div v-observe-visibility="visibility3Changed" class="left_trigger">trigger</div>
            <!-- <Intersect @enter="isIntersectionElement4" @leave="isNotIntersectionElement4"> -->
            <div v-observe-visibility="visibility4Changed" class="left_trigger">trigger2</div>
            <!-- </Intersect> -->
          </div>
          <div class="right_sprit">
            <div class="right-sticky">
              <img class="right_img_container" :style="styleVariables" src="~@/static/tyedie.jpg"></img>
              <img class="right_img_container4" :style="styleVariables" src="~@/static/wood1.jpg"></img>
              <img class="right_img_container5" :style="styleVariables" src="~@/static/iphone1.jpg"></img>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="title_container">
          <h1 class="title_txt">How to order {{ scrollY }}</h1>
        </div>
        <div class="page_container">
          <instagram-embed
            :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
          />
        </div>
      </section>
  </main>

</template>

<style scoped lang="scss">
  .main_container{
    height: 250vh;
    width: 100vw;
    background-color: rgb(200, 200, 0);
    display: flex;
    .left_split{
      width: 50%;
      height: auto;
      background-color: rgb(255, 0, 100);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
  }
  .main_container_second {
    height: 250vh;
    width: 100vw;
    background-color: rgb(255, 0, 0);
    display: flex;
  }
  .left_split{
    width: 50%;
    height: auto;
    background-color: rgb(100, 0, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    //position:-webkit-sticky; position:sticky; top:0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    //display: table-cell;
    .main_title{
      // top: 10px;
      // left: 10px;
      // width: 30vw;
      height: 10%;
    }
    .main_img{
      width: 25vw;
      height: 25vw;
      background-color: #444;
      // top: 10px;
      // left: 10px;
    }
    .left_spacer{
      width: 300px;
      height: 255px;
      margin-top: 140px;
      background-color: rgb(0, 100, 199);
      // clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    .left_trigger{
      margin-top: 100px;
      width: auto;
      height: 120px;
      background-color: rgb(100, 25, 25);
    }
  }
  .right_sprit{
    width: 50%;
    height: 100%;
    background-color: rgb(200, 0, 100);
    position:relative;
    .right-sticky{
      top: 0;
      left: 0;
      width: 100%;
      height:100vh;
      background-color: rgb(210, 30, 100);
      overflow: hidden;
      min-width: 100%;
      //min-height: 100%;
      //max-width: inherit;
      position: -webkit-sticky; /* Safariに対応する */
      position: sticky; /* 要素を固定/解除する */
      //  position: sticky; は、親要素のheightを基準に固定される位置が決まります。
      // （親要素のheightを超えたら、固定が解除される）
      // そのため、親要素にheightを指定しないと、そもそも有効になりません。
      .right_img_container{
        top: 0;
        left: 0;
        width: 100%;
        height:100vh;
        background-color: rgb(210, 30, 100);
        overflow: hidden;
        min-width: 100%;
        position: absolute;
        // clip-path: inset(0% 0% (calc((var(--scrollStart-YIn1) + var(--switch-Length) - var(--scroll-Y)) * -100% / var(--switch-Length))));
      }
      .right_img_container2{
        top: 0;
        left: 0;
        width: 100%;
        // height:calc((var(--scrollStart-Y) - (var(--scroll-Y))) * -100% / 250);
        // 350は高さ可変動作を始めたいスクロール量(origin)、250はoriginからどれくらい100%の高さにするかの設定
        // height:calc((var(--scrollStart-YIn1) - (var(--scroll-Y))) * -100% / var(--switch-Length));
        height: 100%;
        background-color: rgb(210, 30, 100);
        overflow: hidden;
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        // clip-path
        clip-path: inset(0% 0% calc((var(--scrollStart-YIn1) + var(--switch-Length) - (var(--scroll-Y))) * 100% / var(--switch-Length)));
        // clip-path: inset(0% 0% var(--scrollStart-YIn1));
      }
      .right_img_container3{
        top: 0;
        left: 0;
        width: 100%;
        // height:calc((var(--scrollStart-Y) - (var(--scroll-Y))) * -100% / 250);
        // 350は高さ可変動作を始めたいスクロール量(origin)、250はoriginからどれくらい100%の高さにするかの設定
        // height:calc((var(--scrollStart-Y2In1) - (var(--scroll-Y))) * -100% / var(--switch-Length));
        height: 100%;
        background-color: rgb(210, 30, 100);
        overflow: hidden;
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        clip-path: inset(0% 0% calc((var(--scrollStart-Y2In1) + var(--switch-Length) - (var(--scroll-Y))) * 100% / var(--switch-Length)));
        // clip-path: inset(0% 0% var(--scrollStart-Y2In1));
      }
      .right_img_container4{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // height:calc((var(--scrollStart-YIn2) - (var(--scroll-Y))) * -100% / var(--switch-Length));
        background-color: rgb(210, 30, 100);
        overflow: hidden;
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        clip-path: inset(0% 0% calc((var(--scrollStart-YIn2) + var(--switch-Length) - (var(--scroll-Y))) * 100% / var(--switch-Length)));
        // clip-path: inset(0% 0% var(--scrollStart-YIn2));
      }
      .right_img_container5{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // height:calc((var(--scrollStart-Y2In2) - (var(--scroll-Y))) * -100% / var(--switch-Length));
        background-color: rgb(210, 30, 100);
        overflow: hidden;
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
        clip-path: inset(0% 0% calc((var(--scrollStart-Y2In2) + var(--switch-Length) - (var(--scroll-Y))) * 100% / var(--switch-Length)));
        // clip-path: inset(0% 0% var(--scrollStart-Y2In2));
      }
    }

  }
  .detail_container{
    width: 60vw;
    height: auto;
    background-color: rgb(100, 150, 200);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    #img_container{
      background-color: rgb(100, 150, 0);
      height: 30vh;
      width: 60vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .detail_img{
        margin: 10px;
        height: 10vh;
        width: 13vw;
      }
    }
    #word_container{
      height: 30vh;
      width: 60vw;
      background-color: rgb(200, 150, 0);
      .paragraph{
        background-color: #111;
        //margin: 10px;
      }
    }
  }
  .swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
  // .scroll-enter-active, .scroll-leave-active {
  //   opacity: 0;
  //   transform: translate(0px, 0px);
  //   transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  // }
  // .scroll-enter, .scroll-leave-to {
  //     transform: translateY(-100vh) translateY(0px);
  // }

</style>

<script>
// import Intersect from 'vue-intersect'
// import luxy from "luxy.js"
export default {
  // components: { Intersect },
  name: 'SwiperNuxt',
  props: {
    switchLength: {
      type: String,
      default: '200',
    },
  },
  data () {
    return {
      swiperOptions: {
        freeMode: true,
        direction: 'vertical',
        mousewheel: {
          forceToAxis: true,
      		invert: true
      	},
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true
      },
      msg: 'I will change',
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      scrollAmount: 0,
      scrollY: 0,
      scrollStartYIn1: 0, // ざっくりと意図した範囲外で表示されないための初期値設定
      scrollStartY2In1: 0,
      scrollStartYIn2: 0,
      scrollStartY2In2: 0,
      percentOne: 0 + "%",
      percentTwo: 0 + "%",
      percentThree: 0 + "%",
      percentFour: 0 + "%",
    }
  },
  computed: {
    // 値がキャシュされる
    /**
     * このコンポーネント中で用いるCSS変数をまとめる.
     * @return {object}
     */
    styleVariables() {
      // cssのカスタムプロパティ
      return {
        '--scroll-Y': this.scrollY,
        '--scrollStart-YIn1': this.scrollStartYIn1, // img可変動作が始まる座標
        '--scrollStart-Y2In1': this.scrollStartY2In1,
        '--scrollStart-YIn2': this.scrollStartYIn2,
        '--scrollStart-Y2In2': this.scrollStartY2In2,
        // this.percentOne = this.scrollStartYIn1 + this.switchLength - this.scrollY >= 0 ? (this.scrollStartYIn1 + this.switchLength - this.scrollY) * 100 / this.switchLength + "%" : 0 + "%";
        // this.percentTwo = this.scrollStartY2In1 + this.switchLength - this.scrollY >= 0 ? (this.scrollStartYIn1 + this.switchLength - this.scrollY) * 100 / this.switchLength + "%" : 0 + "%";
        // '--scrollStart-YIn2': this.scrollStartYIn2 + this.switchLength - this.scrollY >= 0 ? (this.scrollStartYIn1 + this.switchLength - this.scrollY) * 100 / this.switchLength + "%" : 0 + "%",
        // '--scrollStart-Y2In2': this.scrollStartY2In2 + this.switchLength - this.scrollY >= 0 ? (this.scrollStartYIn1 + this.switchLength - this.scrollY) * 100 / this.switchLength + "%" : 0 + "%",
        '--switch-Length': this.switchLength, // 高さ可変imgの100%height表示までの距離
      };
    },
    // = styleVariables: function () {}
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // 垂直スライドの起点の要素の座標を取得
    this.scrollStartYIn1 = this.$refs.tri1.getBoundingClientRect().top;
    this.scrollStartY2In1 = this.$refs.tri2.getBoundingClientRect().top;
    this.scrollStartYIn2 = this.$refs.tri3.getBoundingClientRect().top;
    this.scrollStartY2In2 = this.$refs.tri4.getBoundingClientRect().top;
    console.log('対象のDOM：', this.scrollStartYIn1);
    console.log('対象のDOM：', this.scrollStartY2In1);
    console.log('対象のDOM：', this.scrollStartYIn2);
    console.log('対象のDOM：', this.scrollStartY2In2);
    // luxy.init();
  },
  methods: {
    onSwiperClickSlide (index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
    visibility1Changed (isVisible, entry) {
      if (isVisible) {
        this.isInview = true;
        this.visible1 = true;
        console.log(entry);
      }
    },
    visibility2Changed (isVisible, entry) {
      if (isVisible) {
        this.isInview = true;
        this.visible2 = true;
        console.log(entry);
      }
    },
    visibility3Changed (isVisible, entry) {
      if (isVisible) {
        this.isInview = true;
        this.visible3 = true;
        console.log(entry);
      }
    },
    visibility4Changed (isVisible, entry) {
      if (isVisible) {
        this.isInview = true;
        this.visible4 = true;
        console.log(entry);
      }
    },
    handleScroll() {
      // スクロール量の取得代入
      this.scrollY = window.scrollY;
    },
    styleVariablesMethod() {
      // cssのカスタムプロパティ
      return {
        // '--scroll-Y': this.scrollY,
        // '--scrollStart-YIn1': this.scrollStartYIn1, // img可変動作が始まる座標
        // '--scrollStart-Y2In1': (this.scrollStartY2In1 + this.switchLength - this.scrollY) * 100 / this.scrollY + "%",
        // '--scrollStart-YIn2': (this.scrollStartYIn2 + this.switchLength - this.scrollY) * 100 / this.scrollY + "%",
        // '--scrollStart-Y2In2': (this.scrollStartY2In2 + this.switchLength - this.scrollY) * 100 / this.scrollY + "%",
        // '--switch-Length': this.switchLength, // 高さ可変imgの100%height表示までの距離
      };
    },
  },
}

</script>
