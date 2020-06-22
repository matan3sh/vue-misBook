<template>
  <div>
    <header class="showcase">
      <h2>Books Deals</h2>
      <p>
        Select Books are on sale now - save while supplies last
      </p>
      <a href="#cards">
        Shop Now
      </a>
      <i class="fas fa-chevron-down"></i>
    </header>
    <book-list :books="booksToShow" />
  </div>
</template>

<script>
import BookList from '../components/Book/BookList';
export default {
  name: 'Home',
  components: { BookList },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
    cart() {
      return this.$store.getters.booksInCart;
    }
  }
};
</script>

<style scoped>
.showcase {
  width: 100%;
  height: 400px;
  background: url('../../public/img/slide1.png') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  padding-bottom: 50px;
  margin-bottom: 20px;
}

.showcase h2,
.showcase p {
  margin-bottom: 10px;
}

.showcase .btn {
  margin-top: 20px;
}

.showcase i {
  margin-top: 0.5rem;
}

@media (max-width: 612px) {
  .showcase {
    height: 200px;
  }

  .showcase h2,
  .showcase p {
    display: none;
  }

  .showcase i {
    margin-top: 0.5rem;
  }
}
</style>
