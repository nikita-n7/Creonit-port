<template>
  <div class="select" @click="show = !show">
      {{ selectName }}
    <div class="options_list"
        v-show="show"
    >
        <p class="options"
            v-for="option in options"
            :key ="option.value"
            @click="set(option)"
        >
            {{ option.name}}
        </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    props: {
        options:{
            type:Array,
            default() {
                return []
            }
        },
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        ...mapMutations([
            'setSelected'
        ]),
        set(o) {
            this.setSelected(o)
            this.$emit('on')
        }
    },
    computed: {
        ...mapGetters([
            'selectName',
        ])
    }

}
</script>

<style>

.select {
    cursor: pointer;
    width: 300px;
    height: 25px;
    border: 1px solid black;
    position: relative;
    box-sizing: border-box;
}
.options_list {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 25px;
    border: 1px solid black;
    left: 0;
    margin: 0;
    padding: 0;
    background: #fff;
}
.options {
    padding: 8px;
    margin: 0;
}
.options:hover {
    background-color: rgb(172, 172, 172);
}

</style>