<template>
  <div :class="{'ponymote': true, 'floating': !text, 'right': right}">
    <img :src="'/ponymotes/'+fix(mote)+'.png'"/>
    <span v-if="text" v-text="text"/>
  </div>
</template>

<style lang="scss">
p + .ponymote {
  margin-top: 1em;
}
.ponymote {
  display: flex;
  align-items: center;
  margin-bottom: .3em;
  &.floating {
    display: block;
    float: left;
    margin-top: 10px;
    margin-right: 1em;
  }
  &.right img {
    transform: scaleX(-1);
  }
  img {
    height: 70px;
  }
  span {
    display: block;
    margin-left: .7em;
    opacity: .66;
  }
  + .ponymote {
    margin-top: .6em;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  mote: String,
  text: String,
  right: Boolean,
})

const fixedMotes: {[key: string]: string} = {
  'a00': 'ajlie',
  'a03': 'ajhappy',
  'a05': 'ajsup',
  'b01': 'ajcower',
  'b05': 'ajugh',
  'b07': 'ajwut',
  'b24': 'squintyjack',
  'c04': 'ajfrown',
  'c23': 'derpyhappy',
  'e07': 'ajconfused',
  'rb11': 'ajsly',
}

function fix(mote?:string) {
  if (mote && mote in fixedMotes) {
    return fixedMotes[mote];
  }
  return mote;
}
</script>
