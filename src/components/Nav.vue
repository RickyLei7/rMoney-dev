<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      Label
    </router-link>

    <router-link to="/money" class="item" active-class="selected">
      <Icon name="moneyBag"/>
      Money
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      Statistics
    </router-link>
  </nav>


</template>

<script lang="ts">


  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  nav {
    @extend %outerShadow;
    background: #3d3d3d;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #cccccc;
    > .item {
      padding: 2px 0;
      width: 33.33%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .icon {
      width: 32px;
      height: 32px;
      color: #cccccc;
    }
    > .item.selected {
      color: $color-highlight;

    }

  }

</style>