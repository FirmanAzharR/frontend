<template>
  <div style="padding:20px">
    <b-nav fill align="center" class="font2" style="font-size: 20px">
      <b-nav-item
        ><router-link to="#" class="link"
          >Favorite & Promo</router-link
        ></b-nav-item
      >
      <b-nav-item>
        <router-link to="#" class="link">Coffee</router-link>
      </b-nav-item>
      <b-nav-item
        ><router-link to="#" class="link">Non Coffee</router-link></b-nav-item
      >
      <b-nav-item
        ><router-link to="#" class="link">Foods</router-link></b-nav-item
      >
      <b-nav-item
        ><router-link to="#" class="link">Add-on</router-link></b-nav-item
      >
    </b-nav>
    <div style="margin-top:30px">
      <b-row>
        <b-col xl="3" lg="3" md="3" sm="4" cols="6">
          <div class="item font1 centered">
            <b-card
              style="border-radius:40px;max-width: 10rem; margin-bottom:20px"
            >
              <div align="center">
                <img src="../../assets/img/aside-icon.png" alt="" />
                <h4>Nama</h4>
                <h6>Harga</h6>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col xl="3" lg="3" md="3" sm="4" cols="6">
          <div class="item font1 d-flex justify-content-center">
            <b-card
              style="border-radius:40px;max-width: 15rem; margin-bottom:20px"
            >
              <div align="center">
                <img src="../../assets/img/aside-icon.png" alt="" />
                <h4>Nama</h4>
                <h6>Harga</h6>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col xl="3" lg="3" md="3" sm="4" cols="6">
          <div class="item font1 d-flex justify-content-center">
            <b-card
              style="border-radius:40px;max-width: 10rem; margin-bottom:20px"
            >
              <div align="center">
                <img src="../../assets/img/aside-icon.png" alt="" />
                <h4>Nama</h4>
                <h6>Harga</h6>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col xl="3" lg="3" md="3" sm="4" cols="6">
          <div
            class="item font1 d-flex justify-content-center align-items-center"
          >
            <b-card
              style="border-radius:40px;max-width: 10rem; margin-bottom:20px"
            >
              <div align="center">
                <img src="../../assets/img/aside-icon.png" alt="" />
                <h4>Nama</h4>
                <h6>Harga</h6>
              </div>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
.font1 {
  font-family: 'Poppins', sans-serif;
}
.font2 {
  font-family: 'Rubik', sans-serif;
}
.link {
  color: #6a4029;
}
.link:hover {
  color: #6a4029;
  font-weight: 400;
}
.centered {
  display: grid;
  justify-content: center;
}
</style>
