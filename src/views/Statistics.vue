<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>

    <ol>
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">{{beautify(group.title)}}</h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>${{item.amount}} </span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  import dayjs from 'dayjs';
  import clone from '@/lib/clone';


  // const oneDay = 86400 * 1000;
  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    tagString(tags: Tag[]) {
      return tags.length === 0 ? 'N/A' : tags.join(',');
    }

    beautify(string: string) {
      const localizedFormat = require('dayjs/plugin/localizedFormat');
      dayjs.extend(localizedFormat);
      const day = dayjs(string);
      const now = dayjs();
      if (dayjs(string).isSame(now, 'day')) {
        return 'Today';
      } else if (dayjs(string).isSame(now.subtract(1, 'day'), 'day')) {
        return 'Yesterday';
      }else {
        return day.format('ll');
      }
    }

    get recordList() {
      return (this.$store.state as RootState).recordList;
    }

    get groupedList() {
      const {recordList} = this;
      if(recordList.length===0){return []}

      const newList = clone(recordList).sort((a, b)=>dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      console.log(newList);
      const result = [{title:dayjs(recordList[0].createdAt).format('YYYY-MM-DD'), items:[recordList[0]]}];
      for(let i=0; i<newList.length; i++){
        const current = newList[i];
        const last = result[result.length-1];
        if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
          last.items.push(current)
        }else{
          result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items: [current]})
        }
      }
      return result

    }

    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    type = '-';
    recordTypeList = recordTypeList;
  }
  ;
</script>


<style lang="scss" scoped>
  ::v-deep {
    .type-tabs-item {
      background: #c4c4c4;
      &.selected {
        background: white;
        &::after {
          display: none;
        }
      }
    }
    .interval-tabs-item {
      height: 48px;
    }
  }
  %item {
    padding: 8px 16px;
    min-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
</style>