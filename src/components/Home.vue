<template>
  <div id="hello">
    <div class="image">
      <img src="../assets/logo.png" alt class="lp-img"/>
    </div>
    <h2>なる</h2>

    <!-- message -->
    <ul class="situation">
      <li>
        <h3 class="situation-title">【最近の状況】</h3>
      </li>
      <li>
        <TextAnime :autoplay="autoplay" />
        <label>
          <input type="checkbox" v-model="autoplay" /> 6秒ごとに自動更新
        </label>
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
    padding-top: 60px;
    width:75%;
    .lp-img {
      width: 100%;
      max-width: 40vw;
      height: auto;
      align: center;
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
