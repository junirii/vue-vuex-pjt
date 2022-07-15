<template>
  <div>
    <p>Count2 : {{count}}</p>
    <button type="button" @click="increment">증가</button>
    <p>카트 상품 수 : {{cartCount}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
}
</script>

<style>

</style>