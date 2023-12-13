<template>
  <div class="text-end px-[100px] py-[50px]">
    <n-dropdown
      trigger="click"
      :options="options"
      @select="handleSelect"
    >
      <n-button>Lang</n-button>
    </n-dropdown>
  </div>
  <form
    class="w-[50%] mx-auto bg-gray-400 shadow-lg p-4 rounded-md"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-2xl text-center mt-3 mb-5 font-semibold">
      {{ t("login.login") }}
    </h2>
    <div class="mb-4">
      <Input
        :label="t('login.login_username')"
        id="username"
        :placeholder="t('login.username_placeholder')"
        required
        v-model="username"
      />
    </div>
    <Input
      :label="t('login.login_password')"
      id="password"
      :placeholder="t('login.password_placeholder')"
      type="password"
      required
      v-model="password"
    />
    <div class="text-center my-5">
      <Button
        type="submit"
        class="btn-primary"
      >
        {{ t("login.login_button") }}
      </Button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/auth";

import Button from "@/components/base/base-button.vue";
import Input from "@/components/base/base-input.vue";
import { useI18n } from "vue-i18n";
import { NDropdown, NButton } from "naive-ui";
const { t, locale } = useI18n();

const options = [
  {
    label: "English",
    key: "en",
  },
  {
    label: "O'zbek",
    key: "uz",
  },
  {
    label: "Russkiy",
    key: "ru",
  },
];

function handleSelect(key) {
  locale.value = key;
  document.getElementsByClassName("n-button")[0].textContent =
    key.toUpperCase();
  localStorage.setItem("lang", key);
}

const { login } = useAuth();

const username = ref("kminchelle");
const password = ref("0lelplR");

async function onSubmit() {
  if (!username.value.length && !password.value.length) {
    return;
  }
  await login({
    username: username.value,
    password: password.value,
  });
}
</script>

<style lang="scss" scoped></style>
