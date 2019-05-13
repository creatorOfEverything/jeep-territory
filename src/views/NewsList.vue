<template>
  <div class="news container">
    <NewsCard v-for="news in this.news" :key="news.id" :news="news"/>

    <Pagination :page="page" :pages="pages" :newsTotal="newsTotal" :pageRange="pageRange"></Pagination>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'
import Pagination from '@/components/Pagination.vue'
import { mapState } from 'vuex'
import store from '@/store/store'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('fetchNews', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    NewsCard,
    Pagination
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  computed: {
    ...mapState(['news', 'newsCount', 'newsTotal', 'pageRange', 'pages'])
  }
}
</script>

<style lang="scss" scoped>
.news {
  @include mq('sm') {
    padding-top: 0;
  }

  margin: 0 auto;
  padding: 50px 25px 120px;
  background: #fff;
}
</style>
