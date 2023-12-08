import { createStore } from "vuex";
import axios from 'axios';
import router from "../router";
import { RT_HOME, RT_AUTH } from "../constants/routeNames";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
    state: {
        admin: {},
        author: [],
    },

    getters: {
        author: (state) => state.author,
    },

    actions: {
        async auth({ commit }, payload) {
            const res = await axios.post(url + "/admin/signin", payload);
            if (!res.data?.access_token && res.status !== 200) {
                return;
            }
            commit("SET_TOKEN", res.data.access_token);
            commit("SET_ADMIN", res.data);
        },

        async fetchAuthors({ commit }) {
            const res = await axios.get(url + "/author/findAll");
            if (!res.data?.author && res.status !== 200) {
                console.log(res.data.author);
                return;
            }
            commit("SET_AUTHORS", res.data.author);
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

        SET_AUTHORS: (state, payload) => (state.author = payload),


        LOGOUT: (state) => {
            state.admin = {};
            localStorage.removeItem("access_token");
            router.push({ name: RT_AUTH });
        },
    },
});

export default store;