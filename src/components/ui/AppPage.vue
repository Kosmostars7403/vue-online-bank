<template>
  <div class="breadcrumbs" v-if="back"><router-link to="/" class="text-white">Back to request list</router-link></div>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="header" />
    </h1>

    <slot/>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    document.title = `${props.title} | Online Bank`
  }
}
</script>

<style scoped>

</style>
