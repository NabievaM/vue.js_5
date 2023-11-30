export const adminRoutes = {
  path: "/admin",
  component: () => import("../layouts/AdminLayout.vue"),
  children: [
    {
      path: "main",
      name: "admin-main",
      component: () => import("../views/admin/MainView.vue"),
    },
    {
      path: "users",
      name: "admin-users",
      component: () => import("../views/admin/UsersView.vue"),
    },
    {
      path: "products",
      name: "admin-products",
      component: () => import("../views/admin/ProductsView.vue"),
    },
    {
      path: "admins",
      name: "admin-admins",
      component: () => import("../views/admin/AdminsView.vue"),
    },
  ],
};
