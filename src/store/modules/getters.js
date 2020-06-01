export default {
	selectValue(state) {
		if (state.selectValue.value == "all") {
			return state.test
		} else {
			return state.test.filter(it => {
				return it.category == state.selectValue.value;
			});
		}
	},
	selectName(state) {
		return state.selectValue.name
	},

	test(state) {
		return state.test
	},
	cart(state) {
		return state.cart
	},
	totalCartPrice(state) {
		return state.cart.reduce((acum, item) => {
			return acum + parseFloat(item.price).toFixed(2) * item.qu
		}, 0)
	},
	serchValueInput( state ) {
		return state.serchValueInput
	},
	

}