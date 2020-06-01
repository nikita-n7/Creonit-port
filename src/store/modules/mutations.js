export default {
    addCart(state, payload) {
        (!state.cart.includes(payload)) ? state.cart.push(payload): 0;

    },
    remove(state, payload) {
        state.cart.splice(payload, 1)
    },
    pluse(state, index) {
        state.cart.forEach((it) => {
            (it.article === index) ? it.qu++: false;
        })
    },
    min(state, index) {
        state.cart.forEach((it) => {
            (it.article === index && it.qu > 1) ? it.qu--: false;
        })
    },
    setSelected(state, item) {
        state.selectValue = item
    },
    serchValueInputSet(state , item) {
        state.serchValueInput = item
    }

}