
import { router as auth } from '@/modules/auth'

export default [
    ...auth,
  {
    name: 'home',
    path: '/painel',
    component: () => import("@/layouts/painel/Index"),
    children: [
      
    ]

  },
  // {
  //   name:'dashboard',
  //   path:'/dashboard',
  //   component: ()=> import('@/views/Dashboard/Dashboard'),
  //   children:[

  //     {path:'grupo/', component:()=> import('@/views/Dashboard/Grupo/DashboardGrupo'), props: true ,beforeEnter: validate.logged},
  //     {path:'empresa/:sigla', component:()=> import('@/views/Dashboard/Empresas/DashboardEmpresa'), props: true, beforeEnter: validate.logged}

  //   ]
  // }

]