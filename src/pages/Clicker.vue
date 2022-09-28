<template>
  <div class="columns">
    <div class="column is-one-third has-text-centered">
        <b>{{displayJuiceboxes}} juiceboxes</b>
        <br>
        <b>{{displayCps}} Juiceboxes per second</b>
        <img @click="juiceboxClick()" :class="{'click': clickClass}"  src="https://clipart.world/wp-content/uploads/2022/06/Juice-Box-Clipart-Transparent.png">
    </div>
    <div class="column">
        <button @click="upgrade(0.1,10)" class="button" :disabled="juiceboxes <=9">Buy 0.1 cps for 10 juiceboxes</button>
        <button @click="upgrade(1,100)" class="button" :disabled="juiceboxes <=99">Buy 1 cps for 100 juiceboxes</button>
        <button @click="upgrade(10,1000)" class="button" :disabled="juiceboxes <=999">Buy 10 cps for 1000 juiceboxes</button>
        <button @click="upgrade(100,10000)" class="button" :disabled="juiceboxes <=9999">Buy 100 cps for 10000 juiceboxes</button>
        <button @click="upgrade(1000,100000)" class="button" :disabled="juiceboxes <=99999">Buy 1000 cps for 100000 juiceboxes</button>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        setInterval(() => {
            this.juiceboxes += this.cps;
            this.juiceboxes = parseFloat (this.juiceboxes.toFixed(1));
        }, 1000);
    },
    data(){
        return {
            clickClass:false,
            juiceboxes: 0,
            cps: 0,
        }
    },
    computed:{
        displayJuiceboxes(){
            return parseFloat(this.juiceboxes.toFixed(1));
        },
        displayCps(){
            return parseFloat(this.cps.toFixed(1));
    },
},
    methods:{
            juiceboxClick(){
                this.juiceboxes++;
                this.clickClass = true;
                setTimeout(()=> {
                    this.clickClass = false;
                }, 50);
            },
            upgrade(cps, cost){
                if(this.juiceboxes >= cost){
                    this.juiceboxes -= cost;
                    this.cps += cps;
                }
            }
        }
}
</script>

<style scoped>
    img.click {
        transform: scale(1.5);
        transition:0.5s;
    }
</style>