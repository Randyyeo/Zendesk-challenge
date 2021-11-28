<template>
  <div class="container w-50">
    <h1 class="text-center my-3">Ticket Viewer</h1>
    <h4>{{datas.length}} total tickets, {{page_data.length}} shown on this page only</h4>
    <div v-for="(data, index) in page_data" :key="index" style="width: 100%">
      <a :href="'./#/ticket?id=' + data.id">
        {{ data.subject }}
      </a>
      <hr />
    </div>
    <div class="buttons-bar h">
      <button
        type="button"
        class="btn-secondary mr-1 navigation"
        v-for="index in pages"
        :key="index"
        @click="next(index)"
      >
        {{ index }}
      </button>

      <button
        type="button"
        class="btn-secondary mr-1 navigation"
        @click="addone"
      >
        >
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      datas: null,
      index: 0,
      page: 1,
    };
  },
  async mounted() {
    var result = await axios.post("http://localhost:4000/tickets");
    this.datas = result.data.requests;
    
  },
  methods: {
    next(index) {
      this.page = index;
    },
    addone() {
        
      if (this.page + 1 <= Math.ceil(this.datas.length / 25)) {
          
        this.page += 1;
      }
    },
  },
  computed: {
    pages() {
        if (this.datas){
            return Math.ceil(this.datas.length / 25);
        } else {
            return ""
        }
      
    },
    page_data() {
      if (this.datas) {
        var end = this.page * 25;
        return this.datas.slice(end - 25, end);
        
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.h {
  text-align: center;
  margin: 5px;
}

.buttons-bar {
  margin: auto;
}

.navigation {
  cursor: pointer;
}
</style>
