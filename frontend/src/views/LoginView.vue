<template>
  <div>
    <h1>Inicio de sesión</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Usuario</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '@/services/auth';  // Usamos el servicio de login

export default defineComponent({
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const handleLogin = async () => {
      try {
        await login(username.value, password.value);  // Llamamos al servicio de login
        this.$router.push('/dashboard');  // Redirigimos al dashboard
      } catch (error) {
        errorMessage.value = 'Credenciales incorrectas. Intenta de nuevo.';
      }
    };

    return {
      username,
      password,
      errorMessage,
      handleLogin,
    };
  },
});
</script>

<style scoped>
.error {
  color: red;
}
</style>