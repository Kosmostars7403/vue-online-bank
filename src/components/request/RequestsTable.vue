<template>
  <h4 v-if="requests.length === 0" class="text-center">There are no requests</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Full Name</th>
      <th>Phone number</th>
      <th>Sum</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="(request, index) in requests" :key="request.id">
        <td>{{ index + 1 }}</td>
        <td>{{ request.name }}</td>
        <td>{{ request.phone }}</td>
        <td>{{ currency(request.sum) }}</td>
        <td><app-status :type="request.status" /></td>
        <td>
          <router-link custom :to="{name: 'Request', params: {id: request.id}}" v-slot="{navigate}">
            <button class="btn" @click="navigate">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from '../../utils/currency'
import AppStatus from '../ui/AppStatus'

export default {
  props: {
    requests: {
      type: Array,
    }
  },
  setup() {
    return {currency}
  },
  components: {AppStatus}
}
</script>

