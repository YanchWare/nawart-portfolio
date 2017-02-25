<template>
  <div>
    <div id="filters">
        Filters
    </div>
  </div>
</template>

<script>
export default {
  name: 'filters',

  components: {},

  data () {
    return {
      categories: null
    }
  },

  created () {
    this.fetchData()
  },

  updated () {
    this.initMap()
  },

  mounted () {
    this.initMap()
  },

  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  methods: {

    fetchData () {
      this.markers = [
        {
          location: [37.732801, 14.950996],
          locationId: 'galvarina',
          icon: {
            iconUrl: '/static/images/grottadelgelo.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.806111, 14.983333],
          locationId: 'grottadelgelo',
          icon: {
            iconUrl: '/static/images/grottadelgelo.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.8549304, 15.2696615],
          locationId: 'taormina',
          icon: {
            iconUrl: '/static/images/grottadelgelo.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.727778, 15.055556],
          locationId: 'valleDelBove',
          icon: {
            iconUrl: '/static/images/grottadelgelo.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        },
        {
          location: [37.7880575, 14.8157655],
          locationId: 'bronte',
          icon: {
            iconUrl: '/static/images/grottadelgelo.jpg',
            shadowUrl: '',
            iconSize: [50, 50],
            shadowSize: [0, 0]
          }
        }
      ]
    },

    initMap () {
    }

  }

}

</script>

<style>
#filters{
    text-align: right;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100vh;
    z-index: -1;
    padding: 10px;
}
</style>
