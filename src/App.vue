<template>
    <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import AuthLayout from '@/layout/AuthLayout'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
  components: {MainLayout, AuthLayout},
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)

    return {
      layout
    }
  }
}
</script>
