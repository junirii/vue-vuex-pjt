<template>
  <div>
    <p>Count : {{count}}</p>
    <button type="button" @click="increment">증가</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      // this.$store.state.count = 100; 쓰지 마!!!!!!!!!!
      this.$store.commit('setCount', 200);
    }
  }
}
</script>

<style>

</style>