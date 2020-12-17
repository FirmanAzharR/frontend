<template>
  <div class="lifecycle">
    <div class="centered">
      <Navbar />
      <h1>This is Page Lifecycle</h1>
    </div>
  </div>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../components/_base/Navbar'

export default {
  name: 'Lifecycle',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar
  },
  data() {
    return {
      dataTesting: 'vue data!'
    }
  },
  beforeCreate() {
    console.log('before create =>' + this.dataTesting)
  },
  created() {
    //urutan eksekusi beforcreate - data - create
    console.log('created runing =>' + this.dataTesting)
  },
  beforeMount() {
    //urutan eksekusi beforcreate - data - create
    console.log('before mounted runing =>' + this.dataTesting)
  },
  mounted() {
    //urutan eksekusi beforcreate - data - create
    console.log('mounted runing =>' + this.dataTesting)
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
