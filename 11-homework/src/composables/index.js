import { onMounted, ref } from "vue";
export function useTodo() {
    const todos = ref([]);
    const limitSize = ref(null);
    const searchWord = ref("");

    onMounted(() => {
        fetch("http://localhost:3000/todos")
            .then(res => res.json())
            .then(json => (todos.value = json));
    });

    /*Search*/
    const searchTodo = async () => {
        if (searchWord.value) {
            const res = await fetch(
                `http://localhost:3000/todos?q=${searchWord.value}`
            );
            const data = await res.json();
            todos.value = data;
        }
    };

    /*limit*/
    function fetchTodos(limit) {
        fetch(
            `http://localhost:3000/todos?_sort=id&_order=desc${limit ? `&_limit=${limit}` : ""
            }`
        )
            .then(response => response.json())
            .then(json => (todos.value = json));
    }
    function onLimitChange() {
        fetchTodos(limitSize.value);
    }
    return {
        todos,
        onLimitChange,
        limitSize,
        searchWord,
        searchTodo,
    };
}
