<template>
  <div class="story" v-if="story.title.rendered">
    <a :href="story.link" >
      <div v-html="story.title.rendered"></div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'story',
  props: ['story']
}
</script>

<style scoped>
.story{
  border-bottom: 1px dashed #ff7979;
}
a{
  color: #ff7979;
  text-decoration: none;
  padding: 5px;
}
</style>
