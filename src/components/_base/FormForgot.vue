<template>
  <div>
    <b-container>
      <div
        class="d-flex justify-content-center"
        style="padding:30px;margin-top:50px"
      >
        <div class="align-self-center" style="font-weight:bold;font-size:20px">
          <img
            src="../../assets/img/coffee-logo.png"
            alt=""
            style="margin-right:10px"
          />Coffeeland
        </div>
      </div>
      <div style="padding:80px;margin-top:50px">
        <h1 style="text-align:center;font-weight:bold">
          Forgot your password?
        </h1>
        <br />
        <h4 style="margin-bottom:100px;text-align:center">
          Don’t worry, we got your back!
        </h4>
        <b-form>
          <b-form-input
            type="email"
            class="input"
            autocomplete="off"
            placeholder="Enter your email address to get link"
          ></b-form-input
          ><br />
          <b-button
            block
            class="btn-style2 shadow"
            style="background-color:#FFBA33;color:#7D4F2A"
            >Send</b-button
          >
          <h6 style="margin-bottom:40px;margin-top:40px;text-align:center">
            Click here if you didn’t receive any link in 2 minutes 01:52
          </h6>
          <br />
          <b-button
            block
            class="btn-style2 shadow"
            style="color:white;background-color:#6A4029"
            >Resend Link</b-button
          ><br />
        </b-form>
      </div>
    </b-container>
  </div>
</template>
