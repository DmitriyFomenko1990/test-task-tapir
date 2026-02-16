<template>
  <div class="catalog">
    <div class="container">
      <h1 class="catalog__title">КАТАЛОГ</h1>

      <ul class="catalog__list">
        <li
          v-for="product in products"
          :key="product.id"
          class="catalog__item"
        >
          <CatalogProductCard :product="product" />
        </li>
      </ul>

      <div class="catalog__more">
        <div v-if="status === 'error' || loadMoreError" class="catalog__error">
          <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
          <TheButton
            @click="status === 'error' ? refresh() : fetchNextPage()"
          >
            Повторить
          </TheButton>
        </div>
        <template v-else-if="hasNextPage">
          <TheButton
            v-if="!isLoadingMore"
            variant="outline"
            @click="fetchNextPage"
          >
            Показать ещё
          </TheButton>
          <p v-else class="catalog__loading">Загрузка...</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  products,
  hasNextPage,
  status,
  error: _error,
  refresh,
  fetchNextPage,
  isLoadingMore,
  loadMoreError,
} = useProducts()
</script>

<style lang="scss" scoped>
.catalog {
  padding: 100px 0;

  &__title {
    font-size: 42px;
    font-weight: 500;
    line-height: 1.1;
    margin: 0 0 100px;
    text-transform: uppercase;
    text-align: center;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @include respond-to($breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    margin: 0;
  }

  &__more {
    margin-top: 110px;
    text-align: center;
  }

  &__loading {
    margin: 0;
    font-size: $font-size-base;
    color: $color-text-muted;
  }

  &__error {
    text-align: center;

    .catalog__error-text {
      margin: 0 0 $spacing-unit * 2;
      font-size: $font-size-base;
      color: $color-text-muted;
    }
  }
}
</style>
