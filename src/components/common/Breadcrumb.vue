<template>
  <b-breadcrumb :items="items" class="breadcrumb-sm"></b-breadcrumb>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  background-color: transparent;
}

.breadcrumb.breadcrumb-sm {
  padding: 0;
  font-size: 14px;
}

.breadcrumb.breadcrumb-sm .breadcrumb-item + .breadcrumb-item:before {
  font-size: 9px;
}

.breadcrumb-item {
  color: #6c757d;
  font-weight: 600;
}

.breadcrumb-item a {
  color: #45a787;
}

.breadcrumb-item a:hover,
.breadcrumb-item a:focus {
  color: #36836a;
}

.rtl .breadcrumb-item + .breadcrumb-item,
[dir='rtl'] .breadcrumb-item + .breadcrumb-item {
  position: relative;
  padding-right: 22px;
  margin-right: 8px;
}

.rtl .breadcrumb-item + .breadcrumb-item::before,
[dir='rtl'] .breadcrumb-item + .breadcrumb-item::before {
  padding-left: 0;
}

.breadcrumb-item + .breadcrumb-item:before {
  position: absolute;
  content: '\77';
  font-family: 'zid' !important;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.25);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: 0;
  top: 5px;
  padding: 0;
}

.dark-mode {
  .breadcrumb-item {
    color: #7e7484;
  }

  .breadcrumb-item a:hover,
  .breadcrumb-item a:focus {
    color: #36836a;
  }

  .breadcrumb-item + .breadcrumb-item:before {
    color: #54475d;
  }

  .breadcrumb-item.active {
    color: #7e7484;
  }
}
</style>
