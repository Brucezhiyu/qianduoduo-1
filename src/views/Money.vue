<template>
  <div>
    <Layout content-class="xxx">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <FormItem @update:value="onUpdateNotes"
                field-name="备注"
                placeholder="写点备注吧~"/>
      <Tags/>
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
import store from '@/store/index2';


window.localStorage.setItem('version', '0.0.1');

@Component(
    {
      components: {Types, Tags, FormItem, NumberPad},
      computed: {
        recordList() {
          return store.recordList;
        }
      }
    })
export default class Money extends Vue {
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  onUpdateNotes(value: string) {
    this.record.notes = value;

  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);

  }

  saveRecord() {
    store.createRecord(this.record);
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