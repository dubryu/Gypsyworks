<template>
  <nav>
    <div class="navbar">
      <NuxtLink to="/">
      <div class="navlogo">
        <img class="logo_img" src="../../static/Gypsyworks_logo_black.png"></img>
      </div>
      </NuxtLink>
      <div class="navmenuContainer">
        <NuxtLink to="/categorys">
          <div class="navmenu">CATEGORYS</div>
        </NuxtLink>
        <NuxtLink to="/catalog_parallax">
          <div class="navmenu">CATALOG_PARA</div>
        </NuxtLink>
        <a class="navmenu" href="https://gypsyworks.stores.jp" target="blank">SHOP</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    .navbar{
      width: 100%;
      height:20vh;

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
    //.navmenuContainer{
      .navmenu{
        display: inline-block;
        //float: right;
        width:80px;
        height:80px;
        background-color: #444;
      }
    //}
    width: 100%;
    background-color: #A4A4A4;
  }
</style>
