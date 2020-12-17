<template>
  <div>
    <b-container>
      <div>
        <ul>
          <li><a href="#">Favorite & Promo ></a>Add new product</li>
        </ul>
      </div>
      <b-row>
        <b-col xl="4" lg="4" md="4" sm="12">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div>
              <img
                src="../../../assets/img/coldbrew.png"
                alt=""
                style="width:170px;border-radius:50%"
              />
            </div>
            <div>
              <b-button
                class="btn-style"
                style="margin-bottom:15px;margin-top:15px;background-color: #0B132A;color:white"
                >Take a picture</b-button
              >
              <br />
              <b-button
                class="btn-style"
                style="background-color: #FFBA33;color:#6A4029"
                >Choose from gallery</b-button
              >
            </div>
            <div style="margin-top:70px">
              <h6>Delivery Hour:</h6>
              <b-form-input
                id="input"
                type="text"
                placeholder="select start hour"
              ></b-form-input>
              <b-form-input
                id="input"
                type="text"
                placeholder="select end hour"
              ></b-form-input>
            </div>
            <div style="margin-top:75px">
              <h6>Input stok</h6>
              <b-form-input
                id="input"
                type="number"
                placeholder="Input Stock"
              ></b-form-input>
            </div>
          </div>
        </b-col>
        <b-col xl="8" lg="8" md="8" sm="12">
          <div style="margin-left:20px">
            <h6>Product Name</h6>
            <b-form-input
              id="input2"
              type="text"
              placeholder="select end hour"
            ></b-form-input>
            <h6>Product Name</h6>
            <b-form-input
              id="input2"
              type="text"
              placeholder="select end hour"
            ></b-form-input>
            <h6>Product Name</h6>
            <b-form-input
              id="input2"
              type="text"
              placeholder="select end hour"
            ></b-form-input>
            <h6>Product Name</h6>
            <b-form-input
              id="input2"
              type="text"
              placeholder="select end hour"
            ></b-form-input>
            <h6>Product Name</h6>
            <b-form-input
              id="input2"
              type="text"
              placeholder="select end hour"
            ></b-form-input>
            <div>
              <h6>Product Name</h6>
              <p>* Click size you want to use for this product</p>
              <b-button class="style-size">R</b-button>
              <b-button class="style-size">L</b-button>
              <b-button class="style-size">XL</b-button>
              <b-button class="style-size" style="font-size:12px"
                >200gr</b-button
              >
              <b-button class="style-size" style="font-size:12px"
                >300gr</b-button
              >
              <b-button class="style-size" style="font-size:12px"
                >500gr</b-button
              >
            </div>
            <div>
              <h6>Input Delivery Methods</h6>
              <p>* Click method you want to use for this product</p>
              <b-button class="style-size2">Home Delivery</b-button>
              <b-button class="style-size2">Dine in</b-button>
              <b-button class="style-size2">Take Away</b-button>
            </div>
            <div>
              <b-button class="btn-style2">Save</b-button>
              <b-button class="btn-style2">Cancle</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.style-size {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #ffba33;
  font-weight: bold;
  color: black;
  font-size: 20px;
  margin-right: 60px;
}
.style-size2 {
  border-radius: 10px;
  width: 160px;
  height: 45px;
  border: none;
  background-color: #ffba33;
  font-weight: bold;
  color: black;
  font-size: 15px;
  margin-right: 60px;
}
.btn-style {
  width: 250px;
  padding: 17px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
}
.btn-style2 {
  width: auto;
  padding: 17px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
}
#input {
  height: 45px;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 20px;
}
#input2 {
  height: 45px;
  border-radius: 0px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #d2d2d2;
}
</style>
