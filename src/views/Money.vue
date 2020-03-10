<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>

    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>

    <div class="notes">
      <FormItem filed-name="Note:"
                placeholder="Please type note here."
                @update:value="onUpdateNotes"/>
    </div>

    <Tags @update:value="record.tags = $event"/>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';


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
    components: {Tabs, Tags, FormItem, NumberPad},
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    recordTypeList = recordTypeList;

    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    created() {
      this.$store.commit('fetchRecords');
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        return window.alert('Please select a tag.');
      }

      if (this.$store.state.createRecordError === null) {
        this.$store.commit('createRecord', this.record);
        window.alert('Saved');
        this.record.notes = '';
      }
    }

  }
</script>
<style lang="scss" scoped>
  ::v-deep .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;

  }
</style>
