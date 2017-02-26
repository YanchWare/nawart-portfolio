<template>
  <div id="app">
    <PortfolioMap></PortfolioMap>
    <Filters><Filters>
  </div>
</template>

<script>
import PortfolioMap from './views/PortfolioMap'
import Filters from './views/Filters'

export default {
  name: 'app',
  components: {
    PortfolioMap,
    Filters
  }
}
</script>

<style>

</style>
