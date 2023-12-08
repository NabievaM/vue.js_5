import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export function useHome() {
    const store = useStore();
    const author = computed(() => store.getters.author);

    onMounted(async () => {
        await store.dispatch("fetchAuthors")
    });

    return {
        author,
    };
}