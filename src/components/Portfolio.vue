<template>
  <div id="portfolio">
    <div class="portfolio-left">
      <div v-for="(file, i) in left_files" v-bind:key="i">
        <div class="card">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <a :href="checked_url(file)" target="_blank">
                  <b-card-img
                    :src="'https://i.gyazo.com/' + file.image"
                    alt="Image from Gyazo"
                    class="rounded-10"
                  ></b-card-img>
                </a>
              </b-col>

              <b-col md="6">
                <b-card-body :title="file.title">
                  <b-card-text>
                    {{ file.detail1 }}<br>{{ file.detail2 }}
                  </b-card-text>
                  <b-button
                  :href="checked_url(file)"
                  target="_blank"
                  variant="warning"
                >{{file.git_set ? 'Go Github' : 'Go Site'}}</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <div class="portfolio-right">
      <div v-for="(file, i) in right_files" v-bind:key="i">
        <div class="card">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body :title="file.title">
                  <b-card-text>
                    {{ file.detail1 }}<br>{{ file.detail2 }}
                  </b-card-text>
                  <b-button
                  :href="file.git_url == 'undefined' ? file.url : 'https://github.com/naru20181117/' + file.git_url"
                  target="_blank"
                  variant="warning"
                >Go Github</b-button>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <a :href="'https://' + file.url" target="_blank">
                  <b-card-img
                    :src="'https://i.gyazo.com/' + file.image + '.gif'"
                    alt="Image from Gyazo"
                    class="rounded-10"
                  ></b-card-img>
                </a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      left_files: [
        {
          title: "技術系ブログ",
          url: "naruhero.netlify.app",
          image: "f39ecfdbe36df1f9b0df6bed1c22104d.gif",
          detail1: "Nuxt・Contentful",
          detail2: "情報発信用ブログ",
        },
        {
          title: "診断アプリ",
          url: "docs.google.com/forms/d/e/1FAIpQLSdiMQs5493z7cEAIJysqDup4lXGbf-P4bfctavzoT1ECeraog/viewform",
          git_url: "gas_5love_language_app",
          image: "6fcd82f46598f0e55909217adeb2a143.gif",
          detail1: "Google Apps Script",
          detail2: "5つの愛の言葉という本を参考に、その人の思考方法を図れるアプリ",
          git_set: true
        },
        {
          title: "ポートフォリオサイト",
          url: "naruhiro-portfolio.firebaseapp.com",
          git_url: "portfolio",
          image: "da369ef9d418d939bcdab7a6cbd0fdae.png",
          detail1: "Vue.js・Firebase",
          detail2: "こちらのサイト・ポートフォリオ",
          git_set: true
        },
        {
          title: "小学生漢字テストpdf生成アプリ",
          url: "https://kanjitest.herokuapp.com/",
          git_url: "kanji_test",
          image: "bf5cd792c2b2a978a1768b610fab17fc.gif",
          detail1: "Rails(Prawn)",
          detail2: "ネットで良い感じのテストが見つからなかったので作った",
          git_set: true
        },
      ],
      right_files: [
        {
          title: "Hashtag Keeper（Instagram用）",
          url: "hashtags-keeper.web.app",
          git_url: "hashtags_keeper",
          image: "df83935aec8bd50378ed9b03ed3c8015",
          detail1: "Vue・Firebase",
          detail2: "Instaでのハッシュタグなどを残しておくためのアプリ(開発中)"
        },
        {
          title: "Hashtag Keeper(Twitter)",
          url: "hashtag-keeper.herokuapp.com",
          git_url: "portfolio",
          image: "574a5037b377e3f29ddef91166a52842",
          detail1: "Rails/JS",
          detail2: "Twitterの＃を保存するアプリ"
        },
        {
          title: "食べたい物で身体が何を欲しているかわかるアプリ",
          url: "https://tabetai.herokuapp.com/",
          git_url: "snippet",
          image: "8f46baefbf93eba7f386ef091e7d64b4",
          detail1: "Rails/Vue",
          detail2: "ふと食べたい物があったときに浮かんで作ったアプリ"
        },
        {
          title: "メモ管理アプリ",
          url: "onetask1.herokuapp.com",
          git_url: "onetask",
          image: "b0726715def42c1c9fc59464e8ac42a9",
          detail1: "Rails/JS",
          detail2: "Ruby/Railsを盛り沢山使ったアプリ"
        }
      ]
    };
  },
  methods: {
    checked_url(file) {
      if (file.git_set) {
        return 'https://github.com/naru20181117/' + file.git_url
      } else {
        return 'https://' + file.url
      }
    }
  }
};
</script>

<style lang="scss">
#portfolio {
  margin-top: 50px;

  .portfolio-left{
    display: inline-block;
    margin: 0 50px;
    vertical-align: middle;
  }
  .portfolio-right {
    display: inline-block;
    margin: 0 50px;
    vertical-align: middle;
  }
  .card {
    margin: 30px 0;
    border: none;
  }
}
</style>
