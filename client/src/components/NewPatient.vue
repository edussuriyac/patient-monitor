<template>
  <div class="patients">
    <h1>Admit a new patient</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="NAME" v-model="name">
        </div>
         <div>
          <input type="text" name="age" placeholder="AGE" v-model="age">
        </div>
         <div>
          <input type="text" name="reason" placeholder="REASON" v-model="reason">
        </div>
         <div>
          <input type="date" name="date" placeholder="DATE" v-model="date">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPatient">Admit</button>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import PatientService from '@/services/PatientService'
export default {
  name: 'NewPatient',
  data () {
    return {
      name: '',
      age: '',
      reason: '',
      date: '',
      description: ''
    }
  },
  methods: {
    async addPatient () {
        await PatientService.addPatient({
        name: this.name,
        age: this.age,
        reason: this.reason,
        date: this.date,
        description: this.description
      })
      this.$router.push({ name: 'Patients' })
      console.log('add')
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
