<template>
  <div class="box-cat"
    :style="{
      transform: `translate(${x}px, ${y}px)`,
      transition: `transform ${dur}ms`
    }"
  />
</template>

<script>
/** 指定のミリ秒待つPromiseを返す */
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export default {
  data () {
    return {
      x: 100,
      y: 300,
      dur: 500
    }
  },
  methods: {
    async moveTo (x,y) {
      const lastY = this.y // 移動前のyを覚えておく
      this.x = x // 指定された座標のxまで移動
      this.dur = 500 // 500msかけて横スライド

      await wait(this.dur) // トランジションの時間待つ

      this.y = y // 指定された座標のyまでジャンプ
      this.dur = 200 // 200msかけてジャンプ

      await wait(this.dur) // トランジションの時間待つ

      this.y = lastY // 最初のy座標に戻る
      this.dur = 200 // 200msかけて元の高さに戻る

      await wait(this.dur) // トランジションの時間待つ
    }
  }
}
</script>

<style scoped>
.box-cat {
  position: absolute;
  width: 80px;
  height: 80px;
  margin-left: -40px;
  box-sizing: border-box;
  background: url(../../static/gomachan.svg) no-repeat center;
  transform-origin: 50% 100%;
  transition: transform 500ms;
}
</style>
