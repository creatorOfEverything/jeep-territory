import Vue from 'vue'
import Vuex from 'vuex'
import NewsService from '@/services/NewsService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    newsItem: {},
    pages: [],
    perPage: 3,
    newsTotal: 0,
    pageRange: 1
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    },
    SET_NEWS_ITEM(state, newsItem) {
      state.newsItem = newsItem
    },
    SET_NEWS_TOTAL(state, newsTotal) {
      state.newsTotal = parseInt(newsTotal.count)
    },
    SET_PAGINATION_PAGES(state, { start, end }) {
      state.pages = []

      for (var i = start; i <= end; i++) {
        state.pages.push(i)
      }
    }
  },
  actions: {
    fetchNews({ commit, state }, { page }) {
      NewsService.getNews(state.perPage, page).then(response => {
        commit('SET_NEWS', response.data)
      })
    },
    fetchNewsItem({ commit, getters, state }, id) {
      if (id === state.newsItem.id) {
        return state.newsItem
      }

      var newsItem = getters.getNewsItemById(id)

      if (newsItem) {
        commit('SET_NEWS_ITEM', newsItem)
        return newsItem
      } else {
        return NewsService.getNewsItem(id).then(response => {
          commit('SET_NEWS_ITEM', response.data)
          return response.data
        })
      }
    },
    fetchTotalNewsCount({ commit }) {
      return NewsService.getTotal().then(response => {
        commit('SET_NEWS_TOTAL', response.data)
      })
    },
    setPaginationPages({ commit }, { start, end }) {
      var range = {
        start: start,
        end: end
      }
      commit('SET_PAGINATION_PAGES', range)
    }
  },
  getters: {
    getNewsItemById: state => id => {
      return state.news.find(newsItem => newsItem.id === id)
    }
  }
})
