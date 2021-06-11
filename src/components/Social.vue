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

export default {
  components: {
    Timeline,
    CarouselCard,
    CarouselCardItem
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
    const note_url = "/note.com/api/v2"
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

  h1 {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background: linear-gradient(90deg, rgba(156,247,121,1), rgba(59,183,12,1))
  }

  .carousel-card {
    max-width: 80%;
    margin: 0 auto;

    &.carousel-card-container {
      max-width: 80%;
    }

    // &.carousel-card-indicator {
    //   &.is-active {
    //     height: 120%;
    //   }
    // }
  }
}
</style>
