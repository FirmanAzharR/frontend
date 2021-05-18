<template>
  <div>
    <div class="rubik">
      <b-row style="margin-right:0px;">
        <b-col style="padding:0px">
          <div>
            <div v-if="getPage === 'signin'">
              <FormLogin class="animate__animated animate__fadeIn" />
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import FormLogin from '../components/_base/FormLogin'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    FormLogin
  },
  data() {
    return {
      page: ''
    }
  },
  created() {
    this.page = this.$route.query.page
    if (this.page === 'undefined') {
      this.setPage('signin')
    }
  },
  computed: {
    ...mapGetters(['getPage'])
  },
  methods: {
    ...mapMutations(['setPage'])
  }
}
</script>

<style scoped>
.before-footer-login {
  margin-top: 158px;
}
.before-footer-signup {
  margin-top: 115px;
}
.before-footer-forgot {
  margin-top: 258px;
}

@media only screen and (max-width: 600px) {
  .img {
    display: none;
  }
  .before-footer-login {
    margin-top: 0px;
  }
  .konten {
    z-index: 2;
  }
}
</style>
