<template>
  <div>
    <b-container>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div>
          <img
            src="../../../assets/img/coldbrew.png"
            alt=""
            style="width:250px;"
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
</style>
