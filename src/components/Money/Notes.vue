<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="写点备注吧~">
    </label>
  </div></template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component//装饰器
export default class Notes extends Vue {
  value='';
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;


  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>