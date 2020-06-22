<template>
  <section class="cart">
    <h1>Shopping Cart</h1>
    <div v-for="(item, index) in cart" :key="index">
      <cart-preview :item="item" />
    </div>
    <div class="total">
      <p>
        Total: <span>{{ totalPrice }} $</span>
      </p>
    </div>
  </section>
</template>

<script>
import CartPreview from './CartPreview';
export default {
  name: 'CartList',
  components: { CartPreview },
  props: ['cart'],
  computed: {
    totalPrice() {
      const totalPrice = this.$store.getters.booksInCart;
      let sum = 0;
      for (let i = 0; i < totalPrice.length; i++) {
        sum += totalPrice[i].listPrice.amount;
      }
      return sum;
    }
  }
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

.total {
  border-top: 1px #ddd double;
}

.total p {
  text-align: right;
  font-size: 1.2rem;
  font-weight: 800;
}

.total span {
  color: darkred;
}
</style>
