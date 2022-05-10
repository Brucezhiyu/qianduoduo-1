 <template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

#app{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:$font-hei;
  line-height: 1.5;
  background: #f5f5f5;
  max-width: 420px;
  margin: 0 auto;
}

</style>
