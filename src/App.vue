<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; // for Mac
    color: #333; //  more soft black color
    font-family: $font-Roboto;
    line-height: 1.5;
  }
</style>
