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
      <div class="padding-forgot">
        <h1 class="font-sm" style="text-align:center;font-weight:bold">
          Update your password !
        </h1>
        <br />
        <h4 class="font-sm2 margin-btm" style="text-align:center">
          Don’t worry, we got your back!
        </h4>
        <b-form @submit.prevent="updateForgotPass">
          <label for="" class="label-input">New password</label>
          <b-form-input
            type="password"
            class="input"
            autocomplete="off"
            placeholder="Enter new password"
            required
            v-model="form.newPass"
          ></b-form-input
          ><br />
          <label for="" class="label-input">Confirm password</label>
          <b-form-input
            type="password"
            class="input"
            autocomplete="off"
            placeholder="Confirm new password"
            required
            v-model="form.confirmPass"
          ></b-form-input
          ><br />
          <b-button
            block
            class="btn-style2 shadow"
            style="background-color:#FFBA33;color:#7D4F2A"
            type="submit"
            v-if="form.newPass === form.confirmPass"
            >Save Changes</b-button
          >
          <b-button
            block
            class="btn-style2 shadow"
            type="submit"
            v-else
            disabled
            >Save Changes</b-button
          >
          <br />
          <b-button
            block
            class="btn-style2 shadow"
            style="color:white;background-color:#6A4029"
            @click="setPage('signin')"
            >Login here</b-button
          ><br />
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import alertMixin from '../../mixins/alertMixin'
export default {
  name: 'UpdatePass',
  mixins: [alertMixin],
  data() {
    return {
      form: {
        confirmPass: '',
        newPass: '',
        key: ''
      }
    }
  },
  created() {},
  methods: {
    ...mapActions(['updateForgotPassword']),
    ...mapMutations(['setPage']),
    updateForgotPass() {
      this.form.key = this.$route.query.key
      const setData = {
        key_reset: this.form.key,
        new_pass: this.form.newPass
      }
      this.updateForgotPassword(setData)
        .then(result => {
          this.makeToast('Done', `${result.data.msg}`, 'success')
          this.form.newPass = ''
          this.form.confirmPass = ''
        })
        .catch(error => {
          this.makeToast('Failed', `${error.data.msg}`, 'danger')
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
.rubik {
  font-family: 'Rubik', sans-serif;
}
.responsive {
  width: 100%;
  height: auto;
}
.margin-btm {
  margin-bottom: 100px;
}
.btn-style {
  padding: 10px;
  width: 120px;
  background-color: #ffba33;
  border-radius: 20px;
  color: #7d4f2a;
  font-weight: 600;
  border: none;
}
.btn-style2 {
  padding: 10px;
  height: 55px;
  border-radius: 20px;
  font-weight: 600;
  border: none;
}
.btn-style2:disabled {
  padding: 10px;
  height: 55px;
  border-radius: 20px;
  font-weight: 600;
  border: none;
  background-color: darkgrey;
}
.label-input {
  color: #868b95;
  font-weight: bold;
}
.input {
  height: 55px;
  border-radius: 20px;
  margin-bottom: 15px;
}
.input:focus {
  box-shadow: 0 0 0 0.2rem rgba(163, 100, 65, 0.25);
  border-color: #7d4f2a;
}
.shadow {
  -webkit-box-shadow: 1px 2px 8px 0px #2e2d2d54;
  -moz-box-shadow: 1px 2px 8px 0px #2e2d2d54;
  box-shadow: 1px 2px 8px 0px #2e2d2d54;
}
.padding-forgot {
  padding: 80px;
  margin-top: 50px;
}
@media only screen and (max-width: 600px) {
  .padding-forgot {
    padding: 30px;
    margin-top: 10px;
  }
  .font-sm {
    font-size: 25px;
  }
  .font-sm2 {
    font-size: 20px;
  }
  .margin-btm {
    margin-bottom: 50px;
  }
}
</style>
