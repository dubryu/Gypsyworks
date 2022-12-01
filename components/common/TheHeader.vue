<template>
  <nav>
    <div class="navbar">
      <NuxtLink to="/">
      <div class="navlogo">
        <img class="logo_img" src="../../static/Gypsyworks_logo_black.png"></img>
      </div>
      </NuxtLink>
      <div class="hummenuContainer">
        <NuxtLink to="/categories">
          <div class="hummenu">CATEGORIES</div>
        </NuxtLink>
        <NuxtLink to="/catalog_parallax">
          <div class="hummenu">CATALOG_PARA</div>
        </NuxtLink>
        <a class="hummenu" href="https://gypsyworks.stores.jp" target="blank">SHOP</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    width: 10vw;
    // background-color: #A4A4B5;
    height: 100vh;
    // display: flex;
    margin-right: 0;
    margin-left: auto;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    // flex-direction: row-reverse;
    // justify-content: flex-end;
    .navbar{
      // width: 100%;
      // height:20vh;

      // width: 10vw;
      // height: 100vh;
      display: flex;
      flex-direction: column;
      // z-index: 1000;
      // float: right;
    }
    .navlogo{
      height:80px;
      width:80px;
      float: left;
      background-color: #f56;
      .logo_img{
        height: auto;
        width: 100%;
      }
    }
    //.hummenuContainer{
      .hummenu{
        display: inline-block;
        //float: right;
        width:80px;
        height:80px;
        background-color: #444;
      }
    //}
  }
</style>
