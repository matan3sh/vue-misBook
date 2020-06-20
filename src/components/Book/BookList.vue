<template>
  <section class="home-cards">
    <div v-for="(book, index) in books" :key="index">
      <book-preview :book="book" />
    </div>
  </section>
</template>

<script>
import BookPreview from './BookPreview';
export default {
  name: 'BookList',
  props: ['books'],
  components: { BookPreview }
};
</script>

<style>
.home-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-bottom: 40px;
}
</style>
