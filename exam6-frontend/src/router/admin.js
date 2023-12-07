import {
    RT_ADMIN_MAIN,
    MT_ADMIN_MAIN,
    RT_ADMIN_USERS,
    MT_ADMIN_USERS,
    RT_ADMIN_CATEGORY,
    MT_ADMIN_CATEGORY,
    RT_ADMIN_AUTHOR,
    MT_ADMIN_AUTHOR,
    RT_ADMIN_BOOK,
    MT_ADMIN_BOOK,
} from "../constants/routeNames"
export const adminRoutes = {
    path: "/admin",
    component: () => import("../components/layouts/AdminLayout.vue"),
    children: [
        {
            path: "main",
            name: RT_ADMIN_MAIN,
            component: () => import("../pages/admin/main.vue"),
            meta: {
                title: MT_ADMIN_MAIN
            }
        },
        {
            path: "users",
            name: RT_ADMIN_USERS,
            component: () => import("../pages/admin/users.vue"),
            meta: {
                title: MT_ADMIN_USERS
            }
        },
        {
            path: "author",
            name: RT_ADMIN_AUTHOR,
            component: () => import("../pages/admin/add_author.vue"),
            meta: {
                title: MT_ADMIN_AUTHOR
            }
        },
        {
            path: "category",
            name: RT_ADMIN_CATEGORY,
            component: () => import("../pages/admin/add_category.vue"),
            meta: {
                title: MT_ADMIN_CATEGORY
            }
        },
        {
            path: "book",
            name: RT_ADMIN_BOOK,
            component: () => import("../pages/admin/add_book.vue"),
            meta: {
                title: MT_ADMIN_BOOK
            }
        },
    ]
}