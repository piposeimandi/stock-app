<template>
  <div>
    <h1>Stock App</h1>
    <form @submit.prevent="addItem">
      <input v-model="newItem" placeholder="Add new item" required />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(item, index) in stockItems" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      stockItems: []
    };
  },
  created() {
    this.loadStock();
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.stockItems.push(this.newItem.trim());
        this.newItem = "";
        this.saveStock();
      }
    },
    removeItem(index) {
      this.stockItems.splice(index, 1);
      this.saveStock();
    },
    loadStock() {
      const savedStock = localStorage.getItem("stock-items");
      if (savedStock) {
        this.stockItems = JSON.parse(savedStock);
      }
    },
    saveStock() {
      localStorage.setItem("stock-items", JSON.stringify(this.stockItems));
    }
  }
};
</script>

<style scoped>
/* Estilos básicos */
button {
  margin-left: 10px;
}
</style>
