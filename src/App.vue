<template>
  <div class="container">
    <section class="section">
      <div class="field has-addons">
        <p class="control">
        <input class="input" type="text" v-model="newItem" @keydown.enter = "addItem()">
        </p>
        <p class="control">
      <button class="button" @click="addItem()">Add</button>
        </p>
      </div>
      <div class="content">
        <h1>All Items</h1>
    <ul>
      <li v-for=" item in items " :key="item.id">
        {{ item.name }}
        <input type="checkbox" v-model ="item.done">
      </li>
    </ul>
    
    <h1>Done Items</h1>
    <ul>
      <li v-for=" item in DoneItems " :key="item.id">
        {{ item.name }}
        <input type="checkbox" v-model ="item.done">
      </li>
    </ul>

    <h1>Not Done Items</h1>
    <ul>
      <li v-for=" item in notDoneItems " :key="item.id">
        {{ item.name }}
        <input type="checkbox" v-model ="item.done">
      </li>
    </ul>

      </div>
    </section>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              newItem: '',
              count: 0,
              items: [
                {name:'Saku Ice', done: true, id: 0},
                {name:'Hoggys Gin', done: false, id: 1},
                {name:'J2ger', done: false, id: 2},
              ]
          }
      },
      methods: {
        addItem(){
          if(this.newItem !=""){
          this.items.push({name:this.newItem, done: false, id: this.items.length});
          }
          this.newItem = '';
        }
      },
      computed: {
        DoneItems(){
          return this.items.filter(item => item.done);
        },
        notDoneItems(){
          return this.items.filter(item => !item.done);
      }
    }
  }
  </script>
  
  <style>
  
  </style>