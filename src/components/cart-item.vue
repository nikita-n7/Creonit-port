<template>

    <div class="cart__item">
        <img class="img" :src=" require(`../assets/img/${prod.image}`) " :alt="prod.name">
        <p> {{ prod.name}} </p>
        <p> Price: {{price}} р.</p>
        <div class="ren" @click="$emit('eve')">remove</div>
        <button @click="plus(prod.article)">+</button>  many {{ prod.qu }} <button @click="minuse(prod.article)">-</button>
    </div>
  
</template>

<script>
import { mapGetters , mapMutations} from 'vuex'


export default {
    props: {
        prod:{
            type:Object,
            default() {
                {}
            }
        }
    },
    computed: {
        price() {
           return parseFloat(this.prod.price).toFixed(2)
        }
    },
    methods: {
        ...mapMutations([
            'pluse',
            'min',
        ]),
        plus(item) {
            this.pluse(item)
        },
        minuse(item) {
            this.min(item)
        }
    }
    
}
</script>

<style>
.cart__item {
    cursor: pointer;
    background-color: red;
    width: 25%;
    margin: 25px 5px;
}

</style>