<template>
  <div class="review-container">
    <div class="left-side">
      <img
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt=""
      />
      <p class="full-name">{{ review.fullName }}</p>
      <p class="time">{{ moment(this.review.readAt).fromNow() }}</p>
    </div>
    <div class="right-side">
      <ReviewRate :rate="(100 / 5) * review.rate" />
      <p>
        {{ review.textArea }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import ReviewRate from '../Review/ReviewRate';
export default {
  name: 'ReviewPreview',
  components: { ReviewRate },
  props: ['review'],
  methods: {
    moment() {
      return moment();
    }
  }
};
</script>

<style>
.review-container {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-gap: 2rem;
  border-top: #ccc 1px dotted;
  padding: 2rem;
  width: 100%;
}

.left-side {
  text-align: center;
}

.review-container img {
  width: 20%;
  border-radius: 20px;
}

.time {
  font-size: 0.8rem;
  color: #333;
}

.right-side p {
  font-size: 1rem;
  color: #333;
}
</style>
