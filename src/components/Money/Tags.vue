<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag)>=0}">{{ tag }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">
        新增标签
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component//装饰器
export default class Tags extends Vue {
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('upDate:value',this.selectedTags)
  }

  create() {
    const name = window.prompt('请输入标签名');
    if (name === '') {
      window.alert('标签名不能为空');
    } else if (this.dataSource) {
      if (this.dataSource.indexOf(name!)>=0) {
        window.alert('标签名重复');
      }else {
        this.$emit('update:dataSource', [...this.dataSource, name]);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;

      &.selected {
        background: #F8D02D;
      }
    }
  }

  > .new {
    padding: 16px 0;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

</style>