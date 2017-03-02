<template>
  <div id="filters">
    <div class="menu">
      <h2>Stories: {{stories.length}}</h2>
    </div>
    <div class="menu">
      <h2>Countries</h2>
      <FilterToggle v-for="filter in filters" :filter="filter"></FilterToggle>
    </div>
    <div class="menu">
      <h2>Media</h2>
    </div>
    <div class="menu">
      <h2>Projects</h2>
    </div>
    <div class="menu">
      <h2>Multimedia</h2>
    </div>
    <div class="menu">
      <h2>Years</h2>
    </div>
    <div class="menu">
      <h2>Authors</h2>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FilterToggle from '../components/FilterToggle'

export default {
  name: 'filters',
  computed: mapGetters({
    filters: 'allFilters',
    stories: 'allArticles'
  }),
  components: {
    FilterToggle
  },
  created () {
    this.$store.dispatch('getAllFilters')
    this.$store.dispatch('getAllArticles')
  }
}

</script>

<style>
#filters{
    text-align: center;
    background-color: transparent;
    position: fixed;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100vh;
    z-index: -1;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    margin: 0;
}

.menu{
  background-color: #f2f2f2;
  border: 1px dashed #a9e3dc;
  border-radius: 20px;
}
</style>
