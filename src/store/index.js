import Vue from 'vue'
import Vuex from 'vuex'
import filters from './modules/mod_filter'
import articles from './modules/mod_article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    filters,
    articles
  },
  strict: false
})
