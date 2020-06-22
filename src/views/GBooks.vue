<template>
  <div class="gbooks">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Google_Books_logo_2015.svg/1280px-Google_Books_logo_2015.svg.png"
      alt=""
    />
    <div class="g-filter">
      <form @submit.prevent="search">
        <input
          type="text"
          placeholder="Search Books ..."
          v-model="text"
          ref="search"
        />
        <i class="fas fa-search fa-2x"></i>
      </form>
    </div>
    <div v-if="books.length > 0">
      <g-books-list :books="books" />
    </div>
  </div>
</template>

<script>
import bookService from '../services/book.service';
import GBooksList from '../components/GBooks/GBooksList';
export default {
  name: 'GBooks',
  components: { GBooksList },
  data() {
    return {
      text: '',
      books: []
    };
  },
  methods: {
    async search() {
      if (this.text === '') return;
      const results = [];
      this.books = await bookService.getBooksFromAPI(this.text, results);
      console.log(this.books);
    }
  },
  created() {
    this.$nextTick(() => this.$refs.search.focus());
  }
};
</script>

<style>
.gbooks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
}

.gbooks img {
  width: 20%;
  margin: auto;
}

.g-filter {
  display: relative;
  margin: 1rem auto;
}

.g-filter input {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 300px;
}

.g-filter input:focus {
  outline: none;
}

.g-filter i {
  position: absolute;
  left: 0;
  right: -230px;
  text-align: center;
  margin-top: 0.6rem;
  color: #ccc;
}
</style>
