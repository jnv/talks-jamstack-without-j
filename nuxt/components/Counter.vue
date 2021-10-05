<template>
<div className="counter">
  <button @click="subtract">-</button>
  <pre>{{count}}</pre>
  <button @click="add">+</button>
</div>
</template>

<script>
export default {
  props: ['initialCount'],
  data() {
    return {
      title: "Counter",
      count: this.initialCount,
    };
  },
  methods: {
    subtract() {
      this.count--;
    },
    add() {
      this.count++;
    }
  }
};
</script>
