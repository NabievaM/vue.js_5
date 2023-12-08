import { createStore } from "vuex";
import axios from 'axios';
import router from "../router";
import { RT_HOME } from "../constants/routeNames";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
    state: {
        admin: {},
    },

    getters: {},

    actions: {
        async auth({ commit }, payload) {
            const res = await axios.post(url + "/admin/signin", payload);
            if (!res.data?.access_token && res.status !== 200) {
                return;
            }
            commit("SET_TOKEN", res.data.access_token);
            commit("SET_ADMIN", res.data);
        },

        async user({ commit }, payload) {
            const res = await axios.post(url + "/user/signin", payload);
            if (!res.data?.access_token && res.status !== 200) {
                return;
            }
            commit("SET_TOKEN", res.data.access_token);
        }
    },

    mutations: {
        SET_TOKEN: (_, payload) => {
            localStorage.setItem("access_token", payload)
        },

        SET_ADMIN: (state, payload) => {
            state.admin = payload;
            router.push({ name: RT_HOME });
        },
    }
})
export default store;