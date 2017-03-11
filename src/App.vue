<template>
  <div id="app">
    <PortfolioMap></PortfolioMap>
    <Filters></Filters>
    <Contents></Contents>
  </div>
</template>

<script>
import PortfolioMap from './views/PortfolioMap'
import Filters from './views/Filters'
import Contents from './views/Contents'

export default {
  name: 'app',
  components: {
    PortfolioMap,
    Filters,
    Contents
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}
</style>
