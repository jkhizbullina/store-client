<template>
  <div class="main">
    <h2>Список товаров</h2>
      <div class="word-pair">
        <div v-for="(item, index) in items" :key="index">{{item.name}} {{item.count}} {{item.price}}</div>
    </div>
    <div class = "links">
      <p><a href="../new_good">Добавить товар</a></p>
      <p><a href="../">Получить токен</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'GoodsList',
  data() {
    return {
      items: []
    }
  },
  created() {
    document.title = "List of goods";
    this.socket = io("http://localhost:3000");
    this.socket.emit("check_token", this.$route.token);
  },
  mounted() {
    this.socket.on("token-exists", check => {
      if (check) {
        this.socket.emit("fetch");
      }
    });

    this.socket.on("itemlist", data => {
      this.words = data;
    });
  }
}
</script>
