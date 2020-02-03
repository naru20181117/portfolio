<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h1 class="site-title">
          <router-link to="/">Naru's portfolio</router-link>
        </h1>
      </header>
      <hnav></hnav>
    </div>
    <router-view />

    <fnav></fnav>
    <transition name="fade">
      <a href="#" v-scroll-to="'#top'" class="scroll-top" v-show="isShow">TOP</a>
    </transition>

    <div class="sns-box">
      <a href="https://twitter.com/1026NT" target="_blank" class="sns-link">
        twitter
        <i class="fab fa-twitter-square"></i>
      </a>
      <a href="https://github.com/naru20181117" target="_blank" class="sns-link">
        github
        <i class="fab github-icon"></i>
      </a>
    </div>
    <footer>
      <div class="copyright-box">©️ 2020 naru All Rights Reserved.</div>
    </footer>
  </div>
</template>

<script>
import HeaderNav from "./components/parts/HeaderNav";
import FooterNav from "./components/parts/FooterNav";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease"
});

export default {
  name: "app",
  components: {
    hnav: HeaderNav,
    fnav: FooterNav
  },
  data() {
    return {
      scrollY: 0
    };
  },
  mounted() {
    // スクロールを取得
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("load", () => {
      this.onScroll();
    });
  },
  computed: {
    isShow() {
      return this.scrollY > 200 ? true : false;
    }
  },
  methods: {
    // スクロール値の取得
    onScroll() {
      this.scrollY = window.pageYOffset;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.scroll-top {
  position: fixed;
  /* left: 50%;
  transform: translate(-50%, 0); */
  right: 32px;
  bottom: 32px;
  background-color: #a0a0a0;
  opacity: 0.7;
  padding: 10px 16px;
  border-radius: 32px;
  font-weight: bold;
  font-size: 20px;
  color: #000;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
