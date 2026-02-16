<template>
  <button class="button" :class="{ 'button--outline': variant === 'outline' }">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'outline'
  }>(),
  { variant: 'default' }
)
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
  cursor: pointer;

  &--outline {
    color: $color-text;
    background-color: $color-bg;
    border: 1px solid $color-text;
  }
}
</style>
