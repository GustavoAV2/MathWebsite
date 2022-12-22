import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'

import ProfileView from '../views/Profile/ProfileView.vue'
import FriendsView from '../views/Profile/FriendsView.vue'
import SignView from '../views/Profile/SignView.vue'
import RegisterView from '../views/Profile/RegisterView.vue'

import GameView from '../views/MathGame/GameView.vue'
import CreateGameView from '../views/MathGame/CreateGameView.vue'
import GameResultView from '../views/MathGame/GameResultView.vue'
import ChallengeForTestView from '../views/MathGame/ChallengeForTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign',
      name: 'sign',
      component: SignView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/friends',
      name: 'friends',
      component: FriendsView
    },
    {
      path: '/mathgame/create',
      name: 'create_game',
      component: CreateGameView
    },
    {
      path: '/mathgame',
      name: 'mathgame',
      component: GameView
    },
    {
      path: '/mathgame/result',
      name: 'result',
      component: GameResultView
    },
    {
      path: '/mathgame/test',
      name: 'test_game',
      component: ChallengeForTestView
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: PageNotFound 
    }
  ]
})

export default router