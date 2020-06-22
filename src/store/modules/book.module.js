import bookService from '../../services/book.service';

export default {
  state: {
    books: [],
    book: null,
    filterBy: {
      text: ''
    }
  },
  getters: {
    books(state) {
      return state.books;
    },
    book(state) {
      return state.book;
    },
    filterBy(state) {
      return state.filterBy;
    },
    booksToShow(state) {
      var books = state.books;
      var filter = state.filterBy;
      if (filter.text === '') return books;
      var booksToShow = books.filter((book) => {
        return book.title.toLowerCase().includes(filter.text.toLowerCase());
      });
      return booksToShow;
    }
  },
  mutations: {
    setBooks(state, payload) {
      state.books = payload.books;
    },
    setBook(state, payload) {
      state.book = payload.book;
    },
    updateBook(state, payload) {
      const idx = state.books.findIndex(
        (book) => book._id === payload.savedBook._id
      );
      state.books[idx] = payload.savedBook;
    },
    addBook(state, payload) {
      state.books.push(payload.savedBook);
    },
    setFilter(state, filterBy) {
      state.filterBy = filterBy;
    }
  },
  actions: {
    async loadBooks(context, payload) {
      var books = await bookService.query();
      context.commit({ type: 'setBooks', books });
      return books;
    },
    async updateBook(context, payload) {
      const savedBook = await bookService.update(payload.updatedBook);
      context.commit({ type: 'updateBook', savedBook });
    },
    async addBook(context, payload) {
      const savedBook = await bookService.add(payload.book);
      context.commit({ type: 'addBook', savedBook });
    }
  }
};
