<template>
  <nav class="main-nav">
    <router-link to="/"
      ><img src="img/logo.png" alt="MisBook" class="logo"
    /></router-link>

    <ul class="main-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/gbooks">GBooks</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <ul class="right-menu">
      <li>
        <BookFilter @filter="setFilter" />
      </li>
      <li class="in-cart">
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-len">({{ cart.length }})</span>
          <router-link to="/complete"
            ><span @click="buyNow" v-if="cart.length > 0" class="btn"
              >Buy Now</span
            ></router-link
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import BookFilter from '../Book/BookFilter';
export default {
  name: 'Navbar',
  components: { BookFilter },
  computed: {
    cart() {
      return this.$store.getters.booksInCart;
    }
  },
  async created() {
    await this.$store.dispatch({ type: 'loadBooks' });
    await this.$store.dispatch({ type: 'loadCart' });
  },
  methods: {
    setFilter(filterBy) {
      this.$store.commit('setFilter', { ...filterBy });
    },
    buyNow() {
      this.$store.dispatch({ type: 'emptyCart' });
    }
  }
};
</script>

<style scoped>
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 20px 0;
  font-size: 13px;
  border: #ccc 1px dotted;
  border-radius: 3px;
  padding: 2rem;
}

.main-nav .logo {
  width: 120px;
}

.main-nav ul {
  display: flex;
}

.main-nav ul li {
  padding: 0 10px;
}

.main-nav ul li a {
  padding-bottom: 2px;
}

.main-nav ul.main-menu {
  flex: 1;
  margin-left: 20px;
}

.menu-btn {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 2;
  display: none;
}

.btn {
  display: inline-block;
  background: #f0c24e;
  color: #333;
  padding: 0.2rem 1rem;
  font-size: 0.6rem;
  font-weight: 800;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  margin: 0.5rem 0;
  transition: 0.2s ease-in;
  border-radius: 6px;
  outline: none;
}

.btn:hover {
  box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
}

i {
  position: relative;
  top: 2px;
}
.cart-len {
  font-size: 0.8rem;
  margin: 0 0.5rem;
  position: relative;
  top: 1px;
}

@media (max-width: 600px) {
  .in-cart {
    display: none;
  }
}

@media (max-width: 375px) {
  .main-menu {
    font-size: 0.6rem;
  }
}
</style>
