<template>
  <div class="sidebar-head">
    <Brand
      name="اسم المتجر"
      v-bind:logo="require('@/assets/images/no-logo.png')"
    />
    <a class="btn-view" href="#"><i class="zid zid-eye"></i>مشاهدة المتجر</a>
    <a class="btn-edit" href="#"><i class="zid zid-pen"></i>تخصيص الواجهة</a>
  </div>
</template>

<script>
import Brand from './Brand.vue';
export default {
  name: 'Head',
  components: {
    Brand,
  },
};
</script>

<style lang="scss" scoped>
.sidebar-head {
  padding: 22px;
  text-align: center;
}
.btn-view,
.btn-edit {
  display: inline-block;
  width: 100%;
  border-radius: 7px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  padding: 6px;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-view > i,
.btn-edit > i {
  font-size: 14px;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 10px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-view {
  background-color: #8d5da7;
  margin-bottom: 10px;
}

.btn-view > i {
  color: #e3caf0;
}

.btn-view:hover,
.btn-view:focus {
  background-color: #45a787;
}

.btn-view:hover > i,
.btn-view:focus > i {
  color: #fff;
}

.btn-edit {
  background-color: #27182f;
}

.btn-edit > i {
  color: #45a787;
}

.btn-edit:hover,
.btn-edit:focus {
  background-color: #452f52;
}

.dark-mode {
  .brand .name {
    color: #fff;
  }

  .brand img {
    -webkit-box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  }

  .btn-view,
  .btn-edit {
    color: #fff;
  }

  .btn-view {
    background-color: #8d5da7;
  }

  .btn-view > i {
    color: rgba(255, 255, 255, 0.7);
  }

  .btn-view:hover,
  .btn-view:focus {
    background-color: #45a787;
  }

  .btn-view:hover > i,
  .btn-view:focus > i {
    color: #fff;
  }

  .btn-edit {
    background-color: #44a787;
  }

  .btn-edit > i {
    color: rgba(255, 255, 255, 0.7);
  }

  .btn-edit:hover,
  .btn-edit:focus {
    background-color: #35836a;
  }
}
</style>
