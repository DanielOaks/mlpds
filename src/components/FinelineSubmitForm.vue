<template>
  <v-card v-if="submit_url != undefined" class="rounded-b-xl rounded-t-xl" elevation="2" style="width: 25em; margin: 1em auto;">
    <v-card-title>Add your own Fineline</v-card-title>
    <v-card-subtitle style="margin-bottom: 1em;" v-if="status == 'success'">Thanks for submitting a new image!</v-card-subtitle>
    <v-btn
      v-if="status == 'start'"
      block
      @click="status = 'showForm'"
    >Show more</v-btn>
    <v-form v-if="status == 'showForm'" ref="finelineSubmitForm" validate-on="submit" @submit.prevent="submitFineline">
      <v-text-field
        v-model="finelineImageLink"
        label="Image link"
        hint="The image link, preferrably a high-res version"
        prepend-inner-icon="mdi-image"
        required
        :rules="[value => !!value || 'Please put the image link here']"
        density="compact"
      ></v-text-field>

      <v-text-field
        v-model="finelineArtistName"
        label="Your name"
        hint="How would you like us to credit you on the gallery?"
        prepend-inner-icon="mdi-account"
        required
        :rules="[value => !!value || 'You need to give a name or alias']"
        density="compact"
      ></v-text-field>

      <v-text-field
        v-model="finelineArtistLink"
        label="Your homepage / social"
        hint="Any social media or website link you'd like us to add"
        prepend-inner-icon="mdi-link-variant"
        density="compact"
      ></v-text-field>

      <v-btn
        :loading="loading"
        type="submit"
        block
      >Submit</v-btn>
    </v-form>
  </v-card>
</template>

<style lang="scss">
</style>

<script setup lang="ts">
import { ref } from 'vue'

const submit_url = import.meta.env.MLPDS_CLIENT_SUBMIT_FINELINE_URL;

const finelineImageLink = ref('');
const finelineArtistName = ref('');
const finelineArtistLink = ref('');

const status = ref('start')
const loading = ref(false)

const submitFineline = async (e: Event) => {
  loading.value = true

  const results = await fetch(submit_url, {
    method: "POST",
    body: JSON.stringify({
      "image": finelineImageLink.value,
      "artistName": finelineArtistName.value,
      "artistLink": finelineArtistLink.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  const finalResult = await results.json()

  loading.value = false

  if (finalResult.succeeded) {
    status.value = "success"
  } else {
    // hmm
  }
}

</script>
