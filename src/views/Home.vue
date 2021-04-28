<template>
  <app-loader v-if="loading" />
  <app-page title="Requests list" v-else>

    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>

    <request-filter v-model="filter"></request-filter>
    <requests-table :requests="requests"></requests-table>

    <teleport to="body">
      <app-modal title="Create a request" @close="modal = false" v-if="modal">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import RequestsTable from '@/components/request/RequestsTable'
import AppModal from '@/components/ui/AppModal'
import AppLoader from  '@/components/ui/AppLoader'
import RequestModal from '@/components/request/RequestModal'
import RequestFilter from '../components/request/RequestFilter'

import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  components: {AppPage, RequestsTable, AppModal, RequestModal, AppLoader, RequestFilter},
  setup() {
    const modal = ref(false)
    const store = useStore()
    const loading = ref(false)
    const filter = ref({})

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/fetchRequests')
      loading.value = false
    })

    const requests = computed(() => store.getters['request/requests']
        .filter(request => filter.value.status ? filter.value.status === request.status : request)
        .filter(request => filter.value.name ? request.name.includes(filter.value.name) : request)
    )

    return {
      modal,
      requests,
      loading,
      filter
    }
  },
}
</script>
