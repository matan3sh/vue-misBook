<template>
  <div class="search">
    <input
      @input="filter"
      type="text"
      placeholder="Search"
      v-model="filterBy.text"
    />
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
export default {
  name: 'BookFilter',
  data() {
    return {
      filterBy: {
        text: ''
      }
    };
  },
  methods: {
    filter() {
      this.$emit('filter', { ...this.filterBy });
    }
  }
};
</script>

<style>
.search {
  position: relative;
}

.search i {
  position: absolute;
  top: 8px;
  right: 8px;
}

.search input {
  display: inline-block;
  width: 100%;
  padding: 0.3rem;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
