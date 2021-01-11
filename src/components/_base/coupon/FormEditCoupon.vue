<template>
  <div>
    <b-container>
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
                style="background-color: #FFBA33;color:#6A4029;margin-bottom:40px"
                >Choose from gallery</b-button
              >
            </div>
          </div>
        </b-col>
        <b-col xl="8" lg="8" md="8" sm="12">
          <h6>Product Name</h6>
          <b-form-input
            class="input2"
            type="text"
            placeholder="select end hour"
          ></b-form-input>
          <h6>Product Name</h6>
          <b-form-input
            class="input2"
            type="text"
            placeholder="select end hour"
          ></b-form-input>
          <b-row>
            <b-col xl="6" lg="6" md="6" sm="6">
              <h6>Input coupon code</h6>
              <b-form-input
                class="input2"
                type="number"
                placeholder="Add coupon code"
              ></b-form-input>
              <h6>Minimum purchase:</h6>
              <b-form-input
                class="input2"
                type="number"
                placeholder="Minimum purchase"
              ></b-form-input>
              <h6>Expire date:(Start Date)</h6>
              <b-form-input
                class="input2"
                type="date"
                placeholder="select start date"
              ></b-form-input>
            </b-col>
            <b-col xl="6" lg="6" md="6" sm="6">
              <h6>Enter the discount:</h6>
              <b-form-input
                class="input2"
                type="text"
                placeholder="Input coupon discount"
              ></b-form-input>
              <h6>Maximal discount:</h6>
              <b-form-input
                class="input2"
                type="number"
                placeholder="Maximal discount"
              ></b-form-input>
              <h6>End Date:</h6>
              <b-form-input
                class="input2"
                type="date"
                placeholder="select end date"
              ></b-form-input>
            </b-col>
          </b-row>
          <div
            class="d-flex justify-content-center align-items-center"
            style="margin-top:40px;margin-bottom:60px"
          >
            <b-button
              class="btn-style2"
              style="background-color:#6A4029;width:250px;margin-right:20px"
              >Save</b-button
            >
            <b-button
              class="btn-style2"
              style="background-color:#E7EAED;color:#7B7B7B;width:250px;margin-left:20px"
              >Cancle</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
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
.input2 {
  height: 45px !important;
  border-radius: 0px !important;
  margin-bottom: 20px !important;
  border: none !important;
  border-bottom: 1px solid #d2d2d2 !important;
}
</style>
