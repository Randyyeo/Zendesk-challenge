<template>
  <div class="container w-50" style="margin-top: 5cm;">
    <div
      class="card mb-5"
      
      
      style="width: 100%"
    >
      <div class="card-body">
        <h5 class="card-title">{{datas.subject}}</h5>
        <p class="card-text">
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
        console.log(this.datas)
        
    }
};
</script>

<style scoped></style>
