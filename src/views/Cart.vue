<template>
  <div>
    <cart-list :cart="cart" />
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

<style></style>
