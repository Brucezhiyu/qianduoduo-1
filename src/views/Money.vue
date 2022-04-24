<template>
  <div>
    <Layout content-class="xxx">
      <NumberPad/>
      <Notes/>
      <Tags/>
      <Types xxx="hi"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import Types from '@/components/Money/Types.vue'

export default {
  name: "Money.vue",
  components: {Types, Tags, Notes, NumberPad},
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