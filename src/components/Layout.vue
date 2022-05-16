<template>
  <div class="layout-wrapper">
    <div class="content" :class="contentClass">
        <slot/>
<!--      获取Money等组件内容-->
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props:['contentClass'],
  name: "Layout.vue"
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
  &::-webkit-scrollbar{
    display: none;
  }
}
</style>