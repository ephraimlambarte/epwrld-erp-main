import mainPage from './components/MainPage.vue'
import login from './components/Login.vue'
import profForm from './components/ProfileForm.vue'

export default [
    {path: '/mainPage', component: mainPage},
    {path: '/', component: login},
    {path: '/profileForm', component: profForm},
]