<template>
  <div id="careers">
    <div class="career_section">
      <article>
        <h2 class="history_h2">My History</h2>
        <div class="history_box">
          <table class="history_table">
            <tbody>
              <tr>
                <td class="history">2015/4</td>
                <td class="history-section">🇨🇦 在学中に1年間カナダでワーキングホリデー経験</td>
              </tr>
              <tr>
                <td class="history">2015/8</td>
                <td class="history-section">🚘 現地旅行代理店でのインターンシップ経験</td>
              </tr>
              <hr>
              <tr>
                <td class="history">2018/4</td>
                <td class="history-section">
                  🖥青山にあるSIerのBusinessDevelopment部に配属
                  <br />（営業/人事/総務担当）
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2018/09</p>
                  <p class="history-right">~2019/9</p>
                </td>
                <td class="history-section">
                  🧑🏻‍💻 ネットワークエンジニアとしてグローバルと国内のネットワーク案件に参画
                  <br />Ciscoコマンドからサーバ言語、マクロ等を扱う。AWSからオンプレサーバーまでの保守を担当
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2019/09</p>
                  <p class="history-right">~2020/01</p>
                </td>
                <td class="history-section">
                  📚 FijordBootCampに所属
                  <br />
                  <a href="https://bootcamp.fjord.jp/practices" target="_blank">フィヨルドブートキャンプのコース内容</a>
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2020/01</p>
                  <p class="history-right">~2020/2</p>
                </td>
                <td class="history-section">
                  🌱 スタートアップ企業にて販売管理システム開発に参画
                  <br />👫：2名 🛠：Rails ローンチ前の開発に従事
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2020/03</p>
                  <p class="history-right">~2021/10</p>
                </td>
                <td class="history-section">
                  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png" width="20px">
                  Rubyコミッターの所属する受託開発会社に所属
                  <br />👫：15名 🛠：Rails 日本最大級のECサイトの開発に従事（公用語英語）
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2020/12</p>
                  <p class="history-right">~2021/3</p>
                </td>
                <td class="history-section">
                  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" width="20px">
                  とある検索サイトシステムの開発
                  <br />👫：3名 🛠：Rails ✖ Vue
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2021/2</p>
                  <p class="history-right">~2021/3</p>
                </td>
                <td class="history-section">
                  🔨DXソリューション対応の企業にて新規開発を対応
                  <br />👫：2名 🛠：Ruby
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2021/9</p>
                  <p class="history-right">~2021/6</p>
                </td>
                <td class="history-section">
                  👨‍💼BtoBマッチングプラットフォーム事業にてバッグエンドを担当
                  <br />👫：7名 🛠：Rails
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2022/1</p>
                  <p class="history-right">~現在</p>
                </td>
                <td class="history-section">
                  📞BtoCラインビジネス事業にてバッグエンドを担当
                  <br />👫：1名 🛠：Rails(APIモード) ✖ Vue
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2022/2</p>
                  <p class="history-right">~現在</p>
                </td>
                <td class="history-section">
                  🚀HR領域Sass新規事業の立ち上げや採用活動のサポート
                  <br />👫：3名 🛠：PHP
                </td>
              </tr>
              <tr>
                <td class="history">
                  <p class="history-left">2022/7</p>
                  <p class="history-right">~現在</p>
                </td>
                <td class="history-section">
                  📣マーケティング領域サービスのリプレイス案件
                  <br />👫：4名 🛠：TS+next.js × Rails+GraphQL
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <youtube class="video" :video-id="videoId" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: '0ELboMxzSZA'
    };
  }
};
</script>

<style lang="scss">
#careers {
  margin-top: 150px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  h1,
  h2 {
    font-weight: normal;
  }
  article {
    padding: 40px 0;
    margin: 0 auto;
    .history_h2 {
      margin-bottom: 30px;
    }

    .history_box {
      // padding-left: 40px;
      max-width: 60%;
      display: block;
      margin: 0 auto;
      ul {
        list-style-type: none;
        padding: 0;
        li {
          display: inline-block;
          margin: 0 10px;
        }
      }

      a {
        color: #42b983;
      }

      tr {
        margin: 40px 0;
      }
      td {
        padding: 10px 0 10px 50px;
        vertical-align: top;
      }

      .history {
        padding-right: 50px;

        p {
          margin-bottom: 0;
        }
        .history-left {
          padding-right: 20px;
        }
        .history-right {
          padding-left: 20px;
        }
      }

      .history-section {
        text-align: left;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .career_section {
    margin: 0 auto;
  }
}

@media only screen and (max-width: 855px) {
  .history_box {
    max-width: 90% !important;
  }
}

</style>
