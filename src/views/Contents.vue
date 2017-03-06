<template>
  <div id="contents">
    <h2>Stories: {{stories.length}}</h2>
    <Story v-for="story in stories" :story="story"></Story>
  </div>  
</template>

<script>
import {mapGetters} from 'vuex'
import Story from '../components/Story'

export default {
  name: 'contents',
  computed: mapGetters({
    filters: 'allFilters',
    stories: 'allArticles'
  }),
  components: {
    Story
  },
  created () {
  }
}

</script>

<style scoped>
#contents{
  text-align: center;
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  left: 0;
  width: 25vw;
  height: 100vh;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  z-index: 1;
  border: 1px dashed #a9e3dc;
}
</style>
