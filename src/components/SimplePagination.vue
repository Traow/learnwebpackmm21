<template>
  <button @click="$emit('prev')" class="button" :disabled="!info.prev">Previous</button>
    <button @click="$emit('next')" class="button" :disabled="!info.next">Next</button>
</template>

<script>
export default {
props: ['info']
}
</script>

<style>

</style>