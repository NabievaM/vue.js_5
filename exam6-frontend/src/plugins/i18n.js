import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: "uz",
    fallbackLocale: "uz",
    legacy: false,
    messages: {
        uz: {
            home: 'Bosh Sahifa',
            prose: 'Nasr',
            poem: 'Nazm',
            logout: 'Chiqish',
            admin: 'Administrator paneli',
            artistry: 'Badiiyat',
            search_name: 'Qidirish',
            search_placeholder: 'Kitoblar',
            search_button: 'Izlash',
            main_category: 'Asosiy kategoriyalar',
        },
        ru: {
            home: 'Главная',
            prose: 'Проза',
            poem: 'Стих',
            logout: 'Выйти',
            admin: 'Админ Панель',
            artistry: 'Артистизм',
            search_name: 'Поиск',
            search_placeholder: 'Книги',
            search_button: 'Искать',
            main_category: 'Основные Категории',
        },
        en: {
            home: 'Home',
            prose: 'Prose',
            poem: 'Poem',
            logout: 'Logout',
            admin: "Admin Panel",
            artistry: 'Artistry',
            search_name: 'Search',
            search_placeholder: 'Books',
            search_button: 'search',
            main_category: 'Main Categories',
        },
    }
});
export default i18n;