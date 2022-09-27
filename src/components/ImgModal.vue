<template>
  <Modal @close="$emit ('close')">
    <p class="image is-4by3">
      <img :src="src" alt="">
    </p>
</Modal>
</template>

<script>
import Modal from './Modal.vue';
export default {
    components: { Modal },
    props: ['active', 'src']
}
</script>

<style>

</style>