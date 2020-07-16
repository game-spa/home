<template>
  <div class="home">
    <SearchCard
      :loading="loading"
      @search-clicked="search"
    />
    <SearchResults
      v-if="results.length > 0"
      :search="value"
      :games="results"
      :favorites="favorites"
      @favorited="onFavorite"
      @unfavorited="onUnfavorite"
    />
  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard.vue';
import SearchResults from '@/components/SearchResults.vue';

import { gameService } from '@game-spa/services';

export default {
  name: 'Home',
  components: {
    SearchCard,
    SearchResults,
  },
  data() {
    return {
      loading: false,
      results: [],
      value: null,
      favorites: [],
    };
  },
  methods: {
    async search(value) {
      this.value = value;

      this.loading = true;

      const result = await gameService.findGamesByName(value);

      this.results = result.results || [];

      this.setFavorites();

      this.loading = false;
    },
    setFavorites() {
      const favorites = gameService.listFavorites() || [];
      this.favorites = this.results.filter(game => favorites.some(favorite => favorite.id === game.id));
    },
    onFavorite(game) {
      gameService.favorite(game);
      this.favorites.push(game);
    },
    onUnfavorite(game) {
      gameService.unfavorite(game);
      this.favorites = this.favorites.filter(favorite => favorite.id !== game.id);
    }
  },
};
</script>

<style scoped>

</style>