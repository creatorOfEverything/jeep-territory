<template>
  <div class="news-detail container">
    <div class="news-detail__title">{{ newsItem.title }}</div>
    <img :src="newsItem.img" alt class="news-detail__img">
    <p class="news-detail__desc">{{ newsItem.desc }}</p>
    <router-link :to="{ name: 'news-list', query: { page: backUrl}}">Назад</router-link>
  </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object
    },
    backUrl: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.news-detail {
  @include mq('sm') {
    padding-top: 0;
  }

  margin: 0 auto;
  padding: 50px 25px;
  background: #fff;

  &__title {
    display: inline-block;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid #ffba00;
  }

  &__img {
    margin-bottom: 30px;
    display: block;
    width: 100%;
  }
}
</style>
