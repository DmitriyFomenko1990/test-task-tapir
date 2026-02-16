<template>
  <header class="header">
    <div class="header__container container">
      <a class="header__logo" href="#">
        <span class="header__logo-inner" />
      </a>
      <TheHeaderNav />
      <button
        type="button"
        class="header__burger"
        aria-label="Меню"
      >
        <span class="header__burger-line" />
        <span class="header__burger-line" />
        <span class="header__burger-line" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    padding-top: 19px;
    padding-bottom: 19px;

    @include respond-to($breakpoint-lg) {
      min-height: $header-nav-height + 20px;
    }
  }

  &__logo {
    flex-shrink: 0;
    display: block;
    width: $header-logo-size;
    height: $header-logo-size;
  }

  &__logo-inner {
    display: block;
    width: 100%;
    height: 100%;
    background-color: $color-accent;
  }

  &__burger {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background-color: $color-bg-header;
    cursor: pointer;

    @include respond-to($breakpoint-lg) {
      opacity: 0;
      pointer-events: none;
    }
  }

  &__burger-line {
    display: block;
    width: 24px;
    height: 2px;
    background-color: $color-text;
    border-radius: 1px;
  }
}
</style>
