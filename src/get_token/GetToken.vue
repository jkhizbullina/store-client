<template>
  <div class="main">
    <h2>Онлайн-магазин</h2>
    <div class="input"><label class="input-label" for="login">Ваш токен:</label><input class="w3-input" type="text" name="name" v-model="token" readonly></div>
    <div class = "links">
      <p><a href="../new_good?token={{ token }}">Добавить товар</a></p>
      <p><a href="../goods?token={{ token }}">Список товаров</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'GetToken',
  created() {
    document.title = "Get token";
    this.socket = io("http://localhost:3000");
    this.socket.emit("get_token", this.$route.token);
  },
  data() {
    return {
      token: "",
    }
  },
  mounted() {
    this.socket.on("token", newToken => {
      this.token = newToken;
    });
  }
}
</script>