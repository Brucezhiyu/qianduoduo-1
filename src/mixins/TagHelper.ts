import Vue from 'vue';
import Component from 'vue-class-component';
import { Toast } from 'vant';
import { Dialog } from 'vant';
Vue.use(Toast);
Vue.use(Dialog);
const map:{[key:string]:string}={
    'tag name duplicated':'标签名重复了'
}
@Component
export class TagHelper extends Vue {

    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) {
           return Toast.fail('标签名不能为空');
        }
        this.$store.commit('createTag', name);
        if (this.$store.state.createTagError) {
            Toast.fail(map[this.$store.state.createTagError.message]||'未知错误');
        }
    }
}

export default TagHelper;