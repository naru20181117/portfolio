<template>
  <div id="social">
    <div class="d-flex justify-content-center flex-wrap">
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
      <v-card class="mx-auto portfolio-right">
        <v-card-title>
          <v-icon large top class="title-qiita">
            <img src="@/assets/img/qiita_favicon.png" alt class="qiita_pic" /> Qiita
          </v-icon>
        </v-card-title>
        <b-card v-for="result in results" v-bind:key="result" class="mx-auto pa-2" style="max-width: 540px;" :title="result.title" :sub-title="'LGTM👍' + result.likes_count">
          <b-badge variant="success" v-for="tag in result.tags" v-bind:key="tag">
            {{tag.name}}
          </b-badge>
          <br>
          <v-spacer></v-spacer>
          <span>投稿日: {{result.created_at | moment }}</span>
          <br>
          <b-button variant="success" :href="result.url">Visit page</b-button>
        </b-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
import axios from 'axios'
import moment from "moment"

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
  filters: {
    /**
     * @param {Date} value    - Date オブジェクト
     * @param {string} format - 変換したいフォーマット
     */
    moment(value) {
      return moment(value).format('YYYY/MM/DD HH:mm');
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
        this.results = response.data
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
