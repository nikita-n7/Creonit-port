<template>
  <div id="app">
    <hello/>
  </div>
</template>

<script>
import hello from './components/HelloWorld'


export default {

  components: {
    hello
  },
  
  data() {
    return {

    }
  }
}
</script>



<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
