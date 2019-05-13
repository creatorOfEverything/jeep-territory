import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import NewsList from './views/NewsList'
import NewsShow from './views/NewsShow'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'news-list',
      component: NewsList,
      props: true
    },
    {
      path: '/news-list/:id',
      name: 'news-show',
      component: NewsShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store.dispatch('fetchNewsItem', routeTo.params.id).then(newsItem => {
          routeTo.params.newsItem = newsItem
          routeTo.params.backUrl = routeFrom.params.page
          next()
        })
      }
    }
  ]
})

export default router
