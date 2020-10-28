<template>
  <div id="careers">
    <section class="career_section">
      <div class="container">
        <article>
          <h2 class="history_h2">My History</h2>
          <div class="history_box">
            <table class="history_table">
              <tbody>
                <tr>
                  <td class="history">2015/4</td>
                  <td class="history-section">在学中に1年間カナダでワーキングホリデー経験</td>
                </tr>
                <tr>
                  <td class="history">2015/8</td>
                  <td class="history-section">現地旅行代理店でのインターンシップ経験</td>
                </tr>
                <tr>
                  <td class="history">2018/4</td>
                  <td class="history-section">青山にあるSIerのBusinessDevelopment部に配属</td>
                </tr>
                <tr>
                  <td class="history">
                    <p class="history-left">2018/09</p>
                    <p class="history-right">~2019/9</p>
                  </td>
                  <td class="history-section">
                    ネットワークエンジニアとしてグローバルと国内のネットワーク案件に参画
                    <br />Ciscoコマンドからサーバ言語、マクロ等を扱う。AWSからオンプレサーバーまでの保守を担当
                  </td>
                </tr>
                <tr>
                  <td class="history">
                    <p class="history-left">2019/09</p>
                    <p class="history-right">~2020/01</p>
                  </td>
                  <td class="history-section">
                    FijordBootCampに所属
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
                    スタートアップ企業にてRails開発に参画
                    <br />メンバー2名にてローンチ前の開発に従事
                  </td>
                </tr>
                <tr>
                  <td class="history">
                    <p class="history-left">2020/03</p>
                    <p class="history-right">~現在</p>
                  </td>
                  <td class="history-section">
                    Rubyコミッターの所属する受託開発会社に所属
                    <br />日本最大級のECサイトの開発に従事（公用語英語）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <youtube :video-id="videoId" />
      </div>
    </section>
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

<style>
#careers {
  margin-top: 150px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.history_h2 {
  text-align: left;
}
.flexbox-left {
  margin: 0 100px 0 0;
}
.history_box {
  padding-left: 40px;
}
td {
  padding: 5px;
  vertical-align: top;
}
article {
  padding: 40px 0;
}
.textLeft {
  margin: 0;
}
.textRight {
  text-align: right;
}
.history {
  padding-right: 50px;
}
.history-section {
  text-align: left;
}
.history-left {
  margin-bottom: 0;
}
.history-right {
  margin-bottom: 0;
}
</style>
