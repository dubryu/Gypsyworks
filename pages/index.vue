<template>
  <main>
    <section id="topback">
      <div id="toplogo"></div>
      <div id="sns_container">
        <img class="snsimg"></img>
        <img class="snsimg"></img>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">yoyo</h1>
      </div>
      <div class="page_container">
        <div class="centerize_container">
          <div class="catalog_item"></div>
          <div class="catalog_item"></div>
          <div class="catalog_item"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="title_container">
        <h1 class="title_txt">PHOTOS</h1>
      </div>
      <div class="page_container">
        <div class="centerize_container">
          <div class="photo_bg">
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
            <img class="photo_item"></img>
          </div>
        </div>
      </div>
    </section>
    <h1>Hello world!</h1>
    <NuxtLink to="/fun">
        fun (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <NuxtLink to="/about">
        about (internal link that belongs to the Nuxt App)
    </NuxtLink>
  </main>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  #topback{
    width: 100%;
    height: 80vh;
    background-color: rgb(100, 102, 200);
    // display: flex; //flexは親に設定する
    // align-items: center;
    // justify-content: center;
    //css3の中央揃え
    position: relative;
    #toplogo{
      position: absolute;
      width: 20vh;
      height: 20vh;
      background-color: rgb(100, 250, 200);
      //css3の中央揃え
      position: absolute;
      top: 50%;
      left: 50%;
      // margin-right: -50%;
      transform: translate(-50%, -50%);
    }
    #sns_container{
      position:absolute;
      width: 30vh;
      height: 10vh;
      left: 5%;
      bottom:10%;
      background-color: rgb(0, 0, 200);
      .snsimg{
        margin: 2px;
        background-color: rgb(200, 0, 200);
      }
    }
  }

  .page_container{
    .centerize_container{
      .catalog_item{
        width: 18vw;
        height: 60vh;
        margin: 10px;
        background-color: rgb(0, 0, 0);
      }
      .photo_bg{
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        width: 80vw;
        background-color: rgb(0, 255, 0);
        .photo_item{
          width: 16vw;
          height: 16vw;
          margin: 0px;
          background-color: rgb(0, 0, 0);
        }
      }

    }
  }
</style>
