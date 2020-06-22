<template>
  <div class="gbook-card">
    <img :src="book.thumbnail" alt="" />
    <div>
      <h2>{{ book.title }}</h2>
      <p>{{ book.subtitle.slice(0, 100) }}</p>
      <h3>
        Language: <span>{{ book.language }}</span>
      </h3>
      <h4>Category: {{ book.categories.join(', ') }}</h4>
      <h5>Author: {{ book.authors.join(', ') }}</h5>
      <button @click="addGBook(book)" class="gbook-add">Add Book</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GBooksPreview',
  props: ['book'],
  methods: {
    addGBook(book) {
      this.$store.dispatch({ type: 'addBook', book });
    }
  }
};
</script>

<style>
.gbook-card {
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  margin: 1rem;
  border-top: 1px #ddd double;
  padding: 0.5rem;
}

.gbook-card img {
  width: 40% !important;
  margin: 0 auto;
}

.gbook-card h2 {
  font-size: 1rem;
}

.gbook-card h3 {
  font-size: 0.7rem;
  color: #0066c0;
}

.gbook-card h3 span {
  font-size: 0.7rem;
  text-transform: uppercase;
}

.gbook-card h4 {
  font-size: 0.7rem;
  color: darkred;
}

.gbook-card h5 {
  font-size: 0.7rem;
  color: #694f0d;
}

.gbook-add {
  display: inline-block;
  background: #f0c24e;
  color: #333;
  padding: 0.2rem 1rem;
  font-size: 0.6rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
  border-radius: 6px;
  outline: none;
}

.gbook-add:hover {
  box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
}
</style>
