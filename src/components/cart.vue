<template>
    <div class="cart">
            <router-link class="GoToCatalog" tag="div" :to='{name: "catalog"}'>
                <div >Catalog</div>
            </router-link>
            <p v-if="!cart.length">empty</p>
            <h1 class="cart__title">Cart</h1>
                <cartItem 
                v-for='(prod , index) in cart' 
                :key='prod.id'
                :prod = prod
                @pl="plus(index)"
                @mi="mins(index)"
                @eve ="removePr(index)"
                />
            <p class="total">Total price {{ totalCartPrice }}p.</p>
    </div>

</template>

<script>
import cartItem from './cart-item'
import {mapGetters, mapMutations} from 'vuex'

export default {
    name:'cart',
    components: {
        cartItem
    },
    computed: {
        ...mapGetters([
            'cart',
            'totalCartPrice',
        ]),
    },
    methods: {
        ...mapMutations([
            'pluse',
            'min',
            'remove'
        ]),
        removePr(index) {
            this.remove(index)
        },
        plus(index) {
            this.pluse(index);
        },
        mins(index) {
            this.min(index);
        }

    }
    
}
</script>

<style >
.cart {
    flex-wrap: wrap;
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 0 auto;
    background-color: rgb(15, 113, 194);
}
.cart__title {
    width: 100%;
}
.total {
    width: 100%;
}
.GoToCatalog {
    position: absolute;
     cursor: pointer;
     top: 10px;
     right: 10px;
     padding: 5px;
     border: 1px solid black;
     color: royalblue;
}


</style>