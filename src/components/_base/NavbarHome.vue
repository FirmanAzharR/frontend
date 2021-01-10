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
            <b-nav-item href="#"
              ><router-link to="/product" class="link"
                >Product</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="#" class="link"
                >Your Cart</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="#" class="link"
                >History</router-link
              ></b-nav-item
            >
          </b-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ['dataProductName'],
  methods: {
    sendData(event) {
      const sendData = event.target.value
      this.$emit('sendData', sendData)
    }
  }
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600&display=swap');
.navbar {
  font-family: 'Rubik', sans-serif;
}
.brand {
  font-weight: bold;
  font-size: 20px;
}

#btn {
  padding: 10px;
  border-radius: 15px;
  background-color: #ffba33;
  color: #6a4029;
  text-decoration: none;
}
</style>
