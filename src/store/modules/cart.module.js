import cartService from '../../services/cart.service';

export default {
  state: {
    booksInCart: []
  },
  getters: {
    booksInCart(state) {
      return state.booksInCart;
    }
  },
  mutations: {
    setBooksInCart(state, payload) {
      state.booksInCart = payload.cart;
    },
    addBookToCart(state, payload) {
      state.booksInCart.push(payload.book);
    },
    removeBookFromCart(state, payload) {
      const idx = state.booksInCart.findIndex(
        (book) => book._id === payload.id
      );
      if (idx === -1)
        throw new Error('Somthing went wrong while deleting book from cart');
      state.booksInCart.splice(idx, 1);
    },
    emptyCart(state, payload) {
      state.booksInCart = [];
    }
  },
  actions: {
    async loadCart(context, payload) {
      var cart = await cartService.query();
      context.commit({ type: 'setBooksInCart', cart });
      return cart;
    },
    async addBookToCart({ commit }, { addedbook }) {
      const book = await cartService.add(addedbook);
      commit({ type: 'addBookToCart', book });
    },
    async removeBookFromCart({ commit }, { id }) {
      await cartService.remove(id);
      commit({ type: 'removeBookFromCart', id });
    },
    async emptyCart({ commit }, payload) {
      await cartService.empty();
      commit({ type: 'emptyCart' });
    }
  }
};
