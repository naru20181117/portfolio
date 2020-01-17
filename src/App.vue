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
export default {
  name: "app",
  components: {
    hnav: HeaderNav,
    fnav: FooterNav
  },
  data() {
    return {
      //
    };
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
</style>
