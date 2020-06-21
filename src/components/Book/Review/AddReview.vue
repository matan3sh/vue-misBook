<template>
  <transition name="slide" appear>
    <div class="modal-body">
      <div class="modal-header">
        <h1>Add Review</h1>
        <label
          class="stars"
          v-for="(star, index) in 5"
          :key="index"
          @click.stop="stopTheEvent"
        >
          <input
            type="radio"
            name="rate"
            :value="index + 1"
            @click="setRating(index + 1)"
          />
          <font-awesome-icon
            :icon="['fas', 'star']"
            class="icon alt star"
            :color="index + 1 <= rate ? '#ffc107' : '#e4e5e9'"
          />
        </label>
      </div>
      <form @submit.prevent="sendReview">
        <input
          type="text"
          v-model="fullName"
          @click.stop="stopTheEvent"
          placeholder="Your Name"
        />
        <textarea
          type="text"
          name="textArea"
          rows="6"
          v-model="textArea"
          @click.stop="stopTheEvent"
          placeholder="Write Your Review ..."
        ></textarea>
        <button @click.stop="stopTheEvent" class="btn-send">Send</button>
      </form>
    </div>
  </transition>
</template>

<script>
import { Utils } from '../../../services/utils.service';
export default {
  name: 'AddReview',
  data() {
    return {
      fullName: 'Book Reader',
      textArea: '',
      rate: 1
    };
  },
  methods: {
    sendReview() {
      const { fullName, rate, textArea } = this;
      const review = {
        id: Utils.getRandomId(),
        fullName,
        textArea,
        rate
      };
      this.$emit('sendReview', review);
      this.fullName = '';
      this.textArea = '';
      this.closeModal();
    },
    stopTheEvent: (event) => event.stopPropagation(),
    closeModal() {
      this.$emit('closeModal');
    },
    setRating(updatedRating) {
      this.rate = updatedRating;
    }
  }
};
</script>

<style scoped>
.modal-body {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
}

.modal-header {
  text-align: center;
}

.stars {
  display: inline-block;
}

.star {
  cursor: pointer;
  transition: color 200ms;
}

.modal-body h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

.modal-body p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

textarea,
input[type='text'] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input[type='text'] {
  margin: 1rem 0;
}

input[type='radio'] {
  display: none;
}

.btn-send {
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
  width: 100%;
}

.btn-send:hover {
  box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
}
</style>
