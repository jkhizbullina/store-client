<template>
  <div class="main">
    <h2>Добввить товар</h2>
    <div v-if="check">      
      <div class="input"><label class="input-label" for="login">Название</label><input class="w3-input" type="text" name="name" v-model="user"></div>
      <div class="input"><label class="input-label" for="login">Количество</label><input class="w3-input" type="number" name="count" v-model="first_name"></div>
      <div class="input"><label class="input-label" for="login">Цена</label><input class="w3-input" type="number" name="price" v-model="last_name"></div>
      <button type="button" v-on:click="add()">Добавить</button>
    </div>
    <div class = "links">
      <p><a href="../words_list/">Список товаров</a></p>
      <p><a href="../">Получить токен</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"; 
export default {
  name: 'NewGood',
  created() {
    document.title = "New item";
    this.socket = io("http://localhost:3000");
    this.socket.emit("check_token", this.$route.token);
  },
  data() {
    return {
      check: false,
      name: "",
      count: "",
      price: ""
    }
  },
  mounted() {
    this.socket.on("token-exists", checked => {
      this.check = checked;
    });
  },
  methods: {
    addWord() {
      this.socket.emit("add", this.name, this.count, this.price);
    }
  }
}
</script>