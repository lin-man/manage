export default [
  {
    path: "/index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/welcom",
        component: () => import("../views/Welcom.vue"),
      },
      {
        path: "/gg",
        component: () => import("../views/GongGong.vue"),
      },
      {
        path: "/swiper",
        component: () => import("../views/Swiper.vue"),
      },
      {
        path: "/swiperlist",
        component: () => import("../views/Swiperlist.vue"),
      },
      {
        path: "/user",
        component: () => import("../views/User.vue"),
      },
      {
        path: "/shop",
        component: () => import("../views/Shop.vue"),
      },
      {
        path: "/shoplist",
        component: () => import("../views/Shoplist.vue"),
      },
      {
        path: "/order",
        component: () => import("../views/Order.vue"),
      },
      {
        path: "/forum",
        component: () => import("../views/Forum.vue"),
      },
      {
        path: "/discuss",
        component: () => import("../views/Discuss.vue"),
      },
      {
        path: "/message",
        component: () => import("../views/Message.vue"),
      },
      {
        path: "/classify",
        component: () => import("../views/Classify.vue"),
      },
      {
        path: "/",
        redirect: "/welcom",
      },
    ],
  },

  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];
