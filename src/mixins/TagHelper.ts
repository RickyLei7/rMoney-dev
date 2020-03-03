import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('Please type tags name here.');
    if (!name) {return window.alert('Please type the tags again.');}
    this.$store.commit('createTag', name);
  }
}

export default TagHelper;