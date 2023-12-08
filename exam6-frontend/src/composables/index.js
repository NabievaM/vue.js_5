export function useProduct() {
    const searchWord = ref("");

    /*Search*/
    const searchProduct = async () => {
        if (searchWord.value) {
            const res = await fetch(
                /*url*/
            );
            const data = await res.json();
            products.value = data;
        }
    };

    return {
        searchWord, searchProduct
    }
}