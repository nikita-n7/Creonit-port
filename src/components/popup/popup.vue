<template>
  <div class="popup__inner" @click.stop.self="cl">
    <div class="popup">
      <div class="popup__header">
        <div class="popup__name">mada</div>
        <div class="popup__close" @click.stop="cl">close</div>
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button @click="sendToPerent">add</button>
        <button @click.stop="cl">close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "popup",
  props: {
    prod: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["addCart"]),
    sendToPerent() {
      this.addCart(this.prod);
    },
    cl() {
      this.$emit('close')
    }
  }
};
</script>

<style>
*{
  box-sizing: border-box;
}

.popup__inner {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.74);
}
.popup__close {
  cursor: pointer;
  padding: 5px;
  background-color: rgb(255, 15, 15);
  color: white;
}
.popup {
    display: flex;
    padding: 10px;
    flex-direction: column;
    height: 500px;
    width: 50%;
    background-color: #fff;
}
.popup__header,
.popup__footer {
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__footer {
  align-self: flex-end;
}
.popup__header{
  align-self: flex-start;
}
.popup__content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.popup__name {
  align-self: center;
}
</style>