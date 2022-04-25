<template>
  <div>
    <Layout content-class="xxx">
      <NumberPad @upDate:value="onUpdateAmount" @submit="saveRecord"/>
      <Notes @upDate:value="onUpdateNotes"/>
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
      <Types xxx="hi" :value.sync="record.type" />
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

type Record = {
  tags: string[]
  type: string
  notes: string
  amount: number
}
@Component(
    {components: {Types, Tags, Notes, NumberPad}}
)
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = [];
  record: Record = {
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
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
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