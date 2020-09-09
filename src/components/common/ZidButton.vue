<template>
  <b-button :variant="variant" :href="href" @click="$emit('click', $event)"
    ><slot></slot
  ></b-button>
</template>

<script>
export default {
  name: 'ZidButton',
  props: {
    variant: {
      type: String,
    },
    href: {
      type: String,
    },
  },
};
</script>

<style>
.btn {
  font-weight: 600;
  padding: 6px 19px;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn i {
  font-size: 11px;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: -5px;
  margin-top: -2px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>
