import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('Please type tags name here.');
    if (!name) {return window.alert('Please type the tags again.');}
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert(this.$store.state.createTagError.message);
    }
  }
}

export default TagHelper;