<template>
  <div>
    <section class="banner">
      <img src="/banner1.jpg" alt class="banner__img">
      <h1 class="banner__title">Мероприятия</h1>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  @include mq('sm') {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    background: #fff;
  }

  &__title {
    @include c('x');
    @include mq('md') {
      @include fs(25px, 'h1');
      top: 30px;
    }
    @include mq('sm') {
      margin: 20px 0;
      position: static;
      transform: none;
    }

    position: absolute;
    display: inline-block;
    top: 50px;
    padding: 8px 0;
    font-weight: bold;
    font-size: 41px;
    text-transform: uppercase;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }

  &__img {
    display: block;
    max-width: 100%;
  }
}
</style>
