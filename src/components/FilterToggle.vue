<template>
  <div v-if="filter && filter.name" style="display: inline-block;">
    <div class="switch">
      <input :id="filter.name.toLowerCase().replace(' ','-')" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
      <label :for="filter.name.toLowerCase().replace(' ','-')" :data-on="filter.name" :data-off="filter.name"></label>
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

<style scoped>

.switch{
  width: 90px;
  margin-left: 10px;
}

.cmn-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.cmn-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
}

input.cmn-toggle-yes-no + label {
  padding: 2px;
  width: 90px;
  height: 30px;
  display: inline-block;
}
input.cmn-toggle-yes-no + label:before,
input.cmn-toggle-yes-no + label:after {
  padding: 2px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #ff7979;
  font-family: "Roboto Slab", serif;
  font-size: 15px;
  text-align: center;
  line-height: 15px;
  border: 1px dashed #f2f2f2;
}
input.cmn-toggle-yes-no + label:before {
  background-color: #eee;
  content: attr(data-off);
  transition: transform 0.5s;
  backface-visibility: hidden;
}
input.cmn-toggle-yes-no + label:after {
  background-color: #d2edae;
  content: attr(data-on);
  transition: transform 0.5s;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
input.cmn-toggle-yes-no:checked + label:before {
  transform: rotateY(180deg);
}
input.cmn-toggle-yes-no:checked + label:after {
  transform: rotateY(0);
}

</style>
