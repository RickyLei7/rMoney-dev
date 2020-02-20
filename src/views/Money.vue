<template>
  <layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
  </layout>
</template>

<script>
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  export default {
    name: 'Money.vue',
    components: {Tags, Notes, Types, NumberPad},
    data() {
      return {
        tags: ['Cloth', 'Food', 'House', 'Transport','xxx']
      }
    }
  };
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
