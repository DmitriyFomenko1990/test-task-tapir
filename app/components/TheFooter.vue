<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__grid">
        <div
          v-for="column in footerColumns"
          :key="column.title"
          class="footer__column"
        >
          <h2 class="footer__title">
            {{ column.title }}
          </h2>
          <ul class="footer__list">
            <li
              v-for="item in column.links"
              :key="item"
              class="footer__item"
            >
              <a class="footer__link" href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterColumn {
  title: string
  links: string[]
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Каталог',
    links: ['Все бренды', 'Nike', 'Adidas', 'Puma', 'New Balance']
  },
  {
    title: 'Помощь',
    links: ['Доставка', 'Заказ и оплата', 'Обмен и Возврат', 'F. A. Q.']
  },
  {
    title: 'Информация',
    links: ['Преимущества', 'Гарантия и безопасность', 'Индивидуальный заказ', 'Акции']
  },
  {
    title: 'Компания',
    links: ['О нас', 'Блог', 'Отзывы', 'Контакты']
  }
]
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-bg-footer;
  color: $color-bg;
  padding: 60px 0;

  @include respond-to($breakpoint-lg) {
    padding: 100px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px 40px;

    @include respond-to($breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__title {
    margin: 0;
    font-size: $font-size-base;
    font-weight: 400;
    line-height: $line-height-base;
    color: $color-text-muted;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__item {
    margin: 0;
  }

  &__link {
    font-size: $font-size-base;
    font-weight: 400;
    color: $color-bg;
  }
}
</style>
