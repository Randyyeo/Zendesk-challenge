<template>
  <div class="container w-50 mt-5">
    <div v-if="isLoading" class="loader">
      <vue-simple-spinner message="Please wait while we retrieve your tickets"></vue-simple-spinner>
    </div>
    <h1 class="text-center my-3" v-if="error">Ticket Viewer</h1>
    <h1 class="text-danger" v-if="error">{{error}}</h1>
    <div v-else>
      <h1 class="text-center my-3">Ticket Viewer</h1>
      <h4 v-if="datas">
        {{ datas.length }} total tickets, {{ page_data.length }} shown on this
        page only
      </h4>
      <div v-for="(data, index) in page_data" :key="index" style="width: 100%">
        <a :href="'./#/ticket?id=' + data.id">
          {{ data.subject }}
        </a>
        <p>
          Updated at {{ data.updated_at.substring(0, 10) }}
          {{ data.updated_at.substring(11, 19) }}
        </p>
        <hr />
      </div>
      <div class="buttons-bar h">
        <button
          type="button"
          class="btn-secondary me-1 navigation"
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
      error: false,
      isLoading: true
    };
  },
  async mounted() {
    try {
      var result = await axios.post("http://localhost:4000/tickets");
      if (result.data.error){
        this.error = "Error: Couldn't Authenticate You";
      } else {
        this.datas = result.data.requests
        this.isLoading = false;
      }
      
    } catch (error) {
      this.error = "Error: Response is invalid";
    }
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
      if (this.datas) {
        return Math.ceil(this.datas.length / 25);
      } else {
        return "";
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
  margin-bottom: 1cm;
}

.navigation {
  cursor: pointer;
}

.loader{
  position: absolute;
  top: 35%;
  left: 38%;
}
</style>
