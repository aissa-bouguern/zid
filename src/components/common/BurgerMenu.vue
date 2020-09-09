<template>
  <button class="btn-menu-toggle" @click="$emit('click')">
    <div class="toggle-icon">
      <div class="icon-shape"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'BurgerMenu',
};
</script>

<style scoped>
.btn-menu-toggle {
  line-height: 0;
  vertical-align: middle;
  border: 0;
  background: none;
  margin-left: 10px;
  padding: 7px;
  outline: none;
}
.btn-menu-toggle:focus {
  outline: 5px auto -webkit-focus-ring-color;
}

.btn-menu-toggle .toggle-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
}

.btn-menu-toggle .toggle-icon .icon-shape {
  position: relative;
  width: 80%;
  height: 2px;
  top: 0;
  background-color: #8d5ba7;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-menu-toggle .toggle-icon .icon-shape:before {
  content: '';
  position: absolute;
  width: 125%;
  height: 100%;
  left: -25%;
  top: 7px;
  background-color: #8d5ba7;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-menu-toggle .toggle-icon .icon-shape:after {
  content: '';
  position: absolute;
  width: 125%;
  height: 100%;
  left: -25%;
  top: 14px;
  background-color: #8d5ba7;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-menu-toggle:hover .toggle-icon .icon-shape,
.btn-menu-toggle:focus .toggle-icon .icon-shape {
  width: 100%;
}

.btn-menu-toggle:hover .toggle-icon .icon-shape:before,
.btn-menu-toggle:focus .toggle-icon .icon-shape:before {
  width: 100%;
  left: 0%;
}

.btn-menu-toggle:hover .toggle-icon .icon-shape:after,
.btn-menu-toggle:focus .toggle-icon .icon-shape:after {
  width: 100%;
  left: 0%;
}

@media (max-width: 768px) {
  .btn-menu-toggle .toggle-icon .icon-shape {
    background-color: #fff;
  }

  .btn-menu-toggle .toggle-icon .icon-shape:before,
  .btn-menu-toggle .toggle-icon .icon-shape:after {
    background-color: #fff;
  }
}
</style>
