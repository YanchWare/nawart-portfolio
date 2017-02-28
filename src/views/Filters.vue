<template>
  <div>
    <div id="filters">
      <h1>Countries</h1>
      <FilterToggle v-for="filter in filters" :filter="filter"></FilterToggle>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FilterToggle from '../components/FilterToggle'

export default {
  name: 'filters',
  computed: mapGetters({
    filters: 'allFilters'
  }),
  components: {
    FilterToggle
  },
  created () {
    this.$store.dispatch('getAllFilters')
  }
}

</script>

<style>
#filters{
    text-align: right;
    background-color: #f2f2f2;
    position: fixed;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100vh;
    z-index: -1;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
