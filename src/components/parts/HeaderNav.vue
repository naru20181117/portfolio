<template>
  <nav id="gnav" class="header-nav">
    <ul>
      <li v-for="(route, r) in routes" v-bind:key="r">
        <router-link :to="route.link">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          link: "/",
          name: 'Home'
        },
        {
          link: "/about",
          name: 'about'
        },
        {
          link: "/skill",
          name: 'skill'
        },
        {
          link: "/career",
          name: 'career'
        },{
          link: "/portfolio",
          name: 'portfolio'
        },
        {
          link: "/social",
          name: 'social'
        }
      ]
    }
  },
}
</script>
