<template>
  <div class="container w-50" style="margin-top: 5cm;">
    <h1 v-if="datas">ID: {{datas.id}}</h1>
    <div
      class="card mb-5"
      
      
      style="width: 100%"
    >
      <div class="card-body">
        <h5 class="card-title" v-if="datas">{{datas.subject}}</h5>
        <p class="card-text" v-if="datas">
          {{datas.description}}
        </p>
        <a href="/#/" class="btn btn-primary">Go back</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            datas: null
        }
    },
    async created(){
        
        var id = this.$route.query.id;
        var data = {id}
        var result = await axios.post("http://localhost:4000/tickets/search", data);
        
        this.datas = result.data.request;
        
        
    }
};
</script>

<style scoped></style>
