<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Find a game</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="searchClicked">
        <v-text-field
          label="Game Name"
          name="name"
          prepend-icon="mdi-gamepad-variant-outline"
          type="text"
          v-model="value"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn 
        color="primary"
        :disabled="!value"
        :loading="loading"
        @click="searchClicked"
      >
        Find
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SearchCard',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    searchClicked() {
      if (this.value) {
        this.$emit('search-clicked', this.value);
      }
    },
  },
};
</script>

<style scoped>

</style>