<template>
  <v-list three-line>
    <template v-for="(game, index) in games">
      <v-subheader
        :key="index"
        v-if="index === 0"
      >
        Results for: {{ search }} ({{ games.length }})
      </v-subheader>

      <v-divider
        v-if="index < games.length && index > 0"
        :key="index"
        :inset="true"
      ></v-divider>

      <v-list-item
        :key="game.slug"
      >
        <v-list-item-avatar>
          <v-img 
            :src="game.background_image"
            v-if="game.background_image"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="game.name"></v-list-item-title>
          <v-list-item-subtitle>
            Released at: {{ game.released }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text>Favorite</v-list-item-action-text>
          <v-icon color="red" v-if="!favorited">mdi-star-outline</v-icon>
          <v-icon color="red" v-else>mdi-star</v-icon>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    search: {
      type: String,
      required: true, 
    },
    games: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>