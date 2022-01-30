<template>
  <div class="discordAccountCard">
    <div class="avatarPane">
      <img :src="avatar"/>
    </div>
    <div class="detailsPane">
      <span class="name" v-text="name"/>
      <span class="guild" v-text="guild"/>
    </div>
  </div>
</template>

<style lang="scss">
.discordAccountCard {
  background: #2f3136;
  padding: .7em .9em .7em;
  display: inline-flex;
  border-radius: .8em;
  .avatarPane {
    margin-right: 1em;
    height: 3.5em;
    img {
      width: 3.5em;
      border-radius: 35%;
    }
  }
  .detailsPane {
    width: 12em;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: left;
    .name {
      display: inline-block;
      color: #fff;
      font-size: 1.3em;
      font-weight: 500;
    }
    .guild {
      display: inline-block;
      color: #b8bbbe;
      margin-top: -.15em;
    }
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  name: String,
  avatar: String,
  guild: String,
})
</script>
