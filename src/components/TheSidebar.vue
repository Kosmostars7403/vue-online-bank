<template>
  <div class="sidebar" v-if="sidebar">
    <div class="sidebar-close" @click="close">&times;</div>
      <div class="sidebar-content">
        <p>Welcome to our online bank!</p>
      </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSideBar')
    }
  }
}
</script>

<style scoped>

</style>
