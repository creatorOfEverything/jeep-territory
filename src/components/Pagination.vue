<template>
  <div class="news__pagination">
    <ul class="pagination">
      <li v-if="hasFirst" class="pagination__item" data-page="1">
        <router-link :to="{ name: 'news-list', query: { page: 1 } }" class="pagination__link">1</router-link>
      </li>
      <li v-if="hasFirst" class="pagination__item_bottom">...</li>
      <li v-for="p in pages" :key="p" class="pagination__item" :data-page="p">
        <router-link
          :to="{ name: 'news-list', query: { page: p } }"
          class="pagination__link"
        >{{ p }}</router-link>
      </li>
      <li v-if="hasLast" class="pagination__item_bottom">...</li>
      <li v-if="hasLast" class="pagination__item" :data-page="newsTotal">
        <router-link
          :to="{ name: 'news-list', query: { page: newsTotal } }"
          class="pagination__link"
        >{{ newsTotal }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/store'

export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    pages: {
      type: Array
    },
    newsTotal: {
      type: Number,
      default: 1
    },
    pageRange: {
      type: Number,
      default: 1
    }
  },
  created() {
    store.dispatch('fetchTotalNewsCount').then(() => {
      store.dispatch('setPaginationPages', {
        start: this.rangeStart,
        end: this.rangeEnd
      })
    })
  },
  updated() {
    var _this = this

    document.querySelectorAll('.pagination__item').forEach(function(e) {
      if (e.dataset.page == _this.page) {
        e.classList.add('current')
      }
    })
  },
  computed: {
    rangeStart: function() {
      var start = this.page - this.pageRange

      return start > 0 ? start : 1
    },
    rangeEnd: function() {
      var end = this.page + this.pageRange

      return end < this.newsTotal ? end : this.newsTotal
    },
    hasFirst: function() {
      return this.rangeStart !== 1
    },
    hasLast: function() {
      return this.rangeEnd !== this.newsTotal
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  list-style: none;

  &__item {
    margin: 5px;
    width: 35px;
    height: 35px;
    color: #000;
    background: #e2e2e2;

    &_bottom {
      align-self: flex-end;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
}

.current a {
  color: #fff;
  background: #ffba00;
}
</style>
