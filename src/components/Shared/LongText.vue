<template>
  <span class="long-text">{{ description }}</span>
</template>

<script>
export default {
  name: 'LongText',
  props: ['description']
};
</script>

<style>
.long-text {
  color: #000 !important;
  font-size: 0.9rem !important;
  font-weight: lighter !important;
}

@media (max-width: 795px) {
  .long-text {
    display: none;
  }
}
</style>
