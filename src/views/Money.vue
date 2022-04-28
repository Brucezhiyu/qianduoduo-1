<template>
  <div>
    <Layout content-class="xxx">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="写点备注吧~"/>
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
      <Types xxx="hi" :value.sync="record.type"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


window.localStorage.setItem('version', '0.0.1');

@Component(
    {components: {Types, Tags, FormItem, NumberPad}}
)
export default class Money extends Vue {
  tags = window.tagList;
  recordList=window.recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

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
    window.createRecord(this.record)
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