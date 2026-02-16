<template>
  <article class="catalog-card">
    <a class="catalog-card__link" href="#">
      <div class="catalog-card__image-wrap">
        <img
          :src="product.image"
          :alt="product.name"
          class="catalog-card__image"
          loading="lazy"
        />
        <button
          type="button"
          class="catalog-card__favorite"
          aria-label="В избранное"
          @click.prevent
        >
          <img src="/favorite.svg" alt="" class="catalog-card__heart" width="24" height="24" />
        </button>
      </div>
      <div class="catalog-card__info">
        <div class="catalog-card__price-wrap">
          <span class="catalog-card__price">{{ product.price }} ₽ </span>

        <span class="catalog-card__price-x2">{{ formattedPriceSecondary }} ₽ × 2</span>
        </div>
        <p class="catalog-card__name">{{ product.name }}</p>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const formattedPriceSecondary = computed(() =>
  Math.ceil(props.product.price / 2).toLocaleString('ru-RU')
)
</script>

<style lang="scss" scoped>
.catalog-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.15);
  }

  &__link {
    display: block;
    text-decoration: none;
    color: inherit;
    flex: 1;
  }

  &__image-wrap {
    position: relative;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    display: block;
  }

  &__favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: $color-text;
    background: none;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  }

  &__heart {
    width: 24px;
    height: 24px;
    display: block;
  }

  &__info {
    margin-top: 31px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__price-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include respond-to($breakpoint-lg) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__price {
    font-size: 24px;
    font-weight: 500;
  }

  &__price-x2 {
    display: inline-block;
    padding: 4px;
    font-size: $font-size-base;
    font-weight: 500;
    color: $color-bg;
    margin: 0;
    background: $color-bg-footer;
    width: fit-content;
  }

  &__name {
    font-size: 12px;
    margin: 0;
    color: $color-text;

    @include respond-to($breakpoint-lg) {
      font-size: 16px;
    }
  }
}
</style>
