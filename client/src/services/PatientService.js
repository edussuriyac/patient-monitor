import Api from '@/services/Api'

export default {
  getPatients () {
    return Api().get('patients')
  },
  addPatient (params) {
    return Api().post('patients', params)
  }
}