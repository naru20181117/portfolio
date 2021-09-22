<template>
  <div id="social">
    <CarouselCard :interval="7000" height="850px" type="card" arrow="hover">
      <CarouselCardItem>
        <div class="mx-auto twitter-box">
          <span>
            <div large top class="title twitter">
              <i class="fab fa-twitter-square"></i> Twitter
            </div>
          </span>
          <div class='boad mt-4'>
            <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '5', width: '450' }"/>
          </div>
        </div>
      </CarouselCardItem>
      <CarouselCardItem>
        <div class="mx-auto ajax-box">
          <span>
            <div large top class="title qiita">
              <img src="@/assets/img/qiita_favicon.png" alt class="qiita_pic" /> Qiita
            </div>
          </span>
          <div class='boad mt-4'>
            <div v-if="qiita_acces">
              <a v-for="(result, i) in qiitas" v-bind:key="i" :href="result.url">
                <b-card class="mx-auto pa-2 mb-3" style="max-width: 450px;" :title="result.title">
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
            <div v-else>
              <h2 class="mb-5">
                APIのアクセスができてません<br>
                まあどうせアクセスのしすぎで<br>
                キャパオーバーしてます
                <v-spacer></v-spacer>
              </h2>
              <img src="@/assets/img/howl.jpg" alt class="error_pic" />
              <v-spacer></v-spacer>
              <p>ゼェ..ゼェ..もうアクセス無理〜〜〜</p>
              <p>ページはこちら👇👇👇</p>
              <v-spacer></v-spacer>
              <h1>
                <a :href="qiita_user_url">{{qiita_user_url}}</a>
              </h1>
            </div>
          </div>
        </div>
      </CarouselCardItem>
      <CarouselCardItem>
        <div class="mx-auto ajax-box">
          <span>
            <div large top class="title note">
              <img src="@/assets/img/note_logo.png" alt class="qiita_pic" /> note
            </div>
          </span>
          <div class='boad mt-4'>
            <div v-if="note_acces">
              <a v-for="(note, i) in notes"
                  v-bind:key="i" :href="note.noteUrl">
                <b-card
                  class="mx-auto pa-2 mb-3"
                  style="max-width: 450px;"
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
            <div v-else>
              <h2 class="mb-5">
                APIのアクセスができないようです<br>
                ブラウザにて<br>
                CORSエラーが発生しています
              </h2>
              <img src="@/assets/img/mononoke.jpg" alt class="error_pic" />
              <v-spacer></v-spacer>
              <p>そなたは美しい。CORS用拡張機能を使え</p>
              <p>ページはこちら👇👇👇</p>
              <v-spacer></v-spacer>
              <h1>
                <a :href="note_user_url">{{note_user_url}}</a>
              </h1>
            </div>
          </div>
        </div>
      </CarouselCardItem>
    </CarouselCard>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
import axios from 'axios'
import moment from "moment"
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

//TODO: ページ毎3つに分ける。DRY
export default {
  components: {
    Timeline,
    CarouselCard,
    CarouselCardItem
  },
  data: function() {
    return {
      user_id: "1026NT",
      qiita_acces: true,
      note_acces: true,
      qiita_user_url: "https://qiita.com/naruqiita",
      note_user_url: "https://note.com/naru_note",
      qiita_error_url: "@/assets/img/howl.jpg",
      qiitas: null,
      notes: null,
      qiita_url: "https://qiita.com/api/v2",
      // note_url: "https://note.com/api/v2",
      // query_params: "?kind=note&page=1",
      cors_batch_url: "https://cloudflare-app.naru-cloundflare.workers.dev/"
    }
  },
  filters: {
    /**
     * @param {Date} value
     * @param {string} format
     */
    moment(value) {
      return moment(value).format('YYYY / MM / DD');
    }
  },
  mounted() {
    axios
      .get(
        this.qiita_url + "/users/naruqiita/items", {
          params: {
            page: 1,
            per_page: 5
          }
        }
      )
      .then(response => {
        this.qiitas = response.data
        }
      ).catch(error => {
        console.log(error.response)
        this.qiita_acces = false
      }),
    axios
      // .get(this.note_url + "/creators/naru_note/contents" + this.query_params)
      .get(this.cors_batch_url)
      .then(response => {
        this.notes = response.data.data.contents
        })
      .catch(error => {
        console.log(error.response)
        this.note_acces = false
      })
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

    a {
        pointer-events: none;
    }
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

  .carousel-card {
    max-width: 80%;
    margin: 0 auto;

    &.carousel-card-container {
      max-width: 80%;
    }
    .is-active {
      a {
        pointer-events: auto !important;
      }
    }

    .carousel-card-item {
      background: rgba(250, 245, 225, 0.5);
    }
  }

  .error_pic {
    width: 70%;
  }
}
</style>
