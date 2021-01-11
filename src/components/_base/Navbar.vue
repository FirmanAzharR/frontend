<template>
  <div>
    <b-container class="p-0">
      <b-navbar toggleable="lg" style="margin-top:20px;margin-bottom:20px;">
        <b-navbar-brand href="#" class="brand" style="font-size:23px">
          <img
            src="../../assets/img/coffee-logo.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Coffeeland
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav class="ml-auto">
            <b-nav-item href="#"
              ><router-link to="/" class="link">Home</router-link></b-nav-item
            >
            <b-nav-item href="#" v-if="role !== undefined"
              ><router-link to="/dashboard" class="link"
                >Dashboard</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/product" class="link"
                >Product</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/yourcart" class="link"
                >Your Cart</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="#" class="link"
                >History</router-link
              ></b-nav-item
            >
          </b-nav>
          <b-nav>
            <b-form-input
              id="search"
              style=""
              placeholder="Search Product"
              type="text"
              v-model="cari"
              @keyup.enter="search"
            >
            </b-form-input>
          </b-nav>
          <b-navbar-nav class="ml-5">
            <b-navbar-nav right>
              <b-nav-item v-if="role !== undefined"
                ><router-link to="#" class="link"
                  ><img src="../../assets/img/chat.png" alt=""/></router-link
              ></b-nav-item>
              <b-nav-item v-if="role !== undefined"
                ><router-link to="#" class="link"
                  ><img
                    style="border-radius:50px"
                    src="../../assets/img/user.png"
                    alt=""/></router-link
              ></b-nav-item>
              <b-nav-item
                ><router-link to="/login" class="link" v-if="role === undefined"
                  >Login</router-link
                ></b-nav-item
              >
              <b-nav-item v-if="role !== undefined" @click="handleLogout"
                ><router-link to="#" class="link"
                  >Logout</router-link
                ></b-nav-item
              >
              <b-nav-item
                ><router-link to="#" id="btn" v-if="role === undefined"
                  >Sign Up</router-link
                ></b-nav-item
              >
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      cari: '',
      role: ''
    }
  },
  created() {
    this.role = this.setUser.user_role
    //console.log(this.role)
  },
  computed: {
    ...mapGetters(['setUser'])
  },
  methods: {
    ...mapActions(['getProducts', 'logout']),
    ...mapMutations([
      'handleChangePage',
      'handleChangeCategory',
      'handleSort',
      'productSearchs'
    ]),
    handleLogout() {
      this.logout()
    },
    search() {
      this.handleChangeCategory('')
      this.productSearchs(this.cari)
      this.getProducts()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600&display=swap');
.navbar {
  font-family: 'Rubik', sans-serif;
}
.brand {
  font-weight: bold;
  font-size: 20px;
}
#search {
  border-radius: 15px;
  width: 150px;
  height: 35px;
  border: 2px solid #6a4029;
}
#search:focus {
  box-shadow: 0 0 0 0.2rem rgba(163, 100, 65, 0.25);
}
#btn {
  padding: 10px;
  border-radius: 15px;
  background-color: #ffba33;
  color: #6a4029;
  text-decoration: none;
}
</style>
