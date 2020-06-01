<template>
  <div class="hello">
    <comp 
    v-for="post in postInVis"
    :key = 'post.id'
    :product ='post' />
    <div class="numb"
      v-for="(post,index) in numPage"
      :key = 'post * 9999'
      @click="curentPageSet( index )"
      :class=" { active : curentPage == index }"
    > 
      {{ post  }}
    </div>

  </div>

</template>

<script>
import {mapActions , mapGetters , mapMutations} from 'vuex'

import comp from './comp'


export default {
  components : {
    comp
  },
  name: 'HelloWorld',
  data() {
    return {
      curentPage: 0,
      postInPage: 9,
    }
  },
  computed: {
    ...mapGetters( [
      'posts'
    ]),
    postInVis( ) {
      return  this.posts.slice( this.curentPage * this.postInPage , this.curentPage * this.postInPage + this.postInPage) 
    },
    numPage() {
      return  Math.ceil( this.posts.length / this.postInPage )
    }
  },
  methods: {
    ...mapActions([
      'fetchPost'
    ]),
    curentPageSet(index) {
      this.curentPage = index
    }
  },
  beforeMount() {
    this.fetchPost()
  }
}
</script>


<style >
.numb {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 1px solid black;
}
.active {
  color: white;
  background: rgb(153, 153, 153);
}
</style>
