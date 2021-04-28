<template>
  <app-page title="Requests list">

    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <requests-table :requests="[]"></requests-table>

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
import {ref} from 'vue'
import RequestModal from '@/components/request/RequestModal'

export default {
  components: {AppPage, RequestsTable, AppModal, RequestModal},
  setup() {
    const modal = ref(false)

    return {
      modal,
    }
  }
}
</script>
