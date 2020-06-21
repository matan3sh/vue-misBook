<template>
  <nav class="main-nav">
    <router-link to="/"
      ><img src="img/logo.png" alt="Microsoft" class="logo"
    /></router-link>

    <ul class="main-menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <ul class="right-menu">
      <li>
        <BookFilter @filter="setFilter" />
      </li>
      <li>
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="cart-len">({{ cart.length }})</span>
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

.main-nav ul li a:hover {
  border-bottom: 2px solid #262626;
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
  cursor: pointer;
  display: inline-block;
  border: 0;
  font-weight: bold;
  padding: 10px 20px;
  background: #262626;
  color: #fff;
  font-size: 15px;
}

.btn:hover {
  opacity: 0.9;
}

.dark {
  color: #fff;
}

.dark .btn {
  background: #f4f4f4;
  color: #333;
}

i {
  position: relative;
  top: 5px;
}

.cart-len {
  font-size: 0.8rem;
  margin: 0 0.5rem;
  position: relative;
  top: 3px;
}
</style>
