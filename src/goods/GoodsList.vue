<template>
  <div class="main">
    <h2>Список товаров</h2>
      <div class="items" v-if="check">
        <div><b>Название</b></div><div><b>Количество</b></div><div><b>Цена</b></div>
        <template v-for="(item, index) in items" :key="index">
          <div>{{item.name}}</div><div>{{item.count}}</div><div>{{item.price}}</div></template>
    </div>
    <div v-else>ОШИБКА 401</div>
    <div class = "links">
      <p><a :href="'../new_good?token=' + token">Добавить товар</a></p>
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
      items: [],
      token: "",
      check: false
    }
  },
  created() {
    document.title = "List of goods";
    this.socket = io("http://localhost:3000");
    this.token = window.location.href.split("?token=")[1];
    this.socket.emit("check_token", this.token);
  },
  mounted() {
    this.socket.on("token-exists", checked => {
      this.check = checked;
      if (checked) {
        this.socket.emit("fetch");
      }
    });

    this.socket.on("itemlist", data => {
      this.items = data;
      console.log(this.items.length);
    });
  }
}
</script>
