<template>
  <a class="btn-logout" href="#">
    <span class="text">
      <slot></slot>
    </span>
    <i class="zid zid-exit"></i>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn-logout {
  color: #626262;
  font-size: 13px;
  font-weight: 600;
  margin-right: 21px;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-logout i {
  color: #626262;
  font-size: 17px;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 7px;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  transform: scaleX(1);
}

.btn-logout:hover,
.btn-logout:focus {
  color: #353535;
}

@media (max-width: 768px) {
  .btn-logout i {
    color: #fff;
  }

  .btn-logout .text {
    color: #fff;
  }
}

@media (max-width: 575px) {
  .btn-logout {
    margin-right: 5px;
    margin-left: 5px;
  }

  .btn-logout .text {
    display: none;
  }
}

.dark-mode {
  .search-holder .btn-logout {
    color: #fff;
  }

  .search-holder .btn-logout i {
    color: #fff;
  }

  .search-holder .btn-logout:hover,
  .search-holder .btn-logout:focus {
    color: #d8d8d8;
  }
}
</style>
