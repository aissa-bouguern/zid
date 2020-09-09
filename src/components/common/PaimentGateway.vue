<template>
  <div class="mini-info-box with-border">
    <span class="featured-badge" v-if="featured">الاختيار المفضل</span>
    <i :class="`${icon}`"></i>
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PaimentGateway',
  props: {
    featured: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style scoped>
.mini-info-box {
  position: relative;
  display: inline-block;
  background-color: #fff;
  border-radius: 5px;
  padding: 22px 30px;
  width: 100%;
  min-height: 140px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.mini-info-box.with-shadow {
  -webkit-box-shadow: 0 3px 15px rgba(188, 150, 209, 0.15);
  box-shadow: 0 3px 15px rgba(188, 150, 209, 0.15);
}

.mini-info-box.with-border {
  border: 1px solid #e5e5e5;
}

.mini-info-box .featured-badge {
  position: absolute;
  background-color: rgba(176, 129, 201, 0.25);
  color: #8c5da7;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 5px;
  top: 10px;
  left: 10px;
}

.mini-info-box i,
.mini-info-box .icon {
  position: absolute;
  border-radius: 3px;
  top: 50%;
  margin-top: -25px;
  left: 2rem;
  font-size: 50px;
  color: #d3d3d3;
}

.mini-info-box img.icon {
  height: 50px;
}

.mini-info-box .title {
  color: #8d5da7;
  font-size: 14px;
  font-weight: 700;
}

.mini-info-box .subtitle {
  font-size: 12px;
  color: #635972;
  margin-bottom: 1.4rem;
}

.mini-info-box .bigtitle {
  font-size: 17px;
  font-weight: 700;
  color: #635972;
  margin-top: 1.2rem;
}

.mini-info-box .btn {
  padding: 3px 15px;
}

.mini-info-box.active-mode {
  background-color: #3ec498;
}

.mini-info-box.active-mode i {
  color: rgba(255, 255, 255, 0.38) !important;
}

.mini-info-box.active-mode .title {
  color: #fff;
}

.mini-info-box.active-mode .subtitle {
  color: #fff;
}

.mini-info-box.active-mode .bigtitle {
  color: #fff;
}

.dark-mode .mini-info-box {
  background-color: #302539;
}

.dark-mode .mini-info-box.with-border {
  border-color: #43364f;
}

.dark-mode .mini-info-box.with-shadow {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.dark-mode .mini-info-box .featured-badge {
  background-color: rgba(118, 97, 129, 0.25);
  color: rgba(255, 255, 255, 0.45);
}

.dark-mode .mini-info-box .title {
  color: #fff;
}

.dark-mode .mini-info-box .subtitle {
  color: #d4ccde;
}

.dark-mode .mini-info-box .bigtitle {
  color: #d4ccde;
}

.dark-mode .mini-info-box i,
.dark-mode .mini-info-box .icon {
  color: #60536c;
}

.dark-mode .mini-info-box.active-mode {
  background-color: #3ec498;
}

.dark-mode .mini-info-box.active-mode i {
  color: rgba(255, 255, 255, 0.38) !important;
}

.dark-mode .mini-info-box.active-mode .title {
  color: #fff;
}

.dark-mode .mini-info-box.active-mode .subtitle {
  color: #fff;
}

.dark-mode .mini-info-box.active-mode .bigtitle {
  color: #fff;
}
</style>
