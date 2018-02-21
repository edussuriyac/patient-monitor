<template>
  <div class="patients">
    <h1>Patients</h1>
    <div v-if="patients.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPatient' }" class="">Admit Patient</router-link>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Reason</td>
          <td>Date</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="patient in patients">
          <td>{{ patient.name }}</td>
          <td>{{ patient.age }}</td>
          <td>{{ patient.reason }}</td>
          <td>{{ patient.date }}</td>
          <td>{{ patient.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPatient', params: { id: patient._id } }">Edit</router-link> |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      No patient admitted yet<br /><br />
      <router-link v-bind:to="{ name: 'NewPatient' }" class="add_patient_link">Admit patient</router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import PatientService from '@/services/PatientService'
export default {
  name: 'patients',
  data () {
    return {
      patients: []
    }
  },
  mounted () {
    this.getPatients()
  },
  methods: {
    async getPatients () {
      const response = await PatientService.getPatients()
      this.patients = response.data.patients
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_patient_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
