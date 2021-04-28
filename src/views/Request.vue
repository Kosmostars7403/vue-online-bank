<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Request" :back="true" v-else-if="request">
    <p><strong>Full name: </strong> {{ request.name}}</p>
    <p><strong>Phone: </strong> {{ request.phone}}</p>
    <p><strong>Sum: </strong> {{ currency(request.sum) }}</p>
    <p><strong>Status: </strong> <app-status :type="request.status"></app-status></p>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Remove</button>
    <button class="btn" @click="update" v-if="hasChanges">Updata</button>
  </app-page>
  <h3 class="text-center text-white" v-else>
    Not found.
  </h3>
</template>

<script>
import {useRoute} from 'vue-router'
import AppPage from '../components/ui/AppPage'
import AppLoader from '../components/ui/AppLoader'
import {onMounted, ref, computed} from 'vue'
import {useStore} from 'vuex'
import AppStatus from '../components/ui/AppStatus'
import {currency} from '../utils/currency'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const status = ref()
    const request = ref()
    const loading = ref(false)
    const router = useRouter()

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/fetchRequestById', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/removeRequestById', route.params.id)
      router.push('/')
    }

    const update = async () => {
      await store.dispatch('request/updateRequestById', {
        ...request.value,
        id: route.params.id,
        status: status.value
      })
      request.value.status = status.value
    }

    return {
      request,
      loading,
      currency,
      remove,
      update,
      hasChanges,
      status
    }

  },
  components: {AppStatus, AppPage, AppLoader}
}
</script>

<style scoped>

</style>
