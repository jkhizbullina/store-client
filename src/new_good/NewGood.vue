<template>
  <div class="main">
    <h2>Добавить товар</h2>
    <div v-if="check">      
      <div class="input"><label class="input-label" for="login"><b>Название</b></label><input class="w3-input" type="text" v-model="name"></div>
      <div class="input"><label class="input-label" for="login"><b>Количество</b></label><input class="w3-input" type="number" v-model="count"></div>
      <div class="input"><label class="input-label" for="login"><b>Цена</b></label><input class="w3-input" type="number" v-model="price"></div>
      <button type="button" v-on:click="add()">Добавить</button>
    </div>
  <div v-else class="main">ОШИБКА 401</div>
    <div class = "links">
      <p><a :href="'../goods?token=' + token">Список товаров</a></p>
      <p><a href="../">Получить токен</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: 'NewGood',
  data() {
    return {
      check: false,
      name: "",
      count: "",
      price: "",
      token: ""
    }
  },
  created() {
    document.title = "New item";
    this.socket = io("http://localhost:3000");
    this.token = window.location.href.split("?token=")[1];
    this.socket.emit("check_token", this.token);
  },
  mounted() {
    this.socket.on("token-exists", checked => {
      this.check = checked;
    });
  },
  methods: {
    add() {
      this.socket.emit("add", this.name, this.count, this.price);
    }
  }
}
</script>