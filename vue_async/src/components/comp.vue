<template>
  <div class="comp">
      <h1 class="comp__title"> {{ product.id }}</h1>
      <p class="comp__body">{{ product.body }}</p>
  </div>
</template>

<script>
export default {
    props: {
        product: Object
    }

}
</script>

<style>
.comp{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.comp__title {
    color: blue;
    margin-right: 30px;
}


</style>