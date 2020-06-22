<template>
  <section class="cart">
    <h1>Shopping Cart</h1>
    <div v-for="(item, index) in cart" :key="index">
      <cart-preview :item="item" />
    </div>
    <div class="total">
      <p>
        Total: <span>{{ totalPrice }}$</span>
      </p>
      <router-link to="/complete">
        <button @click="checkout">Checkout</button>
      </router-link>
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
  },
  methods: {
    checkout() {
      this.$store.dispatch({ type: 'emptyCart' });
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
  text-align: right;
}

.total p {
  font-size: 1.2rem;
  font-weight: 800;
}

.total span {
  color: darkred;
  margin-right: 0.5rem;
}

.total button {
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

.total button:hover {
  box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1275px) {
  .total {
    text-align: center;
  }
}
</style>
