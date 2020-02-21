<template>
  <layout class-prefix="layout">
    {{recordList}}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import model from '@/model';

  const recordList = model.fetch();


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
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags = ['Cloth', 'Food', 'House', 'Transport', 'xxx'];
    recordList: RecordItem[] = recordList;
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
      const record2: RecordItem = model.clone(this.record);
      record2.createAt = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordListChange() {
      model.save(this.recordList);
    }
  }
</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
