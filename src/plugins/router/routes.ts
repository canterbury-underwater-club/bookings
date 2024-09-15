export const routes = [
  { path: '/', redirect: '/new-booking' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'new-booking',
        component: () => import('@/pages/new-booking.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      // {
      //   path: 'login',
      //   component: () => import('@/pages/login.vue'),
      // },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
