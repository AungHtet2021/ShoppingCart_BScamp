<template>
  <v-app>
  <v-main>
      <Heading/>
      <v-row class="text-center">
      <v-col cols="12">
      <router-view></router-view>
      </v-col>
      </v-row>
  </v-main>
  </v-app>
</template>

<script>
import Heading from './components/Heading';
export default {
  name: 'App',
  components: {
    Heading,
  },
  data: () => ({
    //
  }),
};
</script>
