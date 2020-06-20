<template>
  <div class="stars-outer">
    <div class="stars-inner" :style="{ width: `${rate}%` }"></div>
  </div>
</template>

<script>
export default {
  name: 'ReviewRate',
  props: ['rate']
};
</script>

<style scoped>
.stars-outer {
  position: relative;
  display: inline-block;
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
}

.stars-outer::before {
  content: '\f005 \f005 \f005 \f005 \f005';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #ccc;
}

.stars-inner::before {
  content: '\f005 \f005 \f005 \f005 \f005';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  color: #f8ce0b;
}
</style>
