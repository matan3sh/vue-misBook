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
  top: 10px;
  right: 8px;
}

.search input {
  display: inline-block;
  width: 100%;
  padding: 0.4rem 0.5rem;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@media (max-width: 765px) {
  .search input {
    width: 80%;
    padding: 0.4rem 0.5rem;
    font-size: 0.6rem;
  }

  .search i {
    position: absolute;
    top: 8px;
    right: 25px;
  }
}

@media (max-width: 703px) {
  .search {
    display: none;
  }
}
</style>
