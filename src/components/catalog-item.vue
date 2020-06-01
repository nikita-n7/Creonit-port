<template>
    <div class="catalog__item" @click="op">
        <img class="img" :src=" require(`../assets/img/${product.image}`) " :alt="product.name">
        <p> {{ product.name}} </p>
        <p> Price: {{price}} р.</p>
        <button class="btn"
         @click="sendToPerent"
        >Add to cart</button>


        <popup :prod = 'product' v-show="isVis" @close='close'>
            <p>{{  product.category  }}</p>
            <img class="img" :src=" require(`../assets/img/${product.image}`) " :alt="product.name">
            <p> {{ product.name}} </p>
            <p> Price: {{price}} р.</p>
        </popup>
        
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import popup from "./popup/popup"


export default {
    components:{
        popup
    },
    data() {
        return {
            isVis: false
        }
    },


    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    }, 
    computed: {
        price() {
           return parseFloat(this.product.price).toFixed(2)
        }
    },
    methods: {
        ...mapMutations([
            'addCart'
        ]),
        sendToPerent() {
            this.addCart(this.product)
        },
        close() {
            this.isVis = false;
        },        
        op() {
            this.isVis = true;
        },
    }
    
}
</script>

<style>

.catalog__item {
    display: flex;
    width: 25%;
    border: 1px solid black;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    padding: 20px;
}

.btn{
    
    width: 100px;
}
.img {
    width: 150px;
}

</style>