<template>
  <div class="catalog">
    <router-link tag="div" class="GoToCart" :to="'/cart'">
      <div>Cart: {{ cart.length }}</div>
    </router-link>

    <input type="text" v-model="serchValueInp" > <button @click="sr">Poisk</button>

    <div class="side">
      <input type="range" min="0" max="10000" step="1" v-model.number="max" @change="seile"/>
      <input type="range" min="0" max="10000" step="1" v-model.number="min" @change="seile" />
      max ={{ max}} min={{min}}
      <imp :options="options" />
    </div>
    {{ selectValue}}
    <catalogItem v-for="(product) in prod" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import catalogItem from "./catalog-item";
import { mapGetters, mapMutations } from "vuex";
import imp from "./imp";

export default {
  name: "catalog",
  components: {
    catalogItem,
    imp
  },
  data() {
    return {
      options: [
        { name: "Все", value: "all" },
        { name: "Женские", value: "Женские" },
        { name: "Мужские", value: "Мужские" }
      ],
      prod: null,
      min: 0,
      max: 5000,
      serchValueInp: ''
    };
  },
  computed: {
    ...mapGetters(["test", "cart", "selectValue",'serchValueInput']),
  },
  methods: {
    ...mapMutations([
      'serchValueInputSet'
    ]),
    seile() {
      this.prod = this.selectValue;
      this.prod = this.prod.filter(item => {
        return (parseInt(item.price) >= this.min && parseInt(item.price) <= this.max);
      });
    },
    sr() {
      this.serchValueInputSet(this.serchValueInp)
      this.serchValueInp = ''
      this.seile();
      this.prod = this.prod.filter( item => {
        return item.name.toLowerCase().includes(this.serchValueInput.toLowerCase())
      })
    },

  },
  watch: {
    '$store.getters.selectValue'() {
      this.seile();
    }
  },
  mounted() {
    this.prod = this.selectValue
  }
};
</script>
<style >
.catalog {
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.GoToCart {
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  padding: 5px;
  border: 1px solid black;
  color: royalblue;
}
.side {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>