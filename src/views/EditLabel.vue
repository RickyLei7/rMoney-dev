<template>
  <Layout>
    <div>
      <Icon name="left"/>
      <span>Edit Label</span>
    </div>
    <Notes filed-name="Tag Name" placeholder="Please type tag name"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';
  import Notes from '@/components/Money/Notes.vue';

  @Component({
    components: {Notes}
  })
  export default class EditLabel extends Vue {
    create() {
      const id = this.$route.params.id;
      tagListModel.fetch;
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>