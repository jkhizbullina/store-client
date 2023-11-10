<template>
  <div class="main">
    <h2>Добавить слово в словарь</h2>
    <div class="add-word">
      <div class="word">
        <label>На русском:</label>
        <input class="w3-input" type="text" v-model="russianWord">
      </div>
      <div class="word">
        <label>На английском:</label>
        <input class="w3-input" type="text" v-model="englishWord">
      </div>
      <button type="button" v-on:click="addWord()">Добавить</button></div>
    <div class = "links">
      <p><a href="../words_list/">Список слов</a></p>
      <p><a href="../">Назад</a></p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"; 
export default {
  name: 'AddWord',
  created() {
    document.title = "Add word";
    this.socket = io("http://localhost:3000");
  },
  data() {
    return {
      russianWord: "",
      englishWord: ""
    }
  },
  methods: {
    addWord() {
      this.socket.emit("addWord", this.russianWord, this.englishWord);
    }
  }
}
</script>