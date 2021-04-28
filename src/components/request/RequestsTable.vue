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
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    requests: {
      type: Array,
    }
  }
}
</script>

<style scoped>

</style>
