<template>
  <nav class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Requests</router-link>
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <router-link to="">Messages</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'


export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    return {
      logout: () => {
        store.commit('modules/logout')
        router.push('/modules')
      }
    }
  }
}
</script>

<style scoped>

</style>
