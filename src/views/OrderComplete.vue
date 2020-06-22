<template>
  <div class="complete">
    <i class="fas fa-check-circle fa-3x"></i>
    <h1>Thanks for buying from us</h1>
    <h3>Your shopping is already on the way to you</h3>
    <i class="fas fa-truck fa-4x"></i>
  </div>
</template>

<script>
export default {
  name: 'OrderComplete'
};
</script>

<style>
.complete {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 5rem auto;
}

.complete h3 {
  color: #555;
  font-weight: lighter;
}

.complete :first-child {
  color: green;
}

.complete i {
  margin: 2rem 0;
}
</style>
