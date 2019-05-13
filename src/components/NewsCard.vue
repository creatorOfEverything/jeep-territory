<template>
  <div class="news-card container">
    <div class="row">
      <div class="news-card__img-container col-lg-6">
        <div class="news-card__date">
          <span class="news-card__day">{{ news.date.split(' ')[0] }}</span>
          {{ news.date.split(' ')[1] }}
        </div>
        <img :src="news.img" alt class="news-card__img">
      </div>
      <div class="news-card__info col-lg-6">
        <h2 class="news-card__title">{{ news.title }}</h2>
        <div class="news-card__desc">{{ news.desc }}</div>
        <router-link
          :to="{ name: 'news-show', params: { id: news.id } }"
          class="news-card__link"
        >Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card {
  margin-bottom: 50px;
  position: relative;

  &__img-container {
    position: relative;
  }

  &__date {
    position: absolute;
    top: 10px;
    left: 15px;
    padding: 5px 20px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
  }

  &__day {
    font-size: 30px;
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__title {
    @include mq('lg') {
      display: inline-block;
    }

    margin-bottom: 35px;
    padding: 15px 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    text-transform: uppercase;
    border-bottom: 2px solid #ffba00;
  }

  &__desc {
    font-size: 16px;
  }

  &__link {
    margin-top: 30px;
    float: right;
    text-decoration: none;
    color: #000;
  }
}
</style>
