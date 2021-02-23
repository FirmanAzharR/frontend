<template>
  <div>
    <vue-confirm-dialog></vue-confirm-dialog>
    <b-container class="p-0">
      <b-navbar toggleable="lg" style="margin-top:20px;margin-bottom:20px;">
        <b-navbar-brand href="#" class="brand" style="font-size:23px">
          <router-link to="/" class="brand">
            <img
              src="../../assets/img/coffee-logo.png"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Coffeeland
          </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav class="ml-auto">
            <b-nav-item href="#" v-if="role !== 1"
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
            <b-nav-item href="#" v-if="role === 1"
              ><router-link to="/confirm-order" class="link"
                >Confirm Order</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/history" class="link"
                >History</router-link
              ></b-nav-item
            >
            <b-nav-item v-if="role !== undefined">
              <b-form-input
                id="search"
                style=""
                placeholder="Search Product"
                type="text"
                v-model="cari"
                @keyup.enter="search"
              >
              </b-form-input>
            </b-nav-item>
            <b-nav-item v-if="role !== undefined">
              <router-link to="/profile" class="link">
                <img
                  v-if="
                    getProfile.user_img === '' || getProfile.user_img === 'none'
                  "
                  style="border-radius:50%;width:25px;height:25px;object-fit:cover"
                  src="../../assets/img/user-no-img.png"
                  alt=""/>
                <img
                  v-else
                  style="border-radius:50%;width:35px;height:35px;object-fit:cover"
                  :src="`${ENV}/fileUploadsApi1/profile/` + getProfile.user_img"
                  alt=""
              /></router-link>
            </b-nav-item>
            <b-nav-item v-if="role !== undefined" @click="handleLogout"
              ><router-link to="#" class="link">Logout</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link
                to="/login"
                class="btn-login"
                v-if="role === undefined"
                >Login</router-link
              ></b-nav-item
            >
          </b-nav>
          <!-- <b-nav>
            <b-form-input
              id="search"
              style=""
              placeholder="Search Product"
              type="text"
              v-model="cari"
              @keyup.enter="search"
            >
            </b-form-input>
          </b-nav> -->
          <!-- <b-navbar-nav class="ml-5">
            <b-navbar-nav right> -->
          <!-- <b-nav-item v-if="role !== undefined"
                ><router-link to="#" class="link"
                  ><img src="../../assets/img/chat.png" alt=""/></router-link
              ></b-nav-item> -->
          <!-- <b-nav-item v-if="role !== undefined"
                ><router-link to="/profile" class="link">
                  <img
                    v-if="
                      getProfile.user_img === '' ||
                        getProfile.user_img === 'none'
                    "
                    style="border-radius:50%;width:25px;height:25px;object-fit:cover"
                    src="../../assets/img/user-no-img.png"
                    alt=""/>
                  <img
                    v-else
                    style="border-radius:50%;width:35px;height:35px;object-fit:cover"
                    :src="
                      'http://localhost:5000/profile/' + getProfile.user_img
                    "
                    alt=""/></router-link
              ></b-nav-item> -->
          <!-- <b-nav-item
                ><router-link
                  to="/login"
                  class="btn-login"
                  v-if="role === undefined"
                  >Login</router-link
                ></b-nav-item
              > -->
          <!-- <b-nav-item v-if="role !== undefined" @click="handleLogout"
                ><router-link to="#" class="link"
                  >Logout</router-link
                ></b-nav-item
              > -->
          <!-- <b-nav-item
                ><router-link to="/login" id="btn" v-if="role === undefined"
                  >Sign Up</router-link
                ></b-nav-item
              > -->
          <!-- </b-navbar-nav>
          </b-navbar-nav> -->
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
      role: '',
      ENV: `${process.env.VUE_APP_PORT}`
    }
  },
  created() {
    this.role = this.setUser.user_role
    this.getProfiles(this.setUser.user_id)
  },
  computed: {
    ...mapGetters(['setUser', 'getProfile'])
  },
  methods: {
    ...mapActions(['getProducts', 'logout', 'getProfiles']),
    ...mapMutations([
      'handleChangePage',
      'handleChangeCategory',
      'handleSort',
      'productSearchs'
    ]),
    handleLogout() {
      this.$confirm({
        title: 'Logout?',
        message: 'Are you sure you want to logout?',
        button: {
          no: 'No',
          yes: 'Yes'
        },

        callback: confirm => {
          if (confirm) {
            this.logout()
          }
        }
      })
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
  color: #6a4029;
}
.brand:hover {
  color: #6a4029;
  text-decoration: none;
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
  padding: 5px;
  border-radius: 15px;
  background-color: #ffba33;
  color: #6a4029;
  text-decoration: none;
}
.btn-login {
  background-color: #6a4029 !important;
  color: white !important;
  border-radius: 20px !important;
  border: none !important;
  padding: 10px 25px !important;
}
</style>
