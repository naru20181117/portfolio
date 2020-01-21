<template>
  <div id="skills">
    <section class="skill_section">
      <div class="container">
        <h2>Used Tech</h2>
        <ul class="tech-icons">
          <li v-for="badge in badges" v-bind:key="badge.name">
            <b-badge pill variant="light" class="icon-badge">{{badge.name}}</b-badge>
            <br />
            <img :src="'./assets/img/skill_icon/' + badge.name + '.svg'" alt class="icon-image" />
          </li>
        </ul>
        <ul>
          <h2>Touched Etc.</h2>
          <li>
            <b-badge pill variant="light" class="icon-badge">Debian</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/debian.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Linux</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/linux-tux.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">AWS</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/aws.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">NGINX</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/nginx.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Capistrano</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/capistrano.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">rubocop</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/rubocop.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Docker</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/docker-icon.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Vim</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/vim.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">vscode</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/visual-studio-code.svg" alt class="icon-image" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      badges: [
        {
          name: "html-5"
        },
        {
          name: "css-3"
        },
        {
          name: "ruby"
        },
        {
          name: "rails"
        },
        {
          name: "javascript"
        },
        {
          name: "vue-js"
        },
        {
          name: "bootstrap"
        },
        {
          name: "sass"
        },
        { name: "VBA" }
      ]
      // badges: [
      // { icon: require("https://cdn.svgporn.com/logos/html-5.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/css-3.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/ruby.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/rails.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/javascript.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/vue.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/bootstrap.svg") },
      // { icon: require("https://cdn.svgporn.com/logos/sass.svg") },
      // { icon: require("@/assets/img/skill_icon/excel.svg") }
      // ]
    };
  }
};
</script>

<style>
#skills {
  margin-top: 150px;
}
ul {
  margin: 50px 0;
  padding: 0;
}
li {
  margin: 15px;
  display: inline-block;
  list-style: none;
}
.icon-badge {
  font-size: 1.5rem;
  word-wrap: break-word;
}
.icon-image {
  height: 90px;
  width: 110px;
  margin-top: 20px;
}
</style>
