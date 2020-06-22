<template>
  <div class="cart-card">
    <img :src="item.thumbnail" alt="" />
    <div>
      <h2>
        {{ item.title }}
      </h2>
      <h5><span>By</span> {{ item.authors.join(', ') }}</h5>
      <p>In Stock</p>
      <div class="free-shipping">
        <i class="fas fa-shipping-fast" /> Free Shipping
      </div>
      <div class="cart-card-footer">
        <p class="cart-price">{{ item.listPrice.amount }}$</p>
        <p class="act" @click="removeBookFromCart(item._id)">Delete</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartPreview',
  props: ['item'],
  methods: {
    async removeBookFromCart(id) {
      this.$store.dispatch({ type: 'removeBookFromCart', id });
    }
  }
};
</script>

<style>
.cart-card {
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  margin: 1rem;
  border-top: 1px #ddd double;
  padding: 1rem;
}

.cart-card img {
  width: 50%;
  margin: 0 auto;
}

.cart-card span {
  color: #333;
}

.cart-card p {
  color: green;
}

.act {
  margin-top: 1rem;
  border-left: 1px #ccc double;
  padding: 5px;
  color: #0066c0 !important;
  font-size: 0.9rem;
  cursor: pointer;
}

.cart-price {
  margin-top: 1rem;
  border-right: 1px #ccc double !important;
  padding: 5px;
  color: #4e0606 !important;
  font-size: 0.9rem;
  cursor: pointer;
}

.free-shipping {
  color: #aaa;
}

.cart-card-footer {
  display: flex;
}
</style>
