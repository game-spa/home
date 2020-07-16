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
    />
  </div>
</template>

<script>
import SearchCard from '@/components/SearchCard.vue';
import SearchResults from '@/components/SearchResults.vue';

import { findGame } from '@game-spa/services';

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
    };
  },
  methods: {
    async search(value) {
      this.value = value;

      this.loading = true;

      const result = await findGame(value);

      this.results = result.results || [];

      console.log(this.results);

      this.loading = false;
    }
  },
};
</script>

<style scoped>

</style>