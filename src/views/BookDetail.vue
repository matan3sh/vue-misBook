<template>
  <div>
    <div v-if="book !== null">
      <div class="book-details-wrapper">
        <div class="left">
          <img :src="book.thumbnail" alt="" />
        </div>
        <div class="middle">
          <h1>{{ book.title }}</h1>
          <h5><span>By</span> {{ book.authors.join(', ') }}</h5>
          <ReviewRate :rate="rating" /><span
            >({{ book.reviews.length }} reviews)</span
          >
          <div v-if="book.description.length > 255">
            <p>
              {{ book.description.slice(0, 255) }}
              <long-text v-if="readMore" :description="book.description" />
              <span @click="toggle"> Read More</span>
            </p>
          </div>
        </div>
        <div class="right">
          <p class="price" v-if="book.listPrice.isOnSale">
            {{ book.listPrice.amount }}$
          </p>
          <p class="price" v-else>
            <i class="fas fa-exclamation-circle"></i> NOT FOR SALE
          </p>
          <div class="free-shipping">
            <i class="fas fa-shipping-fast" /> Free Shipping
          </div>
          <p class="business-days">14 business days</p>
          <button
            v-if="book.listPrice.isOnSale"
            @click="addToCart"
            class="btn-add"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <button class="btn-add" @click="showModal = true">Add Review</button>
      <review-list :reviews="book.reviews" />
    </div>
    <div v-else>
      <Loader />
    </div>
    <div class="modal-wrapper">
      <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="closeModal">
          <AddReview @sendReview="sendReview" @closeModal="closeModal()" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import bookService from '../services/book.service';
import Loader from '../components/Shared/Loader';
import LongText from '../components/Shared/LongText';
import AddReview from '../components/Book/Review/AddReview';
import ReviewRate from '../components/Book/Review/ReviewRate';
import ReviewList from '../components/Book/Review/ReviewList';
export default {
  name: 'BookDetail',
  components: { ReviewRate, Loader, ReviewList, AddReview, LongText },
  data() {
    return {
      book: null,
      showModal: false,
      readMore: false
    };
  },
  computed: {
    rating() {
      return bookService.getBookRating(this.book);
    }
  },
  methods: {
    async loadBook() {
      var id = this.$route.params.id;
      this.book = await bookService.get(id);
    },
    sendReview(review) {
      this.book.reviews.unshift(review);
      const updatedBook = this.book;
      this.$store.dispatch({ type: 'updateBook', updatedBook });
    },
    closeModal() {
      this.showModal = false;
    },
    addToCart() {
      const addedbook = this.book;
      this.$store.dispatch({ type: 'addBookToCart', addedbook });
    },
    toggle() {
      this.readMore = !this.readMore;
    }
  },
  created() {
    setTimeout(() => this.loadBook(), 1500);
  },
  watch: {
    '$route.params.id'() {
      this.loadBook();
    }
  }
};
</script>

<style>
.book-details-wrapper {
  display: grid;
  grid-template-columns: 0.2fr 0.8fr 0.2fr;
  grid-gap: 1rem;
  margin: 5rem 0;
}

.left img {
  width: 100%;
}

.middle span {
  font-size: 0.8rem;
  font-weight: 800;
  color: grey;
}

h5 {
  color: rgb(52, 82, 163);
}

.right {
  font-size: 1.5rem;
  color: grey;
}

.right .price {
  color: brown;
  font-size: 1.2rem;
}

.free-shipping {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.9rem;
}

.business-days {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 0.7rem !important;
  color: #000;
}

.btn-add {
  display: inline-block;
  background: #f0c24e;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 0.8rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  margin: 0.5rem 0;
  transition: 0.2s ease-in;
  border-radius: 6px;
  outline: none;
}

.btn-add:hover {
  box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

.right button {
  width: 100%;
}

span {
  cursor: pointer;
}

@media (max-width: 795px) {
  .book-details-wrapper {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .left img {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
