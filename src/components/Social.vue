<template>
  <div id="social">
    <div class="d-flex justify-space-around">
      <v-card class="mx-auto twitter-box">
        <v-card-title>
          <v-icon large top class="title-twitter">
            <i class="fab fa-twitter-square"></i> Twitter
          </v-icon>
        </v-card-title>
        <v-flex xs12>
          <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '5' }"/>
        </v-flex>
      </v-card>
      <v-card class="portfolio-right ">
        <v-card-title>
          <v-icon large top class="title-qiita">
            <img src="@/assets/img/qiita_favicon.png" alt class="qiita_pic" /> Qiita
          </v-icon>
        </v-card-title>
        <v-card v-for="result in results" v-bind:key="result" class="mx-auto pa-2" outlined tile>
          <v-card-title>
            {{ result.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ result.created_at }}
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <v-btn
            color="orange lighten-2"
            text
          >
            {{ result.url }}
          </v-btn>
          {{ result.tags }}
          {{ result.likes_count }}
          <!-- <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '5' }"/> -->
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
import axios from 'axios'

export default {
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: "1026NT",
      results: null
    }
  },
  mounted() {
    const base_url = "https://qiita.com/api/v2"
    axios
      .get(
        base_url + "/users/naruqiita/items", {
          params: {
            page: 1,
            per_page: 5
          }
        }
        )
      .then(response => {
        this.results = response,
        this.results = response.data,
        // this.data = response.data,
        // eslint-disable-next-line no-console
        console.log(this.results);
        }
    )
  }
};
</script>

<style lang="scss">
#social {
  margin-top: 150px;

  .title-twitter {
    color: #5da8dc;
    font-size: 2rem;
  }

  .title-qiita {
    color: #55c500;
    font-size: 2rem;
  }

  .portfolio-right {
    display: inline-block;
    margin: 0 30px;
    vertical-align: middle;
  }

  .twitter-box {
    display: inline-block;
    margin: 0 30px;
    vertical-align: middle;
  }
}
</style>
