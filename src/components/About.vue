<template>
  <div id="about">
    <div class="profile_box">
      <div class="flexbox">
        <h2 class="profile_title">Who am I</h2>
        <dl class="detail-profile-right">
          <dd>九州から上京を果たし</dd>
          <dd>⛰田舎で育った雑草力を武器に行動力で邁進する若者</dd>
          <dt>趣味：</dt>
          <dd>コミュニティ運営</dd>
          <dd>（エンジニア他、複数のコミュニティ運営中）</dd>
          <dt>現在：</dt>
          <dd>👨🏻‍💻バックエンドエンジニアとして活動中</dd>
          <dd>世の中の「もったいない」をITの力で無くしたいとサービスづくりを夢見る</dd>
          <dt>余談：</dt>
          <dd>🏠シェアハウスに住む🇯🇵🇺🇸🇪🇸日米西のトリリンガル</dd>
        </dl>
      </div>
      <div class="profile_img flexbox">
        <img src="../assets/img/current_icon.jpg" alt class="my_pic" />
      </div>
    </div>
    <div class="profile_box">
      <div class="about_img flexbox">
        <img src="../assets/img/my_pic.jpg" alt class="my_pic"/>
      </div>
      <div class="flexbox">
        <dl class="detail-profile-left">
          <dt>Name</dt>
          <dd>🙋‍♂️なる</dd>
          <dt>My home town</dt>
          <dd>🍜福岡県</dd>
          <dt>Overseas</dt>
          <dd>🌏17ヶ国(大学時代に訪れた国の数)</dd>
          <dt>Ability</dt>
          <dd>英語 / バスケ / 車・バイクの運転 / 人見知りしない</dd>
          <dt>Recent Hobby</dt>
          <dd>🕺ダンス / 🎲ボードゲーム / 👯‍♂️コミュニティ運営 / 🤖IoT</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">

#about {
  margin-top: 50px;
  padding-top: 50px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl(210, 29%, 24%);

  .profile_box {
    margin-top: 40px;
    display: flex;
    align-items: center;
    .profile_title {
      text-align: right;
      margin-bottom: 3rem;
    }
    .text_box {
      text-align: right;
      line-height: 40px;
    }
    .profile_img{
      text-align: left;
    }
    .about_img{
      text-align: right;
    }
  }

  h1,
  h2 {
    font-weight: normal;
  }

  .flexbox {
    margin: 20px;
    width: 50%;
    justify-items: center;
  }

  .my_pic {
    max-width: 330px;
    width: 100%;
    height: auto;
    border-radius: 40% 70% 70% 50% / 30% 50% 70% 70%;
  }
  .detail-profile {
    &-left {
      text-align: left;
    }
    &-right {
      text-align: right;
    }
  }
  dd {
    margin: 10px 0 10px 0;
  }
}
</style>
