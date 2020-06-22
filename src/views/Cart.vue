<template>
  <div>
    <cart-list v-if="cart.length > 0" :cart="cart" />
    <h1 v-else>Your Cart is Empty</h1>
  </div>
</template>

<script>
import CartList from '../components/Cart/CartList';
export default {
  name: 'Cart',
  components: { CartList },
  computed: {
    cart() {
      return this.$store.getters.booksInCart;
    }
  }
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  margin: 5rem 0;
}
</style>
