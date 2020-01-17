<template>
  <div id="about">
    <section class="about_section">
      <div class="container">
        <div class="profile_box">
          <div class="flexbox">
            <h2 class="profile_title">Who am I</h2>
            <p class="text_box">
              九州から上京を果たし
              <br />田舎で育った雑草力を武器にその行動力で邁進する若者です。
              <br />趣味：コミュニティ運営
              <br />（エンジニア他、複数のコミュニティ運営中）
              <br />現在：プロダクトエンジニを目指して奮闘中
              <br />世の中の「もったいない」をITの力で無くしたいとサービスづくりを夢見る
              <br />余談：赤坂にあるシェアハウスに住む
              <br />
            </p>
          </div>
          <div class="profile_img flexbox">
            <img src="../assets/img/my_image.jpg" alt />
          </div>
        </div>
        <div class="about_box">
          <div class="about_img flexbox">
            <img src="../assets/img/my_pic.jpg" alt class="my_pic" />
          </div>
          <div class="flexbox">
            <dl class="detail-profile">
              <dt>Name</dt>
              <dd>塚崎 成寛</dd>
              <dt>My home town</dt>
              <dd>福岡県</dd>
              <dt>Overseas</dt>
              <dd>17ヶ国(大学時代に訪れた国の数)</dd>
              <dt>Ability</dt>
              <dd>英語 / バスケ / 車・バイクの運転 / 人見知りしない</dd>
              <dt>Recent Hobby</dt>
              <dd>ダンス / ボードゲーム / コミュニティ運営</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import About from "@/components/About.vue";

// export default {
//   name: "about",
//   components: {
//     About
//   }
// };
export default {
  name: "profile",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
// #before:about {
//   content: "";
//   width: 100px;
//   height: 50px;
// }
#about {
  margin-top: 50px;
  padding-top: 50px;
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
  // it was disturbing the
  // margin: 0 10px;
}
a {
  color: #42b983;
}
.about_section {
  padding: 20px 10px 10px 20px;
  margin: 10px 0;
}
.about_h2 {
  margin: 0 0 40px 0;
}
.profile_box {
  display: flex;
  align-items: center;
}
.profile_title {
  text-align: left;
}
.text_box {
  text-align: left;
  line-height: 40px;
}
.about_box {
  text-align: left;
  margin-top: 40px;
  display: flex;
  align-items: center;
}
.flexbox {
  // display: inline-block;
  margin: 20px;
  width: 50%;
}
.my_pic {
  max-width: 300px;
  max-height: 450px;
  border-radius: 50%;
  margin-left: 60px;
}
// .flexbox-right {
//   margin: 20px;
//   width: 50%;
// }
dd {
  margin: 10px 0 10px 0;
}
</style>
