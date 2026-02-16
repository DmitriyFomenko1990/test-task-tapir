<template>
  <section class="hero">
    <div class="hero__container container">
      <h1 class="hero__title">
        ТЕСТОВОЕ ЗАДАНИЕ
      </h1>
      <NuxtLink class="hero__link" to="/catalog">
        <TheButton>В каталог</TheButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 60px;
  padding-bottom: 60px;

  @include respond-to($breakpoint-lg) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }

  &__title {
    margin: 0;
    font-family: $font-family-base;
    font-weight: 500;
    font-size: 26px;
    line-height: 110%;
    letter-spacing: 0;
    color: $color-text;
    text-transform: uppercase;
    vertical-align: bottom;

    @include respond-to($breakpoint-lg) {
      font-size: 64px;
    }
  }

  &__link {
    display: inline-block;
    text-decoration: none;

    &:hover :deep(.button) {
      opacity: 0.9;
    }
  }
}
</style>
