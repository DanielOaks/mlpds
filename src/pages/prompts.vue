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
      <v-checkbox density="compact" v-model="requireCharacterImages" label="Require character images"/>
      <v-checkbox density="compact" v-model="allowUnnamed" label="Allow unnamed characters"/>
    </v-row>
    <v-row class="form">
      <p>Include:</p>
    </v-row>
    <v-row class="form">
      <v-select
        label="Select"
        density="compact"
        v-model="includeKinds"
        multiple
        :items="['All'].concat(Object.keys(characterKindGroups).map(key => key.charAt(0).toUpperCase() + key.slice(1)), Object.keys(characterKindMap).map(key => key.charAt(0).toUpperCase() + key.slice(1)))"
      ></v-select>
    </v-row>
    <v-row class="form">
      <v-checkbox density="compact" v-model="includeFiM" label="Friendship is Magic (Gen 4)"/>
      <v-checkbox density="compact" v-model="includeANG" label="A New Generation (Gen 5)"/>
    </v-row>
    <v-row class="form" style="justify-content: center;">
      <v-btn prepend-icon="mdi-dice-3" @click="generate()">
        Generate
      </v-btn>
    </v-row>
    <!-- <v-row class="form mt-12" v-if="resultChars.length > 0">
      <p>Characters:</p>
    </v-row> -->
    <v-row class="results mt-12">
      <div class="character" v-for="char in resultChars">
        <div class="image-bg"><img v-if="char.image !== undefined" :src="'/characters/'+char.image"/></div>
        <span class="name mt-1">{{ char.name }}</span>
      </div>
    </v-row>
    <!-- <v-row class="form mt-12" v-if="resultLocations.length > 0">
      <p>Location:</p>
    </v-row> -->
    <v-row class="results mt-3">
      <div class="location" v-for="location in resultLocations">
        <div v-if="location.image !== undefined" class="image-bg"><img :src="'/locations/'+location.image"/></div>
        <span class="subPlace mt-1">{{ location.subPlace }}</span>
        <span class="place">{{ location.place }}</span>
      </div>
    </v-row>
    <v-row class="footer mt-10">
      <p>Includes content from <a href="https://mlp.fandom.com/">mlp.fandom.com</a> and <a href="https://g5mlp.fandom.com/">g5mlp.fandom.com</a> used under CC-BY-SA</p>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import characters from '@/assets/characters.json'
import locations from '@/assets/locations.json'

//
// characters
//

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
var allowUnnamed = ref(true)
var includeKinds = ref(['All'])
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

//
// locations
//

type Location = {
  slug: string,
  place: string,
  subPlace: string,
  image?: string,
}

var resultLocations: Location[] = reactive([])

//
// generation
//

const generate = () => {
  // generate location
  const potentialLocations: string[] = []

  for (const [key, value] of Object.entries(locations)) {
    if (value.series === 'fim' && !includeFiM.value) {
      continue
    }
    if (value.series === 'ang' && !includeANG.value) {
      continue
    }

    potentialLocations.push(key)
  }

  const resultLocationName = potentialLocations[(Math.floor(Math.random() * potentialLocations.length))]

  // set resulting locations
  while (resultLocations.length > 0) {
    resultLocations.pop()
  }

  resultLocations.push({
    slug: resultLocationName,
    place: locations[resultLocationName].place,
    subPlace: locations[resultLocationName].subPlace,
  })

  // generate characters
  const potentialChars: string[] = []
  const resultCharNames: string[] = []

  const desiredKinds = includeKinds.value.map(name => name.toLowerCase())

  for (const [key, value] of Object.entries(characters)) {
    if (value.name.toLowerCase().includes('unnamed') && !allowUnnamed.value) {
      continue
    }
    if (value.imageName === undefined && requireCharacterImages.value) {
      continue
    }

    if (value.series === 'fim' && !includeFiM.value) {
      continue
    }
    if (value.series === 'ang' && !includeANG.value) {
      continue
    }

    var includedInSelection = desiredKinds.includes('all')
    if (!includedInSelection) {
      desiredKinds.forEach(kind => {
        if (value.kinds.includes(kind)) {
          includedInSelection = true
        }
      })
    }
    if (!includedInSelection) {
      continue
    }

    potentialChars.push(key)
  }

  // assume 3 chars for now
  var i = 3
  if (potentialChars.length <= i) {
    // shuffle results
    potentialChars.sort(() => Math.random() - 0.5).forEach(name => {
      resultCharNames.push(name)
    })
  } else {
    while (i > 0) {
      const newName = potentialChars[(Math.floor(Math.random() * potentialChars.length))]
      if (!resultCharNames.includes(newName)) {
        resultCharNames.push(newName)
        i -= 1
      }
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
  .image-bg {
    width: 10em;
    height: 10em;
    background: rgb(var(--v-theme-background));
    border-radius: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      max-width: 10em;
      max-height: 10em;
    }
  }
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
  }
  .location {
    text-align: center;
    .subPlace {
      display: block;
      font-size: 1.6em;
      font-weight: 600;
    }
    .place {
      display: block;
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
