<template>
  <div :class="['alert', message.type]" v-if="message">
    <p class="alert-title">ERROR!</p>
    <p>{{ message.value}}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
    const store = useStore()

    const message = computed(() => store.state.errorMessage)

    return {
      message,
      close: () => store.commit('clearErrorMessage')
    }
  }
}
</script>

<style scoped>

</style>
