import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Patients from '@/components/Patients'
import NewPatient from '@/components/NewPatient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
    {
      path: '/patients/new',
      name: 'NewPatient',
      component: NewPatient
    }
  ]
})
