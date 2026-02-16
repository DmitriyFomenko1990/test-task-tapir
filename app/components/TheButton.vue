<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 24px;
  font-family: $font-family-base;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  color: $color-bg;
  background-color: $color-accent;
  border: none;
}
</style>
