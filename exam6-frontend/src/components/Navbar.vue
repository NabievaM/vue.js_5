<template>
  <nav
    class="bg-black flex text-white justify-between w-full h-[80px] px-[50px] border-b-2 border-gray-900"
  >
    <div class="pt-[20px] text-2xl text-gold">
      <p>{{ t("artistry") }}</p>
    </div>

    <div class="flex gap-10 pt-[25px] ml-[400px] w-[50%]">
      <router-link to="/">{{ t("home") }}</router-link>
      <p>{{ t("prose") }}</p>
      <p>{{ t("poem") }}</p>
      <!-- <p>Maqolalar</p>
      <p>Forum</p> -->
      <router-link to="/admin">{{ t("admin") }}</router-link>

      <n-dropdown
        trigger="click"
        :options="options"
        @select="handleSelect"
      >
        <n-button>Lang</n-button>
      </n-dropdown>

      <Button
        class="btn"
        @click="logout"
        >{{ t("logout") }}</Button
      >
    </div>

    <div class="pt-[15px]">
      <img
        class="rounded-full"
        src="../assets/images/admin-avatar.png"
        alt=""
      />
    </div>
  </nav>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
import { NDropdown, NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const options = [
  {
    label: "English",
    key: "en",
  },
  {
    label: "Russian",
    key: "ru",
  },
  {
    label: "O'zbek",
    key: "uz",
  },
];

function handleSelect(key) {
  locale.value = key;
  document.getElementsByClassName("n-button")[0].textContent =
    key.toUpperCase();
  localStorage.setItem("lang", key);
}

const store = useStore();
const toast = useToast();

function logout() {
  store.commit("LOGOUT");
}
</script>

<style scoped>
.btn {
  width: 100px;
  height: 40px;
  background-color: #c9ac8c;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: -10px;
}
</style>
