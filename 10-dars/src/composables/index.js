import { onMounted, ref } from 'vue';

export function useProduct() {
  const limitSize = ref(null)
  const categorySize = ref(null)
  const searchWord = ref("");
  const products = ref([]);

  /*limit column*/
  function fetchProducts(limit) {
    fetch(`http://localhost:3000/products?${limit ? `_limit=${limit}` : null}`)
      .then(res => res.json())
      .then(json => products.value = json)
  }
  function onLimitChange() {
    fetchProducts(limitSize.value)
  }

  /*Search*/
  const searchProduct = async () => {
    if (searchWord.value) {
      const res = await fetch(
        `http://localhost:3000/products?q=${searchWord.value}`
      );
      const data = await res.json();
      products.value = data;
    }
  };
  /*Category limit*/
  async function category() {
    try {
      if (categorySize.value) {
        const res = await fetch(
          `http://localhost:3000/products?category=${categorySize.value}`
        );
        const data = await res.json();
        products.value = data;
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }


  onMounted(() => {
    fetchProducts(limitSize.value)
    fetchProducts(category.value)
  })

  return {
    products,
    limitSize,
    onLimitChange,
    categorySize,
    category,
    searchWord,
    searchProduct
  }
}