<template>
    <button class="button" v-on:click="count++">{{ count }}</button>
    <input type="text" v-model="name">
  {{ name }}
    <button class="button" @click="items.push(name)">Add</button>

  <ul>
    <li v-for="(item,index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
    data(){
        return {
            name: 'Robi Mustsaar',
            count: 0,
            items: ['piim', 'sai', 'viin','õlu']
        }
    }
}
</script>

<style>

</style>