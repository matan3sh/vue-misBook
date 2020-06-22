<template>
  <div>
    <div v-for="book in books" :key="book._id">
      <g-books-preview :book="book" />
    </div>
  </div>
</template>

<script>
import GBooksPreview from './GBooksPreview';
export default {
  name: 'GBooksList',
  components: { GBooksPreview },
  props: ['books']
};
</script>

<style></style>
