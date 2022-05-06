<template>
  <div>
    <Layout content-class="xxx">
      <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
      <FormItem @update:value="onUpdateNotes"
                field-name="备注"
                placeholder="写点备注吧~"/>
      <Tags/>
      <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';


@Component(
    {
      components: {Tabs, Tags, FormItem, NumberPad},
    })
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList=recordTypeList
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;

  }

  saveRecord() {
    this.$store.commit('createRecord',this.record);
  }
}

</script>
<style lang="scss">
@import "~@/assets/style/helper.scss";

.xxx {
  display: flex;
  flex-direction: column-reverse;

}

</style>
<style lang="scss" scoped>

</style>