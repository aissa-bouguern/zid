<template>
  <div class="brand">
    <img v-bind:src="logo" v-bind:alt="name" />
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  props: {
    name: { type: String, default: 'اسم المتجر' },
    logo: { type: String, default: require('@/assets/images/no-logo.png') },
  },
};
</script>

<style scoped>
.brand {
  margin-bottom: 20px;
}

.brand .name {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
}

.brand img {
  width: 52px;
  border-radius: 100px;
  margin-left: 15px;
  -webkit-box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
}
</style>
