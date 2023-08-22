<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mt-6 mb-4">
          Prompt generator
          <subtitle>Need something to draw? Click below!</subtitle>
        </h1>
      </v-col>
    </v-row>
    <v-row class="form">
      <v-checkbox v-model="requireCharacterImages" label="Require character images"/>
    </v-row>
    <v-row class="form">
      <p>Include:</p>
    </v-row>
    <v-row class="form">
      <v-checkbox v-model="includeFiM" label="Friendship is Magic (Gen 5)"/>
      <v-checkbox v-model="includeANG" label="A New Generation (Gen 6)"/>
    </v-row>
    <v-row class="form" style="justify-content: center;">
      <v-btn prepend-icon="mdi-dice-3" @click="generate()">
        Generate
      </v-btn>
    </v-row>
    <v-row class="form mt-12">
      <p>Characters:</p>
    </v-row>
    <v-row class="results">
      <div class="character" v-for="char in resultChars">
        <div class="image-bg"><img v-if="char.image !== undefined" :src="'/characters/'+char.image"/></div>
        <span class="name mt-1">{{ char.name }}</span>
      </div>
    </v-row>
    <v-row class="footer mt-10">
      <p>Includes content from <a href="https://mlp.fandom.com/">mlp.fandom.com</a> used under CC-BY-SA</p>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import characters from '@/assets/characters.json'

type Character = {
  slug: string,
  name: string,
  image?: string,
}

var resultChars: Character[] = reactive([])

var characterKindGroups: {[key: string]: string[]} = {
  pony: ['earth', 'pegasus', 'unicorn', 'alicorn'],
  pet: ['cat', 'dog', 'kelpie', 'snapping turtle', 'rabbit', 'owl',
    'phoenix', 'chicken', 'pomeranian', 'bunny', 'tortoise'],
}
var characterKindMap: {[key: string]: boolean} = {
  breezie: true,
  changeling: true,
  deer: true,
  'diamond dog': true,
  donkey: true,
  draconequus: true,
  dragon: true,
  griffon: true,
  hippogriff: true,
  kirin: true,
  minotaur: true,
  yak: true,
  zebra: true,
}

var requireCharacterImages = ref(true)
var includeFiM = ref(true)
var includeANG = ref(true)

const kinds: string[] = []
const firstSeasons: string[] = []

for (const [key, value] of Object.entries(characters)) {
  // list of all possible first seasons
  if (!firstSeasons.includes(value.firstSeason)) {
    firstSeasons.push(value.firstSeason)
  }

  // find the series they are from
  characters[key].series = 'fim'
  if (value.firstSeason == 'ANG') {
    characters[key].series = 'ang'
  }

  // list of all possible kinds
  if (value.kind !== '' && !kinds.includes(value.kind)) {
    kinds.push(value.kind)
  }

  // take the base kind and create list of applicable ones based on the above
  characters[key].kinds = [] // todo: tackle when typing characters above
  var assigned = characterKindMap[value.kind]
  if (value.kind !== '') {
    characters[key].kinds.push(value.kind)
  }
  for (const [groupName, groupEntries] of Object.entries(characterKindGroups)) {
    if (groupEntries.includes(value.kind)) {
      characters[key].kinds.push(groupName)
      assigned = true
    }
  }
  if (!assigned) {
    characters[key].kinds.push('other')
  }
}

console.log(characters)
console.log(kinds)
console.log(firstSeasons)

const generate = () => {
  const potentialChars: string[] = []
  const resultCharNames: string[] = []

  for (const [key, value] of Object.entries(characters)) {
    if (value.imageName === undefined && requireCharacterImages.value) {
      continue
    }

    if (value.series === 'fim' && !includeFiM.value) {
      continue
    }
    if (value.series === 'ang' && !includeANG.value) {
      continue
    }

    potentialChars.push(key)
  }

  // assume 3 chars for now
  var i = 3
  while (i > 0) {
    const newName = potentialChars[(Math.floor(Math.random() * potentialChars.length))]
    if (!resultCharNames.includes(newName)) {
      resultCharNames.push(newName)
      i -= 1
    }
  }

  // set resulting characters
  while (resultChars.length > 0) {
    resultChars.pop()
  }

  resultCharNames.forEach(slug => {
    resultChars.push({
      slug,
      name: characters[slug].name,
      image: characters[slug].imageName,
    })
  })
}
</script>

<style lang="scss" scoped>
h1 subtitle {
  display: block;
  margin-top: .2em;
  font-size: .6em;
  font-weight: 500;
  opacity: .9;
}
.form, .results {
  width: 40em;
  max-width: calc(100% - 2em);
  margin: 0 auto;
}
.results {
  justify-content: center;
  .character {
    display: flex;
    flex-direction: column;
    width: 12em;
    text-align: center;
    padding: 1em;
    border-radius: .7em;
    background: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-on-secondary));
    font-weight: 500;
    margin: .5em;
    .image-bg {
      width: 10em;
      height: 10em;
      background: #fff;
      border-radius: .5em;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 10em;
        max-height: 10em;
      }
    }
    .name {

    }
  }
}
.footer {
  font-size: .85em;
  text-align: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
}
</style>
