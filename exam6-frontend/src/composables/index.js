import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export function useHome() {
    const store = useStore();

    const singleProduct = ref({
        title: '',
        description: '',
        image: '',
        category: '',
        price: null,
    })

    const products = computed(() => store.getters.products);

    const category = computed(() => store.getters.category)


    function fetchSingleProduct(id) {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => singleProduct.value = json)
    }

    onMounted(async () => {
        await store.dispatch("fetchAuthors")
    });

    // const searchWord = ref("");
    // const searchProducts = async () => {
    //     if (searchWord.value) {
    //         const res = await fetch(
    //             `https://dummyjson.com/products/search?q=${searchWord.value}`
    //         );
    //         const data = await res.json();
    //         products.value = data.products;
    //     }
    // };

    return {
        products,
        fetchSingleProduct,
        singleProduct,
        category
        // searchProducts, searchWord
    };
}