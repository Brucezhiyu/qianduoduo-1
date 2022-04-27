<template>
  <div>
    <Layout content-class="xxx">
      {{ recordList }}
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Notes @update:value="onUpdateNotes" field-name="备注" placeholder="写点备注吧~"/>
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
      <Types xxx="hi" :value.sync="record.type"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

window.localStorage.setItem('version', '0.0.1');
const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component(
    {components: {Types, Tags, Notes, NumberPad}}
)
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
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