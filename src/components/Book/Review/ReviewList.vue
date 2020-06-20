<template>
  <div>
    <div div v-for="review in reviews" :key="review.id">
      <ReviewPreview :review="review" />
    </div>
  </div>
</template>

<script>
import ReviewPreview from './ReviewPreview';
export default {
  name: 'ReviewList',
  components: { ReviewPreview },
  props: ['reviews']
};
</script>

<style></style>
