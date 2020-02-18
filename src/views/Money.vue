<template>
  <layout>
    <div class="tags">
      <ul class="current">
        <li>Cloth</li>
        <li>Food</li>
        <li>House</li>
        <li>transport</li>
      </ul>
    </div>

    <div>
      <label class="notes">
        <span class="name">Note</span>
        <input type="text">
      </label>
    </div>

    <div>
      <ul>
        <li class="selected">Spend</li>
        <li>Income</li>
      </ul>
    </div>

    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>AC</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>

  </layout>
</template>

<script lang="ts">


  export default {
    name: 'Money.vue',

  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  p {
    color: $red;
  }
</style>