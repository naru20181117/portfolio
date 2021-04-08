<template>
  <div id="hello">
    <div class="image">
      <img src="../assets/logo.png" alt class="lp-img"/>
    </div>

    <div class="about_vue">
      <p>
        These pages are written in
        <a href="https://vuejs.org/" target="_blank" class="icon-link">
          <i class="vue_icon"></i>
          vue.js
        </a>
      </p>
    </div>

    <!-- message -->
    <ul class="situation">
      <li>
        <h3 class="situation-title">【現在の状況】</h3>
      </li>
      <li>
        <TextAnime :autoplay="autoplay" />
        <label>
          <input type="checkbox" v-model="autoplay" /> 5秒ごとに自動で文字を更新
        </label>
      </li>
      <li>
        <code>transition-group</code> の
        <code>v-move</code> を利用してみた
      </li>
    </ul>

    <h3 class="contact_form">Contact Form</h3>
      <div class="form">
        <b-button v-b-toggle.collapse-1 variant="warning" class="collapse_bottom">Push HERE</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSftrODVG9GkX2N7sDWtclL0kuH71xHVU7j0rrmdehS9R3_atA/viewform?embedded=true"
              width="640"
              height="705"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >読み込んでいます…</iframe>
          </b-card>
        </b-collapse>
      </div>
  </div>
</template>

<script>
import TextAnime from "./TextAnime";
export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    TextAnime
  },
  data() {
    return {
      anime1: true,
      anime2: true,
      autoplay: true
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#hello {
  margin: 50px 0;

  h3 {
    margin: 60px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .form{
    margin: 0 auto;
  }
  a {
    color: #42b983;
  }
  p {
    margin: 6px;
    text-align: middle;
  }
  .image {
    vertical-align: middle;
    margin: 0 auto;
    padding-top: 80px;
    width:75%;
    .lp-img {
      width: 100%;
      max-width: 100vw;
      height: auto;
      align: center;
    }
  }
  .about_vue {
    margin: 0 auto;
    width: 300px;
    height: 40px;
    border: 1px solid #c8c8c8;

    p {
      vertical-align: middle;
      margin-bottom: 0;
      .vue_icon::before {
        content: "";
        background-image: url("../assets/img/vue-js.svg");
        display: inline-block;
        width: 0.9em;
        height: 0.8em;
        background-size: contain;
        vertical-align: middle;
      }
    }
  }
  .situation {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    .situation-title {
      margin: 30px;
    }
  }

  .contact_form {
    margin: 30px;
    .collapse_bottom {
      background-color: orange;
      font-size: 1.5rem;
    }
  }
}
</style>
