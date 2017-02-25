<template>
  <div id="app">
    <PortfolioMap></PortfolioMap>
    <Filters><Filters>
  </div>
</template>

<script>
import PortfolioMap from './components/PortfolioMap'
import Filters from './components/Filters'

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
