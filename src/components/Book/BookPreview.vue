<template>
  <router-link
    :to="{ name: 'BookDetail', params: { id: book._id } }"
    class="book-card"
  >
    <img :src="book.thumbnail" alt="" />
    <h3>{{ book.title }}</h3>
    <ReviewRate :rate="bookRating" /><span>({{ book.reviews.length }})</span>
    <p>
      {{ book.categories.join(', ') }}
    </p>
  </router-link>
</template>

<script>
import bookService from '../../services/book.service';
import ReviewRate from './Review/ReviewRate';
export default {
  name: 'BookPreview',
  props: ['book'],
  components: { ReviewRate },
  data() {
    return {
      bookRating: bookService.getBookRating(this.book)
    };
  }
};
</script>

<style scoped>
.book-card img {
  width: 100%;
  border-bottom: rgb(214, 214, 214) 9px solid;
  border-left: #333 10px solid;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.book-card h3 {
  margin-bottom: 5px;
}

.book-card a {
  display: inline-block;
  padding-top: 10px;
  color: #0067b8;
  text-transform: uppercase;
  font-weight: bold;
}

.book-card a:hover i {
  margin-left: 10px;
}

span {
  font-size: 0.8rem;
  color: gray;
  font-weight: 800;
  margin-left: 5px;
}

p {
  font-size: 0.8rem;
  font-weight: 800;
  color: rgb(88, 88, 88);
}
</style>
