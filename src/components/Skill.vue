<template>
  <div id="skills">
    <section class="skill_section">
      <div class="container">
        <h2>Used Tech</h2>
        <ul class="tech-icons">
          <li v-for="(badge, i) in first_badges" v-bind:key="i">
            <b-badge pill variant="light" class="icon-badge">{{badge.name}}</b-badge>
            <br />
            <img
              :src="'https://cdn.svgporn.com/logos/' + badge.path + '.svg'"
              alt
              class="icon-image"
            />
          </li>
        </ul>
        <ul class="tech-icons">
          <h2>Touched Etc.</h2>
          <li v-for="(badge, i) in second_badges" v-bind:key="i">
            <b-badge pill variant="light" class="icon-badge">{{badge.name}}</b-badge>
            <br />
            <img
              :src="'https://cdn.svgporn.com/logos/' + badge.path + '.svg'"
              alt
              class="icon-image"
            />
          </li>
          <li>
            <b-badge pill variant="light" class="icon-badge">VBA</b-badge>
            <br />
            <img src="@/assets/img/skill_icon/VBA.svg" alt class="icon-image" />
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
      first_badges: [
        {
          name: "HTML5",
          path: "html-5"
        },
        {
          name: "CSS3",
          path: "css-3"
        },
        {
          name: "Ruby",
          path: "ruby"
        },
        {
          name: "Ruby on Rails",
          path: "rails"
        },
        {
          name: "Javascript",
          path: "javascript"
        },
        {
          name: "Vue.js",
          path: "vue"
        },
        {
          name: "Nuxt.js",
          path: "nuxt-icon"
        },
        {
          name: "Sass",
          path: "sass"
        },
        {
          name: "CoffeeScript",
          path: "coffeescript"
        },
        {
          name: "Docker",
          path: "docker-icon"
        },
        {
          name: "React",
          path: "react"
        },
        {
          name: "Next.js",
          path: "nextjs"
        },
        {
          name: "GraphQL",
          path: "graphql"
        },
      ],
      second_badges: [
        {
          name: "Debian",
          path: "debian"
        },
        {
          name: "Linux",
          path: "linux-tux"
        },
        {
          name: "AWS",
          path: "aws"
        },
        {
          name: "NGINX",
          path: "nginx"
        },
        {
          name: "Capistrano",
          path: "capistrano"
        },
        {
          name: "GAS",
          path: "google-developers"
        },
        {
          name: "Vim",
          path: "vim"
        },
        {
          name: "VS code",
          path: "visual-studio-code"
        },
        {
          name: "Firebase",
          path: "firebase"
        },
        {
          name: "PHP",
          path: "php"
        },
        {
          name: "Flutter",
          path: "flutter"
        },
        {
          name: "Golang",
          path: "gopher"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#skills {
  margin-top: 150px;

  ul {
    margin: 50px 0;
    padding: 0;

    li {
    margin: 15px;
    display: inline-block;
    list-style: none;
    }
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
}
</style>
