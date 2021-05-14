<template>
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">
             <nuxt-link to="/">
               <img src="https://hhcdn.ru/employer-logo/3821972.png">
             </nuxt-link>
            </div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <nuxt-link class="navbar-link"
                             :title="link.title"
                             :to="link.url">
                  {{ link.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Page 1', url: '/page1' },
        { title: 'Page 2', url: '/page2' },
      ]
    }
  }
}
</script>

<style lang="scss">
.logo a {
  color: #333333;
}
.navbar-link {
  font-weight: bold;
  color: #4796f6;
  .nuxt-link-exact-active {
    color: #f15195;
  }
}
</style>
