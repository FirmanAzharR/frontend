<template>
  <div>
    <div style="border-bottom:1px solid #d2d2d2">
      <Navbar />
    </div>
    <div style="margin-top:40px;margin-bottom:40px">
      <b-container>
        <div v-if="role === 1">
          <DashboardAdmin />
        </div>
        <div v-if="role === 2">
          <DashboardCustomer />
        </div>
      </b-container>
    </div>
    <div style="border-top:1px solid #d2d2d2">
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashboardAdmin from '../components/_base/dashboard/Admin'
import DashboardCustomer from '../components/_base/dashboard/Customer'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Dashboard',
  components: {
    DashboardAdmin,
    DashboardCustomer,
    Navbar,
    Footer
  },
  data() {
    return {
      role: ''
    }
  },
  created() {
    this.role = this.setUser.user_role
    console.log(this.role)
  },
  computed: {
    ...mapGetters(['setUser'])
  },
  methods: {}
}
</script>
