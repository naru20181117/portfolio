<template>
  <div id="social">
    <v-card class="mx-auto twitter-box">
      <v-card-title>
        <v-icon large top color="#26c6da">Twitter</v-icon>
      </v-card-title>
      <v-flex xs12>
        <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '5' }"/>
      </v-flex>
    </v-card>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: "1026NT"
    }
  }
};
</script>

<style lang="scss">
#social {
  margin-top: 150px;

  .portfolio-right {
    display: inline-block;
    margin: 0 50px;
    vertical-align: middle;
  }

  .twitter-box {
    display: inline-block;
    margin: 0 30px;
    vertical-align: middle;
  }
}
</style>
