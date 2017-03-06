<template>
  <div id="app">
    <Contents></Contents>
    <PortfolioMap></PortfolioMap>
    <Filters><Filters>
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

</style>
