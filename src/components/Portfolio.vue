<template>
  <div id="portfolio">
    <div class="portfolio-top">
      <div class="card">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <a href="https://github.com/naru20181117/kiseki-app" target="_blank">
                <b-card-img
                  src="https://i.gyazo.com/c7d9e17b84e14d244cd9d2f82727d140.gif"
                  alt="Image from Gyazo"
                  class="rounded-10"
                ></b-card-img>
              </a>
            </b-col>

            <b-col md="6">
              <b-card-body title="軌跡を残すコミュニティ用アプリ">
                <b-card-text>
                  Rails/kanban、JSを使用
                  運営しているコミュニティ用アプリ。
                </b-card-text>
                <b-button
                  href="https://github.com/naru20181117/kiseki-app"
                  target="_blank"
                  variant="warning"
                >Go Github</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <div class="card">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-body title="診断アプリ">
                <b-card-text>
                  GASを使用。
                  5つの愛の言葉という本を参考に、その人の思考方法を図れるアプリ。
                </b-card-text>
                <b-button
                  href="https://github.com/naru20181117/gas_5love_language_app"
                  target="_blank"
                  variant="warning"
                >Go Github</b-button>
              </b-card-body>
            </b-col>
            <b-col md="6">
              <a href="https://github.com/naru20181117/gas_5love_language_app" target="_blank">
                <b-card-img
                  src="https://i.gyazo.com/6fcd82f46598f0e55909217adeb2a143.gif"
                  alt="Image from Gyazo"
                  class="rounded-10"
                ></b-card-img>
              </a>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <div class="portfolio-bottom">
      <div class="card">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <a href="https://github.com/naru20181117/portfolio" target="_blank">
                <b-card-img
                  src="https://i.gyazo.com/da369ef9d418d939bcdab7a6cbd0fdae.png"
                  alt="Image from Gyazo"
                  class="rounded-10"
                ></b-card-img>
              </a>
            </b-col>
            <b-col md="6">
              <b-card-body title="Portfolio">
                <b-card-text>
                  Vue.js, Bootstrapを使用
                  Vueを学習するために作られたサイト
                </b-card-text>
                <b-button
                  href="https://github.com/naru20181117/portfolio"
                  target="_blank"
                  variant="warning"
                >Go Github</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <div class="card">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-body title="Tinder風マッチングサイト">
                <b-card-text>
                  Rails、JSを使用。
                  改修を楽しむ実験台アプリ。
                </b-card-text>
                <b-button
                  href="https://github.com/naru20181117/second.match"
                  target="_blank"
                  variant="warning"
                >Go Github</b-button>
              </b-card-body>
            </b-col>
            <b-col md="6">
              <a href="https://github.com/naru20181117/second.match" target="_blank">
                <b-card-img
                  src="https://i.gyazo.com/beec420168f4cc55e1707ad2b2925af8.gif"
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
</template>

<script>
// @ is an alias to /src
// import Portfolio from "@/components/Portfolio.vue";

// export default {
//   name: "portfolio",
//   components: {
//     Portfolio
//   }
// };
export default {
  name: "profile",
  data() {
    return {};
  }
};
</script>

<style>
#portfolio {
  margin-top: 150px;
}
.portfolio-top {
  display: inline-block;
  margin: 0 50px;
}
.portfolio-bottom {
  display: inline-block;
  margin: 0 50px;
}
.card {
  margin: 30px 0;
  border: none;
}
</style>
