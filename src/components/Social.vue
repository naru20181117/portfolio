<template>
  <div id="social">
    <div class="d-flex justify-content-center flex-wrap">
      <v-card class="mx-auto twitter-box">
        <v-card-title>
          <v-icon large top class="title twitter">
            <i class="fab fa-twitter-square"></i> Twitter
          </v-icon>
        </v-card-title>
        <div class='boad mt-4'>
          <v-flex xs12>
            <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '5' }"/>
          </v-flex>
        </div>
      </v-card>
      <v-card class="mx-auto ajax-box">
        <v-card-title>
          <v-icon large top class="title qiita">
            <img src="@/assets/img/qiita_favicon.png" alt class="qiita_pic" /> Qiita
          </v-icon>
        </v-card-title>
        <div class='boad mt-4'>
          <a v-for="(result, i) in qiitas" v-bind:key="i" :href="result.url">
            <b-card class="mx-auto pa-2 mb-3" style="max-width: 300px;" :title="result.title">
              <b-badge variant="success" v-for="(tag, i) in result.tags" v-bind:key="i" class="mr-1">
                {{tag.name}}
              </b-badge>
              <br>
              <v-spacer></v-spacer>
              <span>LGTM <b>{{result.likes_count }}</b></span><br>
              <span>{{result.created_at | moment }}</span>
            </b-card>
          </a>
        </div>
      </v-card>
      <v-card class="mx-auto ajax-box">
        <v-card-title>
          <v-icon large top class="title note">
            <img src="@/assets/img/note_logo.png" alt class="qiita_pic" /> note
          </v-icon>
        </v-card-title>
        <div class='boad mt-4'>
          <a v-for="(note, i) in notes"
              v-bind:key="i" :href="note.noteUrl">
            <b-card
              class="mx-auto pa-2 mb-3"
              style="max-width: 300px;"
              :title="note.name"
              :img-src="note.eyecatch"
              img-alt="Card image" img-bottom>
              <b-badge variant="info" v-for="(tag, i) in note.hashtags" v-bind:key="i" class="mr-1">
                {{tag.hashtag.name}}
              </b-badge>
              <br>
              <v-spacer></v-spacer>
              <span>スキ <b>{{note.likeCount }}</b></span><br>
              <span>{{note.publishAt | moment }}</span>
              <br>
            </b-card>
          </a>
        </div>
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
      qiitas: null,
      notes: null
    }
  },
  filters: {
    /**
     * @param {Date} value    - Date オブジェクト
     * @param {string} format - 変換したいフォーマット
     */
    moment(value) {
      return moment(value).format('YYYY / MM / DD');
    }
  },
  mounted() {
    const qiita_url = "https://qiita.com/api/v2"
    const note_url = "https://note.com/api/v2"
    axios
      .get(
        qiita_url + "/users/naruqiita/items", {
          params: {
            page: 1,
            per_page: 5
          }
        }
      )
      .then(response => {
        this.qiitas = response.data
        }
    ),
    axios
      .get(
        note_url + "/creators/naru_note/contents", {
          params: {
            kind: 'note',
            page: 1,
            per_page: 5
          }
        }
      )
      .then(response => {
        this.notes = response.data.data.contents
        }
    )
  }
};
</script>

<style lang="scss">
#social {
  margin-top: 150px;

  .title {
    font-size: 2rem;
    &.twitter {
      color: #5da8dc;
    }

    &.qiita {
      color: #55c500;
    }

    &.note {
      color: #41c9b4;
    }
  }

  .boad {
    height: 800px;
    overflow:auto;
  }

  .ajax-box {
    display: inline-block;
    margin: 0 30px;
    vertical-align: middle;
    a {
      color: black;
    }
  }

  .twitter-box {
    display: inline-block;
    margin: 0 30px;
    vertical-align: middle;
  }
}
</style>
