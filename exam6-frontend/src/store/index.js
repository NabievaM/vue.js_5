import { createStore } from "vuex";
import axios from 'axios';
import router from "../router";
import { RT_HOME, RT_AUTH } from "../constants/routeNames";
import { errorToast, infoToast } from '../utils/toast';

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
    state: {
        admin: {},
        products: [],
        category: {}
    },

    getters: {
        products: (state) => state.products,
        category: (state) => state.category
    },

    actions: {
        async auth({ commit }, payload) {
            try {
                const res = await axios.post(url + "/admin/signin", payload);
                if (!res.data?.access_token && res.status !== 200) {
                    return;
                }
                commit("SET_TOKEN", res.data.access_token);
                commit("SET_ADMIN", res.data);
            } catch (err) {
                errorToast(err.message)
            }

        },

        async fetchCategory({ commit }) {
            const res = await axios.get(url + "/category/findAll");
            if (!res.data?.category && res.status !== 200) {
                console.log(res.data.category);
                return;
            }
            commit("SET_CATEGORY", res.data.category);
        },

        async fetchAuthors({ commit }) {
            const res = await axios.get("https://dummyjson.com/products");
            if (!res.data?.products && res.status !== 200) {
                console.log(res.data.products);
                return;
            }
            commit("SET_AUTHORS", res.data.products);
        },
    },

    mutations: {
        SET_TOKEN: (_, payload) => {
            localStorage.setItem("access_token", payload);
        },

        SET_ADMIN: (state, payload) => {
            state.admin = payload;
            router.push({ name: RT_HOME });
        },

        SET_CATEGORY: (state, payload) => {
            state.category = payload;
        },

        SET_AUTHORS: (state, payload) => (state.products = payload),


        LOGOUT: (state) => {
            state.admin = {};
            localStorage.removeItem("access_token");
            router.push({ name: RT_AUTH });
            infoToast("You Log Out")
        },
    },
});

export default store;