<template>
  <section class="cart">
    <h1>Shopping Cart</h1>
    <div v-for="(item, index) in cart" :key="index">
      <cart-preview :item="item" />
    </div>
  </section>
</template>

<script>
import CartPreview from './CartPreview';
export default {
  name: 'CartList',
  components: { CartPreview },
  props: ['cart']
};
</script>

<style>
.cart {
  margin: 2rem 0;
}

.cart h1 {
  margin: 0 1rem;
  font-size: 1.2rem;
}
</style>
