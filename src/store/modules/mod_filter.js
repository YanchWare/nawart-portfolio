import apiWrapper from '../../helpers/api_wrapper'
import * as types from '../mutation_types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allFilters: state => state.all
}

function getFiltersWorker (commit, page = 1) {
  apiWrapper.getFilters(page).then(function (response) {
    commit(types.INIT_FILTERS, response.entity)
    let totalPages = response.headers['X-Wp-Totalpages']
    if (page < totalPages) {
      getFiltersWorker(commit, ++page)
    }
  })
}

// actions
const actions = {
  getAllFilters ({ commit }) {
    getFiltersWorker(commit)
  }
}

// mutations
const mutations = {
  [types.INIT_FILTERS] (state, filters) {
    state.all = state.all.concat(filters)
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
