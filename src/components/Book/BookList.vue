<template>
  <section class="home-cards" id="cards">
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
  margin-left: 1rem;
}

@media (max-width: 975px) {
  .home-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 755px) {
  .home-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 560px) {
  .home-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 370px) {
  .home-cards {
    grid-template-columns: 1fr;
  }
}
</style>
