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
    saveBook(state, payload) {
      state.books.unshift(payload.savedBook);
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
    async saveBook(context, payload) {
      const savedBook = await bookService.save(payload.updatedBook);
      context.commit({ type: 'saveBook', savedBook });
    }
  }
};
