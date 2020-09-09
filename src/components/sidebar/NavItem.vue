<template>
  <li class="nav-item">
    <a
      v-if="item.children"
      v-b-toggle="`collapse-${index}`"
      :href="item.href"
      class="collapsible"
      @click="onClick"
    >
      <i class="zid" v-bind:class="`zid-${item.icon}`"></i>
      {{ item.text }}
    </a>
    <a v-else :href="item.href">
      <i class="zid" v-bind:class="`zid-${item.icon}`"></i>
      {{ item.text }}
    </a>
    <b-collapse :id="`collapse-${index}`" v-if="item.children">
      <div>
        <ul class="sub-menu">
          <li v-for="(child, index) in item.children" v-bind:key="index">
            <a v-bind:href="child.href">{{ child.text }}</a>
          </li>
        </ul>
      </div>
    </b-collapse>
  </li>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    index: { type: Number },
  },
  methods: {
    onClick(event) {
      event.preventDefault();
    },
  },
};
</script>

<style scoped>
.nav-item {
  margin-bottom: 10px;
}

.nav-item > a {
  position: relative;
  display: inline-block;
  width: 100%;
  color: #fff;
  background-color: #231629;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  padding: 18px 20px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.nav-item > a > i {
  font-size: 18px;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 15px;
}

.nav-item > a.collapsible:before {
  position: absolute;
  content: '\77';
  font-family: 'zid' !important;
  color: #8d5da7;
  font-size: 9px;
  left: 20px;
  top: 50%;
  margin-top: -7px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: scaleY(1);
  -moz-transform: scaleY(1);
  -ms-transform: scaleY(1);
  transform: scaleY(1);
}

.nav-item > a.not-collapsed:before {
  -webkit-transform: scaleY(-1);
  -moz-transform: scaleY(-1);
  -ms-transform: scaleY(-1);
  transform: scaleY(-1);
}

.nav-item > a:hover {
  background-color: #45a787;
}

.nav-item > a:hover[data-toggle='collapse']:before {
  color: #fff;
}

.nav-item ul.sub-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav-item ul.sub-menu > li > a {
  display: inline-block;
  width: 100%;
  color: #c5bacb;
  font-size: 13px;
  padding: 6px 30px;
  text-decoration: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.nav-item ul.sub-menu > li > a:hover,
.nav-item ul.sub-menu > li > a:focus {
  color: #f0ebf3;
  padding-right: 33px;
}
</style>
