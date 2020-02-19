<template>
  <div class="tags">
    <div class="new">
      <button>Add Tags</button>
    </div>
    <ul class="current">
      <li>Cloth</li>
      <li>Food</li>
      <li>House</li>
      <li>transport</li>
      <li>Cloth</li>
      <li>Food</li>
      <li>House</li>
      <li>transport</li>
      <li>Cloth</li>
      <li>Food</li>
      <li>House</li>
      <li>transport</li>
    </ul>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags.vue'
  };
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      > li {
        background: #d9d9d9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 3px;
      }
    }
  }
</style>