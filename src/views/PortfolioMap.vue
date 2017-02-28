<template>
  <div>
    <div id="portfolio-map"></div>
  </div>
</template>

<script>
import Leaflet from 'leaflet'

export default {
  name: 'portfolioMap',

  components: {},

  data () {
    return {
      markers: null
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
      let myMap = Leaflet.map('portfolio-map', { zoomControl: false }).setView([37.7220031, 15.1464744], 11)
      Leaflet.tileLayer('https://api.mapbox.com/styles/v1/amenuor/ciz06kin600052rmej3o9yrsf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1lbnVvciIsImEiOiJjaXlhZmxzeGkwMDR0MndvZXp3OWgybDI5In0.FVcU8LAD7RwwawnYR4Av8w', {
        maxZoom: 18,
        attribution: '',
        id: 'mapbox.streets'
      }).addTo(myMap)
      this.markers.map((marker) => {
        let markerIcon = Leaflet.icon(marker.icon)
        let markerOnMap = Leaflet.marker(marker.location, {icon: markerIcon}).addTo(myMap)

        // Add circle around marker
        let icon = window.$(markerOnMap._icon)
        icon.parent().append(this.getSpinnerCode(marker.locationId))
        icon.parent().find('#' + marker.locationId).css({
          'transform': icon.css('transform'),
          'margin-left': icon.css('margin-left') + icon.position().left,
          'margin-top': icon.css('margin-top') + icon.position().top
        })
        myMap.on('zoomend', function () {
          icon.parent().find('#' + marker.locationId).css('transform', icon.css('transform'))
        })

        markerOnMap.on('click', () => {
          this.$router.push({ name: 'locations', params: { locationId: marker.locationId } })
        })
      })
    },

    getSpinnerCode (markerId) {
      return '<div id="' + markerId + '" class="showbox"><div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div></div>'
    }
  }

}

</script>

<style>
#portfolio-map{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

/* Markers */
.leaflet-marker-icon{
  border-radius: 50%;
}

.showbox{
  position: absolute;
  top: inherit;
}

.loader {
  width: 70px;
  width: 70px;
  position: relative;
  top: -106px;
  left: -35px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.circular {
  -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
          transform-origin: center center;
  width: 100%;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@-webkit-keyframes color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
@keyframes color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
</style>
