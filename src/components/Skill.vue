<template>
  <div id="skills">
    <section class="skill_section">
      <div class="container">
        <h2>Used Tech</h2>
        <ul class="tech-icons">
          <li>
            <b-badge pill variant="light" class="icon-badge">HTML5</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/html-5.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">CSS3</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/css-3.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Ruby</b-badge>

            <br />
            <img src="https://cdn.svgporn.com/logos/ruby.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">
              Ruby
              on
              Rails
            </b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/rails.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Javascript</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/javascript.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Vue.js</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/vue.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Bootstrap</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/bootstrap.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">Sass</b-badge>
            <br />
            <img src="https://cdn.svgporn.com/logos/sass.svg" alt class="icon-image" />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">VBAマクロ</b-badge>
            <br />
            <img src="@/assets/img/excel.svg" alt class="icon-image" />
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
            <b-badge pill variant="light" class="icon-badge">AWSサーバ</b-badge>
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
// @ is an alias to /src
// import SKILL from "@/components/Skill.vue";

// export default {
//   name: "skill",
//   components: {
//     SKILL
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
