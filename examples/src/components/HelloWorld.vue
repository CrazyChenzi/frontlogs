<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private mounted() {
    Promise.reject('这是一个Promise error')
    this.error2()
    this.error1()
  }
  private error1() {
    error
  }
  private error2() {
    try {
      setTimeout(() => {
        error
      })
    } catch(e) {
      console.log('我感知不到错误');
      console.log(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
