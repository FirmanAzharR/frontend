<template>
  <div>
    <b-container class="p-0">
      <b-navbar toggleable="lg" style="margin-top:20px;margin-bottom:20px;">
        <b-navbar-brand href="#" class="brand">
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
              ><router-link to="#" class="link">Home</router-link></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="#" class="link"
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
          <b-navbar-nav class="ml-5">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
                style="border-radius:20px"
              ></b-form-input>
            </b-nav-form>
            <b-navbar-nav right>
              <b-nav-item
                ><router-link to="#" class="link"
                  ><img src="../../assets/img/chat.png" alt=""/></router-link
              ></b-nav-item>
              <b-nav-item
                ><router-link to="#" class="link"
                  ><img
                    style="border-radius:50px"
                    src="../../assets/img/user.png"
                    alt=""/></router-link
              ></b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600&display=swap');
.navbar {
  font-family: 'Rubik', sans-serif;
}
.brand {
  font-weight: bold;
  font-size: 20px;
}
</style>
