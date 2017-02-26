<template>
  <div>
    <div class="filter-toggle">
        {{filter.name}}
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'filter-toggle',
  props: ['filter'],
  methods: mapActions([
    'activateFilter'
  ])
}
</script>
