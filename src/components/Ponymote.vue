<template>
  <div :class="{'ponymote': true, 'floating': !text}">
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
})

const fixedMotes: {[key: string]: string} = {
  'a03': 'ajhappy',
  'c23': 'derpyhappy',
}

function fix(mote?:string) {
  if (mote && mote in fixedMotes) {
    return fixedMotes[mote];
  }
  return mote;
}
</script>
