<template>
  <layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem filed-name="Note:" placeholder="Please type note here." @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';


  // const version = window.localStorage.getItem('version') || '0';
  //
  // // if(version<'0.0.1'){
  // //   // db update
  // //   if(version === '0.0.1'){
  // //     recordList.forEach(record=>{
  // //       record.createAt = new Date(2020, 0, 1)
  // //     });
  // //     // save date
  // //     window.localStorage.setItem('recordList', JSON.stringify(recordList));
  // //   }
  // // }
  // // window.localStorage.setItem('version', '0.0.2');

  @Component({
    components: {Tags, FormItem, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags = window.tagList;
    recordList = window.recordList;
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;

    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      window.createRecord(this.record);
    }

  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
</style>
