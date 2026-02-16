<template>
  <nav class="header__nav" aria-label="Основная навигация">
    <a class="header__link" href="#">Мужчинам</a>
    <a class="header__link" href="#">Женщинам</a>
    <a class="header__link" href="#">Каталог</a>
    <a class="header__link" href="#">Доставка</a>
    <a class="header__link" href="#">Блог</a>
    <a class="header__link" href="#">О нас</a>
  </nav>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header__nav {
  display: none;

  @include respond-to($breakpoint-lg) {
    padding: 10px 24px;
    display: flex;
    align-items: center;
    gap: 40px;
    background-color: $color-bg-header;
  }
}

.header__link {
  font-size: $font-size-base;
  font-weight: 400;
  color: $color-text;
  white-space: nowrap;
}
</style>
